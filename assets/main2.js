//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/assets/svg/logo.svg
var logo_default = "/rsschool-landing-page/assets/logo.svg";
//#endregion
//#region src/assets/svg/logo-dark.svg
var logo_dark_default = "/rsschool-landing-page/assets/logo-dark.svg";
//#endregion
//#region src/js/toggleTheme.js
var themeButtons = document.querySelectorAll(".switch-theme__button");
var logo = document.querySelector(".logo img");
var savedTheme = localStorage.getItem("theme") || "light";
var setTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
	localStorage.setItem("theme", theme);
	if (logo) logo.src = theme === "dark" ? logo_dark_default : logo_default;
	themeButtons.forEach((button) => {
		button.classList.toggle("active", button.dataset.theme === theme);
	});
};
setTheme(savedTheme);
themeButtons.forEach((button) => {
	button.addEventListener("click", () => setTheme(button.dataset.theme));
});
//#endregion
//#region src/assets/images/about-1.jpg?url
var about_1_default = "/rsschool-landing-page/assets/about-1.jpg";
//#endregion
//#region src/assets/images/about-2.jpg?url
var about_2_default = "/rsschool-landing-page/assets/about-2.jpg";
//#endregion
//#region src/assets/images/about-3.jpg?url
var about_3_default = "/rsschool-landing-page/assets/about-3.jpg";
//#endregion
//#region src/assets/images/about-4.jpg?url
var about_4_default = "/rsschool-landing-page/assets/about-4.jpg";
//#endregion
//#region src/assets/images/coffee-1.jpg?url
var coffee_1_default = "/rsschool-landing-page/assets/coffee-1.jpg";
//#endregion
//#region src/assets/images/coffee-2.jpg?url
var coffee_2_default = "/rsschool-landing-page/assets/coffee-2.jpg";
//#endregion
//#region src/assets/images/coffee-3.jpg?url
var coffee_3_default = "/rsschool-landing-page/assets/coffee-3.jpg";
//#endregion
//#region src/assets/images/coffee-4.jpg?url
var coffee_4_default = "/rsschool-landing-page/assets/coffee-4.jpg";
//#endregion
//#region src/assets/images/coffee-5.jpg?url
var coffee_5_default = "/rsschool-landing-page/assets/coffee-5.jpg";
//#endregion
//#region src/assets/images/coffee-6.jpg?url
var coffee_6_default = "/rsschool-landing-page/assets/coffee-6.jpg";
//#endregion
//#region src/assets/images/coffee-7.jpg?url
var coffee_7_default = "/rsschool-landing-page/assets/coffee-7.jpg";
//#endregion
//#region src/assets/images/coffee-8.jpg?url
var coffee_8_default = "/rsschool-landing-page/assets/coffee-8.jpg";
//#endregion
//#region src/assets/images/coffee-slider-1.png?url
var coffee_slider_1_default = "/rsschool-landing-page/assets/coffee-slider-1.png";
//#endregion
//#region src/assets/images/coffee-slider-2.png?url
var coffee_slider_2_default = "/rsschool-landing-page/assets/coffee-slider-2.png";
//#endregion
//#region src/assets/images/coffee-slider-3.png?url
var coffee_slider_3_default = "/rsschool-landing-page/assets/coffee-slider-3.png";
//#endregion
//#region src/assets/images/dessert-1.jpg?url
var dessert_1_default = "/rsschool-landing-page/assets/dessert-1.jpg";
//#endregion
//#region src/assets/images/dessert-2.jpg?url
var dessert_2_default = "/rsschool-landing-page/assets/dessert-2.jpg";
//#endregion
//#region src/assets/images/dessert-3.jpg?url
var dessert_3_default = "/rsschool-landing-page/assets/dessert-3.jpg";
//#endregion
//#region src/assets/images/dessert-4.jpg?url
var dessert_4_default = "/rsschool-landing-page/assets/dessert-4.jpg";
//#endregion
//#region src/assets/images/dessert-5.jpg?url
var dessert_5_default = "/rsschool-landing-page/assets/dessert-5.jpg";
//#endregion
//#region src/assets/images/dessert-6.jpg?url
var dessert_6_default = "/rsschool-landing-page/assets/dessert-6.jpg";
//#endregion
//#region src/assets/images/dessert-7.jpg?url
var dessert_7_default = "/rsschool-landing-page/assets/dessert-7.jpg";
//#endregion
//#region src/assets/images/dessert-8.jpg?url
var dessert_8_default = "/rsschool-landing-page/assets/dessert-8.jpg";
//#endregion
//#region src/assets/images/hero.jpg?url
var hero_default = "/rsschool-landing-page/assets/hero.jpg";
//#endregion
//#region src/assets/images/mobile-screens.png?url
var mobile_screens_default = "/rsschool-landing-page/assets/mobile-screens.png";
//#endregion
//#region src/assets/images/tea-1.jpg?url
var tea_1_default = "/rsschool-landing-page/assets/tea-1.jpg";
//#endregion
//#region src/assets/images/tea-2.jpg?url
var tea_2_default = "/rsschool-landing-page/assets/tea-2.jpg";
//#endregion
//#region src/assets/images/tea-3.jpg?url
var tea_3_default = "/rsschool-landing-page/assets/tea-3.jpg";
//#endregion
//#region src/assets/images/tea-4.jpg?url
var tea_4_default = "/rsschool-landing-page/assets/tea-4.jpg";
//#endregion
//#region src/data/products.json
var products_default = /*#__PURE__*/ JSON.parse("[{\"name\":\"Irish coffee\",\"description\":\"Fragrant black coffee with Jameson Irish whiskey and whipped milk\",\"price\":\"7.00\",\"category\":\"coffee\",\"image\":\"coffee-1.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Kahlua coffee\",\"description\":\"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk\",\"price\":\"7.00\",\"category\":\"coffee\",\"image\":\"coffee-2.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Honey raf\",\"description\":\"Espresso with frothed milk, cream and aromatic honey\",\"price\":\"5.50\",\"category\":\"coffee\",\"image\":\"coffee-3.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Ice cappuccino\",\"description\":\"Cappuccino with soft thick foam in summer version with ice\",\"price\":\"5.00\",\"category\":\"coffee\",\"image\":\"coffee-4.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Espresso\",\"description\":\"Classic black coffee\",\"price\":\"4.50\",\"category\":\"coffee\",\"image\":\"coffee-5.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Latte\",\"description\":\"Espresso coffee with the addition of steamed milk and dense milk foam\",\"price\":\"5.50\",\"category\":\"coffee\",\"image\":\"coffee-6.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Latte macchiato\",\"description\":\"Espresso with frothed milk and chocolate\",\"price\":\"5.50\",\"category\":\"coffee\",\"image\":\"coffee-7.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Coffee with cognac\",\"description\":\"Fragrant black coffee with cognac and whipped cream\",\"price\":\"6.50\",\"category\":\"coffee\",\"image\":\"coffee-8.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Cinnamon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Moroccan\",\"description\":\"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint\",\"price\":\"4.50\",\"category\":\"tea\",\"image\":\"tea-1.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Ginger\",\"description\":\"Original black tea with fresh ginger, lemon and honey\",\"price\":\"5.00\",\"category\":\"tea\",\"image\":\"tea-2.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Cranberry\",\"description\":\"Invigorating black tea with cranberry and honey\",\"price\":\"5.00\",\"category\":\"tea\",\"image\":\"tea-3.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Sea buckthorn\",\"description\":\"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon\",\"price\":\"5.50\",\"category\":\"tea\",\"image\":\"tea-4.jpg\",\"sizes\":{\"s\":{\"size\":\"200 ml\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"300 ml\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"400 ml\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Sugar\",\"add-price\":\"0.50\"},{\"name\":\"Lemon\",\"add-price\":\"0.50\"},{\"name\":\"Syrup\",\"add-price\":\"0.50\"}]},{\"name\":\"Marble cheesecake\",\"description\":\"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam\",\"price\":\"3.50\",\"category\":\"dessert\",\"image\":\"dessert-1.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Red velvet\",\"description\":\"Layer cake with cream cheese frosting\",\"price\":\"4.00\",\"category\":\"dessert\",\"image\":\"dessert-2.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Cheesecakes\",\"description\":\"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar\",\"price\":\"4.50\",\"category\":\"dessert\",\"image\":\"dessert-3.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Creme brulee\",\"description\":\"Delicate creamy dessert in a caramel basket with wild berries\",\"price\":\"4.00\",\"category\":\"dessert\",\"image\":\"dessert-4.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Pancakes\",\"description\":\"Tender pancakes with strawberry jam and fresh strawberries\",\"price\":\"4.50\",\"category\":\"dessert\",\"image\":\"dessert-5.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Honey cake\",\"description\":\"Classic honey cake with delicate custard\",\"price\":\"4.50\",\"category\":\"dessert\",\"image\":\"dessert-6.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Chocolate cake\",\"description\":\"Cake with hot chocolate filling and nuts with dried apricots\",\"price\":\"5.50\",\"category\":\"dessert\",\"image\":\"dessert-7.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]},{\"name\":\"Black forest\",\"description\":\"A combination of thin sponge cake with cherry jam and light chocolate mousse\",\"price\":\"6.50\",\"category\":\"dessert\",\"image\":\"dessert-8.jpg\",\"sizes\":{\"s\":{\"size\":\"50 g\",\"add-price\":\"0.00\"},\"m\":{\"size\":\"100 g\",\"add-price\":\"0.50\"},\"l\":{\"size\":\"200 g\",\"add-price\":\"1.00\"}},\"additives\":[{\"name\":\"Berries\",\"add-price\":\"0.50\"},{\"name\":\"Nuts\",\"add-price\":\"0.50\"},{\"name\":\"Jam\",\"add-price\":\"0.50\"}]}]");
//#endregion
//#region src/js/menu.js
var cardsContainer$1 = document.querySelector(".card__list");
var categoryButtons = document.querySelectorAll(".tabs__button[data-category]");
function createProduct(product) {
	const li = document.createElement("li");
	li.classList.add("card__item");
	li.dataset.name = product.name;
	const div1 = document.createElement("div");
	div1.classList.add("card__wrap");
	const img = document.createElement("img");
	img.classList.add("card__image");
	img.src = new URL((/* #__PURE__ */ Object.assign({
		"../assets/images/about-1.jpg": about_1_default,
		"../assets/images/about-2.jpg": about_2_default,
		"../assets/images/about-3.jpg": about_3_default,
		"../assets/images/about-4.jpg": about_4_default,
		"../assets/images/coffee-1.jpg": coffee_1_default,
		"../assets/images/coffee-2.jpg": coffee_2_default,
		"../assets/images/coffee-3.jpg": coffee_3_default,
		"../assets/images/coffee-4.jpg": coffee_4_default,
		"../assets/images/coffee-5.jpg": coffee_5_default,
		"../assets/images/coffee-6.jpg": coffee_6_default,
		"../assets/images/coffee-7.jpg": coffee_7_default,
		"../assets/images/coffee-8.jpg": coffee_8_default,
		"../assets/images/coffee-slider-1.png": coffee_slider_1_default,
		"../assets/images/coffee-slider-2.png": coffee_slider_2_default,
		"../assets/images/coffee-slider-3.png": coffee_slider_3_default,
		"../assets/images/dessert-1.jpg": dessert_1_default,
		"../assets/images/dessert-2.jpg": dessert_2_default,
		"../assets/images/dessert-3.jpg": dessert_3_default,
		"../assets/images/dessert-4.jpg": dessert_4_default,
		"../assets/images/dessert-5.jpg": dessert_5_default,
		"../assets/images/dessert-6.jpg": dessert_6_default,
		"../assets/images/dessert-7.jpg": dessert_7_default,
		"../assets/images/dessert-8.jpg": dessert_8_default,
		"../assets/images/hero.jpg": hero_default,
		"../assets/images/mobile-screens.png": mobile_screens_default,
		"../assets/images/tea-1.jpg": tea_1_default,
		"../assets/images/tea-2.jpg": tea_2_default,
		"../assets/images/tea-3.jpg": tea_3_default,
		"../assets/images/tea-4.jpg": tea_4_default
	}))[`../assets/images/${product.image}`], import.meta.url).href;
	img.alt = product.name;
	div1.append(img);
	const div2 = document.createElement("div");
	div2.classList.add("card__item-content");
	const h3 = document.createElement("h3");
	h3.classList.add("card__title");
	h3.textContent = product.name;
	const p = document.createElement("p");
	p.classList.add("card__descr");
	p.textContent = product.description;
	const span = document.createElement("span");
	span.classList.add("card__price");
	span.textContent = `$${product.price}`;
	div2.append(h3, p, span);
	li.append(div1, div2);
	return li;
}
function createProducts(products, category) {
	if (!cardsContainer$1) return;
	cardsContainer$1.replaceChildren();
	products.filter((item) => item.category === category).forEach((item) => {
		cardsContainer$1.append(createProduct(item));
	});
}
function getProduct(products, name) {
	return products.find((item) => item.name === name);
}
function toggleProducts(event) {
	const activeButton = event.currentTarget;
	const category = activeButton.dataset.category;
	categoryButtons.forEach((button) => {
		button.classList.remove("tabs__button--active");
	});
	activeButton.classList.add("tabs__button--active");
	createProducts(products_default, category);
}
categoryButtons.forEach((button) => {
	button.addEventListener("click", toggleProducts);
});
createProducts(products_default, "coffee");
//#endregion
//#region src/js/modal.js
var currentProduct = null;
var selectedSize = "s";
var selectedAdditive = null;
var modal = document.querySelector(".modal");
var body$1 = document.body;
var html = document.documentElement;
var modalCloseButton = modal?.querySelector(".modal__close");
var cardsContainer = document.querySelector(".card__list");
var modalTitle = modal?.querySelector(".modal__title");
var modalDescr = modal?.querySelector(".modal__descr");
var modalImage = modal?.querySelector(".modal__image");
var totalPriceElement = modal?.querySelector(".modal__price");
var sizeButtonsContainer = modal?.querySelector(".modal__size-buttons .modal__buttons");
var additiveButtonsContainer = modal?.querySelector(".modal__additives-buttons .modal__buttons");
var scrollPosition = 0;
function calculateTotal() {
	if (!currentProduct) return;
	let total = Number(currentProduct.price);
	const sizeAddPrice = Number(currentProduct.sizes[selectedSize]["add-price"]);
	total += sizeAddPrice;
	if (selectedAdditive !== null && currentProduct.additives[selectedAdditive]) {
		const additiveAddPrice = Number(currentProduct.additives[selectedAdditive]["add-price"]);
		total += additiveAddPrice;
	}
	if (totalPriceElement) totalPriceElement.textContent = `$${total.toFixed(2)}`;
}
function fillModalData(product) {
	if (!product) return;
	currentProduct = product;
	selectedSize = "s";
	selectedAdditive = null;
	const { name, description, image, sizes, additives } = product;
	modalTitle.textContent = name;
	modalDescr.textContent = description;
	modalImage.src = new URL((/* #__PURE__ */ Object.assign({
		"../assets/images/about-1.jpg": about_1_default,
		"../assets/images/about-2.jpg": about_2_default,
		"../assets/images/about-3.jpg": about_3_default,
		"../assets/images/about-4.jpg": about_4_default,
		"../assets/images/coffee-1.jpg": coffee_1_default,
		"../assets/images/coffee-2.jpg": coffee_2_default,
		"../assets/images/coffee-3.jpg": coffee_3_default,
		"../assets/images/coffee-4.jpg": coffee_4_default,
		"../assets/images/coffee-5.jpg": coffee_5_default,
		"../assets/images/coffee-6.jpg": coffee_6_default,
		"../assets/images/coffee-7.jpg": coffee_7_default,
		"../assets/images/coffee-8.jpg": coffee_8_default,
		"../assets/images/coffee-slider-1.png": coffee_slider_1_default,
		"../assets/images/coffee-slider-2.png": coffee_slider_2_default,
		"../assets/images/coffee-slider-3.png": coffee_slider_3_default,
		"../assets/images/dessert-1.jpg": dessert_1_default,
		"../assets/images/dessert-2.jpg": dessert_2_default,
		"../assets/images/dessert-3.jpg": dessert_3_default,
		"../assets/images/dessert-4.jpg": dessert_4_default,
		"../assets/images/dessert-5.jpg": dessert_5_default,
		"../assets/images/dessert-6.jpg": dessert_6_default,
		"../assets/images/dessert-7.jpg": dessert_7_default,
		"../assets/images/dessert-8.jpg": dessert_8_default,
		"../assets/images/hero.jpg": hero_default,
		"../assets/images/mobile-screens.png": mobile_screens_default,
		"../assets/images/tea-1.jpg": tea_1_default,
		"../assets/images/tea-2.jpg": tea_2_default,
		"../assets/images/tea-3.jpg": tea_3_default,
		"../assets/images/tea-4.jpg": tea_4_default
	}))[`../assets/images/${image}`], import.meta.url).href;
	modalImage.alt = name;
	const sizeButtons = sizeButtonsContainer?.querySelectorAll(".tabs__button");
	const sizeKeys = Object.keys(sizes);
	sizeButtons?.forEach((btn, index) => {
		const key = sizeKeys[index];
		btn.dataset.index = index;
		const textSpan = btn.querySelector(".tabs__text");
		if (textSpan && sizes[key]) textSpan.textContent = sizes[key].size;
		btn.classList.toggle("modal__button--active", key === selectedSize);
	});
	(additiveButtonsContainer?.querySelectorAll(".tabs__button"))?.forEach((btn, index) => {
		btn.dataset.index = index;
		const textSpan = btn.querySelector(".tabs__text");
		if (textSpan && additives[index]) textSpan.textContent = additives[index].name;
		btn.classList.remove("modal__button--active");
	});
	calculateTotal();
}
function openProductModal(event) {
	const card = event.target.closest(".card__item");
	if (card && modal) {
		scrollPosition = window.pageYOffset;
		body$1.classList.add("stop-scroll");
		body$1.style.top = `-${scrollPosition}px`;
		const productName = card.dataset.name;
		fillModalData(getProduct(products_default, productName));
		modal.showModal();
	}
}
function closeModal() {
	html.style.scrollBehavior = "auto";
	modal?.close();
	body$1.classList.remove("stop-scroll");
	body$1.style.top = "";
	window.scrollTo(0, scrollPosition);
	html.style.scrollBehavior = "";
}
cardsContainer?.addEventListener("click", openProductModal);
modalCloseButton?.addEventListener("click", closeModal);
modal?.addEventListener("click", (event) => {
	const rect = modal.getBoundingClientRect();
	if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeModal();
});
sizeButtonsContainer?.addEventListener("click", (event) => {
	const button = event.target.closest(".tabs__button");
	if (!button) return;
	const index = Number(button.dataset.index);
	selectedSize = [
		"s",
		"m",
		"l"
	][index];
	sizeButtonsContainer.querySelectorAll(".tabs__button").forEach((btn, i) => btn.classList.toggle("modal__button--active", i === index));
	calculateTotal();
});
additiveButtonsContainer?.addEventListener("click", (event) => {
	const button = event.target.closest(".tabs__button");
	if (!button) return;
	const buttons = Array.from(additiveButtonsContainer.querySelectorAll(".tabs__button"));
	const index = buttons.indexOf(button);
	if (index === -1) return;
	if (selectedAdditive === index) selectedAdditive = null;
	else selectedAdditive = index;
	buttons.forEach((btn, i) => {
		btn.classList.toggle("modal__button--active", i === selectedAdditive);
	});
	calculateTotal();
});
//#endregion
//#region src/js/burger.js
var body = document.body;
var menu = document.querySelector(".header__wrapper-nav");
var btnOpen = document.querySelector(".burger");
var links = document.querySelectorAll(".nav__link");
function toggleMenu() {
	const isOpen = !menu.classList.contains("active");
	menu.classList.toggle("active");
	btnOpen.classList.toggle("active");
	body.classList.toggle("stop-scroll", isOpen);
}
function closeMenu() {
	menu.classList.remove("active");
	body.classList.remove("stop-scroll");
	btnOpen.classList.remove("active");
}
function clearMenu() {
	if (document.documentElement.offsetWidth > 992) closeMenu();
}
btnOpen.addEventListener("click", toggleMenu);
links.forEach((link) => {
	link.addEventListener("click", closeMenu);
});
window.addEventListener("resize", clearMenu);
//#endregion
//#region src/js/slider.js
var slider = document.querySelector(".slider");
var sliderList = slider?.querySelector(".slider__list");
var realItems = [...sliderList.querySelectorAll(".slider__item")];
var dots = [...slider?.querySelectorAll(".slider__dot")];
var btnNext = slider?.querySelector(".slider__next");
var btnPrev = slider?.querySelector(".slider__prev");
var index = 0;
var count = realItems.length;
var startX = 0;
var currentX = 0;
var dragging = false;
function getItemWidth() {
	return realItems[0].clientWidth;
}
function updateDots() {
	dots.forEach((item, idx) => {
		item.classList.toggle("slider__dot--active", idx === index);
	});
}
function goTo(i) {
	index = (i + count) % count;
	sliderList.style.transition = "transform .4s ease";
	sliderList.style.transform = `translateX(-${index * getItemWidth()}px)`;
	updateDots();
}
function onPointerDown(e) {
	dragging = true;
	startX = e.clientX;
	currentX = 0;
	sliderList.style.transition = "none";
	sliderList.setPointerCapture(e.pointerId);
}
function onPointerMove(e) {
	if (!dragging) return;
	currentX = e.clientX - startX;
	const base = -index * getItemWidth();
	sliderList.style.transform = `translateX(${base + currentX}px)`;
}
function onPointerUp() {
	if (!dragging) return;
	dragging = false;
	const threshold = getItemWidth() * .2;
	if (currentX < -threshold) goTo(index + 1);
	else if (currentX > threshold) goTo(index - 1);
	else goTo(index);
	currentX = 0;
}
function onPointerCancel() {
	if (!dragging) return;
	dragging = false;
	goTo(index);
}
sliderList.addEventListener("pointerdown", onPointerDown);
sliderList.addEventListener("pointermove", onPointerMove);
sliderList.addEventListener("pointerup", onPointerUp);
sliderList.addEventListener("pointercancel", onPointerCancel);
window.addEventListener("resize", () => {
	sliderList.style.transition = "none";
	goTo(index);
	requestAnimationFrame(() => {
		sliderList.style.transition = "";
	});
});
btnNext.addEventListener("click", () => goTo(index + 1));
btnPrev.addEventListener("click", () => goTo(index - 1));
//#endregion

//# sourceMappingURL=main2.js.map