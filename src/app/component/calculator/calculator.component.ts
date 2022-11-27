import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calc: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  display(value: any) {
    console.log(value);
    this.calc = this.calc + value;
  }
  clear() {
    this.calc = '';
  }
  del() {
    // this.calc = this.calc.splice();
    if (this.calc != "") {
      this.calc = this.calc.slice(0, -1);
    }
  }
  calculate() {
    this.calc = eval(this.calc);
  }
}





