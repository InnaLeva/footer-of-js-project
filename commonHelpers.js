import{A as L,S as f,N as T,a as A}from"./assets/vendor-tBkKSLTP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".open-menu-btn"),e=document.querySelector(".modal-close-btn"),o=document.querySelector(".modal-mob-menu"),n=document.querySelector(".modal-menu"),s=document.querySelector(".nav-header"),i=document.querySelector(".header-menu-button"),r=document.querySelector(".menu-list"),y=document.querySelector(".header-order-btn"),j=document.querySelector(".modal-order-button"),C=document.querySelectorAll(".modal-list-item");function w(){window.innerWidth<768?(t.classList.remove("visually-hidden"),s.classList.add("visually-hidden"),y.classList.add("visually-hidden")):(t.classList.add("visually-hidden"),o.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),n.classList.add("visually-hidden"),r.classList.add("visually-hidden"),y.classList.remove("visually-hidden"))}t.addEventListener("click",function(){o.classList.remove("visually-hidden"),n.classList.remove("visually-hidden")}),e.addEventListener("click",function(){o.classList.add("visually-hidden"),n.classList.add("visually-hidden")});function b(){o.classList.add("visually-hidden"),n.classList.add("visually-hidden")}C.forEach(M=>{M.addEventListener("click",b)}),j.addEventListener("click",b),i.addEventListener("click",function(){r.classList.toggle("visually-hidden")}),window.addEventListener("resize",w),w()});const $=[{followLink:"https://www.instagram.com/goitclub/",text:"IG"},{followLink:"https://www.facebook.com/goITclub/",text:"FB"},{followLink:"https://www.youtube.com/c/GoIT",text:"YT"},{followLink:"https://github.com/RamiiaHolomoza/light-summer-project",text:"GH"},{followLink:"mailto:lloydjefferson@gmail.com",text:"lloydjefferson@gmail.com"}],P=document.querySelector(".hero-list");function H(t){return t.map(({followLink:e,text:o})=>`<li class="hero-list-item"><a
          href="${e}"
          class="hero-list-link"
          target="_blank"
          >${o}</a
        ></li>`).join("")}P.insertAdjacentHTML("beforeend",H($));const c="/footer-of-js-project/assets/icons-52vXHJ8M.svg";new L(".info-content-list",{duration:300,showMultiple:!0,openOnInit:[0]});const B=[{title:"ABOUT ME",content:'<p class="first-text">I am Lloyd Jefferson, a talented programmer with extensive expert in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.</p><p  class="first-text">Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.</p>'},{title:"ROLE",content:`<p>'Frontend development"</p><p>"HeadlessCMS,Wordpress"</p><p>"Blender(enjoy)</p>`},{title:"EDUCATION",content:"<p>2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York</p><p>2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York</p><p>2020 - 2022 / Advanced Blender Animation Techniques, Udemy</p>"}],S=document.querySelector(".info-content-list");function R(t){return t.map(({title:e,content:o},n)=>`
        <li class="info-content-item ${n===0?"is-active":""}">
        <h3 class="accordion-header info-title-acc"><p>${e}</p><button type="button" class="acc-btn"><svg class="about-acc-icon" width="18" height="18">
            <use href="${c}#icon-Icon-${n===0?"top":"bottom"}"></use></button></h3>
        <div class="accordion-content info-text-acc">${o}</div>
        </li>
            `).join("")}S.insertAdjacentHTML("beforeend",R(B));S.addEventListener("click",O);const x=document.querySelector(".info-content-item.is-active .accordion-content");x.style.maxHeight=x.scrollHeight+"px";function O(t){const e=t.target.closest(".acc-btn"),o=e.querySelector(".about-acc-icon");if(e){const n=e.closest(".info-content-item"),s=n.querySelector(".accordion-content");n.classList.toggle("is-active"),n.classList.contains("is-active")?s.style.maxHeight=s.scrollHeight+"px":s.style.maxHeight=0}o.classList.toggle("rotate180")}const V=["HTML/CSS","JavaScript","React","Node.js","React Native"," Soft skills"],N=document.querySelector(".skills-content-list");V.forEach(t=>{const e=document.createElement("li");e.classList.add("swiper-slide","slide-item-ab"),e.innerHTML=`<p class="swiper-ab-text">${t}</p>`,N.appendChild(e)});const D=new f(".skilla-about-swiper",{slidesPerView:6,slidesPerGroup:1,spaceBetween:0,modules:[T],loop:!0,navigation:{nextEl:".swiper-button-next-ab"},breakpoints:{320:{slidesPerView:"auto"},768:{slidesPerView:"auto"},1440:{slidesPerView:"auto"}}});D.update();document.querySelector(".swiper-button-next-ab").addEventListener("click",()=>{if(1399<window.innerWidth){const e=document.querySelector(".swiper-slide-active");let o=e.nextElementSibling;o||(o=document.querySelector(".swiper-slide:first-child")),e.classList.remove("swiper-slide-active"),o.classList.add("swiper-slide-active")}});const F=[{svgroot:`${c}#icon-user-01`,topic:"Expertise",text:"As a highly experienced developer, I have deep knowledge of programming and website development."},{svgroot:`${c}#icon-message-chat-circle`,topic:"Communication",text:"Understanding your needs and wants is my priority and I am always open to discussions and corrections."},{svgroot:`${c}#icon-brush-01`,topic:"Art",text:"Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. "},{svgroot:`${c}#icon-hourglass-02`,topic:"Urgent execution",text:"I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work."}],k=document.querySelector(".benefits-list");function W(t){return t.map(({svgroot:e,topic:o,text:n})=>`<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${e}"></use>
          </svg>
          <div>
            <h5 class="benefits-topic">${o}</h5>
            <p class="benefits-text">${n}</p>
          </div>
        </li>`).join("")}k.insertAdjacentHTML("beforeend",W(F));function z(t){const e=t.target.closest(".benefits-list-item");if(e){const o=e.querySelector(".benefits-topic").textContent;alert(`You clicked on: ${o}`)}}k.addEventListener("click",z);new f(".swiper",{direction:"horizontal",pagination:{el:".swiper-pagination"},navigation:{nextEl:".custom-button-next",prevEl:".custom-button-prev"}});new L(".faq-container",{duration:400,ariaEnabled:!0,showMultiple:!1,collapse:!0});const G=[{svgroot:"#icon-Icon-bottom",topic:"What programming languages ​​are most often used in your project?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"#icon-Icon-bottom",topic:"What are the deadlines for the project?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"#icon-Icon-bottom",topic:"What payment methods do you accept?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."},{svgroot:"#icon-Icon-bottom",topic:"How can I contact you?",text:"In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."},{svgroot:"#icon-Icon-bottom",topic:"Do you provide advice or support?",text:"The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."},{svgroot:"#icon-Icon-bottom",topic:"What does the process of developing a software<br >product look like from idea to implementation?",text:"Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."}],E=document.querySelector(".faq-container");function U(t){return t.map(({svgroot:e,topic:o,text:n},s)=>`
          <li class="faq ${s!==t.length-1,""}">
            <div class="faq-list-up">
               <h3 class="question">${o}</h3>
                 <p class="faq-icon">
                 <svg width="20" height="20">
                   <use href="${c}${e}" ></use>
                </svg>
                </p>
           </div>
          <p class="faq-text">${n}</p>
          </li>`).join("")}E.insertAdjacentHTML("beforeend",U(G));function J(t){if(t.target.closest(".faq-icon")){const e=t.target.closest(".faq"),o=e.querySelector(".faq-text"),n=e.querySelector(".faq-icon");e.classList.toggle("active"),n.classList.toggle("rotate"),e.classList.contains("active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight=0}}E.addEventListener("click",J);const Y=document.createElement("style");document.head.appendChild(Y);const _=[{imagen1x:"./img/covers/project1.png",imagen2x:"./img/covers/project1-retina.png"},{imagen1x:"./img/covers/project2.png",imagen2x:"./img/covers/project2-retina.png"},{imagen1x:"./img/covers/project3.png",imagen2x:"./img/covers/project3-retina.png"},{imagen1x:"./img/covers/project4.png",imagen2x:"./img/covers/project4-retina.png"},{imagen1x:"./img/covers/project5.png",imagen2x:"./img/covers/project5-retina.png"},{imagen1x:"./img/covers/project6.png",imagen2x:"./img/covers/project6-retina.png"},{imagen1x:"./img/covers/project7.png",imagen2x:"./img/covers/project7-retina.png"},{imagen1x:"./img/covers/project8.png",imagen2x:"./img/covers/project8-retina.png"},{imagen1x:"./img/covers/project9.png",imagen2x:"./img/covers/project9-retina.png"},{imagen1x:"./img/covers/project10.png",imagen2x:"./img/covers/project10-retina.png"}];function K(t,e){const o=[];for(;o.length<e;)o.push(...t);return o.slice(0,e)}const Z=K(_,25);function Q(t){return t.map(({imagen1x:e,imagen2x:o})=>`
