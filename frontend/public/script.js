const parseJSON = async (url) => {
    const response = await fetch(url);
    return response.json();
}

const swiperComponent = (data, comp) => {
    return `
    <div class="swiper">
        <div class="swiper-wrapper">
            ${data.map(img => comp(img)).join("")}
        </div>
    </div>
    `
}

//betesszük a képek nevét és címét 
const swiperSlideComponent = ({fileName, title}) => {
    return `
    <div class="swiper-slide">
        <h2>${title}</h2>
        <img src="./pub/images/${fileName}"/>
    </div>
    `
}

const loadEvent = async () => {

    const rootElement = document.getElementById("root");

    const result = await parseJSON("/image-list");

    rootElement.insertAdjacentHTML("beforeend", swiperComponent(result, swiperSlideComponent));

    //obj. constructort hívjuk meg
    const swiper = new Swiper(".swiper", {
        loop: true, //ezzel körbe körbe tudjuk swipolni
    });

}

window.addEventListener("load", loadEvent);

