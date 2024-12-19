let img = document.getElementById('img');
let ids = document.getElementById('ids');
let lock = false;
const img_path = 'static/img/gallary/heroimage';
let current_img = 1;
const max = 7;
let indicators = [];
const progress = document.getElementById('progress');



// CHANGE FUNCTION
const change = async () => {


    // CHANGES THE INDEX
    if (current_img == max){

        indicators[current_img-1].classList.toggle('active')
        current_img = 1;
    }
    else {

        current_img += 1;
        indicators[current_img-2].classList.toggle('active')

    }

    indicators[current_img-1].classList.toggle('active')

    img.classList.toggle('change');
    img.setAttribute('src', `${img_path}${current_img}.jpg`);
    img.classList.toggle('change');

}

// LOCKING MECHANISM
const locker = (jumped = false) => {

    lock = lock == false ? true : false;
    progress.classList.toggle('unlocked');
    interval = 0;


}

img.addEventListener('click', () => { locker() }) 


// CREATE INDICATORS
for (let i = 0; i < max; i++) {

    indicators.push(document.createElement('div'));
    indicators[i].classList.add('indicator');

    indicators[i].addEventListener('click', () => {

        indicators[current_img-1].classList.toggle('active');
        current_img = i + 1;
        img.setAttribute('src', `${img_path}${current_img}.jpg`);
        indicators[current_img-1].classList.toggle('active');

        
        locker(true)


    })

    ids.appendChild(indicators[i]);
}



indicators[current_img-1].classList.add('active')


// TIMER TO GO AROUND

let interval = 0;
// SETS THE IMAGE CHANGING LOOP
setInterval( async () => {


    progress.style.transform = `scale(${(100 - (interval * 20)) * 0.01}, ${(100 + (interval * 2)) * 0.01})`;
    progress.style.borderColor = `rgba(0, 77, 67, ${100-(interval*20)*0.01})`;

    if (lock == false && interval == 5) { 
        
        change()
        interval = 0
    } 

    interval = lock == false ? interval + 1 : interval


    

    
}, 1000)