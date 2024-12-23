// THIS GETS THE DIFFERENT ELEMENTS THAT ARE NEEDED FOR THE INFORMATION
const image = document.getElementById('image');
const caption = document.getElementById('caption');
const back = document.getElementById('back');
const forward = document.getElementById('forward');

// CURRENT FIRST PART OF THE STRING PATH
const culm_max = 10
const culm_img_path = '/static/img/culm/culmination';
let culm_current_img = 1;

// TEXT THAT WOULD BE CHANGING
const captions = [
    'Inputs',
    'Repetition Structures',
    'Conditionals',
    'Functions',
    'Lists',
    'Tuples',
    'Strings with Methods',
    'Files and Exceptions',
    'Classes and Objects',
    'GUI'
];

// GOING BACK VS FORTH FUNCTION
const change_up = async () => {

    // CHANGES THE INDEX
    if (culm_current_img == culm_max){
        culm_current_img = 1;
    }
    else {

        culm_current_img += 1;
    }

    // IMAGE CHANGING ANIMATION
    forward.disabled = true
    image.classList.toggle('change_fwd');
    let stop = await espera(500);
    image.setAttribute('src', `${culm_img_path}${culm_current_img}.png`);
    let stop2 = await espera(500);
    image.classList.toggle('change_fwd');
    let stop3 = await espera(100);
    forward.disabled = false;

    // CHANGE THE CAPTION
    caption.innerText = captions[culm_current_img-1]

}
const change_down = async () => {


    // CHANGES THE INDEX

    if (culm_current_img == 1){
        culm_current_img = culm_max;
    }
    else {

        culm_current_img -= 1;
    }
    // CHANGES IMAGE AND CAPTION

    back.disabled = true
    image.classList.toggle('change_bwd');
    let stop = await espera(500);
    image.setAttribute('src', `${culm_img_path}${culm_current_img}.png`);
    let stop2 = await espera(500);
    image.classList.toggle('change_bwd');
    let stop3 = await espera(100);
    back.disabled = false

    caption.innerText = captions[culm_current_img-1]


}



// EVENT HANDLERS

back.addEventListener('click', () => {

    change_down()

});

forward.addEventListener('click', () => {
    
    change_up()

});