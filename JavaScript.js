//function to check input validity
function userInput(numFruits)
{
    //check if numFruits contains a sequence of 1 or more digits
    //this means checking if it follows a certain format
    ok = numFruits.search(/^\d+$/)

    //if numFruits does not contain a sequence of 1 or more digits, check if the textbox is empty
    if (ok!=0)
    {
        ok = numFruits.search(/^$/) 
    } 

    //2 scenarios: it is a digit, or it is empty 
    //if valid, calculate the total cost of order
    if (ok==0)
    {
        //store number of apples in a variable
        numOfApples = document.getElementById("apple").value
        if (numOfApples.search(/^$/)==0)
        {
            numOfApples = 0;
        }
        
        //store number of oranges in a variable
        numOfOranges = document.getElementById("orange").value
        if (numOfOranges.search(/^$/)==0)
        {
            numOfOranges = 0;
        }

        //store number of bananas in a variable
        numOfBananas = document.getElementById("banana").value
        if (numOfBananas.search(/^$/)==0)
        {
            numOfBananas = 0;
        }

        //perform the calculation 
        totalCost = numOfApples*0.69 + numOfOranges*0.59 + numOfBananas*0.39 

        //display the total cost in the total cost textbox
        document.getElementById("totalCost").value = totalCost
    }
            
    //if invalid
    if (ok!=0)
    {
        //raise an alert message to ask the user to reinput 
        alert("Invalid input! Must contain only digits! Please re-enter!") 
        //total cost textbox displays NaN
        document.getElementById("totalCost").value = "NaN"  
    }

}

//performs checks post-submission 
function submissionCheck()
{
    //get the name
    name = document.getElementById("name").value
    //if name is not entered, raise alert
    if (name.search(/^$/)==0) 
    {
        alert("Please enter your name!") 
        return false 
    }

    //get the input for number of apples
    numOfApples = document.getElementById("apple").value
    //if invalid, raise alert and return false 
    if (((numOfApples.search(/^\d+$/)!=0) && (numOfApples.search(/^$/)!=0)))
    {
        alert("Input for number of apples is invalid!")
        return false 
    }
    
    //get the input for number of oranges
    numOfOranges = document.getElementById("orange").value
    //if invalid, raise alert and return false 
    if (((numOfOranges.search(/^\d+$/)!=0) && (numOfOranges.search(/^$/)!=0)))
    {
        alert("Input for number of oranges is invalid!")
        return false 
    }

    //get the input for number of bananas
    numOfBananas = document.getElementById("banana").value
    //if invalid, raise alert and return false 
    if (((numOfBananas.search(/^\d+$/)!=0) && (numOfBananas.search(/^$/)!=0)))
    {
        alert("Input for number of bananas is invalid!")
        return false 
    }

    //initialise checked to be false 
    checked = false

    //get the tag as an object 
    radios = document.getElementsByName("payment")
    
    //loop through each radio button
    for (i=0; i<radios.length; i++)
    {
        //if it is checked
        if (radios[i].checked)
        { 
            //set checked to be true and break 
            checked = true
            break
        }
    }
    
    //if checked remains false, raise alert and return false 
    if(checked==false)
    {
        alert("Please choose your payment method!")
        return false
    }
 
    //if not returned yet, all checks pass, return true
    return true
} 