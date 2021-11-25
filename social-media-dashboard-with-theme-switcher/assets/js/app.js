(() => {
	let input = document.querySelector('input[type="checkbox"]');
	input.addEventListener('click', (e) => {
		if (e.target.checked) {
			document.body.classList.add('mode-light');
		} else {
			document.body.classList.remove('mode-light');
		}
	});
	// console.log(input.checked);
})();
