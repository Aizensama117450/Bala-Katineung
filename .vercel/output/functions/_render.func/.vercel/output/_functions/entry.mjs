import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BQYg4vpA.mjs';
import { manifest } from './manifest_lVd9MwPQ.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/review.astro.mjs');
const _page2 = () => import('./pages/terimakasih.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/review.ts", _page1],
    ["src/pages/terimakasih.astro", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3d6d2c0a-91c2-4e59-a695-a9057967c0ab",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
