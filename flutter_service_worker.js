'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a47fa9d1fc1d927b74a63e8194b86799",
"assets/AssetManifest.bin.json": "9df042f357bf3ed8129f2d246fd57fb2",
"assets/AssetManifest.json": "6fa1588979c37b9dc5952d432a22319c",
"assets/assets/images/buagame/blank.png": "62fe0ec02ddde3d4f8e50b4cf31adfae",
"assets/assets/images/buagame/blankdice.png": "3b78df6c6ce5fd2c8c1f1f52300686e1",
"assets/assets/images/buagame/crab.png": "74b3a3cad55ba6723aade91bcb42e91c",
"assets/assets/images/buagame/fish.png": "b6fe3d680b2e14af607e5442dce431a9",
"assets/assets/images/buagame/gourd.png": "6b2b148dfdf30d4f7a0212b34729a89d",
"assets/assets/images/buagame/prawn.png": "3c25205ca015977be14e40005e1ce605",
"assets/assets/images/buagame/rooster.png": "070069048737317157490914322bcbf6",
"assets/assets/images/buagame/tiger.png": "5875d090791fc47101eeb29eb3b8fbb6",
"assets/assets/images/playeravatars/blankPlayer.jpg": "9935bc8d163c8c29de31d4398508b867",
"assets/assets/images/playeravatars/female01.png": "9b49b7405732d71ae98ed13aae274436",
"assets/assets/images/playeravatars/female02.png": "67070fcef5421e959d75de6c9b43c019",
"assets/assets/images/playeravatars/female03.png": "60fbb732ffab2f7520f47561851a6785",
"assets/assets/images/playeravatars/female04.png": "ec0a4d18ba592c662305d8c659b82805",
"assets/assets/images/playeravatars/female05.png": "2376adf23994d58c24a5e54256e00d24",
"assets/assets/images/playeravatars/female06.png": "ab929eb524119f0164c13f8b568cedfb",
"assets/assets/images/playeravatars/female07.png": "8e90e0274e0416e4d275c616720e2671",
"assets/assets/images/playeravatars/female08.png": "b4ab2bb54aa3b7b6305addfc85c3695c",
"assets/assets/images/playeravatars/female09.png": "7c42ef26d17a98fa4e3338fbb56a1d3a",
"assets/assets/images/playeravatars/female10.png": "c07279851678ce95307cec198864aef1",
"assets/assets/images/playeravatars/female11.png": "a5c3d9ad9b6bd08afbb485d887882ec2",
"assets/assets/images/playeravatars/female12.png": "3cd4d9f6fe4527185c0dcd561be61829",
"assets/assets/images/playeravatars/male01.png": "5adbec9c7352c63faacabd169243bad2",
"assets/assets/images/playeravatars/male02.png": "f30389ae4d04aa7908311d680bb8ffba",
"assets/assets/images/playeravatars/male03.png": "058142896126a2816928361468d9cc9a",
"assets/assets/images/playeravatars/male04.png": "99a9fe28e5267849aeab8cd9012ab7d9",
"assets/assets/images/playeravatars/male05.png": "eb295c4c985e8260a89fece0b42a71ac",
"assets/assets/images/playeravatars/male06.png": "c9cea6423952747b07ce16c50e70e861",
"assets/assets/images/playeravatars/male07.png": "e387459d4ce392ef0041ee7b2ae342d4",
"assets/assets/images/playeravatars/male08.png": "14d783d7719b70e74d6b665ac58f3c31",
"assets/assets/images/playeravatars/male09.png": "81b449e51aac7b96d76ae1d7fe31d33b",
"assets/assets/images/playeravatars/male10.png": "1663df73179faab81fa13f008fbd1cf5",
"assets/assets/images/playeravatars/male11.png": "a4bf7209ef4fb916e9d9df66e35155fb",
"assets/assets/images/playeravatars/male12.png": "7b3291f17990d87a72619bcc602f0a9b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "11a3d63fcfbb20f0fca68054868a7b5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "573d8f92beff7ec67cbb9cf398cae452",
"/": "573d8f92beff7ec67cbb9cf398cae452",
"main.dart.js": "cef63f8a4fbed16f2f57247b458115cc",
"manifest.json": "c9d682f597efd7b880868dd0158a56a4",
"version.json": "f3d027765441cbc8962e46818c779840"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
