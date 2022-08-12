export default function mediaFactory(data) {
  const {
    image, title, likes, video,
  } = data;

  const picture = `assets/photographers/${image}`;
  const lecteurVideo = `assets/photographers/${video}`;
  function getMediaCard() {
    const article = document.createElement('article');

    const infoPicture = document.createElement('div');
    infoPicture.classList.add('text-picture');

    const imgTitle = document.createElement('div');
    imgTitle.classList.add('title-img');

    const likeImg = document.createElement('div');
    likeImg.classList.add('like-heart');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const numberLike = document.createElement('p');
    numberLike.textContent = `${likes}`;
    numberLike.style.cursor = 'pointer';
    numberLike.setAttribute('tabindex', '1');

    const heart = document.createElement('p');
    heart.textContent = '♥';
    heart.style.cursor = 'pointer';

    article.appendChild(infoPicture);
    if (data.image) {
      const imageWork = document.createElement('img');
      imageWork.setAttribute('src', picture);
      imageWork.setAttribute('alt', title);
      imageWork.setAttribute('tabindex', 1);
      imageWork.classList.add('img-work');
      imageWork.style.cursor = 'pointer';
      article.appendChild(imageWork);
    } else {
      const videos = document.createElement('video');
      videos.setAttribute('src', lecteurVideo);
      videos.setAttribute('alt', title);
      videos.setAttribute('type', 'video/mp4');
      videos.setAttribute('tabindex', 1);
      videos.style.cursor = 'pointer';
      videos.classList.add('img-work');
      article.appendChild(videos);
    }
    article.appendChild(infoPicture);

    infoPicture.appendChild(imgTitle);
    infoPicture.appendChild(likeImg);

    imgTitle.appendChild(h2);

    likeImg.appendChild(numberLike);
    likeImg.appendChild(heart);

    let clicked = false;

    likeImg.addEventListener('click', () => {
      if (!clicked) {
        clicked = true;
        numberLike.textContent++;
      } else {
        clicked = false;
        numberLike.textContent--;
      }
    });

    return (article);
  }
  return { getMediaCard };
}
