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

const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

const maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku', 'Yaw', 'Kofi','Kwame'];


// Declare and initialize variables to be used to retrieve the form element 
// input data through the DOM
// We shall therefore initialize each of these Input variable as a string array
// inorder to hold the form input control's data as a String type Array in our variables 
// as follows:

  let usersName = [""];

   usersName = akanForm.elements['usersName'];

  let birthYear = [""]; 

    birthYear = akanForm.elements['birthYear'];

  let birthMonth = [""];

   birthMonth = akanForm.elements['birthMonth'];
  
  let birthDay = [""];

   birthDay = akanForm.elements['birthDay'];
  
// Default gender refers to the option button pre-selected
// before the user configures it to his options

  let defaultGender = akanForm.elements['gender'];

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

  let yearDigits = yearInput.splice(2,3);

  let monthDigits = monthInput.splice(0,1);

  let dayDigits = dayInput.splice(0,1);


  
  // We then designate dayOfTheWeek as a variable of a function 
  // within which we shall apply the specified akan formula, 
  // to be used to compute the day of the week


  let dayOfTheWeek = function() = > {




  };

alert(defaultGender);

function getGenderSelected(){
  if(defaultGender ==== )
}



// Application Logic


function getFemaleAkanNames(){
  
}

function getFemaleAkanNames(){
}


 

function getDayOfTheWeek(){



  
}



akanForm.addEventListener('submit', event=>{

  //method preventing the browser from submitting the form

      event.preventDefault()
});







}