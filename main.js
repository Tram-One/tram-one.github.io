define`
	<page-header>
		<style>
			header {
				display: grid;
				grid-template-columns: auto;
				grid-template-rows: auto;
				grid-template-areas:
					"title 				graphic"
					"description 	graphic"
					"resource 		graphic";

				width: 85%;
				margin: auto;
				margin-bottom: 1em;
				margin-top: 1em;
			}

			#graphic {
				grid-area: graphic;
				padding-left: 2em;
			}
			#title {
				grid-area: title;
				font-size: 3em;
				margin-top: 0;
				margin-bottom: 0;
			}
			#description {
				grid-area: description;
			}
			#resource {
				grid-area: resource;
			}

			@media (max-width: 750px) {
				header {
					text-align: center;
					grid-template-areas:
						"graphic"
						"title"
						"description"
						"resource";
				}
				#graphic {
					padding-left: 0;
				}
				#title {
					font-size: 2.5em;
					margin-top: 0.5em;
				}
			}
		</style>
		<header>
			<a id="graphic" href=${'href'} target="_blank">
				<img src=${'graphic'} width="258" />
			</a>
			<h1 id="title">${'page-title'}</h1>
			<p id="description">${'description'}</p>
			<section id="resource">
				<slot>
			</section
		</header>
	</page-header>
`;

define`
	<app-grid>
		<style>
			section {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr;
			}

			@media (max-width: 750px) {
				section {
					grid-template-columns: 1fr;
				}
			}

			::slotted(app-block) {
				border-radius: 2em;
				margin: 1em;
				padding: 1em;

				box-shadow:
					0 0 0 4px #CCC,
					0 0 0 8px #888;
			}
		</style>
		<section>
			<slot>
		</section>
	</app-grid>
`;

define`
	<app-block>
		<style>
			section {

			}

			h2 {
				margin: 0;
			}
		</style>
		<section>
			<h2>${'app-title'}</h2>
			<p>${'description'}</p>
			<slot>
		</section>
	</app-block>
`;

define`
	<app-link>
		<style>
			a {
				display: block;
			}
			a:hover {
				background: aliceblue;
			}
		</style>
		<a href=${'href'} target="_blank"><slot></a>
	</app-link>
`;
