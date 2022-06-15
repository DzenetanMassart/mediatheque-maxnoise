
let micro = document.querySelector("#niveau_actuel");
let humeur = document.querySelector("#humeur");
const desire=25;

document.getElementById("desire").innerHTML=desire;

let values;
navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.9;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            values = 0;

            length = array.length;
            for (let i = 0; i < length; i++) {
                values += (array[i]);
            }

            average = values / length;


            if (average < desire) {
                if(document.getElementById("yes")!=null){
                    humeur.style.color="green";
    document.body.style.backgroundColor="rgb(0, 2, 24)"
    micro.style.color="white";
    document.getElementById("desire").classList.remove("text-danger");
}else{
    document.getElementById("desire").classList.remove("text-danger");
}
    micro.innerHTML=Math.round(average);
    micro.classList.remove("text-danger");
    micro.style.fontSize=10+"em";

            } else {
                if(document.getElementById("yes")!=null){
                    document.body.style.backgroundColor="red"
                    micro.style.color="black";
                    document.getElementById("desire").classList.remove("text-danger");
                humeur.style.color="white";
            }else{
                micro.classList.add("text-danger");
                    document.getElementById("desire").classList.add("text-danger");
                }
                micro.innerHTML=Math.round(average);
micro.style.fontSize=10+"em";
            }
        }
    })
    .catch(function(err) {});