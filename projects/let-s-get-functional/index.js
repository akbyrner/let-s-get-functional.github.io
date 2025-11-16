// #!/usr/bin/env node

'use strict';


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++){  
  if (array[i].gender === 'male'){
        count ++;
  }
}
return count;
};

var femaleCount = function(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++){  
    if (array[i].gender === 'female'){
          count ++;
    }
  }
  return count;
  };

var oldestCustomer = function(array){
    let oldest = array[0];
    for (let i = 0; i < array.length; i++){
        if (oldest.age < array[i].age){
            oldest = array[i];
        }
    }
        return oldest.name;
}

var youngestCustomer = function(array){
    let youngest = array[0];
    for (let i = 0; i < array.length; i++){
        if (youngest.age > array[i].age){
            youngest = array[i];
        }
    }
        return youngest.name;
};

var averageBalance = function(array){
    let total = 0;
    let indexBal = 0;
    for (let i = 0; i <array.length; i++){
        indexBal = (Number(data[i].balance.replace(/[^0-9\.-]+/g,"")));
        total += indexBal;
    }
    return total.toFixed(2) / array.length;

}

var firstLetterCount = function(array, letter){
    let count = 0;
    for (let i = 0; i < array.length; i++){
        let first = array[i].name[0];
        if (letter.toUpperCase() === first){
            count ++;
        }
    }
    return count;
}

var friendFirstLetterCount = function(array, customer, letter){
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i].name === customer){
            let friends = array[i].friends;
            for (let j = 0; j < friends.length; j++){
                if (friends[j].name.charAt(0) === letter.toUpperCase()){
                    count++;
                }
            }
        }
    }    
    return count;
}
   
var friendsCount = function(array, customer){
    let list = [];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === customer) {
                list.push(array[i].name);
            }
        }
    }
    return list;
}

function topThreeTags(data) {
    const tagCounts = {};
    for (const item of data) {
        for (const tag of item.tags) {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        }
    }
    const tagArray = Object.entries(tagCounts);
    tagArray.sort(([, countA], [, countB]) => countB - countA);
    const topThreeTags = tagArray.slice(0, 3).map(([tag]) => tag);
  
    return topThreeTags;
  }

var genderCount = function(array){
    let genders = {female: 0, male: 0, "non-binary": 0};
    for (let i = 0; i < array.length; i++){
        if (array[i].gender === 'female'){
            genders.female++;
        }else if (array[i].gender === 'male'){
            genders.male++
        }else if (array[i].gender === 'non-binary'){
            genders['non-binary']++
        }
    }
    return genders;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
// module.exports.maleCount = maleCount;
// module.exports.femaleCount = femaleCount;
// module.exports.oldestCustomer = oldestCustomer;
// module.exports.youngestCustomer = youngestCustomer;
// module.exports.averageBalance = averageBalance;
// module.exports.firstLetterCount = firstLetterCount;
// module.exports.friendFirstLetterCount = friendFirstLetterCount;
// module.exports.friendsCount = friendsCount;
// module.exports.topThreeTags = topThreeTags;
// module.exports.genderCount = genderCount;
