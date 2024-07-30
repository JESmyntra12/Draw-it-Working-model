function fetchImages() {
    
    const imageName = document.getElementById('imageName').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    const images = {
        'yellow one shoulder top': ['images/yellow1.png', 'images/yellow2.png'],
        
        // Add more image arrays as needed
    };

    if (images[imageName]) {
        images[imageName].forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = imageName;
            imageContainer.appendChild(img);
        });
    } else {
        imageContainer.innerHTML = '<p>Images not found</p>';
    }
}
