function openStartMenu() {
}


function toggleClass(id, className) {
    const element = document.getElementById(id);
    if (!element) return;

    if (element.classList.contains(className)) {
        element.classList.remove(className);
        return;
    }

    element.classList.add(className);
}

let isDragging = false;
let zIndexCounter = 1;
let offsetX, offsetY;

const popup = document.getElementById('popup');
const popupHeader = document.getElementById('popup-header');

popupHeader.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - popup.getBoundingClientRect().left;
    offsetY = e.clientY - popup.getBoundingClientRect().top;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    if (isDragging) {
        popup.style.left = `${e.clientX - offsetX}px`;
        popup.style.top = `${e.clientY - offsetY}px`;
    }
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

function openPopup() {
    popup.classList.add('open');
    popup.style.display = 'flex';
    popup.style.left = '20%'; // Initial position
    popup.style.top = '10%';  // Initial position
    popup.style.zIndex = ++zIndexCounter;
}

function closePopup() {
    popup.classList.remove('open');
    popup.style.display = 'none';
}
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('closed');
    popup.style.display = 'block';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('closed');
    popup.style.display = 'none';
}

function openGamesPopup() {
    openPopup('games-popup');
}

function openProjectsPopup() {
    openPopup('projects-popup');
}

function openExperiencesPopup() {
    openPopup('experiences-popup');
}



function openAboutMePopup() {
    openPopup('aboutme-popup');
}

function openShutdownPopup() {
    document.getElementById('shutdown-popup').classList.remove('hidden');
    document.getElementById('start-menu').classList.add('closed');
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('body').classList.add('grayscale');
}

function closeShutdownPopup() {
    document.getElementById('shutdown-popup').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('grayscale');
}

function enableDragging(popupId) {
    const popup = document.getElementById(popupId);
    const header = popup.querySelector('.popup-header, .notepad-header');
    
    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - popup.getBoundingClientRect().left;
        offsetY = e.clientY - popup.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        if (isDragging) {
            popup.style.left = `${e.clientX - offsetX}px`;
            popup.style.top = `${e.clientY - offsetY}px`;
        }
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}

function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('closed');
    popup.style.display = 'block';
    popup.style.left = '20%'; // Initial position
    popup.style.top = '10%';  // Initial position
    enableDragging(popupId);  // Enable dragging for this popup
}

function close_window() {
    window.close();
}

document.querySelector('.overlay').addEventListener('click', closeShutdownPopup);


