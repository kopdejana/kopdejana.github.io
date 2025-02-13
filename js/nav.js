const nav = document.getElementById('responsiveNav');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', function() {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.justifyContent = 'center';
    nav.style.alignContent = 'center';
});

nav.addEventListener('click', function() {
    nav.style.display = 'none';
});

