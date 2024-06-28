import {currentPage} from './../../js/components/nav.js';
import {currentLink} from './../../js/components/nav.js';
import {rootDirectory} from './../../js/components/nav.js';
import {currentDirectory} from './../../js/components/nav.js';
currentPage('Games - ');
currentLink('games');
rootDirectory('../../');
currentDirectory('../');
createComponent('Games', `
    <h3>Play Interesting Games</h3>
    <i class="s-bolder s-center">Search by name(Title Case) or #tag</i> <br><br>
    <div>
        <i class="fa fa-lightbulb"></i>
        <h1> Spelling Bee <br> (With audio) </h1>
    </div>
    <div>
        <i class="fa fa-gamepad"></i>
        <h1> Word Transformation <br> (Answer will come in audio) </h1>
    </div>
    <div>
        <i class="fa fa-video"></i>
        <h1> Bible Quiz <h1>
    </div>
    <div>
        <i class="fa fa-video"></i>
        <h1> Bible Quiz (in levels - animate-zoom effect on indicator) <h1>
    </div>
`);
loopX($$('Home div'), () => {
    addClasses(i, ['s-half', 's-lg-quarter', 's-row', 's-padding-24', 's-animate-top', 's-round-xlarge', 's-margin-bottom', 's-lg-margin-right', 's-card-4', 's-center', 's-hover-grey', 's-text-white', 's-ripple', `s-${randomize(['red', 'blue', 'green', 'teal', 'pink', 'purple'])}`]);
    css(i, 'cursor: pointer');
});
loopX($$('Home div i'), () => addClasses(i, ['s-padding', 's-margin-top', 's-md-xxxlarge', 's-jumbo']));
loopX($$('Home div h1'), () => addClasses(i, ['s-xlarge']));