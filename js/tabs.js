class TabLink{
    constructor(tabEle){
        this.tabEle = tabEle;
        this.tabData = this.tabEle.dataset.tab;
        if(this.tabData === 'all'){
            this.cards = document.querySelectorAll('.card');
        } else {
            this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
        }
        this.cards = Array.from(this.cards).map(card => new TabCard(card));
        this.tabEle.addEventListener('click', () => this.selectTab());
}


let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => new TabLink(tab));