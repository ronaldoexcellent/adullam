import { contents } from "./../../pages/articles/articles.js";
export default function RelatedArticles() {
    createComponent('RelatedArticles', `
        <div class="s-container"> Related Articles </div>
        <section style="list-style:none"></section>
        <button class="s-black s-btn s-block s-button" onclick="window.location = 'pages/articles/articles.html'"> See All </button>
    `);
    if ($('RelatedArticles')) {
        randomSelect(contents, 2, () => {
            pushAfter($('RelatedArticles section'), `
                <div class="s-row s-ripple s-hover-shadow s-black s-bold s-bottombar s-hover-border-green s-border">
                    <div title="Black Box" class="s-display-container s-black s-padding s-col s2" style="height:100%"><br>
                        <span class="fa fa-pen-alt s-xlarge s-sm-large s-display-middle"></span><br>
                    </div>
                    <div class="s-rest s-white s-padding">
                        <span class="s-bolder">${contents[i].title}</span><br>
                        By ${contents[i].writer}<br>
                        <span class="s-small s-bolder" style="color:darkblue">${contents[i].tag}</span>
                    </div>
                </div>
            `)
        });
    }
    
}