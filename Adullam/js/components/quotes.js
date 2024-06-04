var Quotes = [
    {
        quote : '',
        from : ''
    },
    {
        quote : 'For God loved the world so much that He gave His only Son, so that everyone who believes in Him may not die but have eternal life.',
        from : 'John 3:15 (GNB)'
    },
    {
        quote : 'In the beginning, God created the heavens and the earth',
        from : 'Genesis 1:1 (KJV)'
    },
    {
        quote : 'Blessed are the meek, for they shall inherit the earth',
        from : 'Matthew 5:5 (KJV)'
    }
];
export default function quotes() {
    createComponent('Quotes', `
        <button class="s-large s-button s-btn s-ripple s-red s-right"><span class="s-sm-hide">Hide</span><span class="s-hide s-sm-show">&times;</span></button><br>    
        <h3 class="s-serif">
            <em>
                <i class="fa fa-quote-left s-jumbo s-margin-bottom"></i><br>
                <span>${Quotes[randomOfN(Quotes.length -1)].quote}</span>
            </em>
        </h3>
        <p class="s-medium s-boldest s-right s-margin-bottom">${Quotes[randomOfN(Quotes.length -1)].from}</p>
    `);
    click($('Quotes button'), ()=> addClass($('Quotes'), 's-hide'));
    var interval = setInterval(() => {
        randomOf(Quotes.length -1, () => {
            html($('Quotes h3 em span'), Quotes[n].quote);
            html($('Quotes p'), Quotes[n].from);
        });
    }, 30000);
}