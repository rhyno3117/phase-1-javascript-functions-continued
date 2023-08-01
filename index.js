// code your solution here
function saturdayFun(customActivity){
    const defaultActivity = "This Saturday, I want to roller-skate!"
    return customActivity ? "This Saturday, I want to bathe my dog!" : "This Saturday, I want to roller-skate!"
}

function mondayWork(customActivity){
    const defaultActivity = "This Monday, I will go to the office."
    return customActivity ? "This Monday, I will work from home." : "This Monday, I will go to the office."
}

function wrapAdjective(highlight) {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }