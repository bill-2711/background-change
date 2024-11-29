const button = document.getElementById("colorButton");
const body = document.body;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];        
    }
    return color;
}

button.addEventListener('click', function () {
    body.style.backgroundColor = getRandomColor();
})