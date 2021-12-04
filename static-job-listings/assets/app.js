(() => {
	let card__container = document.querySelector('.card__container');
	async function fetchData() {
		let response = await fetch('/static-job-listings/data.json');
		let data = await response.json();
		return data;
	}

	async function listCard() {
		let items = await fetchData();

		items.forEach((item) => {
			// Create element
			let card = document.createElement('div');
			let card__inner = document.createElement('div');
			let card__header = document.createElement('div');
			let img = document.createElement('img');
			let card__info = document.createElement('div');
			let info__joblisting = document.createElement('div');
			let info__job = document.createElement('div');
			let card__tags = document.createElement('div');
			let info__company = document.createElement('span');
			let info__badge = document.createElement('ul');
			let job__position = document.createElement('h1');
			let job__desc_list = document.createElement('ul');
			let job__postedAt = document.createElement('li');
			let postedAt = document.createElement('span');
			let job__contract = document.createElement('li');
			let contract = document.createElement('span');
			let job__location = document.createElement('li');
			let location = document.createElement('span');
			let tags__list = document.createElement('ul');
			let tag__role = document.createElement('li');
			let role__span = document.createElement('span');
			let tag__level = document.createElement('li');
			let level__span = document.createElement('span');

			if (item.new || item.featured) {
				if (item.new) {
					let badge__new = document.createElement('li');
					let text = document.createTextNode('new!');
					badge__new.classList.add(`badge`, `badge--new`);
					badge__new.appendChild(text);
					info__badge.insertAdjacentElement('beforeend', badge__new);
				}
				if (item.featured) {
					let badge_feat = document.createElement('li');
					let text = document.createTextNode('featured');
					badge_feat.classList.add(`badge`, `badge--featured`);
					badge_feat.appendChild(text);
					info__badge.insertAdjacentElement('beforeend', badge_feat);
				}
			}

			tag__role.setAttribute('data-role', item.role);
			tag__level.setAttribute('data-level', item.level);
			let role__text = document.createTextNode(item.role);
			let level__text = document.createTextNode(item.level);
			role__span.appendChild(role__text);
			level__span.appendChild(level__text);
			tag__level.appendChild(level__span);
			tag__role.appendChild(role__span);
			tags__list.insertAdjacentElement('beforeend', tag__role);
			tags__list.insertAdjacentElement('beforeend', tag__level);

			item.languages.forEach((language) => {
				let tag__lang = document.createElement('li');
				let lang__span = document.createElement('span');
				let lang__text = document.createTextNode(language);
				tag__lang.setAttribute('data-languages', language);
				tag__lang.classList.add('tag__item');
				lang__span.appendChild(lang__text);
				tag__lang.appendChild(lang__span);
				tags__list.insertAdjacentElement('beforeend', tag__lang);
			});

			item.tools.forEach((tool) => {
				let tag__tool = document.createElement('li');
				let tool__span = document.createElement('span');
				let tool__text = document.createTextNode(tool);
				tag__tool.setAttribute('data-tools', tool);
				tag__tool.classList.add('tag__item');
				tool__span.appendChild(tool__text);
				tag__tool.appendChild(tool__span);
				tags__list.insertAdjacentElement('beforeend', tag__tool);
			});

			// TextNode
			let company__name = document.createTextNode(item.company);
			let position__name = document.createTextNode(item.position);
			let postedAt__text = document.createTextNode(item.postedAt);
			let contract__text = document.createTextNode(item.contract);
			let location__text = document.createTextNode(item.location);

			// Add Classlist
			card.classList.add('card');
			card__inner.classList.add('card__inner');
			card__header.classList.add('card__header');
			card__info.classList.add('card__info');
			info__joblisting.classList.add('info__joblisting');
			info__job.classList.add('info__job');
			card__tags.classList.add('card__tags');
			info__company.classList.add('info__company');
			info__badge.classList.add('info__badge');
			job__position.classList.add('job__position');
			job__desc_list.classList.add('job__description-list');
			job__postedAt.classList.add('job__item', 'job__item--postedAt');
			job__contract.classList.add('job__item', 'job__item--contract');
			job__location.classList.add('job__item', 'job__item--location');
			tags__list.classList.add('tags__list');
			tag__role.classList.add('tag__item');
			tag__level.classList.add('tag__item');

			// Add Values
			img.src = item.logo;
			img.alt = `${item.company}__logo`;

			// Append
			card__tags.appendChild(tags__list);

			location.appendChild(location__text);
			job__location.appendChild(location);
			contract.appendChild(contract__text);
			job__contract.appendChild(contract);
			postedAt.appendChild(postedAt__text);
			job__postedAt.appendChild(postedAt);
			job__position.appendChild(position__name);
			job__desc_list.insertAdjacentElement('beforeend', job__postedAt);
			job__desc_list.insertAdjacentElement('beforeend', job__contract);
			job__desc_list.insertAdjacentElement('beforeend', job__location);

			info__job.insertAdjacentElement('beforeend', job__position);
			info__job.insertAdjacentElement('beforeend', job__desc_list);

			info__company.appendChild(company__name);
			info__joblisting.insertAdjacentElement('beforeend', info__company);
			info__joblisting.insertAdjacentElement('beforeend', info__badge);

			card__header.appendChild(img);
			card__info.insertAdjacentElement('beforeend', info__joblisting);
			card__info.insertAdjacentElement('beforeend', info__job);
			card__inner.insertAdjacentElement('beforeend', card__header);
			card__inner.insertAdjacentElement('beforeend', card__info);
			card__inner.insertAdjacentElement('beforeend', card__tags);

			card.appendChild(card__inner);
			card__container.insertAdjacentElement('beforeend', card);
			console.log(item);
		});
	}

	listCard();
})();
