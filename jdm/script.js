//charger le fichier texte

fetch("liste.txt")
.then(Response =>Response.text())
.then(data =>{
    var wordList=data.split("\n")
    var randomIndex = Math.floor(Math.random() * wordList.length)
    const wordToGuess =wordList[randomIndex];

   // alert(wordToGuess)

    var wordLenght =wordToGuess.length;
    var hiddenWord = "";
    for (var i =0 ; i<wordLenght ;i++){
        hiddenWord+="_"
    }

    document.getElementById("word").innerHTML = hiddenWord
    var guessInput =document.getElementById("guess")
    var submitbutton =document.getElementById("submit")
    var result =document.getElementById("result")
    var link =document.getElementById("link")

    submitbutton.onclick =function(){
        var guess =guessInput.value ;
        if(guess.length >1 || guess.length === 0){
            result.innerHTML ="entrer une seule lettre";
        }else if (wordToGuess.indexOf(guess) === -1){
            result.innerHTML= "Mauvaise lettre"
        }else{
            for(var i=0 ;i<wordLenght;i++){
                if(wordToGuess[i] ===guess){
                    hiddenWord=hiddenWord.substring(0,i)+guess+hiddenWord.substring(i+1)
                }
            }
            document.getElementById("word").innerHTML=hiddenWord;

            if (hiddenWord ===wordToGuess){
                result.innerHTML="bravo , tu a trouve le mot !";
                guessInput.style.display="none";
                submitbutton.style.display="none";
                link.style.display="block";

            }else{
                result.innerHTML="bonne lettre"
            }
        }

        guessInput.value= ""
    }
})