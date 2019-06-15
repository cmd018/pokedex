import { Component } from '@angular/core';
import { Pokemones, IPokemon } from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemones: IPokemon[] = [];

  constructor() {
    this.sortBy("name");
  }

  onChange(value: string) {
    switch (value) {
      case "number":
        this.sortBy("num");
        break;
      case "asending":
        this.sortBy("name");
        break;
      default:
        this.pokemones = Pokemones.pokemon.sort((a, b) => {
          if (b.name < a.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
    }
  }

  sortBy(type: string): void {
    this.pokemones = Pokemones.pokemon.sort((a, b) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1;
      }
      return 0;
    });
  }
}
