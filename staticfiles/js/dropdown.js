// GET THE DROPDOWN MENUS

let menus = document.querySelectorAll('.menu');

const adjust = (element) => {


    element.classList.toggle('active');

        // GROW THE CONTENT BLOCK WHEN CLICKED
        var content = element.querySelector('.content');
        content.classList.toggle('active');

        // SPIN THE MARKER SIDEWAYS

        var marker = element.querySelector('.marker');
        marker.classList.toggle('active');
        
        // ADJUST THE TITLE
        var title = element.querySelector('.title');
        title.classList.toggle('active');
}



menus.forEach(element => {
    
    element.addEventListener('click', (e) => {

        let expanded = false
        menus.forEach(menu => {

            if (menu.classList.contains('active') == true) {

                adjust(menu)
                expanded = true

        }});



        if (expanded == false) {adjust(element)};
        
       
    })
})
