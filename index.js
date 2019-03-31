// Code your solution here:
const drivers = []

function driversWithRevenueOver(drivers, revenue) {
  drivers = drivers.filter(driver => driver.revenue > revenue);
  return drivers;
}


function driverNamesWithRevenueOver() {
  return driversWithRevenueOver.map(driver => driver.name);
}


function exactMatch () {
  
}