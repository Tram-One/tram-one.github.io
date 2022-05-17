import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { registerHtml, start, useEffect, useGlobalStore, useStore } from 'tram-one';
import './styles.css';
import './links.css';
import './highlight-syntax.css';

const html = registerHtml({
	'app-header': require('./components/app-header'),
	'sticky-nav-bar': require('./components/sticky-nav-bar'),
	introduction: require('./sections/introduction/introduction'),
	features: require('./sections/features/features'),
	concepts: require('./sections/concepts/concepts'),
	api: require('./sections/api/api'),
	install: require('./sections/install/install'),
});

/**
 * scroll observer is used to create and configure the sticky nav.
 * the observer controls when the nav should appear, and what color it should be.
 */
const createScrollObserver = () => {
	const stickyNavVisibility = useGlobalStore('stickyNavVisibility', { isVisible: false });
	const stickyNavColor = useGlobalStore('stickyNavColor', { color: undefined });
	const entryMap = useStore([{}, {}, {}, {}]);

	const appHeader = document.querySelector('#app-header');
	const introSection = document.querySelector('#intro-section');
	const featureSection = document.querySelector('#features-section');
	const installSection = document.querySelector('#install-section');
	const conceptsSection = document.querySelector('#concepts-section');
	const apiSection = document.querySelector('#api-section');

	const handleIntersect = (entries, observer) => {
		const isAppHeaderEntry = (entry) => entry.target.id === 'app-header';
		const appHeaderEntry = entries.find(isAppHeaderEntry);
		if (appHeaderEntry) {
			const appHeaderIsVisible = appHeaderEntry.isIntersecting;
			stickyNavVisibility.isVisible = !appHeaderIsVisible;
		}

		const isintroductionSectionEntry = (entry) => entry.target.id === 'intro-section';
		const introductionSectionEntry = entries.find(isintroductionSectionEntry);

		const isfeatureSectionEntry = (entry) => entry.target.id === 'features-section';
		const featureSectionEntry = entries.find(isfeatureSectionEntry);

		const isinstallSectionEntry = (entry) => entry.target.id === 'install-section';
		const installSectionEntry = entries.find(isinstallSectionEntry);

		const isConceptsSectionEntry = (entry) => entry.target.id === 'concepts-section';
		const conceptsSectionEntry = entries.find(isConceptsSectionEntry);

		const isApiSectionEntry = (entry) => entry.target.id === 'api-section';
		const apiSectionEntry = entries.find(isApiSectionEntry); // needed semi-colon

		// update our entryMap with the latest values from the observer
		[introductionSectionEntry, featureSectionEntry, installSectionEntry, conceptsSectionEntry, apiSectionEntry].forEach(
			(entry, index) => {
				if (entry) {
					entryMap[index] = entry;
				}
			}
		);

		// find the first entry that is visible
		const isSectionVisible = (entry) => entry.isIntersecting;
		const firstEntry = entryMap.find(isSectionVisible);
		// use getComptuedStyle, which can read from the CSS style sheets
		stickyNavColor.color = getComputedStyle(firstEntry.target).backgroundColor;
	};

	const observerOptions = {
		root: null,
		rootMargin: '0px',
	};

	const scrollObserver = new IntersectionObserver(handleIntersect, observerOptions);
	scrollObserver.observe(appHeader);
	scrollObserver.observe(introSection);
	scrollObserver.observe(featureSection);
	scrollObserver.observe(installSection);
	scrollObserver.observe(conceptsSection);
	scrollObserver.observe(apiSection);
};

const page = () => {
	useEffect(createScrollObserver);

	return html`
		<div class="app-container">
			<app-header id="app-header" />
			<sticky-nav-bar />
			<main id="main-content">
				<introduction />
				<features />
				<install />
				<concepts />
				<api />
			</main>
		</div>
	`;
};

start(page, '#app');
