
// preloader 

setTimeout(function(){
  $('div#preloader').fadeOut(1000);
},2000)


// lightslider
window.onscroll=function(){
  // email anim.
  if(document.documentElement.scrollTop>1800){
    document.querySelector('.text1foremail').classList.add('textanim')
  }
  else{
    document.querySelector('.text1foremail').classList.remove('textanim');
  }
  // aboutpg
  if(document.documentElement.scrollTop>155){
    // console.log('Scrolled')
    let about_anim=document.querySelectorAll('.scrollanim');
    about_anim.forEach(function(about_anim){
      about_anim.classList.add('anim');
      document.querySelector('.lorem-effect').classList.add('leanim');
      document.querySelector('.scroll-prompt').classList.add('srolodavis');
    })
  }
  else{
      let about_anim=document.querySelectorAll('.scrollanim');
      
      about_anim.forEach(function(about_anim){
        about_anim.classList.remove('anim');
        document.querySelector('.lorem-effect').classList.remove('leanim');
        document.querySelector('.scroll-prompt').classList.remove('srolodavis');
      });
    }
}

document.querySelectorAll('.lorem-text:hover').classList.add('leanim');
document.querySelectorAll('.lorem-text:hover').classList.remove('leanim');
// scroll navigation
$('a.home').click(function(e) {
      $('html, body').animate({
          scrollTop: $("div.home-content").offset().top,
      }, 1000);
      $('div.home-content').show(1000)
      e.preventDefault();
  });
  $('a.about').click(function(e) {
        $('html, body').animate({
            scrollTop: $("div.about-content").offset().top,
        }, 1000);
        $('div.about-content').show(1000)
        $('a.home .span').css({"color":"white"});
        e.preventDefault();
    });
$("a.products").click(function(e) {
      $('html, body').animate({
          scrollTop: $("div.product-content").offset().top,
      }, 1000);
      $('div.product-content').show(1000)
      e.preventDefault();
  });
  $('a.contact').click(function(e) {
        $('html, body').animate({
          scrollTop: $("div.footer").offset().top,
        }, 1000);
        $('div.footer').show(1000)
        e.preventDefault();
    });

  gsap.utils.toArray(".e1_37").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: true,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { y: -100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      }
    });
  });



  var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 6000);
  };

  var classname = document.getElementsByClassName("button");

  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }


  var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 6000);
  };

  var classname = document.getElementsByClassName("button");

  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }