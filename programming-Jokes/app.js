const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", generatejokes);

generatejokes();

async function generatejokes() {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  );
  const data = await res.json();
  console.log(data);
  console.log(data.delivery);
  console.log(data.joke);

  let joke = " ";
  if(data.joke == undefined){
    joke = ` ${data.setup} <br /> ${data.delivery}`
  }else
  joke = data.joke;
  jokeText.innerHTML = joke;
}
