// import React from 'react'
// import './ChinaSlideshow.css'
// import ForbiddenCity from "../Components/images/china-forbidden-city-beijing.JPG";
// import GreatWall from "../Components/images/china-great-wall.JPG";
// import Terracotta from "../Components/images/china-terracotta-warriors-xian.jpg";
// let slideIndex = 1;
// var slides;
// let dots;
// class ChinaSlideshow extends React.Component {
// componentWillMount() {
//   slides = document.getElementsByClassName("mySlides");
//   dots = document.getElementsByClassName("dot");
  
// }
  
//   // showSlides(slideIndex);
  
//   // Next/previous controls
//    plusSlides(n) {
//     this.showSlides(slideIndex += n);
//   }
  
//   // Thumbnail image controls
//    currentSlide(n) {
//     this.showSlides(slideIndex = n);
//   }
  
//    showSlides(n) {
//     var i;
//     if (n > slides.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     // slides[slideIndex-1].style.display = "block"; 
//     // dots[slideIndex-1].className += " active";
//   }

// render() {
//   return (
//   <div>
// <div className="slideshow-container">

//   <div className="mySlides fade">
//     <img src={ForbiddenCity} style={{width:"100%"}}/>
//     <div className="text">Forbidden City</div>
//   </div>

//   <div className="mySlides fade">
//     <img src={GreatWall} style={{width:"100%"}}/>
//     <div className="text">Great Wall of China</div>
//   </div>

//   <div className="mySlides fade">
//     <img src={Terracotta} style={{width:"100%"}}/>
//     <div className="text">Terracotta Warriors</div>
//   </div>
//   <a className="prev" onclick={this.plusSlides(-1)}>&#10094;</a>
//   <a className="next" onclick={this.plusSlides(1)}>&#10095;</a>
// </div>

// <br/>

// <div style={ {alignContent: "center"}} >
//   <span className="dot" onclick={this.currentSlide(1)}></span> 
//   <span className="dot" onclick={this.currentSlide(2)}></span> 
//   <span className="dot" onclick={this.currentSlide(3)}></span> 
// </div>
//   </div>
//   )}}

//   export default ChinaSlideshow