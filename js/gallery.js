/* Name this external file gallery.js */

function upDate(previewPic){
    // Change background image to the one being hovered over
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change the text to the alt text of the hovered image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
    // Revert the background image and text to the original
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
