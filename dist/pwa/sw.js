if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const r=e=>i(e,n),o={module:{uri:n},exports:a,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(f(...e),a)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"appchin"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.31a145d4.js",revision:"94e129de5ce6b200280e4bdf2e189145"},{url:"assets/ErrorNotFound.b078c15f.js",revision:"c20e296a380540be84f037fa5a4d863e"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/formPage.2cceaec0.js",revision:"14654698c553f7c603a6467722f318c5"},{url:"assets/index.ca64bc0c.css",revision:"3fd4f2f6d52e56d42736bca829786fe8"},{url:"assets/index.db24c702.js",revision:"6767eef29ae79a650498544a348f5d6d"},{url:"assets/IndexLayout.4cfc39d3.js",revision:"889300988f96e4c1893688b824de6a0f"},{url:"assets/IndexPage.615ed28c.js",revision:"eae8da4b2f403badbf820be551b212cf"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/QBtn.8b8dbee6.js",revision:"75fd7f638a9fb1d68589df46269e177a"},{url:"assets/Ripple.4b32094e.js",revision:"5a5178f090d4302b8ab948f9405f3839"},{url:"assets/rtl.c9c4564c.js",revision:"24e41827277224fc822bac1f4bb78125"},{url:"assets/use-quasar.18bb97eb.js",revision:"823b4ec3423e9b2625c49b4f3ab5172d"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"8a134508851ee8669fb7aef916a1ae7c"},{url:"manifest.json",revision:"3ae6afeb2f19867e082c8e2fe65f66d5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
