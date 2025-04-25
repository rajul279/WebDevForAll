function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
    console.log("upDate triggered on:", previewPic.alt);
}

function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over or focus on an image below to display it here.";
    console.log("unDo triggered");
}

function initGallery() {
    console.log("Page loaded – initializing tabindex");
    const images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log(`Tabindex set on image ${i + 1}`);
    }
}
