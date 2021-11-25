(() => {
	let input = document.querySelector('input[type="checkbox"]');
	input.checked = false;
	input.addEventListener('click', (e) => {
		if (e.target.checked) {
			document.body.classList.add('mode-light');
		} else {
			document.body.classList.remove('mode-light');
		}
	});
	// console.log(input.checked);
})();
