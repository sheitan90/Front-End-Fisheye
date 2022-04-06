export function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.href = "photographer.html?id=" + id;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name );

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("aria-labelledby", name);

        const pays = document.createElement("p");
        pays.textContent = city + ", " + country;
        pays.setAttribute("aria-labelledby", city + " , " + country);

        const slogan = document.createElement("p");
        slogan.textContent = tagline;
        slogan.setAttribute("aria-labelledby", tagline);

        const prix = document.createElement("p");
        prix.textContent = price + "€" +"/jour";
        prix.setAttribute("aria-labelledby", price + "€" +"/jour")

        article.appendChild(a);
        article.appendChild(pays);
        article.appendChild(slogan);
        article.appendChild(prix);

        a.appendChild(img);
        a.appendChild(h2);

        return (article);
    }

    function getUserById() {
        const headerPhotographer = document.querySelector(".photograph-header")
        console.log(headerPhotographer)
        const contact = document.querySelector(".contact_button");

        const article = document.createElement( 'div' );
        article.className= "description-photographer";

        const imagePhotographe = document.createElement('div');
        imagePhotographe.className = "image-photographer";

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const pays = document.createElement("p");
        pays.textContent = city + ", " + country;

        const slogan = document.createElement("p");
        slogan.textContent = tagline;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        headerPhotographer.appendChild(article)
        headerPhotographer.appendChild(contact)
        headerPhotographer.appendChild(imagePhotographe)

        article.appendChild(h2);
        article.appendChild(pays);
        article.appendChild(slogan);

        imagePhotographe.appendChild(img);

        return(article, imagePhotographe);
    }

    return { getUserCardDOM, getUserById }

}