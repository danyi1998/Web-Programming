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
        if (numOfApples=="")
        {
            numOfApples = 0;
        }
        
        //store number of oranges in a variable
        numOfOranges = document.getElementById("orange").value
        if (numOfOranges=="")
        {
            numOfOranges = 0;
        }

        //store number of bananas in a variable
        numOfBananas = document.getElementById("banana").value
        if (numOfBananas=="")
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

//check for the presence of name and payment method
function presence()
{
    //get the name
    name = document.getElementById("name").value
    //if name is not entered, raise alert
    if (name=="")
    {
        alert("Please enter your name!") 
        return false 
    }

    //get the tag as an object 
    radios = document.getElementsByName("payment")
    
    //loop through each radio button
    for (i=0; i<radios.length; i++)
    {
        //if it is checked, set check to be true, return 
        if (radios[i].checked)
        { 
            return true
        }
    }
    
    //if do not return, it means that no option has been chosen, raise alert 
    alert("Please choose your payment method!")
    return false 
    
} 