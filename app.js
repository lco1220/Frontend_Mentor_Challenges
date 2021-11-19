(() => {
	'use strict';

	const challenges = [
		{
			title: 'Huddle landing page with alternating feature blocks',
			stack: ['HTML', 'CSS'],
			'repo-link':
				'https://github.com/lco1220/Frontend_Mentor_Challenges/tree/main/huddle-challenge-landing-page',
			'live-link': './huddle-challenge-landing-page/',
			'image-link':
				'./huddle-challenge-landing-page/design/desktop-preview.jpg',
		},
		{
			title: 'Clipboard landing page',
			stack: ['HTML', 'SASS'],
			'repo-link':
				'https://github.com/lco1220/Frontend_Mentor_Challenges/tree/main/clipboard-landing-page',
			'live-link': './clipboard-landing-page',
			'image-link': './clipboard-landing-page/design/desktop-preview.jpg',
		},
		{
			title: 'Bookmark landing page',
			stack: ['HTML', 'SASS', 'JS'],
			'repo-link':
				'https://github.com/lco1220/Frontend_Mentor_Challenges/tree/main/bookmark-landing-page',
			'live-link': './bookmark-landing-page/index.html',
			'image-link': './bookmark-landing-page/design/desktop-preview.jpg',
		},
		{
			title: 'Project tracking intro component',
			stack: ['HTML', 'SASS', 'JS'],
			'repo-link':
				'https://github.com/lco1220/Frontend_Mentor_Challenges/tree/main/project-tracking',
			'live-link': './project-tracking',
			'image-link': './project-tracking/design/desktop-preview.jpg',
		},
		{
			title: 'Insure landing page',
			stack: ['HTML', 'SASS', 'JS'],
			'repo-link':
				'https://github.com/lco1220/Frontend_Mentor_Challenges/tree/main/insure-landing-page',
			'live-link': './insure-landing-page',
			'image-link': './insure-landing-page/design/desktop-preview.jpg',
		},
		{
			title: 'Profile card component',
			stack: ['HTML', 'CSS'],
			'repo-link':
				'https://github.com/lco1220/Frontend_Mentor_Challenges/tree/main/profile-card-component',
			'live-link': './profile-card-component',
			'image-link': './profile-card-component/design/desktop-preview.jpg',
		},
	];

	const content_list = document.querySelector('.content__lists');

	challenges.forEach((challenge) => {
		// Create Element
		const li = document.createElement('li');
		const div_card = document.createElement('div');
		const div_image = document.createElement('div');
		const div_body = document.createElement('div');
		const img = document.createElement('img');
		const h3 = document.createElement('h3');
		const div_meta = document.createElement('div');
		const ul_language = document.createElement('ul');
		const ul_links = document.createElement('ul');
		const li_repo = document.createElement('li');
		const li_site = document.createElement('li');
		const a_repo = document.createElement('a');
		const a_live = document.createElement('a');

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
		a_repo.classList.add('item__link');
		a_live.classList.add('item__link');

		// Value
		const text_h3 = document.createTextNode(challenge.title);
		const repo_text = document.createTextNode('repo');
		const live_text = document.createTextNode('live');
		a_repo.href = challenge['repo-link'];
		a_live.href = challenge['live-link'];
		a_live.target = '_blank';
		a_live.target = '_blank';
		img.src = challenge['image-link'];
		img.width = 500;
		img.height = 250;
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
				li_lang.classList.add('item__lang-script');
				const li_text = document.createTextNode(lang);
				li_lang.appendChild(li_text);
			}
			// console.log(li_lang);
			ul_language.insertAdjacentElement('beforeend', li_lang);
		});

		// Append Text
		h3.appendChild(text_h3);
		a_repo.appendChild(repo_text);
		a_live.appendChild(live_text);

		div_image.appendChild(img);
		ul_links.insertAdjacentElement('beforeend', a_repo);
		ul_links.insertAdjacentElement('beforeend', a_live);

		div_meta.insertAdjacentElement('beforeend', ul_language);
		div_meta.insertAdjacentElement('beforeend', ul_links);
		div_body.insertAdjacentElement('beforeend', h3);
		div_body.insertAdjacentElement('beforeend', div_meta);

		div_card.insertAdjacentElement('beforeend', div_image);
		div_card.insertAdjacentElement('beforeend', div_body);
		li.insertAdjacentElement('beforeend', div_card);

		content_list.insertAdjacentElement('beforeend', li);
	});
})();
