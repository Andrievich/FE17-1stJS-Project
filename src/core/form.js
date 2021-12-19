// export class Form {
//     constructor(form, controls){
//         this.form = form;
//         this.controls = controls;
//     }

//     value() {
//         const value = [];
//         Object.keys(this.controls).forEach((control) => {
//             value[control] = this.form[control].value;
//         });
//         return value;
//     }

//     clear() {
//         Object.keys(this.controls).forEach((control) => {
//             this.form[control].value = "";
//         });
//     }

//     isValid() {
//         let isFormValid = true;
//         Object.keys(this.controls).forEach((control) => {
//             const validators = this.controls[control];

//             let isValid = true;
//             validators.forEach((validator) => {
//                 isValid = validator(this.form[control].value)&& isValid
//             });

//             if (!isValid) {
//                 setError(this.form[control]);
//             } else {
//                 clearError(this.form[control]);
//             }

//             isFormValid = isFormValid &&isValid;
//         });
//         return isFormValid
//     }
// }
