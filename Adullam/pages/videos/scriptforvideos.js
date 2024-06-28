import {files} from './videos.js';
import { SearchBox } from './../../js/components/searchbox.js';
import {currentPage} from './../../js/components/nav.js';
import {currentLink} from './../../js/components/nav.js';
import {rootDirectory} from './../../js/components/nav.js';
import {currentDirectory} from './../../js/components/nav.js';
currentPage('Videos - ');
currentLink('videos');
rootDirectory('../../');
currentDirectory('../');
createComponent('Videos', `
    <h3 class="s-black s-center s-border s-round-xlarge s-card-2 s-padding"> Christian Videos </h3>
    ${SearchBox}
    <i class="s-bolder s-center">Search by name(Title Case) or #tag</i> <br><br>
`);
loopX(files, () => {
    pushAfter($('Videos'), `
        <details tag="${i.tag}" title="${i.name}" onclick="this.querySelector('#BlackBox').scrollIntoView()">
            <summary class="s-row s-ripple s-hover-shadow s-black s-bold s-bottombar s-hover-border-green s-border" style="list-style:none">
                <div id="BlackBox" class="s-display-container s-black s-padding s-col s2" style="height:100%"><br>
                    <span class="fa fa-video s-xlarge s-sm-large s-display-middle"></span><br>
                </div>
                <div class="s-rest s-white s-padding s-display-container">
                    <span class="s-bolder">${i.name}</span><br>
                    ${i.length}<br>
                    <span class="s-small s-bolder" style="color:darkblue">${i.tag}</span>
                </div>
            </summary>
            <video src="${i.src}" poster="../../files/imgs/home_1.jpg" title="Play Video!" style="width:100%" controls>
                Your device doesn't support web videos!
            </video>
        </details>
    `);
    pushAfter($('#searchContents'), `
        <option value="${i.name}"></option>
        <option value="${i.tag}"></option>
    `);
});
function search4Vids() {
    var current_search = val($('[list=searchContents]'));
    loopX($$(`Videos details`), () => {
        ((attrib(i, 'name').indexOf(current_search) > -1 ) || (attrib(i, 'tag').indexOf(current_search) > -1)) ? unhide(i) : hide(i);
    });
}
keyup($('[list=searchContents]'), search4Vids);
submit($('[list=searchContents]'), search4Vids);