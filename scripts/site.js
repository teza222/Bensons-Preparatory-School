function ClearForm() {
    alert('Thank you for your feedback');
    
}
function petition() {
    alert('Thank you for voting');
    //clearCanvas()
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
   
    const sections = ['dashboard', 'grades', 'report', 'attendance', 'comments', 'fees', 'petition', 'suggestion'];


    for (let i = 0; i < sections.length; i++) {
        const currentSection = document.getElementById(sections[i]);
        if (sections[i] !== section) {
            currentSection.setAttribute("hidden", true);
        } else {
            currentSection.removeAttribute("hidden");
        }
    }
}


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




//     const dashboard = document.getElementById('dashboard');
//     const grade = document.getElementById('grades');
//     const report = document.getElementById('report');
//     const attendance = document.getElementById('attendance');
//     const comments = document.getElementById('comments');
//     const fees = document.getElementById('fees');
//     const petition = document.getElementById('petition');
//     const suggestion = document.getElementById('suggestion');


//     // Add click event listener to the toggleDiv
//     // toggleDiv.addEventListener('click', function () {
//     // Toggle visibility of firstDiv and secondDiv


//     switch (section) {
//         case 'dashboard':
//             grade.setAttribute("hidden", true);
//             report.setAttribute("hidden", true);
//             attendance.setAttribute("hidden", true);
//             comments.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             petition.setAttribute("hidden", true);
//             suggestion.setAttribute("hidden", true);
//             dashboard.removeAttribute("hidden");
//             break;
//         case 'grades':
//             report.setAttribute("hidden", true);
//             attendance.setAttribute("hidden", true);
//             comments.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             petition.setAttribute("hidden", true);
//             suggestion.setAttribute("hidden", true);
//             dashboard.setAttribute("hidden", true);
//             grade.removeAttribute("hidden");
//             break;
//         case 'report':
//             grade.setAttribute("hidden", true);
//             attendance.setAttribute("hidden", true);
//             comments.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             petition.setAttribute("hidden", true);
//             suggestion.setAttribute("hidden", true);
//             dashboard.setAttribute("hidden", true);
//             report.removeAttribute("hidden");
//             break;
//         case 'attendance':
//             report.setAttribute("hidden", true);
//             comments.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             petition.setAttribute("hidden", true);
//             suggestion.setAttribute("hidden", true);
//             dashboard.setAttribute("hidden", true);
//             grade.setAttribute("hidden", true);
//             attendance.removeAttribute("hidden");
//             break;
//         case 'comments':
//             report.setAttribute("hidden", true);
//             attendance.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             petition.setAttribute("hidden", true);
//             suggestion.setAttribute("hidden", true);
//             dashboard.setAttribute("hidden", true);
//             grade.setAttribute("hidden", true);
//             comments.removeAttribute("hidden");
//             break;
//         case 'fees':
//             report.setAttribute("hidden", true);
//             attendance.setAttribute("hidden", true);
//             comments.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             petition.setAttribute("hidden", true);
//             suggestion.setAttribute("hidden", true);
//             dashboard.setAttribute("hidden", true);
//             grade.setAttribute("hidden", true);
//             fees.removeAttribute("hidden");
//             break;
//         case 'petition':
//             report.setAttribute("hidden", true);
//             attendance.setAttribute("hidden", true);
//             comments.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             suggestion.setAttribute("hidden", true);
//             dashboard.setAttribute("hidden", true);
//             grade.setAttribute("hidden", true);
//             petition.removeAttribute("hidden");
//             break;
//         case 'suggestion':
//             report.setAttribute("hidden", true);
//             attendance.setAttribute("hidden", true);
//             comments.setAttribute("hidden", true);
//             fees.setAttribute("hidden", true);
//             petition.setAttribute("hidden", true);
//             dashboard.setAttribute("hidden", true);
//             grade.setAttribute("hidden", true);
//             suggestion.removeAttribute("hidden");
//             break;
//         // ... more cases
//         default:
//         // code to execute if no case matches
//     }


//     // if (firstDiv.style.display === 'none') {
//     //     firstDiv.style.display = 'block';
//     //     secondDiv.style.display = 'none';
//     // } else {
//     //     firstDiv.style.display = 'none';
//     //     secondDiv.style.display = 'block';
//     // }
//     // });


//     // Navigate to the provided URL
//     // window.location.href = url;
// }
/////////////////////////////////////////////////////











