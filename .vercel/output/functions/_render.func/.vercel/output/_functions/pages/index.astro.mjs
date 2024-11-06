/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_itlPts09.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/akml/Documents/review/app/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Review", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto py-10" data-astro-cid-j7pv25f6> <section class="text-center" data-astro-cid-j7pv25f6> <form id="feedbackForm" class="bg-white p-4 rounded-lg shadow-md mx-4 md:mx-auto max-w-md" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center mb-12" data-astro-cid-j7pv25f6> <img src="../../src/img/logo.png" class="size-16 grayscale opacity-45" alt="" data-astro-cid-j7pv25f6> <h4 class="logo -mt-2 text-gray-300" data-astro-cid-j7pv25f6>Saung Bala Katineung</h4> </div> <h2 class="text-lg font-semibold text-gray-800" data-astro-cid-j7pv25f6>Berikan <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-3 before:bg-yellow-400 relative inline-block" data-astro-cid-j7pv25f6> <span class="relative text-white" data-astro-cid-j7pv25f6>Review</span> </span> Anda</h2> <div class="rating mb-4 text-gray-200" data-astro-cid-j7pv25f6> <input type="radio" id="star5" name="rating" value="5" data-astro-cid-j7pv25f6> <label for="star5" data-astro-cid-j7pv25f6>&#9733;</label> <input type="radio" id="star4" name="rating" value="4" data-astro-cid-j7pv25f6> <label for="star4" data-astro-cid-j7pv25f6>&#9733;</label> <input type="radio" id="star3" name="rating" value="3" data-astro-cid-j7pv25f6> <label for="star3" data-astro-cid-j7pv25f6>&#9733;</label> <input type="radio" id="star2" name="rating" value="2" data-astro-cid-j7pv25f6> <label for="star2" data-astro-cid-j7pv25f6>&#9733;</label> <input type="radio" id="star1" name="rating" value="1" data-astro-cid-j7pv25f6> <label for="star1" data-astro-cid-j7pv25f6>&#9733;</label> </div> <hr class="my-8 bg-gray-200 border-t-2" data-astro-cid-j7pv25f6> <h2 class="text-lg font-semibold text-gray-800 mb-4" data-astro-cid-j7pv25f6>Apa yang kamu sukai dari kita</h2> <div class="flex flex-wrap gap-2 mb-4 react justify-center" data-astro-cid-j7pv25f6> <label class="option" data-astro-cid-j7pv25f6> <input type="checkbox" name="reaction" value="kualitas" data-astro-cid-j7pv25f6> <span class="label-text" data-astro-cid-j7pv25f6>⭐️ Kualitas</span> </label> <label class="option" data-astro-cid-j7pv25f6> <input type="checkbox" name="reaction" value="rasa" data-astro-cid-j7pv25f6> <span class="label-text" data-astro-cid-j7pv25f6>😋 Rasa</span> </label> <label class="option" data-astro-cid-j7pv25f6> <input type="checkbox" name="reaction" value="fresh" data-astro-cid-j7pv25f6> <span class="label-text" data-astro-cid-j7pv25f6>🥬 Fresh</span> </label> <label class="option" data-astro-cid-j7pv25f6> <input type="checkbox" name="reaction" value="harga" data-astro-cid-j7pv25f6> <span class="label-text" data-astro-cid-j7pv25f6>💸 Harga</span> </label> <label class="option" data-astro-cid-j7pv25f6> <input type="checkbox" name="reaction" value="porsi" data-astro-cid-j7pv25f6> <span class="label-text" data-astro-cid-j7pv25f6>🍛 Porsi</span> </label> </div> <hr class="my-8 bg-gray-200 border-t-2" data-astro-cid-j7pv25f6> <div class="mb-2" data-astro-cid-j7pv25f6> <label for="review" class="block text-lg font-semibold text-gray-800" data-astro-cid-j7pv25f6>Berikan pendapat kamu dong..</label> <textarea id="comment" name="review" placeholder="Tuliskan review Anda" class="mb-2 peer mt-1 block w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 text-gray-900 resize-none h-32" rows="4" maxlength="250" required data-astro-cid-j7pv25f6></textarea> <p id="charCounter" class="text-sm text-gray-500 text-left" data-astro-cid-j7pv25f6>0/250</p> </div> <!-- Tombol Submit --> <button type="submit" class="btn w-full mb-4 bg-green-700 hover:bg-green-950 text-white font-semibold py-2 transition duration-300 ease-in-out" data-astro-cid-j7pv25f6>
Submit
</button> <p class="disclaimer font-light  text-gray-500" data-astro-cid-j7pv25f6>Dengan mengirim review kamu dapat membantu kami menjadi lebih baik lagi</p> </form> </section> </main> ` })}  `;
}, "/home/akml/Documents/review/app/src/pages/index.astro", void 0);

const $$file = "/home/akml/Documents/review/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
