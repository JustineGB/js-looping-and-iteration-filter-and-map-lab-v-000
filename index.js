// Code your solution here:
const drivers = []

function driversWithRevenueOver(drivers, revenue) {
  drivers = drivers.filter(driver => driver.revenue > revenue);
  return drivers;
}


function driverNamesWithRevenueOver() {
 drivers = drivers.filter(driver => driver.revenue > revenue);
  return drivers.map(driver => driver.name);
}


function exactMatch () {
  
}