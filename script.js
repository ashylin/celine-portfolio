// Show the popup video when a video is clicked
document.querySelectorAll('.video-container video').forEach(vid => {
  vid.onclick = () => {
    const popupVideo = document.querySelector('.popup-video');
    const popupVideoElement = popupVideo.querySelector('video');
    popupVideo.style.display = 'flex';
    popupVideoElement.src = vid.getAttribute('src');
    popupVideoElement.muted = false; // Unmute the popup video
  }
});

// Hide the popup video when the close button is clicked
document.querySelector('.popup-video span').onclick = () => {
  const popupVideo = document.querySelector('.popup-video');
  const popupVideoElement = popupVideo.querySelector('video');
  popupVideo.style.display = 'none';
  popupVideoElement.muted = true; // Mute the popup video when closed
  popupVideoElement.pause(); // Pause the video
}

// Hide the popup video when clicking on negative space
document.querySelector('.popup-video').onclick = (event) => {
  // Check if the click target is the container itself
  if (event.target === event.currentTarget) {
    const popupVideo = document.querySelector('.popup-video');
    const popupVideoElement = popupVideo.querySelector('video');
    popupVideo.style.display = 'none';
    popupVideoElement.muted = true; // Mute the popup video when closed
    popupVideoElement.pause(); // Pause the video
  }
}