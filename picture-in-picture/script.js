const video = document.querySelector('#video');
const button = document.querySelector('#button');

// 1. Prompt to select media stream
// 2. Pass to video element
// 3. Play
async function selectMediaStream() {
  try {
    // Screen Capture API
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  // Start Picture in Picture
  await video.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream();
