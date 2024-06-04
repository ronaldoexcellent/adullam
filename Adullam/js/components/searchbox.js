var SearchDialog = `
    <dialog class="s-middle">
        <progress></progress>
    </dialog>
`;
var SearchBox = `
    ${SearchDialog}
    <div class="s-section s-row s-card s-round-xxlarge s-hover-grey">
        <div class="s-col" style="width:50px">
            <i class="s-xlarge s-ripple fa fa-search s-padding" style="cursor:pointer">
            </i>
        </div>
        <div class="s-rest">
            <input list="searchContents" class="s-input s-padding s-bolder s-large s-serif s-border-bottom" type="search" placeholder="Search" style="width:50%; outline:0; transition: 1s; border-top-right-radius: 32px; border-bottom-right-radius: 32px;" onfocus="this.style.width='100%'" onblur="this.style.width='50%'">
            <datalist id="searchContents"></datalist>
        </div>
    </div>
`;
export {SearchBox}
// createComponent('SearchBox', SearchBox);
// keyup($('SearchBox'), () => attrib($('SearchDialog'), 'open'));