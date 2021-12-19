import { Component } from "../core/components";
import { Form } from "../core/form";

export class CreateComponents extends Component{
    constructor(id) {
        super(id);    
    }
    init(){
        // this.$el.addEventListener("submit", submitHandler.bind(this));
        // this.form = new Form(this.$el, {
        //     title: [Validators.required],
        //     fulltext: [Validators.required, Validators.munLength(8)]
        // });

    }
}

// async function submitHandler(event){
//     event.preventDefault();

//     if(this.form.isValid()) {
//         //Получаем значения их формы
//         const formData = {
//             // Значение select
//             type: this.$el.type.value,
//             date: new Date().toLocaleDateString(),
//             // Конвертируем все данные в один  объект
//             ...this.form.value(),
//         };

//         await apiService.createPost(formData);
//         this.form.clear();
//         alert ("Пост создан");
//         console.log("submit", formData)
//     }

// }