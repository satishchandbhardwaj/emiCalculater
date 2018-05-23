import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
	price:number = 700000;
	downpayment:number = 100000;
	 months:number = 60;
	 interest:number = 10;
	 total:number = function(){
	 	//let amount = this.price - this.downpayment;
	 	//console.log(amount);
	 	let monInt = this.interest / 1200;
	 	//let getyear = this.months / 12;
	 	//let getInterest = amount * this.interest / 100;
	 	//let gettotalamount = getInterest + this.price;
	 	//let getemi = gettotalamount / this.months;
	 	//console.log(monInt);
	 	let calculation = ((monInt + (monInt / (Math.pow((1 + monInt), this.months) -1))) * (this.price - (this.downpayment || 0))).toFixed(2);
	 	console.log(calculation);
	 	return Math.round(calculation)

	 };
  constructor() { }

  ngOnInit() {
  	
  }

 

 

}
