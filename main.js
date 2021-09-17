//Create a list of times
let apptTimes = ["9:00AM - 10:00AM", "10:00AM-11:00AM", "11:00AM- 12:00PM",
"1:00PM - 2:00PM", "2:00PM - 3:00PM", "3:00PM - 4:00PM", "4:00PM - 5:00PM"];

let stringAppt = "Please select an appointment for today by typing '1,2,3, ect..'\n";
//Show the user the available items
for(let i = 0; i < apptTimes.length; i++)
{
    stringAppt += "(" + (i+1) + ") " + apptTimes[i] + " \n "
}

//Prompt the user to select a time
let userInput = Number(prompt(stringAppt))

while(isNaN(userInput) || userInput === "" || userInput < 1 || userInput > apptTimes.length)
{
    userInput = Number(prompt("Invalid input. \n" + stringAppt));
}
userInput -= 1;
//Remove that appointment from the list.
apptTimes.splice(userInput, 1);

console.log("The remaining appointments available are: ")
for(let j = 0; j < apptTimes.length; j++)
{
    
    console.log(apptTimes[j]);
}