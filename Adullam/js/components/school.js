export default function school() {
    createComponent('School', `
        <i class="fa fa-hands s-padding s-margin-top s-md-xxxlarge s-jumbo"></i>
        <h1> Holy Ghost School </h1>
        <h2 class="s-large"> Have A Personal Relationship With God </h2>
    `);
    var c = ['red', 'blue', 'purple', 'orange'];
    var n = -1;
    if ($('School')) {
        setInterval(() => {
            n++, n = n > 3 ? 0 : n;
            css($('School'), `background: ${c[n]}; color: white;`);
        }, 1500);
    }
}