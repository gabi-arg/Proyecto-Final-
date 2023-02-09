import { Component,  Input,   } from '@angular/core';
import { FormGroup,FormControl, Validators, } from '@angular/forms';
import { Estudiantes } from 'src/app/moduls/estudiantes';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Input() estudiantePadre!: Estudiantes[]

  formularioInscripcion: FormGroup;

  constructor(){

    let controles: any = {
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      correo:new FormControl('',[Validators.required]),
      cursosRealizados:new FormControl('',[Validators.required])

    }

    this.formularioInscripcion = new FormGroup(controles)

  }
  login(){
    console.log(this.formularioInscripcion)
  }





}


