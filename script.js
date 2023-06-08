function toggleMode() {
   
    var body = document.body;
    var currentMode = body.classList.contains("day") ? "day" : "night";
    
    if (currentMode === "day") {
        body.classList.add("night");
        body.classList.remove("day");
        body.style.transition = "background-color 1s ease";
        body.style.background = "linear-gradient(135deg, #172328, #051423)";
        document.getElementById("cardtitle").style.color = "white";
        document.getElementById("cardtitle2").style.color = "white";
        
    } else {
        body.classList.add("day")
        body.classList.remove("night");
        body.style.transition = "background-color 1s ease";
        body.style.background = "linear-gradient(135deg, #87CEEB, #1E90FF)";
        document.getElementById("cardtitle").style.color = "black";
        document.getElementById("cardtitle2").style.color = "black";
        
    }
}

function jokegen()
{
    let joke = fetch("https://official-joke-api.appspot.com/random_joke")

    joke.then((res)=>{
        res.json().then((res2)=>{
            // console.log(res2)
            document.getElementById("cardtitle").innerHTML = res2.setup
            document.getElementById("cardtitle2").innerHTML = res2.punchline
        })
    }).catch((err)=>{
        console.log(err)
    })
}