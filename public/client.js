var pet_info = {
	"name" : "Flop",
	"weight" : 10,
	"happiness" : 9001
}

$(function() {
  
  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.bunny-select').click(selectedBunny);
  $('.dog-select').click(selectedDog);
  $('.cat-select').click(selectedCat);
  
})

  // Add a variable "pet_info" equal to a dictionary with the name (string), weight (number), and happiness (number) of your pet

 function selectedBunny() {

  $('petImage').src = "/assets/bunny.jpg";
  pet_info = {
	"name" : "Flop",
        "weight" : 5,
        "happiness" : 9001
  }

 }

 function selectedDog() {

  $('petImage').src = "/assets/dog.jpg";
  pet_info = {
	"name" : "Spot",
        "weight" : 8,
        "happiness" : 9001
  }

 }

 function selectedCat() {

  $('petImage').src = "/assets/cat.jpg";
  pet_info = {
	"name" : "Fluff",
        "weight" : 6,
        "happiness" : 9001
  }

 }


  function clickedTreatButton() {
    // Increase pet happiness
    pet_info.happiness++;
    // Increase pet weight
    pet_info.weight++;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    // Increase pet happiness
    pet_info.happiness++;
    // Decrease pet weight
    pet_info.weight--;
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {
    // Decrease pet happiness
    pet_info.happiness--;
    // Decrease pet weight
    pet_info.weight--;
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero
    if( pet_info.weight < 0 ){
	console.log("STOP STARVING YOUR PET/WORKING IT TO DEATH");
	pet_info.weight = 0;
    }

    if( pet_info.happiness < 0 ){
	console.log("You are a terrible pet owner");
	pet_info.happiness = 0;
    }

    
  }
  
  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
