export default function SlideShow() {
    createComponent('SlideShow', `
        <div class="s-black"></div>
    `);
    var sD = attrib($('SlideShow'), 'dir');
    setTimeout(() => {
        pushAfter($('SlideShow div'), `
            <img src="${sD}files/imgs/home_1.jpg">
            <img src="${sD}files/imgs/home_2.jpg">
            <img src="${sD}files/imgs/home_3.jpg">
        `);
        loopX($$('SlideShow div img'), () => {
            addClasses(i, ['s-img']);
            css(i, 'height:300px;width:100%;');
        });
        if ($('SlideShow div')) {
            animate($('SlideShow div'), "auto", 3000);
        }
    }, 100);
}