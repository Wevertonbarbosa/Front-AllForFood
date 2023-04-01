import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-page-produtos',
  templateUrl: './page-produtos.page.html',
  styleUrls: ['./page-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PageProdutosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
