import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hp-bar',
  templateUrl: './hp-bar.component.html',
  styleUrls: ['./hp-bar.component.css']
})
export class HpBarComponent implements OnInit {
  barWidth: string;
  barColor: string;
  percentHP: number;
  maxHP: number; // bind to the input value
  currentHP: number; // bind to input value

  constructor() { }

  ngOnInit() {
  }

  onChangeHP() {
    console.log(this.currentHP, this.maxHP);
    this.percentHP = this.currentHP / this.maxHP;
    console.log(this.percentHP);
    this.barWidth = (this.percentHP * 100) + '%';
    console.log(this.barWidth);
    if (this.percentHP <= .25) {
      this.barColor = 'red';
    } else if ( this.percentHP >= .5) {
      this.barColor = 'green';
    } else {
      this.barColor = 'yellow';
    }
    console.log(this.barColor);
  }
}
