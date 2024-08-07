$(document).ready(function(){
$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navBar').toggleClass('nav-toggle');

});

$(window).on('scroll load' , function(){
// $('fa.bars').toggleClass('fa-times');
// $('.navBar').toggleClass('nav-toggle');

if($(window).scrollTop() > 30){
$('header').addClass('header-active');
}
else{
    $('header').removeClass('header-active');
}
});
});
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav a');
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
  });