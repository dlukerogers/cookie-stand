'use strict';

const list = document.getElementById('list-section');
// const section = document.getElementById('cookiesPerHour');

let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHour: [],
  randomNumber: function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  totalCookiesPurchasedPerHour: function() {
    for (let i = 0; i < this.hour.length; i++) {
      let random = this.randomNumber();
      console.log(random);
      let totalCookies = Math.ceil(random * this.avg);
      console.log(totalCookies);
      console.log(`${this.hour[i]}: ${totalCookies}`);
      this.cookiesSoldEachHour.push(totalCookies);
      let listItem = document.createElement('li');
      listItem.textContent = `${this.hour[i]}: ${totalCookies}`;
      list.appendChild(listItem);
    }
    console.log(this.cookiesSoldEachHour);
  },
  locationHeader: function() {
    let locationName = document.createElement('h1');
    locationName.textContent = this.location;
    console.log(locationName);
    list.appendChild(locationName);
  }
};
seattle.locationHeader();
seattle.totalCookiesPurchasedPerHour();

let tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHour: [],
  randomNumber: function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  totalCookiesPurchasedPerHour: function() {
    for (let i = 0; i < this.hour.length; i++) {
      let random = this.randomNumber();
      console.log(random);
      let totalCookies = Math.ceil(random * this.avg);
      console.log(totalCookies);
      console.log(`${this.hour[i]}: ${totalCookies}`);
      this.cookiesSoldEachHour.push(totalCookies);
      let listItem = document.createElement('li');
      listItem.textContent = `${this.hour[i]}: ${totalCookies}`;
      list.appendChild(listItem);
    }
    console.log(this.cookiesSoldEachHour);
  },
  locationHeader: function() {
    let locationName = document.createElement('h1');
    locationName.textContent = this.location;
    console.log(locationName);
    list.appendChild(locationName);
  }
};
tokyo.locationHeader();
tokyo.totalCookiesPurchasedPerHour();

let dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHour: [],
  randomNumber: function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  totalCookiesPurchasedPerHour: function() {
    for (let i = 0; i < this.hour.length; i++) {
      let random = this.randomNumber();
      console.log(random);
      let totalCookies = Math.ceil(random * this.avg);
      console.log(totalCookies);
      console.log(`${this.hour[i]}: ${totalCookies}`);
      this.cookiesSoldEachHour.push(totalCookies);
      let listItem = document.createElement('li');
      listItem.textContent = `${this.hour[i]}: ${totalCookies}`;
      list.appendChild(listItem);
    }
    console.log(this.cookiesSoldEachHour);
  },
  locationHeader: function() {
    let locationName = document.createElement('h1');
    locationName.textContent = this.location;
    console.log(locationName);
    list.appendChild(locationName);
  }
};
dubai.locationHeader();
dubai.totalCookiesPurchasedPerHour();

let paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHour: [],
  randomNumber: function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  totalCookiesPurchasedPerHour: function() {
    for (let i = 0; i < this.hour.length; i++) {
      let random = this.randomNumber();
      console.log(random);
      let totalCookies = Math.ceil(random * this.avg);
      console.log(totalCookies);
      console.log(`${this.hour[i]}: ${totalCookies}`);
      this.cookiesSoldEachHour.push(totalCookies);
      let listItem = document.createElement('li');
      listItem.textContent = `${this.hour[i]}: ${totalCookies}`;
      list.appendChild(listItem);
    }
    console.log(this.cookiesSoldEachHour);
  },
  locationHeader: function() {
    let locationName = document.createElement('h1');
    locationName.textContent = this.location;
    console.log(locationName);
    list.appendChild(locationName);
  }
};
paris.locationHeader();
paris.totalCookiesPurchasedPerHour();

let lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHour: [],
  randomNumber: function() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  totalCookiesPurchasedPerHour: function() {
    for (let i = 0; i < this.hour.length; i++) {
      let random = this.randomNumber();
      console.log(random);
      let totalCookies = Math.ceil(random * this.avg);
      console.log(totalCookies);
      console.log(`${this.hour[i]}: ${totalCookies}`);
      this.cookiesSoldEachHour.push(totalCookies);
      let listItem = document.createElement('li');
      listItem.textContent = `${this.hour[i]}: ${totalCookies}`;
      list.appendChild(listItem);
    }
    console.log(this.cookiesSoldEachHour);
  },
  locationHeader: function() {
    let locationName = document.createElement('h1');
    locationName.textContent = this.location;
    console.log(locationName);
    list.appendChild(locationName);
  }
};
lima.locationHeader();
lima.totalCookiesPurchasedPerHour();
