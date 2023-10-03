const form = document.querySelector("#form");
const searchInput = document.querySelector("#search");
const songsContainer = document.querySelector("#songs-container");
const prevAndNextContainer = document.querySelector("#prev-and-next-container");


const apiURL = `https://api.lyrics.ovh`;

const getMoreSongs = async url => {
   const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
   const data = await response.json();

  console.log(data);
   insertSongsIntoPage(data);
}

const insertSongsIntoPage = songsInfo => {

  
   songsContainer.innerHTML = songsInfo.data.map(song => `
   <li class="song"> 
    <span class="song-atist"> <strong>${song.artist.name}</strong> - ${song.title} </span> 
    <button class="btn" data-artist="${song.artist.name}" data-song-title="${song.title}">Ver letra</button>
    </li>`
     ).join(" ");

     if(songsInfo.prev || songsInfo.next){
      prevAndNextContainer.innerHTML = `
      ${songsInfo.prev? `<button class="btn" onclick="getMoreSongs('${songsInfo.next}')" > Proximas</button>` : " "}
      ${songsInfo.next ? `<button class="btn" onclick="getMoreSongs('${songsInfo.next}')" > Proximas</button>` : " "}
      
      
      `

      return
     }

     prevAndNextContainer.innerHTML = " ";
}

//console.log({form,searchInput, songsContainer, prevAndNextContainer });
const fetchSongs = async term => {
   const response = await fetch(`${apiURL}/suggest/${term}`)
   const data = await response.json();

   insertSongsIntoPage(data);


/*
 é uma versão moderna para fazer requisição ajax no browser 
// ajax esse termo representa a possibilidade do codigo javascript que a gente escreve 
// fazer requisições assincronas pra que dados sejam obtidos sem  que a gente precise
recaregar a nossa pagina.

O fetch é um metodo que ao ser invocado faz uma requisição HTTP e tras dados da url
que você especifica como o argumento que no nosso caso vai ser a apiURL
*/


}

form.addEventListener("submit", event => {
event.preventDefault();

// espaços em branco também são caracteres, por isso usamos a função trim
// permite remover os espaços tanto na direita como na esquerda
const searchTerm = searchInput.value.trim();

// caso não inserir nada na input e ainda assim apertar no botão bucar
// ele cria uma string vazia, então para evitar isso temos o seguinte codigo:
if(!searchTerm){
songsContainer.innerHTML = ` <li class= "waring-message">Por favor, digite um termo válido </li>`;
 return ;
}

fetchSongs(searchTerm );


})