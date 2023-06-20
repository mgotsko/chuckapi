
const jokesContainer = document.getElementById('jokes-container')
const newJoke = document.querySelector('#new-joke')
const newName = document.getElementById('add-name')
// you will need to get hat id of the imput

function displayOnTheScreen(joke){
    jokesContainer.innerText = joke.value
}

async function callToAPI(){
    try{
        
        //you need to add the value of the input
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

//get elements from dom
//get the value from dom element
//add event listener
//know how function works
//async await
//we need to know how to pass data in function
//use interpolation ``

//if
//for loop
//hof
//const let
//objects and data types