class ScreenShots {
    constructor(bigImageContainer, smallImagesContainer) {
        this.bigImageContainer = document.querySelector(bigImageContainer);
        this.smallImagesContainer = document.querySelector(smallImagesContainer);
        this.bigImage = null;
        this._init();
    }
    _init() {
        Array.from(this.smallImagesContainer.childNodes).filter(el => el.tagName === 'DIV').forEach(el => {
            el.childNodes.forEach(element => {
                if (element.tagName === "IMG") {
                    element.addEventListener('click', (e) => this.changeBigImg(e));
                }
            })
        })
        this.bigImage = Array.from(this.bigImageContainer.childNodes).find(el => el.tagName === "IMG");
    }
    changeBigImg(e) {
        this.bigImage.src = e.target.dataset.big;
        Array.from(this.smallImagesContainer.childNodes).filter(el => el.tagName === 'DIV').forEach(el => el.classList.remove('current'));
        e.target.parentElement.classList.add('current');
    }

}
new ScreenShots('.product__images-big', '.product__images-variants')
