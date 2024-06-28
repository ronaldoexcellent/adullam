export default function footer() {
    createComponent('Footer',  `
      <section id="footer" class="s-center">
        <img class="s-img" src="${app.logoalt2}" height="100px"><br>
        <Contact></Contact>
        <div class="s-center s-margin-top s-round-xlarge" style="line-height:2em">
          Created By - ${app.footnote()} Adullam<br><i class="s-small">All Rights Reserved.</i> <br><hr>
          <div class="s-row">
            <a href="#" style="text-decoration:none; cursor:pointer" class="s-third s-hover-text-deep-orange s-bolder">Give a feedback</a>
            <a style="text-decoration:none; cursor:pointer" class="s-third s-hover-text-deep-orange s-bolder" onclick="document.querySelector('header').scrollIntoView()">Back To Top</a>
            <a style="text-decoration:none; cursor:pointer" class="s-third s-hover-text-deep-orange s-bolder" href="#">Contact the developer</a>
          </div>
        </div>
      </section>
    `);
    loopX($$('footer form fieldset input'), () => {
        css(i, 'width:50%;');
        addClasses(i, ['s-input', 's-animate-input', 's-round-large']);
    });
}