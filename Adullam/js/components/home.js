export default function home() {
    addClasses($$('nav a')[0], ["s-border", "s-bottombar", "s-border-black", "s-sm-border-white"]);
    createComponent('Home', `
        <div onclick="window.location = 'pages/articles/articles.html'">
            <i class="fa fa-lightbulb"></i>
            <h1> Get Inspired </h1>
        </div>
        <div onclick="window.location = 'pages/gaming/games.html'">
            <i class="fa fa-gamepad"></i>
            <h1> Play Games </h1>
        </div>
        <div onclick="window.location = 'pages/videos/videos.html'">
            <i class="fa fa-video"></i>
            <h1> Watch Videos <h1>
        </div>
        <div onclick="window.location = 'pages/about/info.html'">
            <i class="fa fa-info-circle"></i>
            <h1> Info <h1>
        </div><br>
        <School class="s-button s-padding-24 s-animate-top s-round-xlarge s-card-4 s-center s-hover-grey s-ripple s-md-block" onclick="window.location = 'pages/school/intro.html'"></School>
        <br><br>
    `);
    loopX($$('Home div'), () => {
        addClasses(i, ['s-half', 's-lg-quarter', 's-row', 's-padding-24', 's-animate-top', 's-round-xlarge', 's-margin-bottom', 's-lg-margin-right', 's-card-4', 's-center', 's-hover-grey', 's-text-white', 's-ripple', `s-${randomize(['red', 'blue', 'green', 'teal', 'pink', 'purple'])}`]);
        css(i, 'cursor: pointer');
    });
    loopX($$('Home div i'), () => addClasses(i, ['s-padding', 's-margin-top', 's-md-xxxlarge', 's-jumbo']));
    loopX($$('Home div h1'), () => addClasses(i, ['s-xlarge']));
}