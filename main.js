let audioFile = document.querySelector('#audio');
let btn = document.querySelector('.btn');
let arm = document.querySelector('.arm');
let recorder = document.querySelector('.recorder');
let range = document.querySelector('#range');
btn.onclick = function () {
       if (recorder.classList.contains('on')) {
              audioFile.pause();
              arm.classList.remove('play-song');
              recorder.classList.remove('on');
       } else {
              audioFile.play();
              arm.classList.add('play-song');
              recorder.classList.add('on');
       }
};
range.oninput = function () {
       audioFile.volume = range.value;
};
