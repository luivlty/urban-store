// ------ data ------ //
const blusas = [
	{
		id: 1,
		name: "Vestido borboleta",
		price: "95,95",
		productImg:
			"../images/produtos-mulher/Blusas/produto-1.webp",
		wearingImg:
			"../images/produtos-mulher/Blusas/produto-1.2.webp"
	},
	{
		id: 2,
		name: "Manga longa branca",
		price: "61,99",
		productImg: "../images/produtos-mulher/Blusas/produto-2.webp",
		wearingImg: "../images/produtos-mulher/Blusas/produto-2.2.webp"
	},
	{
		id: 3,
		name: "Jaqueta Jeans",
		price: "97,25",
		productImg: "../images/produtos-mulher/Blusas/produto-3.webp",
		wearingImg: "../images/produtos-mulher/Blusas/produto-3.2.webp"
	},
	{
		id: 4,
		name: "Camisa now line azul",
		price: "61,99",
		productImg: "../images/produtos-mulher/Blusas/produto-4.webp",
		wearingImg: "../images/produtos-mulher/Blusas/produto-4.2.webp"
	}
]
const calcas = [

	{
		id: 5,
		name: "Calça Unity larga",
		price: "98,90",
		productImg:
			"../images/produtos-mulher/Calças/produto-1.webp",
		wearingImg:
		"../images/produtos-mulher/Calças/produto-1.2.webp"
	},
	{
		id: 6,
		name: "Calça social",
		price: "65,00",
		productImg:
			"../images/produtos-mulher/Calças/produto-2.webp",
		wearingImg:
		"../images/produtos-mulher/Calças/produto-2.2.webp"
	},
	{
		id: 7,
		name: "Calça moletom feminina",
		price: "71,50",
		productImg:
			"../images/produtos-mulher/Calças/produto-3.webp",
		wearingImg:
			"../images/produtos-mulher/Calças/produto-3.2.webp"
	},
	{
		id: 8,
		name: "Calça Jogger feminina",
		price: "59,90",
		productImg:
			"../images/produtos-mulher/Calças/produto-4.webp",
		wearingImg:
			"../images/produtos-mulher/Calças/produto-4.2.webp"
	}
];



// ----- functions ----- //
function renderListBlusas(products) {
	let rawHTML = '';

	const productPanel = document.querySelector("#product-list");


	products.forEach((product) => {
		rawHTML += `
		<div class="product-wrapper" data-productID="${product.id}">
        <div class="picture-wrapper">
		<img class="product-img picture-product-look"
		src="${product.productImg}"
            alt="product-photo">
          <img class="product-img picture-wearing-look"
            src="${product.wearingImg}"
            alt="model-photo">
        </div>
        <div class="add-favorite">
          <i class="fas fa-heart"></i>
        </div>
        <div class="product-info">
          <p class="product-description">${product.name}</p>
          <p class="product-price">R$${product.price} </p>

		  <button class="buy-productsOnly">Comprar</button>
        </div>
      </div>
    `;

	});
	productPanel.innerHTML = rawHTML;




}

renderListBlusas(blusas);

function renderListCalcas(products) {
	let rawHTML2 = '';

	const productPanel2 = document.querySelector("#product-list2");


	products.forEach((product) => {
		rawHTML2 += `
		<div class="product-wrapper" data-productID="${product.id}">
        <div class="picture-wrapper">
		<img class="product-img picture-product-look"
		src="${product.productImg}"
            alt="product-photo">
          <img class="product-img picture-wearing-look"
            src="${product.wearingImg}"
            alt="model-photo">
        </div>
        <div class="add-favorite">
          <i class="fas fa-heart"></i>
        </div>
        <div class="product-info">
          <p class="product-description">${product.name}</p>
          <p class="product-price">R$${product.price} </p>

		  <button class="buy-productsOnly">Comprar</button>
        </div>
      </div>
    `;

	});
	productPanel2.innerHTML = rawHTML2;




}

renderListCalcas(calcas);



