if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let s={};const o=e=>i(e,r),t={module:{uri:r},exports:s,require:o};a[r]=Promise.all(c.map((e=>t[e]||o(e)))).then((e=>(n(...e),s)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bz7pDbt9r4ZDQq71sImJ7/_buildManifest.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/bz7pDbt9r4ZDQq71sImJ7/_middlewareManifest.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/bz7pDbt9r4ZDQq71sImJ7/_ssgManifest.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/182.2fc5379d3debb6a4.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/249.476a49f2a2d50376.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/310.fb790130b75eeca8.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/334.651451a94b5e8a10.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/375.bb4da125d28f53e9.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/402.bfbedb599d93b100.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/486.511961a64f133aaa.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/545.bfe5cb9d536d1115.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/570.a65aa72c0d1c0f89.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/571.fce0be1741166ae3.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/591.3bf92e76b0d314c8.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/604.0fd33dcf0bbbe679.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/669.ce2ba152dfd691d4.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/701.41e3c3ebcb286844.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/707.a162d0801a45f905.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/708.66ff9d86c3f20339.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/711-95474742955a5fe8.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/835.602a61b4991e265b.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/88.09d459d77828e533.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/894.33aa9618696a226c.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/924.48ba054255b87b2f.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/929-af22023ffac091b3.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/945.b4f8b6804eb0d552.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/966.df4079877f814951.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/main-454447f0bac88bf6.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/pages/_app-ec9ee2052c7d4482.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/pages/index-fafe525ed549d843.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/pages/resume-c990bd7ccc22237a.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/chunks/webpack-3f33e718fa80c1ed.js",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/images/logo-beihang-uni-998b8cbefa2d1d0031b31c8844cb7ea6.png",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/images/logo-ctu-uni-905b89a7380534db81247f9ae96f8d22.png",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/images/logo-spendee-841dfea400e0ba44c965ca7488e0ea44.png",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/images/preview-1b9b3d5c18432389c8c2e9b63d4b6a28.jpg",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/images/vit-profile-4cf9ff0fbe22adacfe43ce4885500c9d.png",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/_next/static/images/vit-profile-c086d5dce5a8f550ecac9005ea03844a.png.webp",revision:"bz7pDbt9r4ZDQq71sImJ7"},{url:"/favicon/dark/android-chrome-144x144.png",revision:"690ce1e61176211124734dca82ea13da"},{url:"/favicon/dark/android-chrome-192x192.png",revision:"fa58c616f408fa825e4f477181425f8d"},{url:"/favicon/dark/android-chrome-256x256.png",revision:"8db75f5d9bbcaa490ce2574ef262d40c"},{url:"/favicon/dark/android-chrome-36x36.png",revision:"e500667ad85b8e705ec7c95046205757"},{url:"/favicon/dark/android-chrome-384x384.png",revision:"20b18ba453ed64a2108d029be7fca829"},{url:"/favicon/dark/android-chrome-48x48.png",revision:"733b771df1c672f4dd507f28eedee8e9"},{url:"/favicon/dark/android-chrome-512x512.png",revision:"9d0194f9fa35952289048f2613b6980b"},{url:"/favicon/dark/android-chrome-72x72.png",revision:"6c7daeca44f0c0038732a70d00881a65"},{url:"/favicon/dark/android-chrome-96x96.png",revision:"006bd38dbf01184217943b01938e5462"},{url:"/favicon/dark/apple-touch-icon-1024x1024.png",revision:"a97661120aad707c05a3afb1071875a3"},{url:"/favicon/dark/apple-touch-icon-114x114.png",revision:"7a798df14eac1ca1ac57bc2013b271e7"},{url:"/favicon/dark/apple-touch-icon-120x120.png",revision:"90b4ab36ecc0444eaa3593b5ba80667b"},{url:"/favicon/dark/apple-touch-icon-144x144.png",revision:"690ce1e61176211124734dca82ea13da"},{url:"/favicon/dark/apple-touch-icon-152x152.png",revision:"4b87d89bfa7b96cbe8f5ca0ced1743f2"},{url:"/favicon/dark/apple-touch-icon-167x167.png",revision:"6a4822ffc4a7318d16617bffb419f1a4"},{url:"/favicon/dark/apple-touch-icon-180x180.png",revision:"5addf355d812ea9e9c12ccc22bfd755c"},{url:"/favicon/dark/apple-touch-icon-57x57.png",revision:"5f1c12800b7a784992ae2d5c1ef4a2b9"},{url:"/favicon/dark/apple-touch-icon-60x60.png",revision:"7fed8a0ab06f7149d95babe28179828c"},{url:"/favicon/dark/apple-touch-icon-72x72.png",revision:"6c7daeca44f0c0038732a70d00881a65"},{url:"/favicon/dark/apple-touch-icon-76x76.png",revision:"763fc1ca3fc5034c4cfbba01b1e66115"},{url:"/favicon/dark/apple-touch-icon-precomposed.png",revision:"5addf355d812ea9e9c12ccc22bfd755c"},{url:"/favicon/dark/apple-touch-icon.png",revision:"5addf355d812ea9e9c12ccc22bfd755c"},{url:"/favicon/dark/apple-touch-startup-image-1125x2436.png",revision:"560e1032e9db8d719e00289ea2c70d0e"},{url:"/favicon/dark/apple-touch-startup-image-1136x640.png",revision:"fcc61ef4143ac5a6cfc0d3e94431c314"},{url:"/favicon/dark/apple-touch-startup-image-1242x2208.png",revision:"ca5a1b43a667704d9aebe02987af2833"},{url:"/favicon/dark/apple-touch-startup-image-1242x2688.png",revision:"f5be5dbf26dbd0a78dc462c8970ba884"},{url:"/favicon/dark/apple-touch-startup-image-1334x750.png",revision:"d49eeec11f12a9115d4846bdb7c1ca12"},{url:"/favicon/dark/apple-touch-startup-image-1536x2048.png",revision:"5602e917d50d821855eb29072d479cb6"},{url:"/favicon/dark/apple-touch-startup-image-1620x2160.png",revision:"5ffee74d4e6a2c8ebf840803e6c34680"},{url:"/favicon/dark/apple-touch-startup-image-1668x2224.png",revision:"b799d98549e282df5d6ecc02cae28fbb"},{url:"/favicon/dark/apple-touch-startup-image-1668x2388.png",revision:"d73282c48d04445b514ab3903344b290"},{url:"/favicon/dark/apple-touch-startup-image-1792x828.png",revision:"a1ede44f3b268de5756184281731e083"},{url:"/favicon/dark/apple-touch-startup-image-2048x1536.png",revision:"582c1138c53106c59cfac55c496e3176"},{url:"/favicon/dark/apple-touch-startup-image-2048x2732.png",revision:"839230f0f32008f0d0ddf30aad57a276"},{url:"/favicon/dark/apple-touch-startup-image-2160x1620.png",revision:"b635a8c7db7edeb6ae49e28f5017ba7a"},{url:"/favicon/dark/apple-touch-startup-image-2208x1242.png",revision:"89007122e0023e12606387c80a9dfcbd"},{url:"/favicon/dark/apple-touch-startup-image-2224x1668.png",revision:"ec945ae9f8630f52543f823de6399155"},{url:"/favicon/dark/apple-touch-startup-image-2388x1668.png",revision:"82700fe8ecf69b36b5292d62ff2bbcf1"},{url:"/favicon/dark/apple-touch-startup-image-2436x1125.png",revision:"6da1fa7044c4c07322ab6eb0a39601bd"},{url:"/favicon/dark/apple-touch-startup-image-2688x1242.png",revision:"ac04b094b7a1e130180ffadd0983453c"},{url:"/favicon/dark/apple-touch-startup-image-2732x2048.png",revision:"8c90cfbdec6d4f2ae256161ff767ff77"},{url:"/favicon/dark/apple-touch-startup-image-640x1136.png",revision:"f6c13f0a746c82be9f0f45aef31637ab"},{url:"/favicon/dark/apple-touch-startup-image-750x1334.png",revision:"61cbe76bbd040e7b8d7af08ecc36eb08"},{url:"/favicon/dark/apple-touch-startup-image-828x1792.png",revision:"b7905cb0627629ccb1cfafd624273753"},{url:"/favicon/dark/browserconfig.xml",revision:"3159eddf9a7230a7636a632499e8ee5d"},{url:"/favicon/dark/coast-228x228.png",revision:"55f3ee714d5c217374f0677f55157de1"},{url:"/favicon/dark/favicon-16x16.png",revision:"3a237560d8b9db50909d36de5546834d"},{url:"/favicon/dark/favicon-32x32.png",revision:"2de533d0ef6e3b42188c0c706858d58e"},{url:"/favicon/dark/favicon-48x48.png",revision:"733b771df1c672f4dd507f28eedee8e9"},{url:"/favicon/dark/favicon.ico",revision:"51692f4fbe6ab8ab8e077dd9ecb4f97d"},{url:"/favicon/dark/firefox_app_128x128.png",revision:"71cae4dbc40264d58b60844f12c6629a"},{url:"/favicon/dark/firefox_app_512x512.png",revision:"c9ac7dd7f0717f8a1019ca6a0139275e"},{url:"/favicon/dark/firefox_app_60x60.png",revision:"5294c6ea2f0dccf780c3c9df45b363d7"},{url:"/favicon/dark/manifest.json",revision:"72eb8b00a260894038cc04b85e1cf961"},{url:"/favicon/dark/manifest.webapp",revision:"f6e59af4583ee94e8ac0f148636b85e6"},{url:"/favicon/dark/mstile-144x144.png",revision:"690ce1e61176211124734dca82ea13da"},{url:"/favicon/dark/mstile-150x150.png",revision:"4e3b246b74c62b05c88712e7f1773627"},{url:"/favicon/dark/mstile-310x150.png",revision:"155af3078a0175f9a7de63cacb84cdc1"},{url:"/favicon/dark/mstile-310x310.png",revision:"cc8a98a164078ee603cda7e3600d34b4"},{url:"/favicon/dark/mstile-70x70.png",revision:"62f8f3a147718e9db00f5f5600a6a575"},{url:"/favicon/dark/yandex-browser-50x50.png",revision:"1a2d788df060e5cea505424983b77db4"},{url:"/favicon/dark/yandex-browser-manifest.json",revision:"198533bcd1812723c29d45123ed0b2e5"},{url:"/favicon/light/android-chrome-144x144.png",revision:"d989f4f573f072902ac6ffce18182a9c"},{url:"/favicon/light/android-chrome-192x192.png",revision:"227222bc6832b1450e146c13696709c5"},{url:"/favicon/light/android-chrome-256x256.png",revision:"90f70cbb4753052870ddb3236a3fbc5f"},{url:"/favicon/light/android-chrome-36x36.png",revision:"2df4b164412a410c22aa5ebfbd957e02"},{url:"/favicon/light/android-chrome-384x384.png",revision:"67c5b1dbb73c08c8310941d9f18cdca7"},{url:"/favicon/light/android-chrome-48x48.png",revision:"21c369c8806d422f18233ac3e4f14a7e"},{url:"/favicon/light/android-chrome-512x512.png",revision:"0255e6532f38ff40b003671c481f7567"},{url:"/favicon/light/android-chrome-72x72.png",revision:"d1cf5db46e66b78de10f75349a25964a"},{url:"/favicon/light/android-chrome-96x96.png",revision:"7f1c7cabdde6eac44d19aca224f961b9"},{url:"/favicon/light/apple-touch-icon-1024x1024.png",revision:"fa42ba7efdc5c25b4f82efd522b8fd37"},{url:"/favicon/light/apple-touch-icon-114x114.png",revision:"fad74440b0bcf49efca15bccb56e55af"},{url:"/favicon/light/apple-touch-icon-120x120.png",revision:"ea85ee8cad663b4217ab88a645d627e6"},{url:"/favicon/light/apple-touch-icon-144x144.png",revision:"d989f4f573f072902ac6ffce18182a9c"},{url:"/favicon/light/apple-touch-icon-152x152.png",revision:"8552330cb305396fa0e9755c6c142c35"},{url:"/favicon/light/apple-touch-icon-167x167.png",revision:"646d97809b6320cfe96f22d742fd0f7a"},{url:"/favicon/light/apple-touch-icon-180x180.png",revision:"f3522df2b6286b6831a0adfdfcc330a4"},{url:"/favicon/light/apple-touch-icon-57x57.png",revision:"99708a1ea8b933cef67192fbae6438f1"},{url:"/favicon/light/apple-touch-icon-60x60.png",revision:"9706c38d24148264b4b6c946b632a912"},{url:"/favicon/light/apple-touch-icon-72x72.png",revision:"d1cf5db46e66b78de10f75349a25964a"},{url:"/favicon/light/apple-touch-icon-76x76.png",revision:"753529a8ff8f12bcf18ac57708a6ddff"},{url:"/favicon/light/apple-touch-icon-precomposed.png",revision:"f3522df2b6286b6831a0adfdfcc330a4"},{url:"/favicon/light/apple-touch-icon.png",revision:"f3522df2b6286b6831a0adfdfcc330a4"},{url:"/favicon/light/apple-touch-startup-image-1125x2436.png",revision:"35409310f9f1606d63a30930aa11779d"},{url:"/favicon/light/apple-touch-startup-image-1136x640.png",revision:"781448bd2013336a6a4d69ccad66e311"},{url:"/favicon/light/apple-touch-startup-image-1242x2208.png",revision:"7333a09c78a5424b6b34f59f3a9a7b02"},{url:"/favicon/light/apple-touch-startup-image-1242x2688.png",revision:"52b5393e2a251acbfed63498a799e762"},{url:"/favicon/light/apple-touch-startup-image-1334x750.png",revision:"477e27e03517e4dce9902db3b4b32b2e"},{url:"/favicon/light/apple-touch-startup-image-1536x2048.png",revision:"728ecfeedd59c46f2659e305a9baad73"},{url:"/favicon/light/apple-touch-startup-image-1620x2160.png",revision:"7b1b6b99c5aa4c390acc038260311725"},{url:"/favicon/light/apple-touch-startup-image-1668x2224.png",revision:"d538669443433b1243267a5711989ab6"},{url:"/favicon/light/apple-touch-startup-image-1668x2388.png",revision:"7ad6b85f4f444a22483538174b90c3be"},{url:"/favicon/light/apple-touch-startup-image-1792x828.png",revision:"572c426b512cf89381b5c18e5f5d7832"},{url:"/favicon/light/apple-touch-startup-image-2048x1536.png",revision:"370d9d2c533f0dd94954017f39fcea9f"},{url:"/favicon/light/apple-touch-startup-image-2048x2732.png",revision:"306d2ac523e6fe6cda7787f0bbb94ec3"},{url:"/favicon/light/apple-touch-startup-image-2160x1620.png",revision:"9f87052d07ed790643dc0900a4d38b05"},{url:"/favicon/light/apple-touch-startup-image-2208x1242.png",revision:"edb682c3cb623bd43d7f48b6e0534012"},{url:"/favicon/light/apple-touch-startup-image-2224x1668.png",revision:"3ff1d3db19b7c7a436cd002c9a7cc8f4"},{url:"/favicon/light/apple-touch-startup-image-2388x1668.png",revision:"2255e65df4091f77e3adc48f3a2332c8"},{url:"/favicon/light/apple-touch-startup-image-2436x1125.png",revision:"fb710c67678f407bd9035830c509e183"},{url:"/favicon/light/apple-touch-startup-image-2688x1242.png",revision:"04acabab13347ebd7c0b4d28bcf4155a"},{url:"/favicon/light/apple-touch-startup-image-2732x2048.png",revision:"daf368b28641b9fe0684a3376cb0f742"},{url:"/favicon/light/apple-touch-startup-image-640x1136.png",revision:"0c6c980706038f84ef5607f909c17a3d"},{url:"/favicon/light/apple-touch-startup-image-750x1334.png",revision:"1b9ec58883177b7b29c05eac396ecc4c"},{url:"/favicon/light/apple-touch-startup-image-828x1792.png",revision:"7f0268d0365d3e16ddf12843083f1657"},{url:"/favicon/light/browserconfig.xml",revision:"4bf99a4ac3761268a1815af5cd8cf8d9"},{url:"/favicon/light/coast-228x228.png",revision:"881b0cd7413ec89d57a791ef134ef4be"},{url:"/favicon/light/favicon-16x16.png",revision:"e81561183583461e2f679ac3dbb78147"},{url:"/favicon/light/favicon-32x32.png",revision:"beff2886b107d1f96e35c17f8027fd17"},{url:"/favicon/light/favicon-48x48.png",revision:"21c369c8806d422f18233ac3e4f14a7e"},{url:"/favicon/light/favicon.ico",revision:"e4b0e16ccde15cef5a032ca1e321b8df"},{url:"/favicon/light/firefox_app_128x128.png",revision:"ec134607177be522d5ca9eda6491bfac"},{url:"/favicon/light/firefox_app_512x512.png",revision:"f15c418df7a152903b999a4b8f8b9713"},{url:"/favicon/light/firefox_app_60x60.png",revision:"74c04e434924d1487a89c3e7da79974b"},{url:"/favicon/light/manifest.json",revision:"5f358a303a6ad761b15d60798f95810b"},{url:"/favicon/light/manifest.webapp",revision:"97225e059ff9c0b74efcb158aa78ff52"},{url:"/favicon/light/mstile-144x144.png",revision:"d989f4f573f072902ac6ffce18182a9c"},{url:"/favicon/light/mstile-150x150.png",revision:"9547ea79ac47befea5273951c3503be7"},{url:"/favicon/light/mstile-310x150.png",revision:"ef4ab7ad2560c64c084b7b74cc66eda4"},{url:"/favicon/light/mstile-310x310.png",revision:"6f78fc073c0b3add7beeb103386ebe0f"},{url:"/favicon/light/mstile-70x70.png",revision:"61f5cb4ea60aa9992af7af5ef6147ed2"},{url:"/favicon/light/yandex-browser-50x50.png",revision:"f159867fb9dddcdeba8f4b4c42b8c146"},{url:"/favicon/light/yandex-browser-manifest.json",revision:"4f128234ef5f404c23d5e3bfa851d80c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
