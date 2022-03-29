export function photographerFactory(data) {
    const { name, portrait, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", name)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const pays = document.createElement("p");
        pays.textContent = country;
        const slogan = document.createElement("p");
        slogan.textContent = tagline;
        const prix = document.createElement("p");
        prix.textContent = price + "€" +"/jour";
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pays);
        article.appendChild(slogan);
        article.appendChild(prix);
        return (article);
    }
    return { name, picture, country, tagline, price, getUserCardDOM }
}