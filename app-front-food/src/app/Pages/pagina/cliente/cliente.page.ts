import { PageProdutosPage } from './../../produtos/page-produtos/page-produtos.page';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Clientes } from 'src/app/Service/cliente';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/Service/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [RequestService],
})
export class ClientePage implements OnInit {

  cliente: Clientes = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    logradouro: '',
    bairro: '',
    numero: '',
  };
  constructor(
    private service: RequestService,
    private router: Router,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() { }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.service.postarDados(this.cliente).subscribe(() => {
        this.router.navigate(['/page-produtos'])
        this.cd.detectChanges();
      });
    }
  }
}
