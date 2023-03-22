// ------ data ------ //
const blusas = [
	{
		id: 1,
		name: "Malha masculina:<br>Bloco de cores",
		price: "67,00",
		productImg:
			"../images/produtos-masculinos/camisas/product1.webp",
		wearingImg:
		"../images/produtos-masculinos/camisas/product1.2.webp"
	},
	{
		id: 2,
		name: "Camisa xadrez",
		price: "59,90",
		productImg:
			"../images/produtos-masculinos/camisas/product2.webp",
		wearingImg:
		"../images/produtos-masculinos/camisas/product2.2.webp"
	},
	{
		id: 3,
		name: "Moletom a trico",
		price: "55,90",
		productImg:
			"../images/produtos-masculinos/camisas/product3.webp",
		wearingImg:
		"../images/produtos-masculinos/camisas/product3.2.webp"
	},
	{
		id: 4,
		name: "Malha masculina branca",
		price: "73,00	",
		productImg:
			"../images/produtos-masculinos/camisas/product4.webp",
		wearingImg:
		"../images/produtos-masculinos/camisas/product4.2.webp"
	}
];
	const calcas = [

		{
			id: 5,
			name: "Calça cargo",
			price: "72,00",
			productImg:
				"../images/produtos-masculinos/calcas/product1.webp",
			wearingImg:
			"../images/produtos-masculinos/calcas/product1.2.webp",
		},
		{
			id: 6,
			name: "Calça de terno xadrez",
			price: "47,00",
			productImg:
				"../images/produtos-masculinos/calcas/product2.webp",
			wearingImg:
			"../images/produtos-masculinos/calcas/product2.2.webp",
		},
		{
			id: 7,
			name: "Calça cargo jogger",
			price: "49,90",
			productImg:
				"../images/produtos-masculinos/calcas/product3.jpg",
			wearingImg:
			"../images/produtos-masculinos/calcas/product3.2.jpg",
		},
		{
			id: 8,
			name: "Calça Jogger refletiva",
			price: "49,90",
			productImg:
				"../images/produtos-masculinos/calcas/product4.jpg",
			wearingImg:
			"../images/produtos-masculinos/calcas/product4.2.jpg",
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
	
	
	
	