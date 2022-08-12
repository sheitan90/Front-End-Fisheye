export default function photographerFactory(data) {
  const {
    name, portrait, city, country, tagline, price, id,
  } = data;

  const picture = `assets/photographers/${portrait}`;

  // creation carte des photographes  //
  function getUserCardDOM() {
    const article = document.createElement('article');
    const a = document.createElement('a');
    a.href = `photographer.html?id=${id}`;

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);

    const h2 = document.createElement('h2');
    h2.textContent = name;
    h2.setAttribute('aria-labelledby', name);

    const pays = document.createElement('p');
    pays.textContent = `${city}, ${country}`;
    pays.setAttribute('aria-labelledby', `${city} , ${country}`);

    const slogan = document.createElement('p');
    slogan.textContent = tagline;
    slogan.setAttribute('aria-labelledby', tagline);

    const prix = document.createElement('p');
    prix.textContent = `${price}€` + '/jour';
    prix.setAttribute('aria-labelledby', `${price}€` + '/jour');

    article.appendChild(a);
    article.appendChild(pays);
    article.appendChild(slogan);
    article.appendChild(prix);

    a.appendChild(img);
    a.appendChild(h2);

    return (article);
  }

  // création carte haut de page photographer par id //
  function getUserById() {
    const headerPhotographer = document.querySelector('.photograph-header');

    const contact = document.querySelector('.contact_button');

    const article = document.createElement('div');
    article.className = 'description-photographer';

    const imagePhotographe = document.createElement('div');
    imagePhotographe.className = 'image-photographer';

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const pays = document.createElement('p');
    pays.textContent = `${city}, ${country}`;

    const slogan = document.createElement('p');
    slogan.textContent = tagline;

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);

    headerPhotographer.appendChild(article);
    headerPhotographer.appendChild(contact);
    headerPhotographer.appendChild(imagePhotographe);

    article.appendChild(h2);
    article.appendChild(pays);
    article.appendChild(slogan);

    imagePhotographe.appendChild(img);

    return (article, imagePhotographe);
  }

  // Permet d'ajouter les likes dans le petit encart  //
  function getLikePriceDom(allMedia) {
    const allLike = allMedia.reduce(
      (previousLike, currentObject) => previousLike + currentObject.likes,
      0,
    );

    const bottomInfo = document.querySelector('.like-price');

    const likeBottom = document.createElement('div');
    likeBottom.classList.add('like-bottom');

    const priceBottom = document.createElement('div');
    priceBottom.classList.add('price-bottom');

    const like = document.createElement('p');
    like.classList.add('all-like');
    like.textContent = `${allLike}`;

    const heart = document.createElement('p');
    heart.classList.add('all-like');
    heart.textContent = '♥';

    const prix = document.createElement('p');
    prix.textContent = `${price}€/jour`;

    const likeImg = document.querySelectorAll('.like-heart');
    for (let i = 0; i < likeImg.length; i++) {
      let clicked = false;
      likeImg[i].addEventListener('click', () => {
        if (!clicked) {
          clicked = true;
          like.textContent = Number(like.textContent) + 1;
        } else {
          clicked = false;
          like.textContent = Number(like.textContent) - 1;
        }
      });
    }

    bottomInfo.appendChild(likeBottom);
    bottomInfo.appendChild(priceBottom);

    likeBottom.appendChild(like);
    likeBottom.appendChild(heart);
    priceBottom.appendChild(prix);
  }

  function lightBox() {
    const body = document.querySelector('#body');
    const lightbox = document.querySelector('.lightbox');
    const imgWork = document.querySelectorAll('.img-work');
    const nbImgWork = imgWork.length;
    const buttonClose = document.querySelector('.lightbox-close');
    const buttonNext = document.querySelector('.lightbox-next');
    const buttonPrev = document.querySelector('.lightbox-prev');
    const imageContainer = document.querySelector('.img-container');

    let count = 0;

    const openLightbox = () => {
      lightbox.style.display = 'flex';
      lightbox.classList.add('no-scroll');
      body.classList.add('no-scroll');
      buttonClose.focus();
    };

    const closeLightbox = () => {
      lightbox.style.display = 'none';
      body.classList.remove('no-scroll');
      buttonClose.focus();
    };

    function showImageLightbox(image) {
      imageContainer.innerHTML = '';
      imageContainer.append(image.cloneNode());
    }

    imgWork.forEach((image, i) => {
      image.addEventListener('click', () => {
        openLightbox();
        image.setAttribute('controls', '');
        showImageLightbox(image);
        count = i;
      });
    });

    imgWork.forEach((image, i) => {
      image.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          openLightbox();
          image.setAttribute('controls', '');
          showImageLightbox(image);
          count = i;
        }
      });
    });

    buttonClose.addEventListener('click', () => {
      closeLightbox();
    });

    function nextImg() {
      if (count < nbImgWork - 1) {
        count++;
      } else {
        count = 0;
      }
      showImageLightbox(imgWork[count]);
    }

    function prevImg() {
      if (count > 0) {
        count--;
      } else {
        count = nbImgWork - 1;
      }
      showImageLightbox(imgWork[count]);
    }

    buttonNext.addEventListener('click', nextImg);
    buttonPrev.addEventListener('click', prevImg);

    document.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') {
        nextImg();
      } else if (e.key === 'ArrowLeft') {
        prevImg();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    });
  }

  return {
    getUserCardDOM, getUserById, getLikePriceDom, lightBox,
  };
}
