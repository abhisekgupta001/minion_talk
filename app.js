var button = document.querySelector(".btn-translate");
var textarea = document.querySelector("#input-textarea");
var output = document.querySelector(".output-div");

/*var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";*/
var serverUrl ="https://api.funtranslations.com/translate/minion.json";

function constructUrl(text){
    return serverUrl+ "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured: "+ error);
    alert("Error occured please try after sometime");
}

function clickHandler(){
    fetch(constructUrl(textarea.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText})
    .catch(errorHandler)
}

button.addEventListener("click", clickHandler);








/*
button.addEventListener("click",() => {
    fetch(constructUrl(textarea.input))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated));
})

*/

