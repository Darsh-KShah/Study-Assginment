// 1st
let imagesArr = ["https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww", "https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"];

let currentIndex = 0;
let img = document.getElementById("Images");
img.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % imagesArr.length;
    img.src = imagesArr[currentIndex];
});

// 2nd
function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = num1 + num2;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = num1 - num2;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").value = num1 * num2;
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").value = "Not defined";
    } else {
        document.getElementById("result").value = num1 / num2;
    }
}

// 3rd
function copyToClipboard() {
    let text = document.getElementById("stringToCopy").value;
    navigator.clipboard.writeText(text)
        .then(() => {
            let outputContainer = document.getElementById("outputContainer");
            outputContainer.innerHTML = `Text copied to clipboard: ${text}`;
        })
}

// 4th
let progress = 0;

function updateProgress() {
    progress += 15;
    if (progress > 100) {
        progress = 100;
    }
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("progressBar").innerHTML = progress + "%";
}