function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TpFddiS9A/', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;
var lion = 0;
var wolf = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Som detectado de  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Cachorro detectado - '+dog+ ' Gato detectado - '+cat+ 'Rugido detectado - '+lion+ 'Lobo detectado - '+wolf;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Latido") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "Miado") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } 
    else if (results[0].label == "Rugido") {
      img.src = 'OIP.jpg';
      cat = cat + 1;
    }
    else if (results[0].label == "Uivo") {
      img.src = 'wolf_PNG23209.png';
      cat = cat + 1;
    }else{
      img.src = 'listen.gif';
    }
  }
}
