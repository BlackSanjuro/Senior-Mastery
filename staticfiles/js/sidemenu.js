let sidemenu = document.getElementById('sidemenu');
let title = document.querySelector('.title');
let items = document.querySelectorAll('.page_link');
let cover = document.getElementById('cover');
let main = document.querySelector('main')

// DELAY
const espera = (delay) => {

    return new Promise(resolve => setTimeout(resolve, delay))
}

const hide = async () => {


    title.classList.toggle('hidden');
    title.style.transition = title.style.transition == '1s' ? '500ms' : '1s'; 

    items.forEach(async elements => {
        
        await espera(200)
        elements.classList.toggle('hidden');
    })
    await espera(1000) 

}

sidemenu.addEventListener('mouseover', () => {

    sidemenu.style.width = '20vw';
    sidemenu.style.minWidth = '300px';
    cover.classList.toggle('blurred');
    main.classList.toggle('blurred');
    hide();
})

sidemenu.addEventListener('pointerout', () => {

    hide();
    cover.classList.toggle('blurred');
    main.classList.toggle('blurred');

    sidemenu.style.width = '7vw';
    sidemenu.style.minWidth = '7vw';


})

