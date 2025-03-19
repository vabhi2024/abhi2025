 // Show popup after 5 seconds
    setTimeout(() => {
      document.getElementById('popupOverlay').style.display = 'block';
      const musicPlayer = document.getElementById('musicPlayer');
      musicPlayer.play(); // Ensure autoplay works
    }, 10000);

    // Close popup function
    function closePopup() {
      document.getElementById('popupOverlay').style.display = 'none';
      const musicPlayer = document.getElementById('musicPlayer');
      musicPlayer.pause(); // Pause music when popup closes
    }

