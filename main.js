let audioFile = document.querySelector('#audio');
let btn = document.querySelector('.btn');
let arm = document.querySelector('.arm');
let recorder = document.querySelector('.recorder');
let range = document.querySelector('#range');
let turnKey = document.querySelector('.turn');
let file = document.querySelector('#file');
turnKey.onclick = function () {
       if (turnKey.classList.contains('turn-on')) {
              setTimeout(() => {
                     audioFile.pause();
                     recorder.classList.remove('on');
              }, 500);
              arm.classList.remove('play-song');
              turnKey.classList.remove('turn-on');
       } else {
              setTimeout(() => {
                     audioFile.play();
                     recorder.classList.add('on');
              }, 500);
              arm.classList.add('play-song');
              turnKey.classList.add('turn-on');
       }
};
file.onchange = function () {
       let newFile = new FileReader();
       newFile.readAsDataURL(file.files[0]);
       newFile.onload = function () {
              audioFile.src = newFile.result;
       };
};
range.oninput = function () {
       audioFile.volume = range.value;
};
