import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page-pedido',
  templateUrl: './page-pedido.page.html',
  styleUrls: ['./page-pedido.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PagePedidoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
