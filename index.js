const drivers = []

function driversWithRevenueOver(drivers, revenue) {
  drivers = drivers.filter(driver => driver.revenue > revenue);
  return drivers;
}


function driverNamesWithRevenueOver(drivers, revenue) {
 driverName = driversWithRevenueOver(drivers, revenue)
  return driverName.map(driver => driver.name)
}

function exactMatch(drivers, driverObject){
  return drivers.filter(function(driver){
    match = false;
    for (const key in driver) {
      match = driver[key] === driver[key]
    }
      return match
  })
}

// function exactMatchToList(drivers, object){
//   matches = exactMatch(drivers, object)
//   return matches.map(m => m.name)
// }