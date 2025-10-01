import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
declare  const axios:any
declare  const $:any

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  form = {
    name: 'dara',
    email: 'dara@mail.com',
    password: '1235534',
    address: 'PP',
  }

  onSubmit() {
    if (this.form.name === '' || this.form.email === '' || this.form.password === '') {
      alert('Please enter a valid form!');
      return;
    }
    let vm = this;
    $.LoadingOverlay("show");
    let api_url = 'http://127.0.0.1:5000/api/register'
    axios.post(api_url, this.form)
      .then(function (response: any) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        $.LoadingOverlay("hide");
      });
    console.log(this.form);
  }


}
