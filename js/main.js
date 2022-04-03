window.onload = function() {
    var elem = document.querySelector('.grid');
	var msnry = new Masonry( elem, {
  	// options
  	itemSelector: '.grid-item',
  	gutter: 18,
	});
 };

$(document).ready(function () {
    $(".header_contacts").click(() => $('html,body').animate({
        scrollTop: $("#contacts").offset().top
    }, 'slow'));

    $('select').styler();
});


const menu_icon = document.querySelector('.menu_icon');
const menu = document.querySelector('.menu');
const menu_wrapper = document.querySelector('.menu_wrapper');
const menu_close = document.querySelector('.menu_close');
const body = document.querySelector('body');
const header_contacts = document.querySelector('.header_contacts');

menu_icon.addEventListener('click', function () {
    menu.classList.toggle('active');
    menu_wrapper.style.display = 'block';
    body.style.overflow = 'hidden';
})

menu_wrapper.addEventListener('click', function () {
    menu.classList.toggle('active');
    menu_wrapper.style.display = 'none';
    body.style.overflow = 'visible';
})

menu_close.addEventListener('click', function () {
    menu.classList.toggle('active');
    menu_wrapper.style.display = 'none';
    body.style.overflow = 'visible';
})


const FAQBodyCollapses = document.querySelectorAll('.FAQ_body-collapse');

FAQBodyCollapses.forEach(collapse => {
    collapse.addEventListener('click', function () {
        
        const currentlyActiveCollapse = document.querySelector('.FAQ_body-collapse.active');
        if(currentlyActiveCollapse && currentlyActiveCollapse !== collapse){
            currentlyActiveCollapse.classList.remove('active');
            currentlyActiveCollapse.children[1].style.maxHeight = 0;
        }
        collapse.classList.toggle('active')
        if(collapse.classList.contains('active')){
            collapse.children[1].style.maxHeight = collapse.children[1].scrollHeight + 'px';
        }else{
            collapse.children[1].style.maxHeight = 0;
        }

        // if (link.classList.contains('active')) {
        //     link.classList.remove('active')
        // } else {
        //     FAQBodyCollapses.forEach(lik => {
        //         lik.classList.remove('active')
        //     })
        //     this.classList.add('active')
        // }
    })
})


let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("google_map"), {
        center: new google.maps.LatLng(56.973363, 24.050690),
        zoom: 16,
    });
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(56.973363, 24.050690),
        icon: {
            url: 'img/map_logo.png',
        },
        map: map,
    });
};
initMap();

header_contacts.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    menu_wrapper.style.display = 'none';
    body.style.overflow = 'visible';
})
