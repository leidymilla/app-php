import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  //URL base
  url = "http://localhost/api/php/";

  //vetor de cursos
  vetor: Curso[] = [];

  //Objeto da classe curso
  curso = new Curso();

  //Construtor
  constructor(private curso_service:CursoService){
  }
  //Inicializador
  ngOnInit(){
  //ao Iniciar o sistema, deveré listar os cursos
    this.selecao();
  }
   //Método Selecionar
   selecao(){
    this.curso_service.obterCursos().subscribe(
       (res: Curso[]) =>{
         this.vetor = res;
       }
    )
   }

  //Método Cadastrar
  cadastro():void{
    alert("Cadastro");
  }

  //Método Alterar
  alterar():void{
    alert("Alterar");
   }

  //Método Remover
  remover():void{
    alert("Remover");
  }
}
