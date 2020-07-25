import { TlocalServiceService } from './../tlocal-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { ReparterModel } from "../ReparterModel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;
  reparterData: ReparterModel;
  edad: any

  constructor(private formBuilder: FormBuilder, private toast: ToastController, private tlocalServices: TlocalServiceService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
      vehicle: ['', [Validators.required]]
    })
  }

  get errorControl(){
    return this.registerForm.controls;
    }

  getTime(e){
      let date = new Date(e.target.value).toISOString().substring(0, 10);
      this.edad = date 
      console.log(this.edad);
  }

  submitForm(){
    this.registerForm.get('edad').setValue(this.edad, {
      onlyself: true
    });
    this.isSubmitted = true;
    if (!this.registerForm.valid) {
      console.log('Campos incompletos');
      this.checkToast('Campos Incompletos', 'warning')
       
    } else {
      this.reparterData = this.registerForm.value 
      console.log(this.reparterData);
      
      this.tlocalServices.register(this.reparterData).subscribe( res => {
        console.log("Enviado: "+res)
        this.checkToast('Enviado', 'primary')
        this.router.navigate(['/login'])
      })
      
    }
  }

  async checkToast(msn: string, color: string){
    const toast = await this.toast.create({
      message: msn,
      duration: 1500,
      position: 'top',
      color: color,
      mode:'md'
    });
    toast.present();
  }
}
