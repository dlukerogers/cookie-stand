'use strict';

const table = document.getElementById('table-section');

const hours = ['6:00am', '7:00am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locations = [];

let tableBody, tableFooter, tableHead;

function Store(name, minCustomers, maxCustomers, avgCustomers) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomers = avgCustomers;
  this.customersArray = [];
  this.cookiesArray = [];
  this.dailyTotal = 0;

  locations.push(this);
}

Store.prototype.setCustomersPerHour = function () {
  for(let i = 0; i < hours.length; i++) {
    this.customersArray.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers));
  }
};

Store.prototype.setCookiesPerHour = function() {
  for(let i = 0; i < hours.length; i++) {
    this.cookiesArray.push(Math.floor(this.customersArray[i]*this.avgCustomers));
  }
};

Store.prototype.setCookiesTotal = function () {
  for(let i = 0; i < hours.length; i++) {
    this.dailyTotal += this.cookiesArray[i];
  }
};

Store.prototype.renderTable = function() {
  let tableDataRow = document.createElement('tr');
  tableBody.appendChild(tableDataRow);
  let tableLocations = document.createElement('th');
  tableLocations.textContent = this.name;
  tableDataRow.appendChild(tableLocations);
  for (let i = 0; i < hours.length; i++) {
    // let tableLocationsRow = document.createElement('tr');
    // tableHead.appendChild(tableLocationsRow);
    // tableLocationsRow.appendChild(tableLocations);
    // let tableHoursRow = document.createElement('tr');
    // tableBody.appendChild(tableHoursRow);
    // let tableHours = document.createElement('td');
    // tableHours.textContent = hours[i];
    // tableHoursRow.appendChild(tableHours);
    let tableData = document.createElement('td');
    tableData.textContent = this.cookiesArray[i];
    tableDataRow.appendChild(tableData);
    // let tableTotalCookiesRow = document.createElement('tr');
    // tableFooter.appendChild(tableTotalCookiesRow);
  }
  let tableTotalCookies = document.createElement('td');
  tableTotalCookies.textContent = this.dailyTotal;
  tableDataRow.appendChild(tableTotalCookies);
};

// Store.prototype.renderTableData = function() {
//   for (let i = 0; i < this.hours.length; i++) {
//     let tableData = document.createElement('td');
//     tableData.textContent = this.cookiesArray[i];
//     tableBody.appendChild(tableData);
//   }
// };

// Store.prototype.renderTableHours = function() {
//   for (let i = 0; i < this.hours.length; i++) {
//     let tableHours = document.createElement('td');
//     tableHours.textContent = hours[i];
//     tableBody.appendChild(tableHours);
//   }
// };

// Store.prototype.renderTableTotalHours = function() {
//   for (let i = 0; i < this.hours.length; i++) {
//     let tableTotalHours = document.createElement('td');
//     tableTotalHours.textContent = this.dailyTotal;
//     tableFooter.appendChild(tableTotalHours);
//   }
// };

// Store.prototype.renderTotalListItems = function() {
//   let liTotal = document.createElement('li');
//   liTotal.textContent = `Total: ${this.dailyTotal}`;
//   list.appendChild(liTotal);
// };

function renderTableBody() {
  tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
}

function renderTableFooter() {
  tableFooter = document.createElement('tfoot');
  table.appendChild(tableFooter);
}

function renderTableHead() {
  tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  //add in table header rows and data using hours
  let tableHeadRow = document.createElement('tr');
  tableHead.appendChild(tableHeadRow);
  let blankCell = document.createElement('th');
  tableHeadRow.appendChild(blankCell);
  for (let i = 0; i < hours.length; i++) {
    let tableHeadHours = document.createElement('th');
    tableHeadHours.textContent = hours[i];
    tableHeadRow.appendChild(tableHeadHours);
  }
  let tableTotalHeader = document.createElement('th');
  tableTotalHeader.textContent = 'Daily Location Total';
  tableHeadRow.appendChild(tableTotalHeader);
}

function renderAllLocations () {
  console.log(locations);
  for(let i = 0; i < locations.length; i++) {
    locations[i].setCustomersPerHour();
    locations[i].setCookiesPerHour();
    locations[i].setCookiesTotal();
    locations[i].renderTable();
  }
  console.log(locations);
}

//executable code
renderTableHead();
renderTableBody();
renderTableFooter();

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

renderAllLocations();


