//function to check input validity
function checkInputValidity(numFruits)
{
    //check if numFruits contains a sequence of 1 or more digits
    //this means checking if it follows a certain format
    var ok = numFruits.search(/^\d+$/)

    //if invalid
    if (ok!=0)
        //raise an alert message to ask the user to reinput 
        alert("Invalid input! Must contain only digits! Please re-enter!") 
}