const btn = document.getElementById('toTop');
const btn2 = document.getElementById('darkToggle');

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

btn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = function () {
    scrollFunction()
};

btn2.addEventListener('click', function () {
    document.body.classList.toggle('dark');
})