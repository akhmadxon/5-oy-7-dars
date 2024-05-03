function countBrackets() {
    var input = document.getElementById('input').value; 
    var openBracketCount = 0; 
    var closeBracketCount = 0;

    for (var i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            openBracketCount++;
        } else if (input[i] === ')') {
            closeBracketCount++;
        }
    }

    var resultDisplay = document.getElementById('result');
    if (openBracketCount === closeBracketCount) {
        resultDisplay.textContent = 'Jami ochuvchi va yopuvchi qavslar soni teng: ' + openBracketCount;
    } else {
        resultDisplay.textContent = 'Jami ochuvchi va yopuvchi qavslar soni teng emas';
    }
}