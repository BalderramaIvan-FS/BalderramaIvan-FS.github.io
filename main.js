//Create a list of times
let apptTimes = ["9:00AM - 10:00AM", "10:00AM-11:00AM", "11:00AM- 12:00PM",
"1:00PM - 2:00PM", "2:00PM - 3:00PM", "3:00PM - 4:00PM", "4:00PM - 5:00PM"];

//Show the user the available items
for(let i = 0; i < apptTimes.length; i++)
{
    console.log(prompt("("+ i + ")" + apptTimes[i]))
}

//Prompt the user to select a time

//Remove that appointment from the list.
