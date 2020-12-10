var userid;
var currentdate;
var scratchcard;
var showRewards = false;


$(document).ready(function () {
  console.log("ready!");
  currentdate = new Date();
  console.log(currentdate);
  const webcamElement = document.getElementById('webcam');
  const canvasElement = document.getElementById('canvas');
  const snapSoundElement = document.getElementById('snapSound');
  var webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
  //startcamera();
  webcam.start()
  .then(result =>{
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
});
});

   

function startcamera(){



}



