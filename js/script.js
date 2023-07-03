// logic

// const
const btn = document.getElementById('btn');

// event listener
btn.addEventListener('click', function () {
    console.log('you clicked me 🤠😱');
    // show an image after 3 seconds
    setTimeout(function () {
        document.getElementById('img').classList.remove('hide');
        document.getElementById('clear-js').classList.add('hide');
    }, 1000);
});


// Image over for the footer
const hover = document.getElementsByClassName('image-hover');
var remove = document.getElementsByClassName('footer-absolute');
for (let i = 0; i < hover.length; i++) {
    hover[i].addEventListener('mouseover', function() {
        remove[i].classList.remove('hide');
    })

    hover[i].addEventListener('mouseleave', function() {
        remove[i].classList.add('hide');
    })
}