<li class="covers-project">
  <picture>
    <source
      srcset="${e} 1x, ${o} 2x"
      media="(min-width: 320px)"
    />

    <img class="covers-img" src="${e}" alt="Covers" />
  </picture>
</li>
`).join("")}const X=document.querySelectorAll(".covers-list");X.forEach((t,e)=>{const o=e*3,n=o+5;t.innerHTML=Q(Z.slice(o,n))});const ee=document.querySelector(".covers-content"),u=document.querySelectorAll(".covers-project"),te=document.querySelector(".container-reviews");function oe(){for(let t=0;t<u.length;t++){const e=window.innerHeight,n=ee.getBoundingClientRect().top,i=te.getBoundingClientRect().top;n<e*.9?u[t].classList.add("covers-animation"):u[t].classList.remove("covers-animation"),i<e*.2&&u[t].classList.remove("covers-animation")}}window.addEventListener("scroll",oe);let m=0,a=0;async function h(t=0,e=4){try{const n=(await A.get("https://portfolio-js.b.goit.study/api/reviews")).data;if(m=n.length,m===0)se("Not found");else{const s=n.slice(t,t+e);ne(s),q(e)}}catch{const n=document.querySelector(".section-reviews");new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&ie("Failed to load reviews. Please try again.")})}).observe(n)}}function ne(t){const e=document.querySelector(".swiper-wrapper.swiper-rew");e.innerHTML="",t.forEach(o=>{const n=document.createElement("li");n.classList.add("swiper-slide","review-item"),n.innerHTML=`
      <div class="review-item-content">
        <img class="image-reviews" src="${o.avatar_url}" alt="${o.author}">
        <b class="name-reviews">${o.author}</b>
        <p class="text-reviews">${o.review}</p>
      </div>`,e.appendChild(n)}),l.update()}function se(t){const e=document.querySelector(".swiper-wrapper.swiper-rew"),o=document.createElement("li");o.classList.add("swiper-slide","review-item"),o.textContent=t,e.appendChild(o)}function ie(t){const e=document.querySelector(".error-popup");e.textContent=t,e.classList.add("active"),setTimeout(()=>{e.classList.remove("active")},3e3)}function q(t){const e=document.querySelector(".swiper-button-prev"),o=document.querySelector(".swiper-button-next");a===0?e.classList.add("swiper-button-disabled"):e.classList.remove("swiper-button-disabled"),a+t>=m?o.classList.add("swiper-button-disabled"):o.classList.remove("swiper-button-disabled")}const l=new f(".reviews-slider",{slidesPerView:4,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,grabCursor:!0,longSwipesMs:300,longSwipesRatio:.5,threshold:10,resistance:!0,resistanceRatio:.85,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},on:{slideChange:()=>q(l.params.slidesPerView)}});document.querySelector(".swiper-button-next").addEventListener("click",()=>{const t=l.params.slidesPerView;a+t<m&&(a+=1,h(a,t))});document.querySelector(".swiper-button-prev").addEventListener("click",()=>{const t=l.params.slidesPerView;a>0&&(a-=1,h(a,t))});const ae=l.params.slidesPerView;h(a,ae);const d=document.querySelector(".footer-form"),p=document.getElementById("modal"),re=document.querySelector(".footer-close-button"),I="feedback-form-state";let g={email:"",comments:""};ge();d.addEventListener("input",ce);d.addEventListener("submit",le);re.addEventListener("click",v);p.addEventListener("click",me);window.addEventListener("keydown",pe);function ce(t){const{value:e,name:o}=t.target;g[o]=e.trim(),localStorage.setItem(I,JSON.stringify(g)),o==="email"&&de(t.target)}function le(t){t.preventDefault(),d.checkValidity()?ue():alert("Fill in all fields")}function de(t){const e=document.getElementById("email-message");/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t.value.trim())?(e.textContent="Success!",e.classList.add("success"),e.classList.remove("error")):(e.textContent="Invalid email, try again",e.classList.add("error"),e.classList.remove("success"))}function ue(){d.requestFullscreen(),p.classList.add("is-open")}function v(){p.classList.remove("is-open")}function me(t){t.target===p&&v()}function pe(t){t.key==="Escape"&&v()}function ge(){const t=JSON.parse(localStorage.getItem(I));if(t)for(const e in t)t.hasOwnProperty(e)&&(d.elements[e].value=t[e],g[e]=t[e])}
//# sourceMappingURL=commonHelpers.js.map
