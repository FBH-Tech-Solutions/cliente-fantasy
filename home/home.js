import { footer, navbar } from "../utils/componentes.js";
import { newsDefault } from "../utils/default.js"; 
import { foundLoged, getLocalStorage } from "../utils/funcs.js";

navbar(foundLoged().nick);
footer()

let news = getLocalStorage("news")

if(news == null){
    news = newsDefault
}

let sectionNews = document.getElementById("section-news")

    
for (let i = news.length-1; i > 0; i--) {
    console.log(news[i].image)
    sectionNews.innerHTML+=`<div class="card m-3" style="width: 18rem;">
    <img src="${news[i].image}" id="test" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${news[i].title}</h5>
      <p class="card-text">${news[i].bodyNew}</p>
    </div>
    </div>` 
  }    


