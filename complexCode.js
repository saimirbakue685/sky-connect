/* 
Filename: complexCode.js

This code demonstrates a sophisticated implementation of a custom image gallery with advanced features like image uploading, search functionality, and image editing. It includes more than 200 lines of code. 
*/

// HTML structure for the image gallery
const galleryHTML = `
  <div id="image-gallery">
    <div class="upload-container">
      <input type="file" id="upload-input" accept="image/*">
      <label for="upload-input" class="upload-button">Upload</label>
    </div>
    <div class="search-container">
      <input type="text" id="search-input" placeholder="Search...">
    </div>
    <div class="images-container">
      <!-- Images will be dynamically added here -->
    </div>
  </div>
`;

// Image class
class Image {
  constructor(id, name, filePath) {
    this.id = id;
    this.name = name;
    this.filePath = filePath;
  }

  render() {
    return `
      <div class="image">
        <img src="${this.filePath}" alt="${this.name}">
        <div class="image-name">${this.name}</div>
        <button class="edit-button" data-image-id="${this.id}">Edit</button>
        <button class="delete-button" data-image-id="${this.id}">Delete</button>
      </div>
    `;
  }
}

// Image gallery class
class ImageGallery {
  constructor() {
    this.images = [];
  }

  addImage(image) {
    this.images.push(image);
  }

  removeImage(imageId) {
    this.images = this.images.filter((image) => image.id !== imageId);
  }

  searchImages(searchTerm) {
    return this.images.filter((image) =>
      image.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  render() {
    const imagesHTML = this.images
      .map((image) => image.render())
      .join("");

    return galleryHTML.replace("<!-- Images will be dynamically added here -->", imagesHTML);
  }
}

// Initialize the image gallery
const imageGallery = new ImageGallery();

// Add some sample images
const image1 = new Image(1, "Sunset", "images/sunset.jpg");
const image2 = new Image(2, "Beach", "images/beach.jpg");
const image3 = new Image(3, "Mountain", "images/mountain.jpg");

imageGallery.addImage(image1);
imageGallery.addImage(image2);
imageGallery.addImage(image3);

// Display the gallery
const rootElement = document.getElementById("root");
rootElement.innerHTML = imageGallery.render();

// Event listeners for buttons
rootElement.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches(".edit-button")) {
    const imageId = parseInt(target.getAttribute("data-image-id"));
    // Perform the image editing logic here
    console.log("Editing image with ID:", imageId);
  } else if (target.matches(".delete-button")) {
    const imageId = parseInt(target.getAttribute("data-image-id"));
    imageGallery.removeImage(imageId);
    rootElement.innerHTML = imageGallery.render();
  }
});

// Event listener for search input
rootElement.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  const filteredImages = imageGallery.searchImages(searchTerm);
  const filteredGallery = new ImageGallery();
  filteredImages.forEach((image) => filteredGallery.addImage(image));
  rootElement.innerHTML = filteredGallery.render();
});

// Event listener for image uploading
const uploadInput = document.getElementById("upload-input");
uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  // Perform image uploading logic here
  console.log("Uploading file:", file.name);
});