let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }

}
//window.addEventListener(`load`,()=>{
  //  wishme()
//}) 

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript 
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",() =>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
}) 

function takeCommand(massage){
    btn.style.display="flex"
    voice.style.display="none"
    if(massage.includes("hello")||massage.includes("hey") ||massage.includes("hello access")){
        speak("hello sir,what can i help you?:")
    }
    else if(massage.includes("who are you")||massage.includes("hu r u")||massage.includes("aapka naam batao")||massage.includes("apna naam batao") ||massage.includes("what's your name")||massage.includes("what is your name")||massage.includes("tohar naam ka h")){
        speak("my name is Axis ")
    }else if(massage.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }else if(massage.includes("what are you doing ")){
        speak("nothing")
    }else if(massage.includes("open google")){
        speak("opening google...")
        window.open("https://google.com")
    }else if(massage.includes("open facebook")){
        speak("opening facebook")
        window.open("https://facebook.com")
    }else if(massage.includes("how are you")){
        speak("I am fine")
    }else if(massage.includes("open calculator")){
        window.open("calculator://")
    }else if(massage.includes("time")||massage.includes("what is time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }else if(massage.includes("date")||massage.includes("what is date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }else if(massage.includes("you are a best")){
        speak("thank you, you are a good person too")
    }else if(massage.includes("what's your father name")||massage.includes("father kaun hai")||massage.includes("who is your boss")){
        speak("my father name is ayush")
    }else if(massage.includes("what are you eat")){
        speak("nothing special only more then data")
    }else if(massage.includes("how are you")){
        speak("i am fine ,and you")
    }else if(massage.includes("tum kaise ho")||massage.includes("beta kaise ho")){
        speak("mai thik hu aur aap btao")
    }else if(massage.includes("tum kaise ho")||massage.includes("beta kaise ho")){
        speak("mai thik hu aur aap btao")
    }else if(massage.includes("")||massage.includes("")){
        speak("")
    }



    else{
        let finalText="I found this on the internet " + massage.replace("access" ,"")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${massage.replace("access","")}`,"_blank")
    }
}



