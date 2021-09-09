//THE AKAN APPLICATION


//Business Logic

// 1. We begin by accessing the form whose input we shall be expected to interact with
//    We also specify the prevent default submit method at the bottom of the page

let akanForm = document.getElementById('akan-form')

// 2. Declare the variable types of the name result options to be generated
//    within the scope of our form placing them inside an array according to 
//    thier corresponding gender.

// The maleNames and femaleNames in the array are in an indexed order 
// which corresponds to the day of the week designation for each name.

let dayOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku', 'Yaw', 'Kofi','Kwame'];


// Declare and initialize variables to be used to retrieve the form element 
// input data through the DOM
// We shall therefore initialize each of these Input variable as a string array
// inorder to hold the form input control's data as a String type Array in our variables 
// as follows:

  let  usersName = [""];

       usersName = akanForm.elements['usersName'];

  let  usersNameError = akanForm.elements['usersNameError'];

  let  birthYear = [""]; 

       birthYear = akanForm.elements['birthYear'];

  let  birthYearError = akanForm.elements['birthYearError'];

  let birthMonth = [""];

   birthMonth = akanForm.elements['birthMonth'];

   let birthMonthError = akanForm.elements['birthMonthError'];
  
  let birthDay = [""];

   birthDay = akanForm.elements['birthDay'];

   let birthDayError = akanForm.elements['birthDayError'];
   
  
// Default gender refers to the option button pre-selected
// before the user configures it to his options

  let defaultGender = [""]
  
  defaultGender = akanForm.elements['gender'];

  // Since we require characters within the year month and day input which 
  // we shall later parse into integers, we shall therefore initialize
  // each of these Input variable as a string array as follows:

  let yearInput = parseInt(birthYear);

  // We also declare the month Input variable as a string array:

  let monthInput = parseInt(birthMonth);

  // Finally we declare the date Input variable as a string array:

  let dayInput = parseInt(birthDay);


//  Next we declare all the variables required to enable us obtain the specific values required 
//  in the Akan formula to determine the day of the week:

  let centuryDigits = yearInput.splice(0,1);

     let cc = centuryDigits

  let yearDigits = yearInput.splice(2,3);

    let yy = yearDigits

  let monthDigits = monthInput;

    mm = monthDigits

  let dayDigits = dayInput;

    dd = dayDigits

  //According to the formula 
  // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 //where;

 // CC - is the century digits. For example 1989 has CC = 19

 // YY - is the Year digits (1989 has YY = 89)

 // MM -  is the Month

 // DD - is the Day of the month 

 // mod - is the modulus function ( % 
  
  
  // We then designate dayOfTheWeek as a variable of a function 
  // within which we shall apply the specified akan formula, 
  // to be used to compute the day of the week

  
 
console.log(dayOfWeekIndexValue); //for the birthday 10/03/83 the day of the week is Thursday


// Business Logic
// According to my AKAN my date of birth  which falls on a Thursday
// is the day of the week at position 5 of my dayOfTheWeek array.
// Therefore if the index position of my dayOfTheWeek is 5 it then follows 
// that my AKAN days of the week index 0 should begin on Saturday. 

// Re-arranging our dayOfTheWeek order and corresponding maleNames and femaleNames order:

dayOfTheWeek = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
 
let femaleNames = ['Ama','Akosua','Adwoa','Abenaa','Akua','Yaa','Afua'];

let maleNames = ['Kwame','Kwasi','Kwadwo','Kwabena','Kwaku', 'Yaw', 'Kofi'];


alert(defaultGender);

let dayOfWeekIndexValue = parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) %7
);






  function getAkanNames(dayOfWeekIndexValue){

     if(defaultGender === "female") {
  
        alert( "The Akan name for "+ usersName ,"is " + femaleNames[dayOfWeekIndexValue])
    }
  
    else if (defaultGender !== "female"){
    
    
      alert( "The Akan name for "+ usersName ,"is " + maleNames[dayOfWeekIndexValue])
  
     }
        
    
    else{
    
      alert("Please Enter Valid Details As Required ");
  }
  
  }

  getAkanNames(dayOfWeekIndexValue)


akanForm.addEventListener('submit', event=>{

  //method preventing the browser from submitting the form

      event.preventDefault()
});







}