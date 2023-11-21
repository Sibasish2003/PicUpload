function uploadAndEdit() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');
  
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function() {
          imagePreview.src = img.src;
          imagePreviewContainer.style.display = 'block';
        };
      };
      reader.readAsDataURL(file);
    }
  }
  
  function saveEditedImage() {
    const canvas = document.createElement('canvas');
    const imagePreview = document.getElementById('imagePreview');
    const editedImageCanvas = document.getElementById('editedImageCanvas');
    const imageGallery = document.getElementById('imageGallery');
  
    canvas.width = imagePreview.width;
    canvas.height = imagePreview.height;
  
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imagePreview, 0, 0, canvas.width, canvas.height);
  
    const editedImage = new Image();
    editedImage.src = canvas.toDataURL('image/png');
  
    // Display the edited image in the gallery section
    displayInGallery(editedImage);
  
    // You would typically save the edited image to a server here
  }
  
  function displayInGallery(image) {
    const imageGallery = document.getElementById('imageGallery');
    const galleryImage = document.createElement('img');
    galleryImage.src = image.src;
  
    // Set a class for each image for styling purposes
    galleryImage.classList.add('gallery-image');
  
    // Append the edited image to the gallery
    imageGallery.appendChild(galleryImage);
  }
  