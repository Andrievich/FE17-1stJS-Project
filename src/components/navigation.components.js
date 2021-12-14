import {Component} from '../core/components'
export class NavigationComponents extends Component {
    constructor(id){
        super(id)
    }
    init (){
        // const TABS = this.$el.querySelectorAll('.tabs-item')
        // console.log(TAB)
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }
    registerTabs(tabs) {
        this.tabs = tabs
    }
}
// приватная функция
function tabClickHandler(event) {
    event.preventDefault(); //отмена перехода по ссылке "#" в табах
    if (event.target.classList.contains("tabs-item")) {
        Array.from(this.$el.querySelectorAll('.tabs-item')).forEach((tab) => {
            tab.classList.remove("active")
        });
    }
    event.target.classList.add("active");
}