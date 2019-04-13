<?php
    //read in the variables
    $name = $_POST["name"]

    $numOfApples = $_POST["apples"]
    $numOfOranges = $_POST["oranges"]
    $numOfBananas = $_POST["bananas"]

    $paymentMethod = $_POST["payment"] 
    
    //compute the total cost 
    $cost = $numOfApples*0.69 + $numOfOranges*0.59 + $numOfBananas*0.39
    
    //define the file
    $fname = "order.txt" 

    #update the file to contain the total numbers of apples, oranges, and bananas bought by ALL users 
    
    //open the file
    $fptr = fopen($fname, w+) 

    //capture the size of the file
    $fsize = filesize($fname) 

    //if file is empty, write to it directly 
    if ($fsize==0)
    {
        $results = "Total number of apples: " + $numOfApples 
        + "\nTotal number of oranges: " + $numOfOranges 
        + "\nTotal number of bananas: " + $numOfBananas
        fwrite($fptr, $results)
    }

    //if file is not empty 
    else
    {
        //read the contents
        $contents = fread($fptr, $fsize)

        //capture the current number of apples, oranges, bananas
        $split = explode("\n", $contents)
        $currentApples = explode(":", $split[0])[1] 
        $currentOranges = explode(":", $split[1])[1] 
        $currentBananas = explode(":", $split[2])[1] 

        //add the additional apples, oranges, and bananas to the current numbers
        $currentApples = $currentApples + $numOfApples
        $currentOranges = $currentOranges + $numOfOranges
        $currentBananas = $currentBananas + $numOfBananas

        //write the new numbers of apples, oranges, and bananas to the file
        $results = "Total number of apples: " + $currentApples 
        + "\nTotal number of oranges: " + $currentOranges
        + "\nTotal number of bananas: " + $currentBananas
        fwrite($fptr, $results) 
    }

    //close the file
    fclose($fptr) 
    

    
    //html code to display a receipt to the user 
    echo
    "<html>
        <head>
            <title>Receipt</title>
        </head>

        <body>
            <table>
                <tr>
                    <td>Name</td>
                    <td>".$name."</td>
                </tr>

                <tr>
                    <td>Apples</td>
                    <td>".$numOfApples."</td>
                </tr>

                <tr>
                    <td>Oranges</td>
                    <td>".$numOfOranges."</td>
                </tr>

                <tr>
                    <td>Bananas</td>
                    <td>". $numOfBananas."</td>
                </tr>

                <tr>
                    <td>Payment Method</td>
                    <td>".$paymentMethod."</td>
                </tr>
            </table>
        </body>
    </html>"
?>