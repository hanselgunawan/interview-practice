// Once finished with the HTML/CSS complete Exercise 1 and Exercise 2 below

/*
 Exercise 1

 Write a script that returns the number of occurrences  of any given letter within the "Join the 42..." paragraph

 Example: the letter "j" occurs twice within the paragraph
 */
function numOfOccurences(letter)
{
    let counter = 0;
    let word = document.getElementsByClassName("join-message");
    word = word[0].innerText;
    for(let i=0;i<word.length;i++)
    {
        if(letter.toLowerCase() == word[i].toLowerCase()) counter++;
    }
    return counter;
}

/*
 Exercise 2
 Write a function that validates the donation input field in the HTML form, returning true if the value is a number greater than zero, and false for any other input. Then, bind an anonymous function to the Give Now button, that performs a console.log with the return value of your validator function
 */
function isGreaterThanZero()
{
    let num = document.getElementsByClassName("donation-input")[0].value;
    num = parseInt(num);
    if(num>0) return true;
    else return false;
}