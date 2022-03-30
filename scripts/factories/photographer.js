export function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    console.log(id)
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        a.href = "photographer.html?id=${id}";
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "photo de " + name );
        img.setAttribute("href", a);
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
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(pays);
        article.appendChild(slogan);
        article.appendChild(prix);
        return (article);
    }
    return { name, picture,city, country, tagline, price, id, getUserCardDOM }
}