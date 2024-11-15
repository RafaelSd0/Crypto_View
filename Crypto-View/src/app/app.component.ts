import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraPesquisaComponent } from "./barra-pesquisa/barra-pesquisa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraPesquisaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Crypto-View';
}
