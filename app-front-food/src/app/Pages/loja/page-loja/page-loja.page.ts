import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-loja',
  templateUrl: './page-loja.page.html',
  styleUrls: ['./page-loja.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PageLojaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    setTimeout(()=>{
      this.router.navigateByUrl("cliente")
    },3900)
  }

}
