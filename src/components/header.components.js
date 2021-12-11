import {Component} from '../core/components'
export class HeaderComponent extends Component {
    constructor(id){
        super(id)
    }
    init (){
        const BTN = this.$el.querySelector('.header-button')
        console.log(BTN)
        BTN.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler() {
    this.hide()
}