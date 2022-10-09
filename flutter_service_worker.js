'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6023e71115e5d7ea9961366671a3db38",
"assets/assets/backgrounds/allbackgroundstars.png": "baddd42d0906f92e7f5944a23d3f00bb",
"assets/assets/backgrounds/dawnbackground.png": "920212b1e377ec4ab3fe8cc9aa21ed9e",
"assets/assets/backgrounds/fajrbackground.png": "54ed18ac519838a93407efdbffafc1b1",
"assets/assets/backgrounds/nightbackgroundwithmoon.png": "81dee20494202a81811efbe5f8b62bcd",
"assets/assets/backgrounds/noonbackground.png": "4c223d48ab1ddd6a82204313d3c0b87a",
"assets/assets/backgrounds/sunsetbackground.png": "c822d32ef61e4ccf533fb010cd8f0a53",
"assets/assets/cakes/apple_pie_64.png": "373035c9a1014b414b48fff0d4fbac31",
"assets/assets/cakes/bananasplit_64.png": "574def52c5e89c1afc27b765bebd827a",
"assets/assets/cakes/cherry_cakeslice_64.png": "8bdf637163bd5da3edc3d68adf1e653b",
"assets/assets/cakes/cherry_cake_64.png": "0de69989f04a2b7aedc23ec64980cdf8",
"assets/assets/cakes/cherry_confit_64.png": "a5bdafa8e6f2195634e470cfb35907b2",
"assets/assets/cakes/cherry_macaroon_64.png": "53bc5e8071e67cc2e4956c41a999f5b1",
"assets/assets/cakes/chocolate_cookie_64.png": "8e4a4daee0c3cff8707b91a041532a11",
"assets/assets/cakes/chocolate_icecream_64.png": "6f95ece3e82cdda1d63d8714e0c4b3e5",
"assets/assets/cakes/chocolate_macaroon_64.png": "87b5bbf74d68cfe89f0d19d915d99ac0",
"assets/assets/cakes/chocolate_truffle_64.png": "0b01650c7eb45a9f054a4fcce042e74a",
"assets/assets/cakes/funfetti_cakeslice_64.png": "af301e1a5e8fce78ff029b651e1d2a09",
"assets/assets/cakes/funfetti_cake_64.png": "5a0134ee9f956c116726e4cd2b20dad4",
"assets/assets/cakes/funfetti_cookie_64.png": "aacab357c22e5994c9b4bff14b2c340c",
"assets/assets/cakes/funfetti_cupcake_64.png": "b32ecafffae9bcb3a013a7af3efd5cc6",
"assets/assets/cakes/funfetti_icecream_64.png": "c6315e5b76473faa5d844420386f4f05",
"assets/assets/cakes/funfetti_macaroon_64.png": "88b976968bd575857d123d6c86d06e91",
"assets/assets/cakes/japanese_pudding_64.png": "92c48572d7d65931cc7503ad31902d1d",
"assets/assets/cakes/lemon_cookie_64.png": "5a7be0b4dec94c743ff4d20f2e9fe304",
"assets/assets/cakes/lemon_macaroon_64.png": "2b838f76d4e212a458c04023e7a3dbeb",
"assets/assets/cakes/lemon_sorbet_64.png": "40082e213fa5a896bd4450f929b4f90e",
"assets/assets/cakes/lemon_tartslice_64.png": "e1e351a03c83809828ef0dcee8dcb916",
"assets/assets/cakes/lemon_tart_64.png": "7d3e51313c4219bac5902abae7dc4b51",
"assets/assets/cakes/raspberry_chocolate_64.png": "211a1a5cccff32ca8b3f3e86c7d53300",
"assets/assets/cakes/raspberry_cupcake_64.png": "61f90853bb6534d83d59283e347c891d",
"assets/assets/cakes/raspberry_fruit_64.png": "b69985fbf8ecc3f87d4e7d26940c412b",
"assets/assets/cakes/strawberry_cakeslice_64.png": "faae2073c47c30267c7a7612fcc3856c",
"assets/assets/cakes/strawberry_cake_64.png": "8ecaf264af85312b4b7d12547ecf7eff",
"assets/assets/cakes/strawberry_chocolate_64.png": "5e2c569a1bdec8e47397d0dd21060f1c",
"assets/assets/cakes/strawberry_cupcake_64.png": "d2c77ca3bbd6d22f854e1d583c623e32",
"assets/assets/cakes/strawberry_fruit_64.png": "f41c3aa8cd30d5157943e7fdebfa42f2",
"assets/assets/cakes/strawberry_icecream_64.png": "36a267e3903d8c142b7d9b7130975a8f",
"assets/assets/cakes/strawberry_macaroon_64.png": "d3009eb091e8c47723a17758e547638e",
"assets/assets/GUI/back_light2.png": "1c1cb22b053c1ea30cb7544b551d5d60",
"assets/assets/GUI/bronze_trophy.png": "b67e15ed378628f61cd47c90185ba1d8",
"assets/assets/GUI/faceon_gold_coin.png": "a8af4d8f0da30d8361e29d048ba2b847",
"assets/assets/GUI/faceon_silver_coin.png": "ae1f4d7496627011f48c520f0564dbe7",
"assets/assets/GUI/face_on_blue_power_icon.png": "b93a82f852eb39f301cd8cc9b8ae7f91",
"assets/assets/GUI/face_on_cross.png": "6f7380206cddc9053d2cda9f42c42492",
"assets/assets/GUI/face_on_green_tick.png": "d70b56d4d670d70b6aebb8a4699aa61f",
"assets/assets/GUI/face_on_heart.png": "9836c8bf804a99c928bd404ba3fe892d",
"assets/assets/GUI/face_on_plus_health.png": "0005c55bb11fc466bb8071bb56ef1cd0",
"assets/assets/GUI/face_on_star.png": "c1556058c5d7e60dc1993fbc019f4877",
"assets/assets/GUI/face_on_yellow_power_icon.png": "2c9821431d0672e731d2bb71e578714b",
"assets/assets/GUI/gold_trophy.png": "92484cefedd87d1b3031d5d995a11e57",
"assets/assets/GUI/silver_trophy.png": "ad126dd9b81052cee1b230dc587eac76",
"assets/assets/GUI/tilted_blue_power_icon.png": "84244731576751157710fb8729cee7d5",
"assets/assets/GUI/tilted_cross.png": "96360d03ad554f25794afccfd00de0e7",
"assets/assets/GUI/tilted_gold_coin.png": "f144604c0c26467c644c8fdfc7887453",
"assets/assets/GUI/tilted_green_tick.png": "93a40f07f5f5de77523feb35048bed37",
"assets/assets/GUI/tilted_heart.png": "ac28e0432511cbeb84f4532937f8669e",
"assets/assets/GUI/tilted_plus_health.png": "37b6a0b478853edd88ad007127ea3282",
"assets/assets/GUI/tilted_silver_coin.png": "d9266c9bd4fc6e1fa13691f4259af4e3",
"assets/assets/GUI/tilted_star.png": "34506ed6ff6892e0f29fab84edb65cd3",
"assets/assets/GUI/titled_yellow_power_icon.png": "0ab2d2894c6bc42d988bced3a51ca4b3",
"assets/assets/music/back_music.wav": "d9d65d1ecf0acce2c0cf917dcd9e6c63",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "024f50516c6084dc3c223b9b22b98eb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "1ebcfce21c8e1f207436ca7f22ddb72e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "56b585a50ddfb8a6959fcac7cf244160",
"/": "56b585a50ddfb8a6959fcac7cf244160",
"main.dart.js": "9b25bc735b712409cc006b0b94da5967",
"manifest.json": "6e6d280151d98fcbf06c89c5760ba246",
"version.json": "5f68bc63e58a80d1c71765b67ea9fe71"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
