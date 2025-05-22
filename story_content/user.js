function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6o02UIw3tAK":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="Aljabar.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

