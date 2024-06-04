var inspirations = [
    {
        word : "",
        by : ""
    },
    {
        word : `Obeying God's greatest commandment (Love) requires self-denial, full submission to the <span class="s-bolder" style="color:darkblue">Holy Spirit</span> &amp; complete obedience to <span class="s-bolder" style="color:darkblue">God</span> & His perfect will.`,
        by : 'Ronaldo Excellent'
    },
    {
        word : `God has a sweet part and a bitter part (for maturity) that is sweet to them that are already used to it.`,
        by : 'Ronaldo Excellent'
    },
    {
        word : `Unless you're in <span class="s-bolder" style="color:blue">The School of The Spirit</span>, you will never fully understand the true power of the cross and its effects in our lives.`,
        by : 'Ronaldo Excellent'
    }
];
export default function Inspirations() {
    createComponent('Inspirations', `
        <button class="s-large s-button s-btn s-ripple s-red s-right"><span class="s-sm-hide">Hide</span><span class="s-hide s-sm-show">&times;</span></button><br>
        <h3 class="s-serif">
            <em>
                <span class="s-jumbo fa fa-scissors s-margin-bottom">&#9986;</span><br>
                <i>${inspirations[randomOfN(inspirations.length - 1)].word}</i>
            </em>
        </h3>
        <p class="s-medium s-boldest s-margin-bottom"> - ${inspirations[randomOfN(inspirations.length - 1)].by}</p>
    `);
    click($('Inspirations button'), ()=> addClass($('Inspirations'), 's-hide'));
    var interval = setInterval(() => {
        randomOf(inspirations.length - 1, () => {
            html($('Inspirations h3 em i'), inspirations[n].word);
            html($('Inspirations p'), "- " + inspirations[n].by);
        });
    }, 30000);
}