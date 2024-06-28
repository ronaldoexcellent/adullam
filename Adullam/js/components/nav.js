export default function nav() {
    createComponent('nav', `
        <div class="s-large s-animate-top s-border-bottom s-border-black">
            <a> <i class="fa fa-home"></i> <span> Home </span> </a>
            <a> <i class="fa fa-pen-square"></i> <span> Articles </span> </a>
            <a> <i class="fa fa-gamepad"></i> <span> Games </span> </a>
            <a> <i class="fa fa-video"></i> <span> Videos </span> </a>
            <a> <i class="fa fa-info-circle"></i> <span> About </span> </a>
        </div>
        <a class="s-center s-button s-block" href="#footer" onclick="document.querySelector('footer').scrollIntoView()">Contact Us</a>
    `);
    var link_origin = ['s-bar', 's-button', 's-ripple', 's-mobile', 's-hover-black', 's-sm-hover-white'];
    var pages = ["home", "articles", "games", "videos", "about"];
    loop(pages, () => {
        addClasses($$('nav div a')[i], link_origin);
        attrib($$('nav div a')[i], 'id', pages[i]);
    });
    loopX($$('nav div a span'), () => addClasses(i, ["s-block", "s-sm-hide", "s-lg-show-inline-block"]));
}
export function currentPage(cP) {
    pushBefore($('title'), `${cP}`);
}
export function currentLink(cL) {
    var link_origin2 = ["s-border", "s-bottombar", "s-border-black", "s-sm-border-white"];
    loopX($$('nav div a'), () => remClasses(i, link_origin2));
    addClasses($(`#${cL}`), link_origin2);
}
export function rootDirectory(rD) {
    attrib($$('nav div a')[0], 'href', `${rD}index.html`);
}
export function currentDirectory(cD) {
    attrib($$('nav div a')[1], 'href', `${cD}articles/articles.html`);
    attrib($$('nav div a')[2], 'href', `${cD}gaming/games.html`);
    attrib($$('nav div a')[3], 'href', `${cD}videos/videos.html`);
    attrib($$('nav div a')[4], 'href', `${cD}about/info.html`);
}