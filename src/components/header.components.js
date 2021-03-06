import {Component} from '../core/components'
export class HeaderComponents extends Component {
    constructor(id){
        super(id)
    }
    init (){
        const BTN = this.$el.querySelector('.header-button')
        console.log(BTN)
        BTN.addEventListener('click', buttonHandler.bind(this))
    }
}

const section = document.querySelector('.section');

function buttonHandler() {
    //добавляем в Local storage
    localStorage.setItem("visited", JSON.stringify(true));
    this.hide();
    // убираем hidе для основной секции
    section.classList.remove('hide');
}