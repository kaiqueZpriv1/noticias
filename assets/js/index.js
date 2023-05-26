
fetch(
  "https://newsapi.org/v2/everything?q=keyword&apiKey=c7fe735999924fd2ab533f53ada19df7"
)
.then((response) => response.json())
.then((data) => {
  const noticiaelement = document.querySelector("#noticias")

  const articles = data.articles;
  console.log(articles)
  
  articles.forEach((article) => {
    const boxElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const divTextBox = document.createElement("div");
    const titleElement = document.createElement("h3");


    const btnNoticia = document.createElement("button");
    const linkBtn = document.createElement("a");

    imageElement.src = article.urlToImage;
    imageElement.alt = "erro ao carregar a imagem";
    // imagem style
    imageElement.style.width = "300px"
    imageElement.style.textAlign = "center"
    imageElement.style.height = "199px"
    // push
    titleElement.innerText = article.title;
    linkBtn.href = article.url;
    linkBtn.target = "_blank"
    linkBtn.textContent = "Acessar noticia"

    boxElement.classList.add("box-noticia");
    imageElement.classList.add("image")
    divTextBox.classList.add("text-box")
    titleElement.classList.add("title");
    btnNoticia.classList.add("acesso-noticia");
    linkBtn.classList.add("link-noticia");

    boxElement.appendChild(imageElement);

    boxElement.appendChild(divTextBox)
    divTextBox.appendChild(titleElement);


    divTextBox.appendChild(btnNoticia);
    btnNoticia.appendChild(linkBtn);

    noticiaelement.appendChild(boxElement);
  })
})
.catch((error) => {
  console.error("Ocorreu um erro:", error);
});

