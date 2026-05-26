const button = document.querySelector("button");

button.addEventListener("pointerdown", event => {
	const pointerType = event.pointerType;
	console.log(pointerType);
});
