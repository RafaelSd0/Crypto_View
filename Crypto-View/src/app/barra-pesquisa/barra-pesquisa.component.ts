import { Component } from '@angular/core';




@Component({
  selector: 'app-barra-pesquisa',
  standalone: true,
  imports: [],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.scss'
})
export class BarraPesquisaComponent {
  private arr: string[] ;
  resultMessage: string = '';
  constructor(){
    this.arr = ["el gato", "mico", "primo"];
  }

  pesquisar($event: Event){
    const input = $event.target as HTMLInputElement;
    console.log($event)

    for (let index = 0; index < this.arr.length; index++) {
      const element = this.arr[index];
      if (element === input.value) {
        this.result(element);
      }
    }
  }

  result(res: string){
    this.resultMessage = res;
  }

  
}
