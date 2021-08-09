/* eslint-disable no-undef */
// import {StaleWhileRevalidate} from 'workbox-strategies';
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
	({request}) => request.origin === 'https://fonts.googleapis.com',
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'fonts'
	})
);

workbox.routing.registerRoute(
	({url}) => url.origin === 'https://fonts.gstatic.com',
	new workbox.strategies.CacheFirst({
		cacheName: 'fonts',
		plugins: [
			new workbox.cacheableResponse.CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new workbox.expiration.ExpirationPlugin({
				maxAgeSeconds: 60 * 60 * 24 * 365,
				maxEntries: 30,
			}),
		],
	})
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'image',
	new workbox.strategies.NetworkFirst()
);