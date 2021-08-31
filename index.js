function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity, activityDefault = "go to the office") {
   
    let content = activityDefault;
    if (activity != undefined) {
        content = activity;
    }

    return `This Monday, I will ${content}.`;
}

function wrapAdjective(flair = '*') {
    return function inner(words = "special") {
        return `You are ${flair}${words}${flair}!`
    }
}

// console.log(wrapAdjective("!!!")("the best person ever"));

