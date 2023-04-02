import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Produtos } from 'src/app/Service/produto';
import { RequestService } from 'src/app/Service/request.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-page-produtos',
  templateUrl: './page-produtos.page.html',
  styleUrls: ['./page-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [RequestService]
})
export class PageProdutosPage implements OnInit {
  produto:Produtos = {
    id:0,
    nome:"",
    descricao:"",
    codigo:"",
    bordaRecheada:"",
    valor:""
  }
  constructor(private service: RequestService) { }

  ngOnInit() {
  }

  concluir(form: NgForm){
    if (form.valid) {
      console.log("hello");
      this.service.postarDadosProduto(this.produto).subscribe((dados) => {
        console.log(dados)
      })

    }

  }
}
