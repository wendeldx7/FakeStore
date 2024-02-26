document.addEventListener("DOMContentLoaded", () => {
  const BASEURL = "https://fakestoreapi.com/products";

  function products(value) {
    fetch(`${BASEURL}/${value}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erro de rede! Código${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const productsinfo = document.getElementById("products-info")

       

        const divProducts = document.createElement(`div`);
        divProducts.innerHTML = `
        <img src="${data.image}" alt="Imagem"/>`
        divProducts.classList.add(`Products`);
        productsinfo.appendChild(divProducts);

        console.log(data.title);
        console.log(data.price);
        console.log(data.description);
        console.log(data.category);
        console.log(data);
      })

      .catch((err) => console.error(err));
  }

  products(4)
});
