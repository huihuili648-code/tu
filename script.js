document.addEventListener("DOMContentLoaded", function() {
    fetch('image_list.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const gallery = document.getElementById('image-gallery');
            gallery.innerHTML = ''; // Clear the "loading failed" message
            if (data && Array.isArray(data)) {
                data.forEach(imageName => {
                    const imageItem = document.createElement('div');
                    imageItem.className = 'image-item';
                    const img = document.createElement('img');
                    img.src = `images/${imageName}`;
                    img.alt = imageName;
                    imageItem.appendChild(img);
                    gallery.appendChild(imageItem);
                });
            } else {
                gallery.innerHTML = '<p>没有找到图片。</p>';
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            const gallery = document.getElementById('image-gallery');
            gallery.innerHTML = '<p>加载图片失败，请检查网络或稍后重试。</p>';
        });
});