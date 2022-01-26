import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

constructor(private service: TransferenciaService){}

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir = {
       valor: this.valor,
       destino: this.destino
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}