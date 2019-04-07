//function to check input validity
function userInput(numFruits)
{
    //check if numFruits contains a sequence of 1 or more digits
    //this means checking if it follows a certain format
    var ok = numFruits.search(/^\d+$/)

    //if valid, calculate the total cost of order
    if (ok==0)
    {
        //store number of apples in a variable
        numOfApples = document.getElementById("apple").value
        
        //store number of oranges in a variable
        numOfOranges = document.getElementById("orange").value

        //store number of bananas in a variable
        numOfBananas = document.getElementById("banana").value

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