/* Outils partagés : $ (un élément) et $$ (tous les éléments) */
const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];
