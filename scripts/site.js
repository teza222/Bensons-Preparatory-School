function ClearForm() {
    alert('Thank you for your feedback');
    
}
function petition(vote) {
    voteincrement(vote);
    clearCanvas()
}

var voted = false;
function voteincrement(vote) {
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');

    var canVote = checkSignature();
    console.log(canVote);

    if (!canVote) {
        return;
    }

    if(voted){
        alert('You have already voted');
        return;
    }
    if(vote === 'yes'){
        yes.innerHTML = parseInt(yes.innerHTML) + 1;
        voted = true;
        alert('Thank you for voting');
    }else{
        no.innerHTML = parseInt(no.innerHTML) + 1;
        voted = true;
        alert('Thank you for voting');
    }
    
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
var ctxx = canvas.getContext('2d');
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
    ctxx.beginPath();
    ctxx.moveTo(lastX, lastY);
    ctxx.lineTo(e.offsetX, e.offsetY);
    ctxx.strokeStyle = '#000';
    ctxx.lineWidth = 2;
    ctxx.lineCap = 'round';
    ctxx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function clearCanvas() {
    ctxx.clearRect(0, 0, canvas.width, canvas.height);
}

function checkSignature() {
    if (lastX === 0 && lastY === 0) {
        alert('Please sign the petition');
        return false;
    }
    return true;
}







