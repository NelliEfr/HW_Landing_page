var slider = document.getElementsByClassName("portfolio-item");
var currentIndex = 1;
displaySlide(currentIndex);

function changeIndex(index){
    displaySlide(currentIndex = currentIndex+index)
}
function displaySlide(index){
    if (index<1){
        currentIndex = slider.length;
    }
    if (index>slider.length){
        currentIndex = 1;
    }
   for (var i = 0; i < slider.length; i++){
    slider[i].style.display = "none";
   }
   slider[currentIndex-1].style.display = "block";

}