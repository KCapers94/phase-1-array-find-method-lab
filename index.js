// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(record){
    let foundSuperBowl = record.find((element) =>{
        if(element.result === "W"){
            return true
        }
    })
    if(foundSuperBowl === undefined){
        return foundSuperBowl
    }
    return foundSuperBowl.year
  }
  