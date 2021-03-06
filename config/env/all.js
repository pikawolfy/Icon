'use strict';

module.exports = {
	app: {
		title: 'Index of Complex Networks',
		description: 'Collection of networks',
		keywords: 'Node.js, Express, AngularJS, MongoDB, Networks, Networks, Research'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets_all: {
		lib: {
			css: [

				'public/lib/angular-material/angular-material.min.css',
                'public/lib/angular-aria/angular-aria.min.css',
				'public/lib/textAngular/dist/textAngular.css',
				'public/lib/font-awesome/font-awesome.min.css',
				'public/lib/angular-chart.js/dist/angular-chart.min.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-material/angular-material.min.js',
                'public/lib/angular-aria/angular-aria.min.js',
				'public/lib/Chart.js/Chart.min.js',
				'public/lib/angular-chart.js/dist/angular-chart.min.js',
				'public/lib/oboe-browser.min.js',
				'public/lib/lodash/dist/lodash.min.js',
				'public/lib/socket.io-client/socket.io.js',
				'public/lib/textAngular/dist/textAngular-rangy.min.js',
				'public/lib/textAngular/dist/textAngular-sanitize.min.js',
				'public/lib/textAngular/dist/textAngularSetup.js',
				'public/lib/textAngular/dist/textAngular.js',
				'public/lib/angular-socket-io/socket.min.js',
				'public/lib/ng-file-upload/ng-file-upload.min.js',
				'public/lib/ng-file-upload/ng-file-upload-shim.min.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
