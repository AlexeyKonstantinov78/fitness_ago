(()=>{"use strict";const e=(e,t)=>{const r=document.createElement("div");return fetch(`./${e}.html`).then((e=>{if(200!==e.status)throw new Error("sts]atus network not 200");return e.text()})).then((e=>(r.innerHTML=e,(e=>{const r=e.querySelectorAll("input"),l=e.querySelectorAll("label");let o;return r.forEach(((e,r)=>{"d"!==e.value.trim().substring(e.value.trim().length-1,e.value.trim().length)&&e.value.trim().substring(0,e.value.trim().length-1)===t&&(o=+l[r].querySelector(".cost").firstChild.textContent)})),o})(r.querySelector("#card_order>.cards-types"))))).catch((e=>console.error(e)))};(()=>{const e=document.querySelector(".clubs-list>ul");document.querySelector(".header-main").addEventListener("click",(t=>{t.target.closest(".club-select")?e.style.cssText?e.style.display="":e.style.display="inline":e.style.display=""}))})(),(()=>{const e=document.querySelector(".header-main"),t=document.querySelector(".fixed-gift"),r=e=>{const t=document.querySelector(e);t.style.display="inline",t.addEventListener("click",(e=>{(e.target.closest(".close-form")||e.target.closest(".overlay")||e.target.closest(".close-btn"))&&(t.style.display="")}))};e.addEventListener("click",(e=>{const t=e.target;t.closest(".open-popup")&&r(t.dataset.popup),t.closest(".callback-btn")&&r(t.dataset.popup)}));try{t.addEventListener("click",(()=>{r("#gift"),t.style.display="none"}))}catch(e){console.error("нет подарка")}})(),(()=>{const e=document.getElementById("totop"),t=document.querySelector(".top-menu");e.style.display="none",window.addEventListener("scroll",(()=>{pageYOffset>181&&innerWidth<768?t.style.position="fixed":t.style.position="",pageYOffset<740?e.style.display="none":e.style.display=""}))})(),(()=>{const e=document.querySelectorAll(".main-slider>.slide"),t=r=>{e[r].style.display="none",r!==e.length-1?(r++,e[r].style.display=""):e[r=0].style.display="",setTimeout((()=>{t(r)}),3e3)};e.forEach(((e,r)=>{""!==e.style.display||setTimeout((()=>{t(r)}),3e3)}))})(),(()=>{const e=document.querySelectorAll(".gallery-slider>.slide"),t=document.querySelector(".gallery-slider");let r,l=document.querySelectorAll(".dot"),o=0;const n=(e,t,r)=>{e[t].classList.remove(r)},s=(e,t,r)=>{e[t].classList.add(r)},c=()=>{n(e,o,"slide-active"),n(l,o,"dot-active"),o++,o>=e.length&&(o=0),s(e,o,"slide-active"),s(l,o,"dot-active")},a=(e=2e3)=>{r=setInterval(c,e)};t.addEventListener("click",(t=>{t.preventDefault();let r=t.target;r.matches(".slider-arrow, .dot")&&(n(e,o,"slide-active"),n(l,o,"dot-active"),r.matches("#arrow-right")?o++:r.matches("#arrow-left")?o--:r.matches(".dot")&&l.forEach(((e,t)=>{e===r&&(o=t)})),o>=e.length&&(o=0),o<0&&(o=e.length-1),s(e,o,"slide-active"),s(l,o,"dot-active"))})),t.addEventListener("mouseover",(e=>{e.target.matches(".slider-arrow, .dot")&&clearInterval(r)})),t.addEventListener("mouseout",(e=>{e.target.matches(".slider-arrow, .dot")&&a()})),a(2e3)})(),(()=>{const e=document.querySelector(".services-slider"),t=document.querySelector(".carusel-slider");let r=0;t.addEventListener("click",(t=>{t.target.closest(".slider-arrow.prev")&&(0===r&&(r=100),r+=-20,e.style.transform=`translateX(-${r}%)`),t.target.closest(".slider-arrow.next")&&(100===r&&(r=0),r+=20,e.style.transform=`translateX(-${r}%)`)}))})(),(()=>{try{const t=document.querySelector("#card_order"),r=document.querySelectorAll("#card_order>.club>input"),l=document.querySelectorAll("#card_order>.time>input"),o=document.querySelector("#card_order>.price>.input-text>input"),n=document.querySelector("#card_order>.price>#price-total");let s={};const c=()=>{r.forEach((t=>{t.checked&&l.forEach((r=>{r.checked&&(s=e(t.value,r.value))}))})),s.then((e=>{n.textContent=e,"ТЕЛО2020"===o.value.trim()&&(n.textContent=Math.floor(.7*e))}))};t.addEventListener("input",(e=>{const t=e.target;t.closest(".club")&&c(),t.closest(".time")&&c(),t.closest(".price-message.input-text")&&c()})),c()}catch(e){console.error("не работает на этой странице")}})(),(()=>{const e=document.querySelector("header"),t=document.querySelector(".popup-menu.hidden-large");e.addEventListener("click",(e=>{const r=e.target;r.closest(".menu-button.hidden-large>img")&&(t.style.display="flex"),r.closest(".close-menu-btn>img")&&(t.style.display=""),r.closest(".popup-menu.hidden-large>ul>li")&&(t.style.display="")}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size: 2rem; color: #aa8800;background-color: #ffd11a;text-align: center;",e.forEach((e=>{e.addEventListener("input",(t=>n(t.target,e))),e.closest("#footer_form")||e.querySelector(".btn").addEventListener("click",(()=>{e.querySelector(".personal-data>input").checked||(e.appendChild(t),t.textContent="Вы должны дать согласие перед отправкой",s(e))})),e.addEventListener("submit",(l=>{l.preventDefault(),e.appendChild(t),t.textContent="Идет отправка...";const n=new FormData(e);let a={};n.forEach(((e,t)=>{a[t]=e})),r(a,e)?fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((r=>{if(200!==r.status)throw new Error("status network not 200");t.textContent="",o(!0),s(e)})).catch((t=>{o(!1),s(e),console.error(t)})).finally((()=>{c(e)})):(t.textContent="Что то не так...",s(e))}))}));const r=(e,t)=>{try{if(e.name.length<=3&&void 0!==e.name)return!1}catch(e){console.log("параметра name В ЭТОЙ ФОРМЕ нет")}return!(t.closest("#footer_form")&&!l(t)||e.phone.length<=7||!/^\+?[7|8]([-()]*\d){7,10}$/.test(e.phone))},l=e=>{let t=!1;return e.querySelectorAll(".club>input").forEach((e=>{if(!0===e.checked)return console.log("true"),void(t=!0)})),t},o=e=>{const t=document.querySelector("#thanks"),r=document.querySelector("#thanks>.form-wrapper"),l=document.createElement("div"),o=document.querySelector("#callback_form"),n=document.querySelector("#free_visit_form");l.classList.add("form-content"),l.innerHTML=e?'<h4>Спасибо!</h4>\n            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n            <button class="btn close-btn">OK</button>':'<h4>Извините!</h4>\n            <p>Что то пошло не так...</p>\n            <button class="btn close-btn">OK</button>',r.appendChild(l),t.style.display="inline",t.addEventListener("click",(e=>{const r=e.target,l=document.querySelector("#thanks>.form-wrapper>.form-content");(r.closest(".close-form")||r.closest(".btn.close-btn")||r.closest(".overlay"))&&(t.style.display="",null!==l&&l.remove()),"inline"===o.style.display&&(o.style.display=""),"inline"===n.style.display&&(n.style.display="")}))},n=(e,t)=>{e.closest(".form-phone")&&(e.value=e.value.substring(0,12).replace(/[^\+0-9]/g,"")+e.value.substring(11).replace(/./g,""),/^\+?[7|8]([-()]*\d){7,10}$/.test(e.value)&&e.value.length>=8&&e.value.length<=12?e.style.border="":e.style.border="solid red"),(e.closest(".form-name")||e.closest("#form2-name"))&&(e.value=e.value.replace(/[^А-Яа-яЁё ]/gi,""))},s=e=>{setTimeout((()=>{null!==t&&t.remove()}),5e3)},c=e=>{e.querySelectorAll("input").forEach((e=>{e.value=""}))}})()})();