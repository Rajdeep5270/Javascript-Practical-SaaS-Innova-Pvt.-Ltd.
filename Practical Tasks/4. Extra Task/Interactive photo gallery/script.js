let allImages = [];

const urlInput = document.getElementById("urlInput");
const imageView = document.getElementById("imageView");
const enlargedImage = document.getElementById("enlargedImage");

const enlarged = document.getElementById("enlarged");

function addImage(event) {
    event.preventDefault();

    allImages.push({
        id: Math.floor(Math.random() * 1000),
        imageUrl: urlInput.value
    });

    renderImages();

    urlInput.value = "";
}

function renderImages() {
    imageView.innerHTML = "";

    allImages.forEach(img => {
        imageView.innerHTML += `
                    <div class="w-3 w-md-2 w-sm-1">
                        <div class="gallery-content position-relative" id="imageContainer">
                            <img src="${img.imageUrl}" onclick="viewLargeImage(${img.id})" alt="">
                            <div class="image-overlay position-absolute d-flex">
                                <button onclick="deleteImg(${img.id})">Delete</button>
                            </div>
                        </div>
                    </div>
            
        `;
    })
}

function deleteImg(deleteId) {
    // console.log("Delete ID : ", deleteId);

    allImages = allImages.filter(img => deleteId !== img.id);

    renderImages();
}

function viewLargeImage(viewId) {
    // console.log("View Image ID : ", viewId);
    // enlarged.style.display = "flex";

    const img = allImages.find(img => img.id === viewId);

    enlargedImage.setAttribute('src', `${img.imageUrl}`);
}

function hideEnlargedImage() {
    enlargedImage.setAttribute('src', '');
}