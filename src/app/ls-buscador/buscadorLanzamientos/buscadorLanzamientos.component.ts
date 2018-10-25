import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Ilanzamiento } from '../../api.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ls-buscador-lanzamientos',
  templateUrl: './buscadorLanzamientos.component.html',
  styleUrls: ['./buscadorLanzamientos.component.css']
})
export class LsBuscadorLanzamientosComponent implements OnInit {
  @Input() lanzamientos: Array<Ilanzamiento>;

  constructor() { }
  ngOnInit() { }

  cuentaLanzamientos() {
    if (!this.lanzamientos || this.lanzamientos.length === 0) {
      console.log('No hay');
      return 'No hay';
    } else {
      console.log(`Actualizando ${this.lanzamientos.length} lanzamientos `);
      return this.lanzamientos.length;
    }
  }
}
