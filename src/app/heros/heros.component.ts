import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {Herolist} from '../Herolist';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

    hero : Hero ={
    id:1,
    name :'building-1',
    desc : 'description of project one.'
  }
  heroList:Herolist;
  additem(id,name,desc){
    this.hero.id=id;
    this.hero.name=name;
    this.hero.desc=desc;
   // this.heroList.heros.push(this.hero);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
