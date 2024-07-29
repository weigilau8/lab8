// Using let for a variable that needs to be updated

let theClick = 0;
function countClick() {
    theClick++;
    document.getElementById("theCount").innerText = theClick;
}