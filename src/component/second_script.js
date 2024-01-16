let navbar = document.querySelector('.navbar');
let sidebar  = '../component/sidebar.html';

async function loadcontent() {
    let response = await fetch(sidebar);

    try {
        let data = await response.text();

        navbar.innerHTML = data;
    } catch (Error) {
        console.log("unable to fetch file",Error)
    }
}
loadcontent();