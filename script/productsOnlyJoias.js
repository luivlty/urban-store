// ------ data ------ //
const blusas = [
	{
		id: 1,
		name: "Anel Spikes Com Topázio",
		price: " 790,00",
		productImg:
			"../images/produtos-joias/aneis/product1.webp",
		wearingImg:
			"../images/produtos-joias/aneis/product1.2.webp"
	},
	{
		id: 2,
		name: "Anel Rapunzel Com Ametista",
		price: "830,00",
		productImg:
			"../images/produtos-joias/aneis/product2.webp",
		wearingImg:
			"../images/produtos-joias/aneis/product2.2.webp"
	},
	{
		id: 3,
		name: "Anel Com Topázio Azul",
		price: "890,00",
		productImg:
			"../images/produtos-joias/aneis/product3.webp",
		wearingImg:
			"../images/produtos-joias/aneis/product3.2.webp"
	},
	{
		id: 4,
		name: "Anel Em Ouro Amarelo,<br> Diamante E Quartzo",
		price: "7.490,00",
		productImg:
			"../images/produtos-joias/aneis/product4.webp",
		wearingImg:
			"../images/produtos-joias/aneis/product4.2.webp"
	}
]
const calcas = [

	{
		id: 5,
		name: "Pingente Coração<br> Em Quartzo Fumê",
		price: "340,00",
		productImg:
			"../images/produtos-joias/pingentes/product1.webp",
		wearingImg:
		"../images/produtos-joias/pingentes/product1.2.webp",
	},
	{
		id: 6,
		name: "Pingente Cruz<br> Com Diamantes",
		price: "3.368,00",
		productImg:
			"../images/produtos-joias/pingentes/product2.webp",
		wearingImg:
		"../images/produtos-joias/pingentes/product2.2.webp",
	},
	{
		id: 7,
		name: "Pingente Com Esmeralda",
		price: "1.890,00",
		productImg:
			"../images/produtos-joias/pingentes/product3.webp",
		wearingImg:
		"../images/produtos-joias/pingentes/product3.2.webp",
	},
	{
		id: 8,
		name: "Pingente Coração<br> Em Ametista",
		price: "540,00",
		productImg:
			"../images/produtos-joias/pingentes/product4.webp",
		wearingImg:
		"../images/produtos-joias/pingentes/product4.2.webp",
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



