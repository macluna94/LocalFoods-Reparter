import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { TlocalServiceService } from './../tlocal-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  pedidos: any
  iduser: string
  user: string

  constructor(private tlocalServices: TlocalServiceService, private router:Router, private activeRouter: ActivatedRoute) {}

  ngOnInit(){
    this.activeRouter.paramMap.subscribe(params => {
      this.user = params.get('user')
      this.iduser = params.get('iduser')
      
      
      
      this.tlocalServices.getPedidos().subscribe(res => {
        let data:any = res
        this.pedidos = data.pedidos
        
        //console.log(this.pedidos);
      })
      
    })
  }

  goToPedido(id: string){
    this.router.navigate(['/home', id], {
      state: {
        usuario: this.user,
        iduser: this.iduser
      }
    })
  }

}
