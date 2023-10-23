import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService
  ){}

  logar() {
    this.toast.error('Usuário e/ou senha inválidos.', 'Login');
    this.creds.senha = '';
  }


  validaCampos(): boolean {
    if(this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }

}
