const circles = document.querySelectorAll('.circle')
const buttons = document.querySelectorAll('.button')
const progress = document.querySelector('.progress')

let currentPosition = 1;

const handleProgressUpdate = (e) => {

    currentPosition = e.target.id == 'next' ? ++currentPosition : --currentPosition;

    circles.forEach((circle, index) => {

        circle.classList[index < currentPosition ? 'add' : 'remove']('active')
    })

    progress.style.width = `${(currentPosition - 1) / (circles.length - 1) * 100}%`
    if (currentPosition == circles.length) {
        buttons[1].disabled = true;
    }
    else if (currentPosition == 1) {
        buttons[0].disabled = true;
    }
    else {
        buttons.forEach(button => button.disabled = false)
    }
}


buttons.forEach(button => {
    button.addEventListener('click', handleProgressUpdate)
});