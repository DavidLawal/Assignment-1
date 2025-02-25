setTimeout(function() {
    document.getElementById('myPicture').style.display = 'block';
}, 10000);
 
document.getElementById('date').textContent = new Date().toLocaleDateString();


//MARK TO GRADE JAVASCRIPT CODE

function convertMarkToGrade() {
    let inputBox = document.getElementById('input-box');
    let validationMessage = document.getElementById('validationMessage');
    let gradeResult = document.getElementById('gradeResult');


    validationMessage.textContent = '';
    gradeResult.textContent = '';

    try {
        const markText = inputBox.value.trim();

        if (markText === '') {
            throw new Error('Please enter a mark.');
        }

        if (/!^d+$/.test(markText)) {
            throw new Error('Mark can contain numbers only. No letters, spaces, or characters');
        }

        const mark = parseInt(markText);

        if (isNaN(mark)) {
            throw new Error('Please enter a valid number.');
        }

        if (mark < 0) {
            throw new Error('Mark cannot be nagative');
        }

        if (mark > 100) {
            throw new Error('Mark cannot be greater than 100.')
        }

        let grade;
        if (mark > 90) {
            grade = 'A';
        } else if (mark > 80) {
            grade = 'B';
        } else if (mark > 70) {
            grade = 'C';
        } else if (mark > 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        gradeResult.textContent = `Grade: ${grade}`;
        gradeResult.style.color = grade === 'F' ? '#dc3545' : '#28a745';

    } catch (error) {
        validationMessage.textContent = error.message;
    }
}

document.getElementById('input-box').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertMarkToGrade();
    }
});

