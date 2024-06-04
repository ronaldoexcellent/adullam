import { contents } from './articles.js';
import { SearchBox } from './../../js/components/searchbox.js';
import {currentPage} from './../../js/components/nav.js';
import {currentLink} from './../../js/components/nav.js';
import {rootDirectory} from './../../js/components/nav.js';
import {currentDirectory} from './../../js/components/nav.js';
currentPage('Articles - ');
currentLink('articles');
rootDirectory('../../');
currentDirectory('../');
createComponent('Articles', `
    <h3 class="s-black s-center s-border s-round-xlarge s-card-2 s-padding"> Study Articles </h3>
    ${SearchBox}
    <i class="s-bolder s-center">Search by name(Title Case) or #tag</i> <br><br>
`);
loopX(contents, () => {
    pushAfter($('Articles'), `
        <div onclick="window.location = 'contents/${i.src}'" tag="${i.tag}" title="${i.title}" writer="${i.writer}" class="s-margin-top s-row s-ripple s-hover-shadow s-black s-bold s-bottombar s-hover-border-green s-border" style="list-style:none">
            <div title="Black Box" class="s-display-container s-black s-padding s-col s2" style="height:100%"><br>
                <span class="fa fa-pen-alt s-xlarge s-sm-large s-display-middle"></span><br>
            </div>
            <div class="s-rest s-white s-padding">
            <span class="s-bolder">${i.title}</span><br>
            By ${i.writer}<br>
            <span class="s-small s-bolder" style="color:darkblue">${i.tag}</span>
            </div>
        </div>
    `);
    pushAfter($('#searchContents'), `
        <option value="${i.title}"></option>
        <option value="${i.tag}"></option>
    `);
    function search4Arts() {
        var current_search = val($('[list=searchContents]'));
        loopX($$(`Articles details`), () => {
            ((attrib(i, 'title').indexOf(current_search) > -1 ) || (attrib(i, 'tag').indexOf(current_search) > -1) || (attrib(i, 'writer').indexOf(current_search) > -1)) ? unhide(i) : hide(i);
        });
    }
    keyup($('[list=searchContents]'), search4Arts);
    submit($('[list=searchContents]'), search4Arts);
});