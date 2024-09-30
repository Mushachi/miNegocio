import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.services';
import { ListaMenu } from './interfaces/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public listaMenu: ListaMenu[] = [
    {
      nombre: 'Inicio',
      url: ""
    },
    {
      nombre: 'Acerca de Nosotros',
      url: "about"
    },
    {
      nombre: 'Servicios',
      url: "services"
    },
    {
      nombre: 'Trabaja con Nosotros',
      url: "join"
    },
    {
      nombre: 'Empresas Inclusivas',
      url: "companys"
    },
    {
      nombre: 'Blog',
      url: "blog"
    },
    {
      nombre: 'Contacto',
      url: "contact"
    },
  ];;

  constructor ( ){}


  title = 'miNegocio';


}
