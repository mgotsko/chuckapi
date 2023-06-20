
const jokesContainer = document.getElementById('jokes-container')
const newJoke = document.querySelector('#new-joke')

function displayOnTheScreen(joke){
    jokesContainer.innerText = joke.value
}

async function callToAPI(){
    try{
    const req =  await fetch('https://api.chucknorris.io/jokes/random')
    const res =  await req.json()
    displayOnTheScreen(res)

    }catch(e){
        console.error()
    }
}

newJoke.addEventListener('click',function(){
    callToAPI()
})