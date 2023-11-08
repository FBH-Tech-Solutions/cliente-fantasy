import { footer, navbar } from "../utils/componentes.js";
import { newsDefault } from "../utils/default.js"; 
import { getLocalStorage } from "../utils/funcs.js";

navbar()
footer()

let news = getLocalStorage("news")

if(news == null){
    news = newsDefault
}

let sectionNews = document.getElementById("section-news")

news.forEach(element => {
    console.log(element)
    sectionNews.innerHTML+=`<div class="card m-3" style="width: 18rem;">
    <img src="${element.image}" id="test" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.bodyNew}</p>
    </div>
    </div>`    
});

