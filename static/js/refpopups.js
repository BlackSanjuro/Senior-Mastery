const popup = document.querySelector('#popup');

const refsnames = ['Caudill', 'Name2', 'Name3', 'Resume', 'lor'];

const popupBtn = popup.querySelector('#popupBtn')

const email = document.querySelector('#email')

let curTab = ''

let refs = {};

// BINDS ALL OF THE LINKS FOR THE POPUPS
refsnames.forEach( ref => {

    
    let btn = document.querySelector(`.${ref}`)
    let tab = popup.querySelector(`#${ref}`)


    btn.addEventListener('click', () => {

        main.classList.toggle('blurred');
        cover.classList.toggle('blurred');
        popup.classList.toggle('active');
        tab.classList.toggle('active');
        curTab = ref;
        
        document.querySelector('nav').classList.toggle('hide')
        

    })

})

// CLOSE BTN THINGY
popupBtn.addEventListener('click', () => {

    popup.classList.toggle('active')
    popup.querySelector(`#${curTab}`).classList.toggle('active')
    main.classList.toggle('blurred')
    cover.classList.toggle('blurred')
    document.querySelector('nav').classList.toggle('hide')

})

// COPY EMAIL TO CLIPBOARD
email.addEventListener('click', () => {

    navigator.clipboard.writeText('bbandrade781@gmail.com')

})