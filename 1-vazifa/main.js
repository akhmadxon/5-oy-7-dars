var textarea = document.getElementById('textarea');
var input = document.getElementById('input');

function checkWord() {
    var text = textarea.value.toLowerCase();
    var word = input.value.toLowerCase(); 

    if (text.indexOf(word) !== -1) {
        alert("Matnda kiritilgan so'z mavjud!");
    } else {
        alert("Matnda kiritilgan so'z mavjud emas!");
    }
}

input.addEventListener('keyup', checkWord);