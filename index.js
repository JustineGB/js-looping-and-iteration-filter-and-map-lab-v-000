const drivers = []

function driversWithRevenueOver(drivers, revenue) {
  drivers = drivers.filter(driver => driver.revenue > revenue);
  return drivers;
}

function exactMatch(drivers, object){
  return drivers.filter(function(driver){
    match = false
    for(const key in object){
      match = driver[key] === object[key]
    }
      return match
  })
}

function exactMatchToList(drivers, object){
  matches = exactMatch(drivers, object)
  return matches.map(m => m.name)
}