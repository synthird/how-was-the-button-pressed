const button = document.querySelector("button"),
	displayPressedMethod = document.getElementById("display-pressed-method");

button.addEventListener("pointerdown", event => {
	displayPressedMethod.textContent = `The button was pressed by ${event.pointerType}!`;
	setTimeout(() => displayPressedMethod.textContent = "", 2000);
});
