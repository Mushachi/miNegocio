import { Injectable } from '@angular/core';
import { ListaMenu } from '../interfaces/menu.interface';

const listaMenu: ListaMenu[] = [
  {
    nombre: 'Inicio',
    url: "home"
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
];

@Injectable({providedIn: 'root'})
export class AppService {
  constructor() { }

  menu: ListaMenu[] = [];

  getMenu(): ListaMenu[] {

    this.menu = listaMenu;

    return this.menu
  };

}
