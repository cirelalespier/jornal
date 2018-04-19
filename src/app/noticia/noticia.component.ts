import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

 titulo: string = 'Titulo';
 texto: string = 'Utilizando string interpolation';

 caminho_imagem: string = '../../assets/gatinho.jpg'

  noticias: string[] = ["Noticia1", "Noticia2","Noticia3","Noticia4"];

  verdadeiro: boolean = true;
  
  constructor() { }

  ngOnInit() {
    
  }

  public Noticia(){
    this.verdadeiro = false;
  }

  public Voltar(){
    this.verdadeiro =  true;
  }

}
