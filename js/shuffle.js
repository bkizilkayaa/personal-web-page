function getRandomImg(){
        document.getElementById('show_img').src=`img/${getRandNumb()}.jpg`;
        document.getElementById('show_img2').src=`img/${getRandNumb()}.jpg`;
        document.getElementById('show_img3').src=`img/${getRandNumb()}.jpg`;
}
 //32 banner in my img package
function getRandNumb(){
    return Math.floor(Math.random() * 33); //generates a random number between 0 and 32
}
