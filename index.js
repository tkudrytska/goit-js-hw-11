import{i as n,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function g(a){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"46126545-8899f9a6fbc888edd135bf332",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function y(a){const r=a.map(o=>{const{largeImageURL:s,webformatURL:e,tags:t,likes:i,views:u,comments:d,downloads:m}=o;return`
            <a href="${s}" class="gallery-item">
                <img src="${e}" alt="${t}" 
                    data-likes="${i}" data-views="${u}" 
                    data-comments="${d}" data-downloads="${m}" />
                <div class="image-info">
                    <p>Likes: ${i}</p>
                    <p>Views: ${u}</p>
                    <p>Comments: ${d}</p>
                    <p>Downloads: ${m}</p>
                </div>
            </a>`}).join("");p.insertAdjacentHTML("beforeend",r)}const c=document.querySelector(".search-form"),p=document.querySelector(".image-gallery"),f=document.querySelector(".loader");let l=null;c.addEventListener("submit",a=>{a.preventDefault();const r=c.elements.query.value.trim();if(!r){n.show({message:"Please enter a search query.",color:"red",position:"topRight"});return}f.style.display="block",g(r).then(o=>{if(o.hits.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"});return}p.innerHTML="",y(o.hits),l?l.refresh():l=new h(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250})}).catch(()=>{n.show({message:"An error occurred while fetching images. Please try again!",color:"red",position:"topRight"})}).finally(()=>{f.style.display="none"}),c.reset()});
//# sourceMappingURL=index.js.map
