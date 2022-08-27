const navBtn = document.querySelector('.mobile-nav-button');
const closeBtn = document.querySelector('.mobile-nav-close');
const navListMobile = document.querySelector('.nav-items-mobile');


function handleToggleMenu(){
    navListMobile.classList.add('active');
    navBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

function handleCloseMenu(){
    navListMobile.classList.remove('active');
    navBtn.style.display = 'block';
    closeBtn.style.display = 'none';
}

navBtn.addEventListener('click', handleToggleMenu);
closeBtn.addEventListener('click', handleCloseMenu);