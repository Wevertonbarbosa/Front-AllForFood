import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/Service/request.service';
import { Clientes } from 'src/app/Service/cliente';
import { Produtos } from 'src/app/Service/produto';

@Component({
  selector: 'app-page-pedido',
  templateUrl: './page-pedido.page.html',
  styleUrls: ['./page-pedido.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [RequestService]
})
export class PagePedidoPage implements OnInit {

  public clienteDado: Clientes[] = []
  public produtoDado: Produtos[] = []
  constructor(private service: RequestService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.service.mostrarDados().subscribe((cliente) => {
      this.clienteDado = cliente
      this.cd.detectChanges();
      window.location.reload; 
    })
    
    this.service.mostrarDadosProduto().subscribe((produto) => {
      this.produtoDado = produto
      this.cd.detectChanges();
      window.location.reload;
    })
  }


}
