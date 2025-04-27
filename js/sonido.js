
    const twitterIcon = document.getElementById("twitter-icon");
    const sonido = document.getElementById("sonido-twitter");
  
    twitterIcon.addEventListener("click", () => {
      sonido.currentTime = 0; 
      sonido.play();
    });
  
  