import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Clientes } from 'src/app/Service/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ClientePage implements OnInit {

  cliente: Clientes = {
    id:0,
    nome:'',
    email:'',
    telefone:'',
    logradouro:'',
    bairro:'',
    numero:0
  }
  constructor() { }

  ngOnInit() {
  }

}
