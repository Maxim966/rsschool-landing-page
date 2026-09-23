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
//#region src/main.js
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

//# sourceMappingURL=main2.js.map