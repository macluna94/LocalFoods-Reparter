import { TomarPedidoPage } from './../modal/tomar-pedido/tomar-pedido.page';
import { Router, ActivatedRoute } from '@angular/router';
import { TlocalServiceService } from './../../tlocal-service.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-detail',
  templateUrl: './pedido-detail.page.html',
  styleUrls: ['./pedido-detail.page.scss'],
})
export class PedidoDetailPage implements OnInit {

  constructor(private tlocalServices: TlocalServiceService, private router: Router, private activeRouter: ActivatedRoute, private modalCtrl: ModalController) {}
  pedido: any
  ngOnInit() {
    this.activeRouter.paramMap.subscribe(param => {
      const id = param.get('idpedido')
      //console.log("ID: "+id);

      this.tlocalServices.getPedido(id).subscribe(resp => {
        let data: any = resp
        this.pedido = data.pedido
        //console.log(this.pedido);
      })
    })
  }

  async modalPedido() {
    const modal = await this.modalCtrl.create({
      component: TomarPedidoPage,
      componentProps: {
        idpedido: this.pedido._id
      }
    })
    modal.onWillDismiss().then(dataReturned => {
      console.log('Receive: ', dataReturned.data);
    });
    return await modal.present()
  }

  salidaPedido(id: string){
    this.tlocalServices.sendPedido(id).subscribe(res => {
      console.log(res);
      
    })
  }  
}
