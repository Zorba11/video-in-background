const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element and play

async function selectMediaStream() {
    try {
        // get mediastream data, give that meida object as the src of the video element
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

button.addEventListener('click', async () => {
    //Disable the button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// on load
selectMediaStream();