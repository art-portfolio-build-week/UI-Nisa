// class Carousel{
//     constructor(carousel){
//         this.carousel = carousel;
//         this.imgs = this.carousel.querySelectorAll('a.img3 img');
//         console.log(imgs);
//         this.leftBtn = this.carousel.querySelector('.left-button');
//         this.rightBtn = this.carousel.querySelector('.right-button');
//         this.index = 0;
//         this.imgs[this.index].style.display = 'block';
//         this.leftBtn.addEventListener('click', () => this.toggleLeft());
//         this.rightBtn.addEventListener('click', () => this.toggleRight());
//     }
//     toggleLeft(){
//         this.imgs[this.index].style.display ='none';

//         if(this.index === 0){
//             this.index = this.imgs.length -1;
//         } else {
//             this.index--;
//         }
//         this.imgs[this.index].style.display = 'block';
//     }
//     toggleRight(){
//         this.imgs[this.index].style.display ='none';

//         if(this.index === this.imgs.length -1){
//             this.index = 0;
//         } else {
//             this.index++;
//         }
//         this.imgs[this.index].style.display = 'block';
//     }

// }

// let carousels = document.querySelectorAll('.carousel');
// carousels.forEach(carousel => new Carousel(carousel));
// // console.log('carousels', carousels);
