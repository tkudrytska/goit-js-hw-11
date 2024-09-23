import{S as h,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(i){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"46126545-8899f9a6fbc888edd135bf332",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function y(i){const t=i.map(o=>{const{largeImageURL:s,webformatURL:e,tags:r,likes:n,views:m,comments:d,downloads:p}=o;return`
            <li>
                <a href="${s}" class="gallery-item">
                    <img src="${e}" alt="${r}" />
                    <div class="image-info">
                        <p>Likes: ${n}</p>
                        <p>Views: ${m}</p>
                        <p>Comments: ${d}</p>
                        <p>Downloads: ${p}</p>
                    </div>
                </a>
            </li>`}).join("");a.insertAdjacentHTML("beforeend",t)}const l=document.querySelector(".search-form"),a=document.querySelector(".image-gallery"),u=document.querySelector(".loader");let f=new h(".image-gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",i=>{i.preventDefault();const t=l.elements.query.value.trim();if(!t){c.show({message:"Please enter a search query.",color:"red",position:"topRight"});return}u.style.display="block",g(t).then(o=>{if(o.hits.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),a.innerHTML="";return}y(o.hits),f&&f.refresh()}).catch(()=>{c.show({message:"An error occurred while fetching images. Please try again!",color:"red",position:"topRight"}),a.innerHTML=""}).finally(()=>{u.style.display="none"}),a.innerHTML="",l.reset()});
//# sourceMappingURL=index.js.map
