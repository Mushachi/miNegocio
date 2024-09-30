import { Component, Input } from '@angular/core';
import { ListaMenu } from '../../interfaces/menu.interface';


@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input()
  public listaMenu: ListaMenu[] = [];

}
