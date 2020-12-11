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
  const facingMode = 'environment';
  var webcam = new Webcam(webcamElement, facingMode, canvasElement, snapSoundElement);
  webcam.start()
    .then(result =>{
      console.log("webcam started");
    })
    .catch(err => {
      console.log(err);
    });


  $('#capture-button').click(function() {
    webcam.snap();
    window.location.href="payments.html";
  });

  $('#flip-button').click(function() {
    webcam.flip();
    webcam.start();  
  });
});   

