// Code goes here
  // JavaScript to toggle checkbox when span is clicked
  const checkboxIcon = document.getElementById('checkboxIcon');
  const checkbox = document.getElementById('menu-btn');

  checkboxIcon.addEventListener('click', function() {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
      checkboxIcon.classList.add('checked');
    } else {
      checkboxIcon.classList.remove('checked');
    }
  });

//home typewrite effect script
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// ------------------------------------------------------------------------------
$(document).ready(function(){

  // Header FadeIn Effect
  $('#header').hide();
  $('#header').fadeIn(1000);

  // Responsive Navbar Hide effect
  $('#responsive-navbar').hide();

  // Responsive Menu Activation
  $('#checkboxIcon').click(function(){
    $('#responsive-navbar').slideToggle();
  });

  // Responsive Menu Hiding Effect
  $('#home-menu , #projects-menu , #blogs-menu , #other-menu').click(function(){
    $('#responsive-navbar').slideToggle();
  })


  // Moving Arrow FadeIn Effect
  $('#moving-arrow').hide();
  $('#moving-arrow').fadeIn(1000);


  // Welcome Section Title FadeIn Effect
  $('#welcome-section-title').hide();
  $('#welcome-section-title').fadeIn(1000);








  // //Responsive menu
  // $("#responsive-nav-bar").hide();

  // $("#image-button-black").click(function(){
  //   $("#responsive-nav-bar").slideToggle();
  // });

  // $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
  //   $("#responsive-nav-bar").slideToggle(200);
  // });


})
