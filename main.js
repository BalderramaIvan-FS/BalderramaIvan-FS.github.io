//Create a list of times
let apptTimes = ["9:00AM - 10:00AM", "10:00AM-11:00AM", "11:00AM- 12:00PM",
"1:00PM - 2:00PM", "2:00PM - 3:00PM", "3:00PM - 4:00PM", "4:00PM - 5:00PM"];

let stringAppt = "Time Availability:\n\n";
//Show the user the available items
for(let i = 0; i < apptTimes.length; i++)
{
    stringAppt += "(" + (i+1) + "). " + apptTimes[i] + " \n\n "
}

let timeHours = document.getElementById('hours');
timeHours.innerText = stringAppt;


var nameLabel = document.getElementById('nameLabel');
var numberLabel = document.getElementById('numberLabel');
var serviceLabel = document.getElementById('serviceLabel');


var submitButton = document.getElementById('apptButton').onclick = appointmentForm;


//Function for when user types in information
function appointmentForm(){
    stringAppt = "";
    //Assign variable to users input
    let userName = document.getElementById('nameInput').value;
    var numberInput = document.getElementById('number').value;
    let service = document.getElementById('serviceInput').value;

    //check if user input values in the form.
    validation(userName, numberInput, serviceInput);

    
    if(numberInput != 0)
    {
        //remove appointment time depending on users index selection
        apptTimes.splice(Number(numberInput -1), 1);
    }
    

    for(let j = 0; j < apptTimes.length; j++)
{
    stringAppt += "(" + (j+1) + "). " + apptTimes[j] + " \n\n "
}
//Displays an updated list of appointment times.
    timeHours.innerText = stringAppt;
    //Displays the users chosen items.
    document.getElementById("nameResult").innerHTML = 'Name: ' + userName;
    document.getElementById("appointmentTime").innerHTML = 'Time: ' + apptTimes[Number(numberInput -1)];
    document.getElementById("serviceType").innerHTML = 'Service: ' + service;

}

//validates if the fields are empty then it will pop an alert.
function validation(nameInput, numberInput, serviceInput)
{
    if(nameInput ==='' )
    {
        alert('Please put a first and last name.')
    }
    else if(numberInput === '')
    {
        alert('Please select a number from the list in the appointment times available.')
    }
    else if(serviceInput ==='')
    {
        alert('Please type the type of service you are requesting.')
    }
}
    


