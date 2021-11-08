(() => {
	'use strict';

	const challenges = [
		{
			title: 'Huddle landing page with alternating feature blocks',
			stack: ['HTML', 'CSS', 'JS'],
			'repo-link': 'This is a link',
			'live-link': 'link for the live website',
			'image-link':
				'https://images.unsplash.com/photo-1624265853364-12b264a2f903?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
		},
		{
			title: 'Huddle landing page with alternating feature blocks 1',
			stack: ['HTML', 'CSS', 'JS'],
			'repo-link': 'This is a link',
			'live-link': 'link for the live website',
			'image-link':
				'https://images.unsplash.com/photo-1624265853364-12b264a2f903?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
		},
		{
			title: 'Huddle landing page with alternating feature blocks 2',
			stack: ['HTML', 'SASS', 'JS'],
			'repo-link': 'This is a link',
			'live-link': 'link for the live website',
			'image-link':
				'https://images.unsplash.com/photo-1624265853364-12b264a2f903?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
		},
	];

	const content_list = document.querySelector('.content__lists');

	challenges.forEach((challenge) => {
		// Create Element
		const li = document.createElement('li');
		const div_card = document.createElement('div');
		const div_image = document.createElement('div');
		const div_body = document.createElement('div');
		const li_repo = document.createElement('li');
		const li_site = document.createElement('li');

		const img = document.createElement('img');
		const h3 = document.createElement('h3');
		const div_meta = document.createElement('div');
		const ul_language = document.createElement('item__lang_lists');
		const ul_links = document.createElement('item__links_lists');

		// Class
		li.classList.add('fm__item');
		div_card.classList.add('item__card');
		div_image.classList.add('item__image_wrapper');
		div_body.classList.add('item__body');
		img.classList.add('item__image');
		h3.classList.add('item__title');
		div_meta.classList.add('item__meta');
		ul_language.classList.add('item__lang_lists');
		ul_links.classList.add('item__links_lists');
		li_repo.classList.add('item__link_list');
		li_site.classList.add('item__link_list');

		// Value
		const text_h3 = document.createTextNode(challenge.title);
		img.src = challenge['image-link'];

		// Stack
		challenge.stack.forEach((lang) => {
			const li_lang = document.createElement('li');
			li_lang.classList.add('item__lang_list');

			if (lang === 'HTML') {
				li_lang.classList.add('item__lang-html');
				const li_text = document.createTextNode(lang);
				li_lang.appendChild(li_text);
			} else if (lang === 'CSS' || lang === 'SASS') {
				li_lang.classList.add('item__lang-style');
				const li_text = document.createTextNode(lang);
				li_lang.appendChild(li_text);
			} else {
				li_lang.classList.add('item__lang-js');
				const li_text = document.createTextNode(lang);
				li_lang.appendChild(li_text);
			}
			console.log(li_lang);
		});

		h3.appendChild(text_h3);
		div_image.appendChild(img);
	});
})();
