
// Select some elements...

let header = document.querySelector('#page-header');
header.style.textAlign = 'left';

let dogImages = document.querySelectorAll('.dog-image');
for (let i = 0; i<dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px';
    // Flip the images so they are upside down.
    dogImages[i].style.transform = 'scaleY(-1)';
}


// Make the dogs' names align to the left.
let dogNames = document.querySelectorAll(".dog-name");
for (let i = 0; i<dogNames.length; i++){
    dogNames[i].style.textAlign = 'left';
}

// Change the color of the footer text.
let footer = document.querySelector(".footer");
footer.style.color = "yellow";
footer.style.borderStyle = 'solid';