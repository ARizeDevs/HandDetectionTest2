async function start(){
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
    runtime: 'mediapipe', // or 'tfjs'
    modelType: 'full'
    };
    // detector = await handPoseDetection.createDetector(model, detectorConfig);

    // console.log(hands);

    var video = document.querySelector("#videoInput");

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        })
        .catch(function (err0r) {
        console.log("Something went wrong!");
        });
    }


    // const hands = await detector.estimateHands(video);

    // console.log(hands);
}

start();