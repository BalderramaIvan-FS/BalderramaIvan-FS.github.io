//Create a list of times
let apptTimes = ["9:00AM - 10:00AM", "10:00AM-11:00AM", "11:00AM- 12:00PM",
"1:00PM - 2:00PM", "2:00PM - 3:00PM", "3:00PM - 4:00PM", "4:00PM - 5:00PM"];

let stringAppt = "Time Availability:\n\n";
//Show the user the available items
for(let i = 0; i < apptTimes.length; i++)
{
    stringAppt += "(" + (i+1) + "). " + apptTimes[i] + " \n\n "
}

//Prompt the user to select a time

let timeHours = document.getElementById('hours');
timeHours.innerText = stringAppt;

var submitButton = document.getElementById('apptButton').onclick = appointmentForm;

function appointmentForm(){
    let userName = document.getElementById('nameInput').value;
    let numberInput = document.getElementById('number').value;
    let service = document.getElementById('serviceInput').value;

    apptTimes.splice(Number(numberInput -1), 1);

    


    document.getElementById("nameResult").innerHTML += userName;
    document.getElementById("appointmentTime").innerHTML += apptTimes[Number(numberInput -1)];
    document.getElementById("serviceType").innerHTML += service;

}


    for(let j = 0; j < apptTimes.length; j++)
    {
        timeHours.innerText += apptTimes[j]+"\n";
    };


