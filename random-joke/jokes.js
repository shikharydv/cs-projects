const jokecontainer = document.getElementById("joke");
const jk=document.getElementById("jk");
const url="https://v2.jokeapi.dev/joke/Any?type=single";
function getjoke(){
    jokecontainer.classList.remove("fade");
    fetch(url)
    .then((data)=>data.json())
    .then((item) =>{
        jokecontainer.textContent=item.joke;
        jokecontainer.classList.add("fade");
    });
}
jk.addEventListener("click",getjoke);
getjoke();