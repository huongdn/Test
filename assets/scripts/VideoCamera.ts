class VideoCamera
{
    video: any = undefined;
    stream: any;
    faceMode!: string;

    async Setup(faceMode: any = {exact: "environment"})
    {
        /*if (this.video)
        {
            this.video.pause();
        }

        if (this.faceMode == faceMode)
        {
            return Promise.resolve(this.video);
        }*/

        this.faceMode = faceMode;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)
        {
            //throw new Error('Browser API navigator.mediaDevices.getUserMedia not available');
            console.log("Display BG");
        }
        else
        {
            // let video: any = document.getElementById('video');
            let video: any = document.querySelector('video');
            let options: any = {
                audio: false,
                video: {
                    facingMode: faceMode,
                    width: {
                        ideal: 640,
                    },
                    height: {
                        ideal: 480,
                    }
                }
            }

            if (this.stream)
            {
                const tracks = this.stream.getTracks();
                tracks.forEach((track: any) => track.stop());
            }

            try {                
                this.stream = await navigator.mediaDevices.getUserMedia(options);
            } catch (error) {
            }

            if (video.srcObject !== undefined) {
                video.srcObject = this.stream;                
            // } else if (window.videoEl.mozSrcObject !== undefined) {
            //     video.mozSrcObject = this.stream;
            } else if (window.URL.createObjectURL) {
                video.src = window.URL.createObjectURL(this.stream);
            } else if (window.webkitURL) {
                video.src = window.webkitURL.createObjectURL(this.stream);
            } else {
                video.src = this.stream;
            }
    
            video.playsInline = true;
            const playPromise = video.play();
            
            // video.srcObject = null;
            // video.srcObject = this.stream;
            
            // video.setAttribute('webkit-playsinline', '');
            // video.setAttribute('playsinline', 'playsinline');
            // video.setAttribute('muted', '');
            // video.style.width = '640px';
            // video.style.height = '480px';
            // video.style.display = 'none';
            
            // if (faceMode == "user")
            // {
            //     video.style.transform = "scale(-1, 1)";
            // }
            // else
            // {
            //         video.style.transform = "scale(1, 1)";
            //     }
                
            //     return new Promise<any>((resolve, reject) =>
            //     {
            //             this.video = video;
            //             video.onloadedmetadata = () =>
            //             {
            //                 this.Resize();
            //                 resolve(video);
            //             };
            //     });
            // const playPromise = video.play();
        }

        
    }

    Play(backgroundMode: boolean = false)
    {
        if (this.video != null)
        {
            this.video.play();
            this.video.style.display = backgroundMode ? 'none' : 'block';
        }
    }

    Stop(stopTrack: boolean)
    {
        if (this.video != null)
        {
            this.video.pause();
            this.video.style.display = 'none';
        }

        if (stopTrack)
        {
            if (this.stream)
            {
                const tracks = this.stream.getTracks();
                tracks.forEach((track: any) => track.stop());
            }
        }
    }

    Resize()
    {
        if(this.video)
        {
            let screenWidth = window.innerWidth
            let screenHeight = window.innerHeight
            let sourceWidth = this.video.videoWidth
            let sourceHeight = this.video.videoHeight
            let sourceAspect = sourceWidth / sourceHeight
            let screenAspect = screenWidth / screenHeight

            if (screenAspect < sourceAspect)
            {
                let newWidth = sourceAspect * screenHeight
                this.video.style.width = newWidth + 'px'
                this.video.style.marginLeft = -(newWidth - screenWidth) / 2 + 'px'

                this.video.style.height = screenHeight + 'px'
                this.video.style.marginTop = '0px'
            }
            else
            {
                let newHeight = 1 / (sourceAspect / screenWidth)
                this.video.style.height = newHeight + 'px'
                this.video.style.marginTop = -(newHeight - screenHeight) / 2 + 'px'

                this.video.style.width = screenWidth + 'px'
                this.video.style.marginLeft = '0px'
            }
        }
    }
}
export default VideoCamera;