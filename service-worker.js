if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=d(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"5fd2acb2d15e0d4fc76982482b6f9d35"},{url:"article/index.html",revision:"626b8565ff7e53ac7b663a6f9d860fff"},{url:"assets/css/0.styles.2fc9d522.css",revision:"59f78bac36bad82ca1192044d33f8936"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/19.58341a1c.js",revision:"e3894742d8a737df8a59572376f3b3e4"},{url:"assets/js/20.5228a5c1.js",revision:"fcebe2e06884952ed34d3e411e3168b8"},{url:"assets/js/21.09fa54c4.js",revision:"75ce2ba4ccc330376ef2b061c4413667"},{url:"assets/js/22.e713ef7f.js",revision:"98b6411e0cf5ac608e01ee53b65e5d74"},{url:"assets/js/23.deb67d31.js",revision:"9aa417660e1ec16ae73947b5ebdce484"},{url:"assets/js/app.11b68de7.js",revision:"9f9f2e7110c02d40172abc95054a1dd5"},{url:"assets/js/layout-Blog.1c9bccc4.js",revision:"eb06ed79a7ea4790daab28321159e8f4"},{url:"assets/js/layout-Layout.2d6a1710.js",revision:"8f6a0b0820b9acdbe0ad5a171e3eb54a"},{url:"assets/js/layout-NotFound.a722b0c4.js",revision:"927b5abd35f08764df34e5db27687c81"},{url:"assets/js/page--3f9aa2a3.6c87fa51.js",revision:"e1f3e1f0bfba2c6571099053d9d11a30"},{url:"assets/js/page-Config--69358f43.6564adbe.js",revision:"934b759f881d7fcde918a850bdee4d71"},{url:"assets/js/page-GOKZInstallation--57923f70.c99bf51e.js",revision:"b5f43cce3c7149d18653e073095af0fe"},{url:"assets/js/page-Home--456081eb.e9f1e33e.js",revision:"e428f4ff41a50b67b33ba0a96ada9426"},{url:"assets/js/page-Introduction--d58e975a.7ac8ac31.js",revision:"903cb8b1130f17b0745cf26e0384ce1a"},{url:"assets/js/page-KZTimerInstallation--1788b03c.ca398fda.js",revision:"5d9ada54c1846dbd1bc2d7454ba585bc"},{url:"assets/js/page-Map--091ba2c1.20116015.js",revision:"58d5fb69ef2c676ad64dfb95983987ad"},{url:"assets/js/page-MapApproval--20a108a8.e0b18005.js",revision:"0ecc3d3e3df56dd145444fb10172818c"},{url:"assets/js/page-MappingRules--943739f0.13d1b971.js",revision:"a38fe48d288d3ed6b066a62cfd596254"},{url:"assets/js/page-Maps--4dc27b56.e4afbba7.js",revision:"a8aeb51efdb92ee5b8c10be75aff5a7c"},{url:"assets/js/page-地图规则--60ff2628.39dc29ad.js",revision:"a80ef02e831b3c7781dc4ce5b0a3aa43"},{url:"assets/js/vendors~layout-Blog~layout-Layout.3175a144.js",revision:"56e6bca109f6442d689b49cc9e450e4a"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.f12412d5.js",revision:"33985296d5537dc5765ee211ddf29a69"},{url:"assets/js/vendors~layout-Layout.7f70d2ad.js",revision:"0bc7e6c3d6e580fa3812bcfdf4590e3a"},{url:"category/index.html",revision:"387c2b8b0bd26dc931755a2ba1f6700c"},{url:"config/index.html",revision:"81b50980c410bce83235e366a2d10e38"},{url:"guides/index.html",revision:"2d7e94eb7f84246c3ef7d0136d31e2b3"},{url:"guides/install-gokz/index.html",revision:"db50a6b24d5070e7b9faf508e44940fa"},{url:"guides/install-kztimer/index.html",revision:"01d5db1e3bf295b658c6f4c08cc4461e"},{url:"guides/map-approval/index.html",revision:"93295ed2a098c15d5eff69f872abee36"},{url:"index.html",revision:"a007d197b085eba350ab72a04dfe651e"},{url:"mapping/index.html",revision:"a4ce9148c6b15789b3699e620730097e"},{url:"mapping/map-rules/index.html",revision:"850902b4f6a7a34d0e1e4a3205a2ee69"},{url:"tag/index.html",revision:"babfe9f7b6ac373e135b85f29e5af64e"},{url:"timeline/index.html",revision:"f5a566116995571c7cfa0c253f1cc310"},{url:"zh/index.html",revision:"836f8bbf6087f33dfee4284b946c77e2"},{url:"zh/maps/index.html",revision:"b5dd2882ba3acfd4258940618dd89b5b"},{url:"zh/maps/rules/index.html",revision:"982b0e756b13e1a276b4c940bfaedbd7"}],{})}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