// let seattle = {
//   location: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   cookiesSoldEachHour: [],
//   randomNumber: function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesPurchasedPerHour: function() {
//     for (let i = 0; i < this.hour.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       console.log(`${this.hour[i]}: ${totalCookies}`);
//       this.cookiesSoldEachHour.push(totalCookies);
//       this.dailyTotal = this.dailyTotal + totalCookies;
//     }
//   },
//   renderListItems: function () {
//     for (let i = 0; i < this.hour.length; i++) {
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hour[i]}: ${this.cookiesSoldEachHour[i]}`;
//       list.appendChild(listItem);
//     }
//   },
//   // console.log(this.cookiesSoldEachHour);
//   renderTotalListItem: function () {
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal}`;
//     list.appendChild(liTotal);
//   },
//   renderLocationHeader: function() {
//     let locationName = document.createElement('h1');
//     locationName.textContent = this.location;
//     console.log(locationName);
//     list.appendChild(locationName);
//   }
// };
// seattle.renderLocationHeader();
// seattle.totalCookiesPurchasedPerHour();
// seattle.renderListItems();
// seattle.renderTotalListItem();

// let tokyo = {
//   location: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   dailyTotal: 0,
//   cookiesSoldEachHour: [],
//   randomNumber: function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesPurchasedPerHour: function() {
//     for (let i = 0; i < this.hour.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       console.log(`${this.hour[i]}: ${totalCookies}`);
//       this.cookiesSoldEachHour.push(totalCookies);
//       this.dailyTotal + totalCookies;
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hour[i]}: ${this.cookiesSoldEachHour[i]}`;
//       list.appendChild(listItem);
//       let liTotal = document.createElement('li');
//       liTotal.textContent = `Total: ${this.dailyTotal}`;
//       list.appendChild(liTotal);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   locationHeader: function() {
//     let locationName = document.createElement('h1');
//     locationName.textContent = this.location;
//     console.log(locationName);
//     list.appendChild(locationName);
//   }
// };
// tokyo.locationHeader();
// tokyo.totalCookiesPurchasedPerHour();

// let dubai = {
//   location: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   dailyTotal: 0,
//   cookiesSoldEachHour: [],
//   randomNumber: function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesPurchasedPerHour: function() {
//     for (let i = 0; i < this.hour.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       console.log(`${this.hour[i]}: ${totalCookies}`);
//       this.cookiesSoldEachHour.push(totalCookies);
//       this.dailyTotal + totalCookies;
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hour[i]}: ${this.cookiesSoldEachHour[i]}`;
//       list.appendChild(listItem);
//       let liTotal = document.createElement('li');
//       liTotal.textContent = `Total: ${this.dailyTotal}`;
//       list.appendChild(liTotal);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   locationHeader: function() {
//     let locationName = document.createElement('h1');
//     locationName.textContent = this.location;
//     console.log(locationName);
//     list.appendChild(locationName);
//   }
// };
// dubai.locationHeader();
// dubai.totalCookiesPurchasedPerHour();

// let paris = {
//   location: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   dailyTotal: 0,
//   cookiesSoldEachHour: [],
//   randomNumber: function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesPurchasedPerHour: function() {
//     for (let i = 0; i < this.hour.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       console.log(`${this.hour[i]}: ${totalCookies}`);
//       this.cookiesSoldEachHour.push(totalCookies);
//       this.dailyTotal + totalCookies;
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hour[i]}: ${this.cookiesSoldEachHour[i]}`;
//       list.appendChild(listItem);
//       let liTotal = document.createElement('li');
//       liTotal.textContent = `Total: ${this.dailyTotal}`;
//       list.appendChild(liTotal);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   locationHeader: function() {
//     let locationName = document.createElement('h1');
//     locationName.textContent = this.location;
//     console.log(locationName);
//     list.appendChild(locationName);
//   }
// };
// paris.locationHeader();
// paris.totalCookiesPurchasedPerHour();

// let lima = {
//   location: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   dailyTotal: 0,
//   cookiesSoldEachHour: [],
//   randomNumber: function() {
//     this.min = Math.ceil(this.min);
//     this.max = Math.floor(this.max);
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   totalCookiesPurchasedPerHour: function() {
//     for (let i = 0; i < this.hour.length; i++) {
//       let random = this.randomNumber();
//       console.log(random);
//       let totalCookies = Math.ceil(random * this.avg);
//       console.log(totalCookies);
//       console.log(`${this.hour[i]}: ${totalCookies}`);
//       this.cookiesSoldEachHour.push(totalCookies);
//       this.dailyTotal + totalCookies;
//       let listItem = document.createElement('li');
//       listItem.textContent = `${this.hour[i]}: ${this.cookiesSoldEachHour[i]}`;
//       list.appendChild(listItem);
//       let liTotal = document.createElement('li');
//       liTotal.textContent = `Total: ${this.dailyTotal}`;
//       list.appendChild(liTotal);
//     }
//     console.log(this.cookiesSoldEachHour);
//   },
//   locationHeader: function() {
//     let locationName = document.createElement('h1');
//     locationName.textContent = this.location;
//     console.log(locationName);
//     list.appendChild(locationName);
//   }
// };
// lima.locationHeader();
// lima.totalCookiesPurchasedPerHour();
