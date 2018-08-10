import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {heros} from '../Herolist';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes = heros;
 
  selectedHero: Hero;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
