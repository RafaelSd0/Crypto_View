import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-barra-pesquisa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.scss'
})
export class BarraPesquisaComponent {

  cryptoName: string = ''; // Nome da criptomoeda
  cryptoImage: string = ''; // URL da imagem
  cryptoSymbol: string = ''; // Símbolo da moeda
  errorMessage: string = ''; // Mensagem de erro

  constructor(private cryptoService: CryptoService) {}

  // Função chamada a cada alteração no input
  pesquisar($event: Event): void {
    const input = $event.target as HTMLInputElement;
    const moeda = input.value.trim().toLowerCase(); // Nome da moeda em lowercase

    if (moeda) {
      this.cryptoService.getCryptos(moeda).subscribe(
        (data) => {
          this.cryptoName = data.name; // Nome da moeda
          this.cryptoImage = data.image.large; // URL da imagem (versão grande)
          this.cryptoSymbol = data.symbol.toUpperCase(); // Símbolo em uppercase
          this.errorMessage = ''; // Limpa mensagens de erro
        },
        (error) => {
          this.cryptoName = '';
          this.cryptoImage = '';
          this.cryptoSymbol = '';
          this.errorMessage = 'Moeda não encontrada. Tente novamente!';
        }
      );
    } else {
      this.cryptoName = '';
      this.cryptoImage = '';
      this.cryptoSymbol = '';
      this.errorMessage = '';
    }
  }

}
