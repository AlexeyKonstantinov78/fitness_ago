(()=>{"use strict";(()=>{const e=document.querySelector(".clubs-list>ul");document.querySelector(".header-main").addEventListener("click",(t=>{t.target.closest(".club-select")?e.style.cssText?e.style.display="":e.style.display="inline":e.style.display=""}))})(),(()=>{const e=document.querySelector(".header-main"),t=document.querySelector(".fixed-gift"),s=e=>{const t=document.querySelector(e);t.style.display="inline",t.addEventListener("click",(e=>{e.target.closest(".close-form")&&(t.style.display=""),e.target.closest(".overlay")&&(t.style.display=""),e.target.closest(".close-btn")&&(t.style.display="")}))};e.addEventListener("click",(e=>{const t=e.target;t.closest(".open-popup")&&s(t.dataset.popup),t.closest(".callback-btn")&&s(t.dataset.popup)}));try{t.addEventListener("click",(()=>{s("#gift"),t.style.display="none"}))}catch(e){console.error("нет подарка")}})(),(()=>{const e=document.getElementById("totop");e.style.display="none",window.addEventListener("scroll",(()=>{pageYOffset<740?e.style.display="none":e.style.display=""}))})(),(()=>{const e=document.querySelectorAll(".main-slider>.slide"),t=s=>{e[s].style.display="none",s!==e.length-1?(s++,e[s].style.display=""):e[s=0].style.display="",setTimeout((()=>{t(s)}),3e3)};e.forEach(((e,s)=>{""!==e.style.display||setTimeout((()=>{t(s)}),3e3)}))})(),(()=>{const e=document.querySelectorAll(".gallery-slider>.slide"),t=document.querySelector(".gallery-slider");let s,l=document.querySelectorAll(".dot"),o=0;const r=(e,t,s)=>{e[t].classList.remove(s)},c=(e,t,s)=>{e[t].classList.add(s)},a=()=>{r(e,o,"slide-active"),r(l,o,"dot-active"),o++,o>=e.length&&(o=0),c(e,o,"slide-active"),c(l,o,"dot-active")},d=(e=2e3)=>{s=setInterval(a,e)};t.addEventListener("click",(t=>{t.preventDefault();let s=t.target;s.matches(".slider-arrow, .dot")&&(r(e,o,"slide-active"),r(l,o,"dot-active"),s.matches("#arrow-right")?o++:s.matches("#arrow-left")?o--:s.matches(".dot")&&l.forEach(((e,t)=>{e===s&&(o=t)})),o>=e.length&&(o=0),o<0&&(o=e.length-1),c(e,o,"slide-active"),c(l,o,"dot-active"))})),t.addEventListener("mouseover",(e=>{e.target.matches(".slider-arrow, .dot")&&clearInterval(s)})),t.addEventListener("mouseout",(e=>{e.target.matches(".slider-arrow, .dot")&&d()})),d(2e3)})(),(()=>{const e=document.querySelector(".services-slider"),t=document.querySelector(".carusel-slider");let s=0;const l=(t=0)=>{s>100&&(s=0),s<0&&(s=100),s+=t,console.log(s),e.style.transform=`translateX(-${s}%)`};t.addEventListener("click",(e=>{e.target.closest(".slider-arrow.prev")&&(console.log("лево"),l(-20)),e.target.closest(".slider-arrow.next")&&(console.log("право"),l(20))}))})()})();