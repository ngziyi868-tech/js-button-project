
const displayClicks = document.getElementById('displayClicks')
const redButton = document.getElementById('redButton')


let count = 0;

displayClicks.innerText = count;

redButton.addEventListener("click", () => {
    count++;
    displayClicks.innerText = count;
});