import logo from '@tram-one/tram-logo/dist/element';

module.exports = (attrs) => {
	const logoElement = logo.cloneNode(true);
	logoElement.classList.add('tram-logo');
	logoElement.classList.add(attrs.className);
	logoElement.setAttribute('width', attrs.size);
	logoElement.setAttribute('height', attrs.size);
	return logoElement;
};
