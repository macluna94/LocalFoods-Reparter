import { TlocalServiceService } from './../../../tlocal-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tomar-pedido',
  templateUrl: './tomar-pedido.page.html',
  styleUrls: ['./tomar-pedido.page.scss'],
})
export class TomarPedidoPage implements OnInit {

  @Input() idpedido: string;

  constructor(private tlocalServ: TlocalServiceService, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.idpedido);
    
  }

  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      "pedido": "HECHO!!!!"
    });
  }
}
