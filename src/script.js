//button function
const checkbtn = document.querySelector('.button');

checkbtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.document.location.href = 'component/dashboard.html';
});