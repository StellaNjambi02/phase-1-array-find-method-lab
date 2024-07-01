// code your solution here

function superbowlWin(array){
    for(const user of array){ 
    if(user.result==="W"){
        return user.year;
    }
    
}}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]
  record.find(superbowlWin);

  