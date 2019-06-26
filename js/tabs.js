class TabLink {
    constructor(tabElement){
      this.tabElement = tabElement;
      this.tabData = this.tabElement.dataset.tab;
      if(this.tabData === 'all'){
        this.cards = document.querySelectorAll('.card');
      } else {
        this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
      }
      this.cards = Array.from(this.cards).map(card => new TabCard(card));
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
    
  
    selectTab(){
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active-tab'));
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => card.style.display = 'none');
      this.tabElement.classList.add('active-tab');
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      this.cardElement = cardElement;
    }
    selectCard(){
      this.cardElement.style.display = 'flex';
    }
  
  }
  
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => new TabLink(tab));



  let mainh1 = document.querySelector('h1');
  console.log(mainh1);

  mainh1.addEventListener('mouseover', event => {
    event.target.style.color = 'yellow';

    setTimeout(function(){
      event.target.style.color = '';
    }, 1000)
  }, false);

  let h2s =  document.querySelectorAll('h2');
  console.log(h2s);

  h2s.forEach((element) => element.addEventListener('mouseover', event =>{
    event.target.style.color = ' yellow';

    setTimeout(function(){
      event.target.style.color = '';
    }, 1000);
  }), false);

