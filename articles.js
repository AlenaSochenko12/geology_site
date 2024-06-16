document.addEventListener('DOMContentLoaded', function() {
    const objects = document.querySelectorAll('.article');
    const content = document.getElementById('content');
    const objectInfo = document.getElementById('object-info');
    const titleContent = document.getElementById('title-content');
    const infoContent = document.getElementById('info-content');
    const backButton = document.getElementById('back-button');

    function showObjectInfo(title, text) {
      titleContent.textContent = `${title}`;
      infoContent.innerHTML = `<p>${text}</p>`;
      objectInfo.style.display = 'block';
      content.style.display = 'none';
    }

    objects.forEach(object => {
      object.addEventListener('click', function() {
        const objectTitle = this.getAttribute('data-title');
        const objectText = object.querySelector('.article-text').innerHTML;
        showObjectInfo(objectTitle, objectText);
      });
    });

    backButton.addEventListener('click', function() {
      objectInfo.style.display = 'none';
      content.style.display = 'block';
    });
  });
  