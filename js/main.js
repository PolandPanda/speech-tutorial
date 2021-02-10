const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function () {
    console.log("voice is active")

}

// this have our string on speech
recognition.onresult = function (e) {
    console.log(e);
    this.lang = "pl-PL"
    const currentText = e.resultIndex;
    const transcript = e.results[currentText][0].transcript;
    console.log(transcript)
    content.textContent = transcript;
    readOudLoud(transcript)
}

btn.addEventListener("click", () => {
    console.log(123);
    recognition.start();
})

function readOudLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.text = message
    speech.lang = "pl-PL"
    window.speechSynthesis.speak(speech)
}