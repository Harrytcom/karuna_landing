const likeButton = document.querySelector('.more-info__like-button');

function likeHandler() {
    likeButton.classList.toggle('more-info__like-button_is-active');
      }
      
likeButton.addEventListener('click', () => likeHandler());