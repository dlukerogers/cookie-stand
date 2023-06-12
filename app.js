'use strict';

let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  randomNumber: function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  totalCookiesPurchased: function() {
    for (i = 0, i < this.hour.length, i++) {
      let totalCookies = this.randomNumber * this.avg;
      console.log(this.totalCookies);
    }
  }
}
seattle.totalCookiesPurchased();
