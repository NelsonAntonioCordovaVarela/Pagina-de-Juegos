let audioAnterior;

function reproducirSonido(nombreAnimal) {
  if (audioAnterior) {
    audioAnterior.pause();
  }
  let audio = document.createElement("audio");
  audio.src = nombreAnimal + ".mp3";
  audio.controls = true;
  audio.play();
  audioAnterior = audio;
}


  