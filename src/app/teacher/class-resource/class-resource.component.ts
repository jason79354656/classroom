import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-class-resource',
  templateUrl: './class-resource.component.html',
  styleUrls: ['./class-resource.component.css']
})
export class ClassResourceComponent implements OnInit {

  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
  
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;

  constructor() { }

  ngOnInit(): void {
  }

}
