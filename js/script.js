// logic

// const
const btn = document.getElementById('btn');

// event listener
btn.addEventListener('click', function () {
    console.log('you clicked me 🤠😱');
    // show an image after 3 seconds
    setTimeout(function () {
        document.getElementById('img').classList.remove('hide');
    }, 1000);
});