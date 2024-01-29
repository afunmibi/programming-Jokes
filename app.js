// fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
// .then((res)=>{
//     return res.json();
// }).then((data)=>{
//     // let data = " ";
//     // data.map((datajoke)=>{
//     //     data = `<div class="container">
//     //     <h1>Programming Jokes</h1>
//     //     <p id="jokes">${datajoke.setup}</p>
//     // <p id="joke">${datajoke.delivery}</p>
//     // </div>
//     // <button>Generate Jokes</button></div> `
//     // })
// })
// .catch((err)=>{
//     console.log(err);
// })

const jokeText = document.querySelector("#jokes");
const btn = document.querySelector("#btn");

async function generatejokes() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  );
  const data = await res.json();
  console.log(data);
  console.log(data.joke);
  console.log(data.category);

  let data1 = " ";

  if (data.joke == undefined) {
    data1 = `<p>${data.joke} <br /> ${data.category}</p>`;
  } else {
    data1 = data.joke;
    jokeText.innerHTML = data1;
  }
}

btn.addEventListener("click", generatejokes);
generatejokes();
