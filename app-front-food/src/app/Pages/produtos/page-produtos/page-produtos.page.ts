import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Produtos } from 'src/app/Service/produto';
import { RequestService } from 'src/app/Service/request.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-produtos',
  templateUrl: './page-produtos.page.html',
  styleUrls: ['./page-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [RequestService]
})
export class PageProdutosPage implements OnInit {
  produto: Produtos = {
    id: 0,
    nome: "",
    descricao: "",
    bordaRecheada: "",
    valor: ""
  }
  constructor(private service: RequestService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  concluir(form: NgForm) {
    if (form.valid) {
      this.service.postarDadosProduto(this.produto).subscribe((dados) => {
      this.router.navigate(["/page-pedido"])
        this.cd.detectChanges();
      
      })

    }

  }
}
