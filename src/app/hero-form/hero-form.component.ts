import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  power:string[] = ["Power 1", "Power 2"]

  model = new Hero(1,"test",this.power[1], "Ego")

  formSubmitted:boolean = false;
  onSubmit(){
    this.formSubmitted = true;
  }

  newHero(){
    console.log("new error")
  }
}
