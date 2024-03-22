 $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop:true, /* Boucler le carousel */
            items:1, /* Nombre d'éléments à afficher à la fois */
            nav:true, /* Afficher les flèches de navigation */
            autoplay:true, /* Lecture automatique */
            autoplayTimeout:5000, /* Durée entre chaque diapositive (en millisecondes) */
            autoplayHoverPause:true, /* Pause en survol */
            animateOut: 'fadeOut', /* Animation de sortie */
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            },
            animateIn: 'fadeIn', /* Animation d'entrée */
            navText: ['<i class="fa fa-angle-up"></i>','<i class="fa fa-angle-down"></i>'], /* Personnaliser les icônes de navigation */
            responsiveRefreshRate: 200, /* Taux de rafraîchissement responsive */
            center: true, /* Centrer les éléments */
            dots: false /* Masquer les indicateurs de pagination */
        });
    });




/* class caroussel{
    /**
     * 
     * @param {HTMLElement} element 
     * @param {object} option 
     * @param {object} options.slidesToScroll Nombre d'element a faire defiler
     *  @param {object} options.slidesVisible Nombre d'element a Visible dans un slide
     */
    /*
    constructor(element, option ={}){
      this.element = element
      this.option = Object.assign({},{
        slidesToScroll:1,
        slidesVisible:1
      }, option)
      this.children = [].slice.call(element.children)
      let ratio = this.children.length / this.option.slidesVisible
      let root = this.createDivWithClass('ccarousel')
      let contain = this.createDivWithClass('ccarousel__contain')
      contain.style.width = (ratio * 100) + "%"
      root.appendChild(contain)
      this.element.appendChild(root)
    this.children.forEach((child) => {
      let item =  this.createDivWithClass('ccarousel__items')
      item.style.width = ((100/this.option.slidesVisible)/ratio) + "%"
      item.appendChild(child)
        contain.appendChild(child)
    });
    }
    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */
    /*
 createDivWithClass(className){
 let div = document.createElement('div')
 div.setAttribute('class', className)
 return div
 }

}

document.addEventListener('DOMContentLoaded',function(){
    new caroussel(document.querySelector('#carrousel1'),{
        slidesToScroll:2,
        slidesVisible:4
    }
    )
})

  */