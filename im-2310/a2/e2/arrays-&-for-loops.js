

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(fruitArray);
fruitArray[1] = "tomato";
console.log(fruitArray)

for(let fruit of fruitArray){
    console.log(fruit);
    if(fruit === "tomato"){
        console.log("but is it fruit?");
    } else {
        console.log(fruit);
    }
    }

    var informationArray = ["Publisher", "Cuisine", "TimeToCook", "SkillLevel", "Course", "Servings", "Dietary", "DatePublished", "DateUpdated", "SpecialEquipment"]


