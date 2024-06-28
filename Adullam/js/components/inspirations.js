import {inspirations} from './ins.js';
export default function Inspirations() {
    createComponent('Inspirations', `
        <Div Class="insp s-animate-left">
            <button class="s-large s-button s-btn s-ripple s-red s-right inspBtn"><span class="s-sm-hide">Hide</span><span class="s-hide s-sm-show">&times;</span></button><br>
            <h3 class="s-serif">
                <em>
                    <span class="s-jumbo fa fa-scissors s-margin-bottom">&#9986;</span><br>
                    <i>${inspirations[randomOfN(inspirations.length - 1)].word}</i>
                </em>
            </h3>
            <p class="s-medium s-boldest s-margin-bottom"> - ${inspirations[randomOfN(inspirations.length - 1)].by}</p>
        </Div>
        <button class="showBTN s-button s-btn s-ripple s-red s-hide">Show Inspirations</button>
    `);
    click($('Inspirations .insp button.inspBtn'), ()=> {
        addClass($('Inspirations .insp'), 's-hide');
        remClass($('Inspirations .showBTN'), 's-hide');
    });
    click($('Inspirations .showBTN'), ()=> {
        remClass($('Inspirations .insp'), 's-hide');
        addClass($('Inspirations .showBTN'), 's-hide');
    });
    var interval = setInterval(() => {
        randomOf(inspirations.length - 1, () => {
            html($('Inspirations h3 em i'), inspirations[n].word);
            html($('Inspirations p'), "- " + inspirations[n].by);
        });
    }, 30000);
}