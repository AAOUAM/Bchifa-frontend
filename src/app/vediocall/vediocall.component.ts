import { Component, NgZone } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vediocall',
  standalone: true,
  imports: [NgIf],
  templateUrl: './vediocall.component.html',
  styleUrls: ['./vediocall.component.css']
})
export class VediocallComponent {
  isMicrophoneOn: boolean = true;
  isCameraOn: boolean = true;

  mainVideoStream!: MediaStream; // Stream for the main video
  smallVideoStream!: MediaStream;

  constructor(private ngZone: NgZone) {
    this.initVideoStreams();
  }

  initVideoStreams() {
    // Ensure that the media stream is obtained within Angular's zone
    this.ngZone.run(() => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          console.log('Stream obtained:', stream);

          // Assign the stream to the main video element
          const localVideo = document.getElementById('localVideo') as HTMLVideoElement;
          if (localVideo) {
            localVideo.srcObject = stream;
            localVideo.onloadedmetadata = () => {
              console.log("Local video metadata loaded");
              localVideo.play();
            };
          } else {
            console.error('Local video element not found');
          }

          // Simulate a remote video stream (can be replaced with actual stream for remote user)
          const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
          if (remoteVideo) {
           // remoteVideo.srcObject = stream.clone(); // Cloning stream for the small video
            //remoteVideo.onloadedmetadata = () => {
             // console.log("Remote video metadata loaded");
              //remoteVideo.play();
           // };
          } else {
            console.error('Remote video element not found');
          }

          // Assign the stream to the component's properties
          this.mainVideoStream = stream;
          this.smallVideoStream = stream.clone(); // Clone the stream for the small video
        })
        .catch((error) => {
          console.error('Error accessing the camera or microphone:', error);
        });
    });
  }

  swapVideos() {
    // Swap the video streams
    const mainVideo = document.getElementById('localVideo') as HTMLVideoElement;
    const smallVideo = document.getElementById('remoteVideo') as HTMLVideoElement;

    if (mainVideo && smallVideo) {
      const tempStream = mainVideo.srcObject;
      mainVideo.srcObject = smallVideo.srcObject;
      smallVideo.srcObject = tempStream;
    }
  }

  // Handle drag start for the small video
  onDragStart(event: DragEvent) {
    const remoteVideoCard = event.target as HTMLElement;
    const rect = remoteVideoCard.getBoundingClientRect();
    event.dataTransfer?.setData('offsetX', (event.clientX - rect.left).toString());
    event.dataTransfer?.setData('offsetY', (event.clientY - rect.top).toString());
  }

  // Handle drag end for the small video
  onDragEnd(event: DragEvent) {
    const remoteVideoCard = event.target as HTMLElement;
    const offsetX = Number(event.dataTransfer?.getData('offsetX'));
    const offsetY = Number(event.dataTransfer?.getData('offsetY'));

    remoteVideoCard.style.left = `${event.clientX - offsetX}px`;
    remoteVideoCard.style.top = `${event.clientY - offsetY}px`;
    remoteVideoCard.style.position = 'absolute';
  }

  // End the call and stop all media tracks
  endCall() {
    console.log('Call ended');
    this.mainVideoStream.getTracks().forEach(track => track.stop());
    this.smallVideoStream.getTracks().forEach(track => track.stop());
  }

  // Toggle microphone on/off
  toggleMicrophone() {
    this.isMicrophoneOn = !this.isMicrophoneOn;
    console.log('Microphone:', this.isMicrophoneOn ? 'On' : 'Off');
    // Add logic to mute/unmute microphone
  }

  // Toggle camera on/off
  toggleCamera() {
    this.isCameraOn = !this.isCameraOn;
    console.log('Camera:', this.isCameraOn ? 'On' : 'Off');

    // Check if the local stream (mainVideoStream) exists before trying to access its tracks
    if (this.mainVideoStream) {
      const videoTrack = this.mainVideoStream.getTracks().find(track => track.kind === 'video');

      if (videoTrack) {
        videoTrack.enabled = this.isCameraOn; // Enable or disable the video track based on camera state
        console.log('Main video track enabled:', this.isCameraOn);
      }
    } else {
      console.log("Main video stream not available");
    }
  }



  // Turn the camera on
  makeOnCamera() {
    this.isCameraOn = true;
    console.log('Camera:', this.isCameraOn ? 'On' : 'Off');
    // Add logic to turn on the camera
  }

  // Adjust volume (place the actual logic here)
  adjustVolume() {
    console.log('Adjusting volume...');
    // Add volume control logic
  }

  // Turn the microphone on
  makeOnMicrophone() {
    this.isMicrophoneOn = true;
    console.log('Microphone:', this.isMicrophoneOn ? 'On' : 'Off');
    // Add logic to unmute the microphone
  }
}
