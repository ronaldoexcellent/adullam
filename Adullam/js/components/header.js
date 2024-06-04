export default function header() {
    createComponent('Header', `
        <a style="text-decoration:none">
            <img class="s-sm-hide s-img" src="${app.logoalt}" height="100px">
            <h1 class="s-hide s-sm-show">
                <img class="s-img" src="${app.logo}" height="100px">${app.name}
            </h1>
        </a>
        <div class="s-black s-large s-center s-italic s-bolder s-serif">A Secret Place...</div>
    `);
    typewrite($('Header div'), html($('Header div')), ['white'], "true", 300);
    setTimeout(() => attrib($('header a'), 'href', attrib($('#home'), 'href')), 100);
}