import { files } from "./../../pages/videos/videos.js";
export default function RelatedVideos() {
    createComponent('RelatedVideos', `
        <div class="s-container"> Related Videos </div>
        <section class="s-row s-ripple s-hover-shadow s-black s-bold s-bottombar s-border" style="list-style:none"></section>
        <button class="s-black s-btn s-block s-button" onclick="window.location = 'pages/videos/videos.html'"> See All </button>
    `);
    if ($('RelatedVideos')) {
        randomSelect(files, 2, () => {
            pushAfter($('RelatedVideos section'), ` 
            <div class="s-row s-ripple s-hover-shadow s-black s-bold s-bottombar s-hover-border-green s-border">
                <div title="Black Box" class="s-display-container s-black s-padding s-col s2" style="height:100%"><br>
                        <span class="fa fa-video s-xlarge s-sm-large s-display-middle"></span><br>
                    </div>
                    <div class="s-rest s-white s-padding">
                        <span class="s-bolder">${files[i].name}</span><br>
                        ${files[i].length}<br>
                        <span class="s-small s-bolder" style="color:darkblue">${files[i].tag}</span>
                    </div>
                </div>
            `)
        });
    }
}