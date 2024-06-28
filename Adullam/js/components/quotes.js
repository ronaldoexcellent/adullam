import {Quotes} from './quos.js';
export default function quotes() {
    createComponent('Quotes', `
        <div class="quos s-animate-right">
            <button class="s-large s-button s-btn s-ripple s-red s-right"><span class="s-sm-hide">Hide</span><span class="s-hide s-sm-show">&times;</span></button><br>    
            <h3 class="s-serif">
                <em>
                    <i class="fa fa-quote-left s-jumbo s-margin-bottom"></i><br>
                    <span>${Quotes[randomOfN(Quotes.length -1)].quote}</span>
                </em>
            </h3>
            <p class="s-medium s-boldest s-right s-margin-bottom">${Quotes[randomOfN(Quotes.length -1)].from}</p>
        </div>
        <button class="shw-BTN s-button s-btn s-ripple s-red s-right s-hide">Show Quotes</button>
    `);
    click($('Quotes div.quos button'), ()=> {
	addClass($('Quotes .quos'), 's-hide');
        remClass($('Quotes .shw-BTN'), 's-hide');
    });
    click($('Quotes button.shw-BTN'), ()=> {
        remClass($('Quotes .quos'), 's-hide');
        addClass($('Quotes .shw-BTN'), 's-hide');
    });
    var interval = setInterval(() => {
        randomOf(Quotes.length -1, () => {
            html($('Quotes h3 em span'), Quotes[n].quote);
            html($('Quotes p'), Quotes[n].from);
        });
    }, 30000);
}