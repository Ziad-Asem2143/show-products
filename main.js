let div = document.querySelector(".productsContainer");
let btn = document.querySelector("button");
function getData() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      div.innerHTML = ``;
      data.products.map((product) => {
        div.innerHTML += `
            <div class="card col-3 m-0" style="width: 15rem;">
  <img src="${product.images}" class="card-img-top" alt="">
  <div class="card-body ">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.category}</p>
    <p class="card-text ">${product.description}</p>
    <p class="card-text text-success fs-2">$${product.price}</p>
    <a href="#" class="btn btn-primary w-100">View Product</a>
  </div>
</div>
        `;
      });
    });
}
btn.addEventListener("click", () => {
  div.innerHTML = `
  <div class="d-flex justify-content-center fs-1">
    <p>
      loading...
    </p>
  </div>
  `;
  getData();
});
