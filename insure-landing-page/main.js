let mobile_btn = document.getElementById('mobile__btn');
let close_btn = document.getElementById('cross');
let def_btn = document.getElementById('threelines')
let mobile_nav = document.getElementById('mobile--menu');
let body = document.getElementById('body');

mobile_btn.addEventListener('click', () => {
  mobile_nav.classList.toggle('active')
  body.classList.toggle('overflow_hidden')

  if(mobile_nav.classList.contains('active')) {

    close_btn.classList.add('opacity_show');
    close_btn.classList.remove('opacity_noshow');
    def_btn.classList.add('opacity_noshow');
    def_btn.classList.remove('opacity_show');
  } else {

    def_btn.classList.add('opacity_show');
    def_btn.classList.remove('opacity_noshow');
    close_btn.classList.add('opacity_noshow');
    close_btn.classList.remove('opacity_show');
  }

})
