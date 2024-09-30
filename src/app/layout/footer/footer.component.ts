import { Component, Input } from '@angular/core';
import { ListaMenu } from '../../interfaces/menu.interface';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Input()
  public listaMenu: ListaMenu[] = [];

}
