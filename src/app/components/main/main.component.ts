import { Component, Input } from '@angular/core';
import { Estudiantes } from 'src/app/moduls/estudiantes';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


   estudiantes: Estudiantes[]=[
      { nombre: 'Oscar',
        apellido: 'Perez',
        cursos: 'Angular',
        email: 'oscarperez@gmail.com',
      },
      { nombre: 'Lucia',
        apellido: 'Garcia',
        cursos: 'Angular',
        email: 'luciagarcia@gmail.com',
      },

    ];
    constructor(){

    }

    dataSource: MatTableDataSource<Estudiantes> = new MatTableDataSource<Estudiantes>(this.estudiantes);

    columnas: String[] = ['nombre','apellido','email','cursos'];




}


