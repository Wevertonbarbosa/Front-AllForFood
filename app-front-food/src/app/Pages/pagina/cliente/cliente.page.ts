import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Clientes } from 'src/app/Service/cliente';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from 'src/app/Service/request.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule]
})
export class ClientePage implements OnInit {

  cliente: Clientes = {
    id:0,
    nome:'',
    email:'',
    telefone:'',
    logradouro:'',
    bairro:'',
    numero:''
  }
  constructor(private service: RequestService) { }

  ngOnInit() {
  }

  cadastrar(form:NgForm){
    if(form.valid){
      console.log("hello");
      
    }
  }


}
