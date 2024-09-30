import { Component, Input } from '@angular/core';
import { ListaMenu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css'
})
export class SkeletonComponent {

  @Input()
  public listaMenu: ListaMenu[] = [{
    nombre: 'Prueba',
    url: '/'
  }];

}
