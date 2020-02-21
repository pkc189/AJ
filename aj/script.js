window.onload = function () {


  const nav = document.querySelector('#nav');
  const menu = document.querySelector('#menu');
  const menuToggle = document.querySelector('.nav__toggle');

  let categories = document.querySelector('.categories');

  let isMenuOpen = false;


  // TOGGLE MENU ACTIVE STATE
  menuToggle.addEventListener('click', e => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;

    // toggle a11y attributes and active class
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle('nav--open');
  });


  const main = document.querySelector(".main");





  // TRAP TAB INSIDE NAV WHEN OPEN
  nav.addEventListener('keydown', e => {
    // abort if menu isn't open or modifier keys are pressed
    if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
      return;
    }

    // listen for tab press and move focus
    // if we're on either end of the navigation
    const menuLinks = menu.querySelectorAll('.nav__link');
    if (e.keyCode === 9) {
      if (e.shiftKey) {
        if (document.activeElement === menuLinks[0]) {
          menuToggle.focus();
          e.preventDefault();

        }
      } else if (document.activeElement === menuToggle) {
        menuLinks[0].focus();
        e.preventDefault();

      }
    }
  });

  let singleDivCollection = document.querySelector(".single_click_div");
  let bottom = document.querySelector(".bottom");

  let men_shirt = {

    name: ["FABRICS", 'MODEL', 'SLEEVE', 'CUFF', 'COLLAR', 'PLACKET', 'BOTTOM CUT', 'BUTTONS', 'POCKET', 'BACK DETAILS', 'ELBOW PATCH', 'BUTTON HOLES', 'BUTTON THREAD', 'MONOGRAM'],

    img: [
      '/img/mens/men-shirt/1model.png',
      './img/mens/men-shirt/1model.png',
      './img/mens/men-shirt/2sleeve.png',
      './img/mens/men-shirt/3cuff.png',
      './img/mens/men-shirt/4collar.png',
      './img/mens/men-shirt/5placket.png',
      './img/mens/men-shirt/6bottom_cut.png',
      './img/mens/men-shirt/7buttons.png',
      './img/mens/men-shirt/8pocket.png',
      './img/mens/men-shirt/9back.png',
      './img/mens/men-shirt/10elbow_patch.png',
      './img/mens/men-shirt/11button_holes.png',
      './img/mens/men-shirt/12button_thread.png',
      "./img/mens/men-shirt/12button_thread.png",
    ],


    class: [

      'fabrics b',
      'model b',
      'sleeve b',
      'cuff b',
      'collar b',
      'placket b',
      'bottom_cut b',
      'buttons b',
      'pocket b',
      'back_details b',
      'elbow_patch b',
      'button_holes b',
      'button_thread b',
      'monogram b',

    ],

    fabrics: {
      name: [],
      img: []
    },
    model: {
      name: ['SLIM', 'TAILORED', 'REGULAR'],
      img: ['', '', '']
    },
    sleeve: {

      name: []
    }





  };

  let men_suit = {

    name: ['FABRICS', 'JACKET STYLE', 'BODY FIT', 'CUTAWAY', 'LAPEL', 'JACKET BUTTON', 'VENTS', 'SUIT POCKET', 'LAPEL BUTTON HOLE', 'CUFF BUTTON STYLE', 'PLEATS', 'BELT', 'BOTTOM CUFF', 'CHEST POCKET', 'BACK POCKET', 'TROUSER BUTTON', 'MODEL', 'INNER LINING', 'THE TYPE', 'WAISTCOAT STYLE', 'WAISTCOAT BOTTOM', 'WAISTCOAT BACK DETAIL', 'WAISTCOAT BUTTON', 'WAISTCOAT POCKET', 'SUSPENDER BUTTON'

    ],

    img: [
      './img/mens/men-suit/.png',
      './img/mens/men-suit/1jacket_style.png',
      './img/mens/men-suit/2body_fit.png',
      './img/mens/men-suit/3cutaway.png',
      './img/mens/men-suit/4lapel.png',
      './img/mens/men-suit/5jacketbutton.png',
      './img/mens/men-suit/6vents.png',
      './img/mens/men-suit/7suitpockets.png',
      './img/mens/men-suit/8lapel_button_hole.png',
      './img/mens/men-suit/9cuff_button_style.png',
      './img/mens/men-suit/10pleats.png',
      './img/mens/men-suit/11belts.png',
      './img/mens/men-suit/12bottom_cuff.png',
      './img/mens/men-suit/13chest_pocket.png',
      './img/mens/men-suit/14back_pocket.png',
      './img/mens/men-suit/15trouser_button.png',
      './img/mens/men-suit/16inner_lining.png',
      './img/mens/men-suit/17tie_type.png',
      './img/mens/men-suit/18waist_coat_style.png',
      './img/mens/men-suit/19waist_coat_bottom.png',
      './img/mens/men-suit/20waist_coat_back_detail.png',
      './img/mens/men-suit/21waist_coat_button.png',
      './img/mens/men-suit/22waist_coat_pocket.png',
      './img/mens/men-suit/23suspender_button.png',



    ],


  }
  let men_trouser = {
    name: ['FABRICS',
      'TROUSER FIT',
      'PLEATS',
      'BOTTOM CUFF',
      'BACK POCKET',
      'BELT',
      'BELT LOOP'

    ],



    img: [
      './img/mens/men-trouser/.png',
      './img/mens/men-trouser/1trouser_fit.png',
      './img/mens/men-trouser/2pleats.png',
      './img/mens/men-trouser/3bottom_cuff.png',
      './img/mens/men-trouser/4back_pocket.png',
      './img/mens/men-trouser/5belt.png',
      './img/mens/men-trouser/6belt_loop.png',
    ],

  };

  let men_waistcoat = {
    name: [
      'FABRICS',
      'FRONT BOTTOM',
      'JACKET BUTTON',
      'BACK DETAIL',
      'POCKET'
    ],

    img: [
      './img/mens/men-waistcoat/.png',
      './img/mens/men-waistcoat/1front_bottom.png',
      './img/mens/men-waistcoat/2jacket_button.png',
      './img/mens/men-waistcoat/3back_detail.png',
      './img/mens/men-waistcoat/4pocket.png',



    ],





  };


  let men_jacket = {
    name: [
      ' FABRICS',
      'JACKET STYLE',
      'BODY FIT',
      'CUT AWAY',
      'LAPEL',
      'JACKET BUTTON',
      'VENTS',
      'SUIT POCKET',
      'LAPEL BUTTON HOLE',
      'CUFF BUTTON STYLE',
      'PLEATS',
      'BELT',
      'BOTTOM CUFF',
      'CHEST POCKET',
      'BACK POCKET',
      'TROUSER BUTTON',
      'MODEL',
      'INNER LINING',
      'TIE TYPE',
      'WAISTCOAT STYLE',
      'WAISTCOAT BOTTOM',
      'WAISTCOAT BACK DETAIL',
      'WAISTCOAT BUTTON',
      'WAISTCOAT POCKET',
      'SUSPENDER BUTTON'
    ],


    img: [
      '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''

    ]

  };



  let men_sherwani = {
    name: [
      'FABRICS', 'SHERWANI STYLES', 'COLLAR', 'PLACKET'

    ],

    img: ['', '', '', '', '']

  };




  let men_bundys = {
    name: [
      'FABRICS', 'BUNDY STYLE', 'PLACKET', 'PLACKET'

    ],

    img: ['', '', '', '']

  };


  let men_shirt_trouser = {
    name: [
      'FABRICS', 'MODEL', 'SLEEVE', 'CUFF', 'COLLAR', 'PLACKET', 'BOTTOM CUT', 'BUTTONS', 'BUTTON HOLES', 'BUTTON THREAD', 'BACK DETAILS', 'POCKET', 'EPAULETTES', 'ELBOW PATCH', 'TROUSER BOTTOM', 'PLEATS'

    ],

    img: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

  };



  let men_jacket_trouser = {
    name: [
      'FABRICS', 'JACKET STYLE', 'BODY FIT', 'CUT AWAY', 'LAPEL', 'VENTS', 'JACKET POCKET', 'JACKET BUTTON', 'CUFF BUTTON STYLE', 'CHEST POCKET', 'MODEL'

    ],

    img: ['', '', '', '', '', '', '', '', '', '', '']

  };

  let men_polo_shirt = {
    name: [
      'FABRICS', 'MODEL', 'SLEEVE', 'COLLAR', 'PLACKET', 'BOTTOM CUT', 'BUTTONS', 'POCKET'

    ],

    img: ['', '', '', '', '', '', '', '']

  };

  let men_arab_jacket = {
    name: [
      'FABRICS', 'ARAB JACKET STYLES', 'CAP STYLES', 'COLLAR', 'PLACKET', 'POCKET'

    ],

    img: ['', '', '', '', '', '']

  };


  let back = document.querySelector(".backfas");


  function deleteChild() {
    //var e = document.querySelector("ul"); 

    //e.firstElementChild can be used. 
    var child = bottom.lastElementChild;
    while (child) {
      bottom.removeChild(child);
      child = bottom.lastElementChild;
    }
  }

  function bk() {

    var child = singleDivCollection.lastElementChild;
    while (child) {
      singleDivCollection.removeChild(child);
      child = singleDivCollection.lastElementChild;
    }

    singleDivCollection.style.display = "none";
    bottom.style.display = "block";
    //back.style.display="none";
  }



  function deleteChild2() {
    //var e = document.querySelector("ul"); 

    //e.firstElementChild can be used. 
    var child = singleDivCollection.lastElementChild;
    while (child) {
      singleDivCollection.removeChild(child);
      child = bottom.lastElementChild;
    }
  }


  const c = document.querySelector(".men_collection_list").children;
  for (let i = 0; i < c.length; i++) {
    c[i].onclick = function () {
      if (i == 0) {

        // console.log(this);
        deleteChild();

        for (let j = 0; j < men_shirt.name.length; j++) {

          bottom.style.width = `${men_shirt.name.length*(100 + 25)}` + "px";



          bottom.innerHTML += `<div class="b"><img src="${men_shirt.img[j]}" ><span>${men_shirt.name[j]}</span></div>`;


          // c[i].onclick=false;






        }

        var subdiv = bottom.querySelectorAll(".b");

        for (let j = 0; j < c.length; j++) {
          subdiv[j].onclick = function () {
            deleteChild2();

            if (j == 0) {
              // singleDivCollection.innerHTML=`<div class="backfas"><i class="fas fa-long-arrow-alt-left"></i><span>Back</div>
              // `;

              back.style.display = "block";

              for (let k = 0; k < 269; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${260*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }

            } else if (j == 1) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 3; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${3*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }


              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }

            } 
            else if (j == 2) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 3; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${2*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 3) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 4; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${4*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 4) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 3; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${3*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 5) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 3; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${3*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 
            else if (j == 6) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 3; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${3*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 7) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 5; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${5*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 8) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 2; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${2*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 


            else if (j == 9) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 2; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${2*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 10) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 2; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${2*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 
 
            else if (j == 11) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 2; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${2*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 12) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 5; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${5*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else if (j == 13) {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 4; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${4*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 

            else  {
              deleteChild2();
              back.style.display = "block";
              for (let k = 0; k < 1; k++) {
                bottom.style.display = "none";
                singleDivCollection.style.width = `${1*(100 + 25)}` + "px";
                singleDivCollection.style.display = "block";
                let div = document.createElement("div");
                div.classList = "b";
                div.innerHTML += `<img src="" alt=""><span>ffff</span>`
                singleDivCollection.appendChild(div);
              }

              back.onclick = function () {

                var child = singleDivCollection.lastElementChild;
                while (child) {
                  singleDivCollection.removeChild(child);
                  child = singleDivCollection.lastElementChild;
                }

                singleDivCollection.style.display = "none";
                bottom.style.display = "block";
                //back.style.display="none";
              }


            } 
            //  console.log(this);
          }
        }


        //}
      } else if (i == 1) {

        deleteChild();


        for (let j = 0; j < men_suit.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_suit.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_suit.img[j]}" ><span>${men_suit.name[j]}</span></div>`;


          // console.log(bottom);

          // c[i].onclick=false;

        }

      } else if (i == 2) {

        deleteChild();


        for (let j = 0; j < men_trouser.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_trouser.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_trouser.img[j]}" ><span>${men_trouser.name[j]}</span></div>`;


          //  console.log(bottom);

          // c[i].onclick=false;

        }

      } else if (i == 3) {

        deleteChild();


        for (let j = 0; j < men_waistcoat.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_waistcoat.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_waistcoat.img[j]}" ><span>${men_waistcoat.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        };

      } else if (i == 4) {

        deleteChild();


        for (let j = 0; j < men_jacket.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_jacket.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_jacket.img[j]}" ><span>${men_jacket.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        }

      } else if (i == 5) {

        deleteChild();


        for (let j = 0; j < men_sherwani.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_sherwani.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_sherwani.img[j]}" ><span>${men_sherwani.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        }

      } else if (i == 6) {

        deleteChild();


        for (let j = 0; j < men_bundys.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_bundys.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_bundys.img[j]}" ><span>${men_bundys.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        }

      } else if (i == 7) {

        deleteChild();


        for (let j = 0; j < men_shirt_trouser.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_shirt_trouser.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_shirt_trouser.img[j]}" ><span>${men_shirt_trouser.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        }

      } else if (i == 8) {

        deleteChild();


        for (let j = 0; j < men_jacket_trouser.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_jacket_trouser.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_jacket_trouser.img[j]}" ><span>${men_jacket_trouser.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        }

      } else if (i == 9) {

        deleteChild();


        for (let j = 0; j < men_polo_shirt.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_polo_shirt.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_polo_shirt.img[j]}" ><span>${men_polo_shirt.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        }

      } else {

        deleteChild();


        for (let j = 0; j < men_arab_jacket.name.length; j++) {

          //   alert(`${men_suit.name.length*(100 + 25)}`);

          bottom.style.width = `${men_arab_jacket.name.length*(100 + 25)}` + "px";

          bottom.innerHTML += `<div ><img src="${men_arab_jacket.img[j]}" ><span>${men_arab_jacket.name[j]}</span></div>`;


          //console.log(bottom);

          // c[i].onclick=false;

        }

      }



      // end  . ...................................

    }
  }
}