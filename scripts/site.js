function ClearForm() {
    alert('You click clear function external');
}

$(function () {
    var pages = ['index', 'about', 'contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function (item) {
        if (pathname.includes(pages[item])) {

            $(this).addClass('active');
            $(this).attr('aria-current', 'page');

        }
    });


});


//////// Hide and Show Divs in Dashboard //////////////////
function hideSection(section) {
    const dashboard = document.getElementById('dashboard');
    const grade = document.getElementById('grades');
    const report = document.getElementById('report');
    const attendance = document.getElementById('attendance');
    const comments = document.getElementById('comments');
    const fees = document.getElementById('fees');
    const petition = document.getElementById('petition');
    const suggestion = document.getElementById('suggestion');


    // Add click event listener to the toggleDiv
    // toggleDiv.addEventListener('click', function () {
    // Toggle visibility of firstDiv and secondDiv


    switch (section) {
        case 'dashboard':
            grade.style.display = 'none';
            // report.style.display = 'none';
            // attendance.style.display = 'none';
            // comments.style.display = 'none';
            // fees.style.display = 'none';
            // petition.style.display = 'none';
            // suggestion.style.display = 'none';
            dashboard.style.display = 'block';

            break;
        case 'grades':

            // report.style.display = 'none';
            // attendance.style.display = 'none';
            // comments.style.display = 'none';
            // fees.style.display = 'none';
            // petition.style.display = 'none';
            // suggestion.style.display = 'none';
            dashboard.style.display = 'none';
            grade.style.display = 'block';
            // code to execute if expression === value1
            break;
        case 'report':
            grade.style.display = 'none';
            attendance.style.display = 'none';
            comments.style.display = 'none';
            fees.style.display = 'none';
            petition.style.display = 'none';
            suggestion.style.display = 'none';
            dashboard.style.display = 'none';
            report.style.display = 'block';
            // code to execute if expression === value2
            break;
        case 'attendance':
            report.style.display = 'none';
            comments.style.display = 'none';
            fees.style.display = 'none';
            petition.style.display = 'none';
            suggestion.style.display = 'none';
            dashboard.style.display = 'none';
            grade.style.display = 'none';
            attendance.style.display = 'block';
            // code to execute if expression === value2
            break;
        case 'comments':
            report.style.display = 'none';
            attendance.style.display = 'none';
            fees.style.display = 'none';
            petition.style.display = 'none';
            suggestion.style.display = 'none';
            dashboard.style.display = 'none';
            grade.style.display = 'none';
            comments.style.display = 'block';
            // code to execute if expression === value2
            break;
        case 'fees':
            report.style.display = 'none';
            attendance.style.display = 'none';
            comments.style.display = 'none';
            fees.style.display = 'none';
            petition.style.display = 'none';
            suggestion.style.display = 'none';
            dashboard.style.display = 'none';
            grade.style.display = 'none';
            fees.style.display = 'block';
            // code to execute if expression === value2
            break;
        case 'petition':
            report.style.display = 'none';
            attendance.style.display = 'none';
            comments.style.display = 'none';
            fees.style.display = 'none';

            suggestion.style.display = 'none';
            dashboard.style.display = 'none';
            grade.style.display = 'none';
            petition.style.display = 'block';
            // code to execute if expression === value2
            break;
        case 'suggestion':
            report.style.display = 'none';
            attendance.style.display = 'none';
            comments.style.display = 'none';
            fees.style.display = 'none';
            petition.style.display = 'none';

            dashboard.style.display = 'none';
            grade.style.display = 'none';
            suggestion.style.display = 'block';
            // code to execute if expression === value2
            break;
        // ... more cases
        default:
        // code to execute if no case matches
    }


    // if (firstDiv.style.display === 'none') {
    //     firstDiv.style.display = 'block';
    //     secondDiv.style.display = 'none';
    // } else {
    //     firstDiv.style.display = 'none';
    //     secondDiv.style.display = 'block';
    // }
    // });


    // Navigate to the provided URL
    // window.location.href = url;
}
/////////////////////////////////////////////////////


///////create a signature/////////////////////////////////////////
var canvas = document.getElementById('signatureCanvas');
var ctx = canvas.getContext('2d');
var isDrawing = false;
var lastX = 0;
var lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

////////////////////////////////////////////////////////////////////////////









