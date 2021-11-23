var numbers = document.querySelectorAll('.progress li');
var blueLine = document.querySelector('.blue-line');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
var currentIndex = 1;
var length = 0;

recheck()

function goNext(e) {
    e.preventDefault();
    if(currentIndex < 4 && length < 96) {
        length += 32;
        blueLine.style.width = length +'%';
        numbers[currentIndex].classList.add('active')
        currentIndex++;
    }

    recheck()
}

function goPrev(e) {
    e.preventDefault();
    if(currentIndex > 1 && length >= 0) {
        length -= 32;
        currentIndex--;
        blueLine.style.width = length +'%';
        numbers[currentIndex].classList.remove('active')
    }

    recheck()
}

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrev);