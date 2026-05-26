const button = document.querySelector("button"),
	displayPressedMethod = document.getElementById("display-pressed-method");

button.addEventListener("pointerdown", event => {
	const pointerType = event.pointerType;
	console.log(pointerType);
});
