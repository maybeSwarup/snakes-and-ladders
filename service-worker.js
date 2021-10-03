/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["assets/cannon.0fd49401.js","01686f737a4a4c54f6713bda65fcdeb7"],["assets/index.73719aea.js","9b7fa07942a068ff007fb0344abed550"],["assets/sweetalert2.1b1722fa.js","ad75757c045e6fb39d8e8c8dd8f6d5e9"],["assets/three.a4ec2a72.js","f14e07883adb08d0c2d00f7435f1f85c"],["assets/threejs-dice.e97cf648.js","1605682bd2a3cb3a9555da5d940c8215"],["icons/apple-icon-180.png","a18e42dafb3d758964d7d22f5bdf5c9e"],["icons/apple-splash-1125-2436.jpg","08538834eada5f51ea8ab676622f6325"],["icons/apple-splash-1136-640.jpg","6e92c3d665fe87a7a654cad8e059379f"],["icons/apple-splash-1170-2532.jpg","bf8dcb73dad79e765813d685a52fb6e7"],["icons/apple-splash-1242-2208.jpg","9a30aa5a5b5ac2d19f570820b7320c8f"],["icons/apple-splash-1242-2688.jpg","5364d36be46269e0c8b9b305bc8f687b"],["icons/apple-splash-1284-2778.jpg","6f950363fbe8606de47f73a26e7ebf5e"],["icons/apple-splash-1334-750.jpg","3f047d6d49784f0d88f50194e9282b2b"],["icons/apple-splash-1536-2048.jpg","be17f8c42949ee76d99b444ea484fe4b"],["icons/apple-splash-1620-2160.jpg","f07ce8502aef073a031610ef161f077d"],["icons/apple-splash-1668-2224.jpg","505caa08f3345eea994ba96bc089eee1"],["icons/apple-splash-1668-2388.jpg","8bd13d20af61a929cfb3786ea75c8a8f"],["icons/apple-splash-1792-828.jpg","87ec7e5bcfa081d50496feb8a6ed3172"],["icons/apple-splash-2048-1536.jpg","b7c5a4a7615f2bd6efb69e4b8f1bae04"],["icons/apple-splash-2048-2732.jpg","505da9153575a93df8677463ac0cc198"],["icons/apple-splash-2160-1620.jpg","662eaf4b6ee0803c45ea6adc488fd25c"],["icons/apple-splash-2208-1242.jpg","3dd3fd7800416e45f44607fe2d8d98c5"],["icons/apple-splash-2224-1668.jpg","a558e5c72541192e9120c1babca15909"],["icons/apple-splash-2388-1668.jpg","170680cd39d9fa5153080ae43455496f"],["icons/apple-splash-2436-1125.jpg","84bf3704257dd906dc0229b20d1d03a8"],["icons/apple-splash-2532-1170.jpg","64020647dc8cf53a1bf848cfbca68ea5"],["icons/apple-splash-2688-1242.jpg","30a689f25b161e330243330dbf8a9405"],["icons/apple-splash-2732-2048.jpg","f2cac6e8e38c9c9f1e04ad8ae2550bbf"],["icons/apple-splash-2778-1284.jpg","870ce1523ec299ac5a1f21401eee1924"],["icons/apple-splash-640-1136.jpg","20da4164bd2b81cdc1b9037e6a992185"],["icons/apple-splash-750-1334.jpg","032506aea367b606cb0851e9e19adba1"],["icons/apple-splash-828-1792.jpg","dfb82528248418d615216c5b1cafee12"],["icons/manifest-icon-192.png","dce7e4530f2cd17525a95bd533ccb01f"],["icons/manifest-icon-512.png","17d6d68a81f6484dbebf6a523e70c8b5"],["index.html","f9678cec3080f4e6b12b54ae382de859"],["manifest.json","2828a604e9858a9c1109a531f3afddea"],["src/assets/board.jpg","1ff60515c5c8f0b7f18146ef2e696be3"],["src/assets/icon.png","816f46d54279ab94f4690a9b22765bbd"],["src/assets/negx.jpg","6b2f292c33585296de8f4e638986bb79"],["src/assets/negy.jpg","9ed17cd7644cbc03321d4179aa06090d"],["src/assets/negz.jpg","101ece5be7592bfb4249a79e1968d3b6"],["src/assets/posx.jpg","d7f98688348b7540277ea8c6493f12a6"],["src/assets/posy.jpg","01f7d2408087e4fc1fc03966616d35ef"],["src/assets/posz.jpg","6579ac45179c999a22ca04f88c033e93"],["src/assets/wood.jpg","2722b22ecb93141416760164a10a4ba4"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







