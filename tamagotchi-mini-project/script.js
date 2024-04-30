// creation of Tamagochi class
class Tamagochi {
    constructor(name){
        this.isAlive = true;
        this.name = name;
        this.age = 0;
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.timer = 0
    }
    // each function below is used to control the attributes displayed on the screen. if the value is equal to 10, then the functions won't run. I chose to do that since I wouldn't really be able to know if it worked or not. increaseAge is different to the others and effects all properties in question.
    feedPet(){
        if(this.hunger < 10 && this.hunger >0){
            this.hunger++
            updateHungerDisplay()
        }
    }
    turnOffLights(){
        if (this.sleepiness < 10 && this.sleepiness >= 0) {
            this.sleepiness++;
            updateSleepinessDisplay()
        }
    }
    playWithPet(){
        if (this.boredom < 10 && this.boredom >= 0) {
            this.boredom++;
            updateboredomDisplay()
        }
    }    
    increaseAge(){
        this.age++
        if(this.hunger > 0){
            this.hunger-- 
        } 
         if (this.sleepiness > 0){
            this.sleepiness--
        } 
         if (this.boredom > 0) {
            this.boredom--
        }
        if(this.age % 1 === 0){
            alert("It's My Birthday🎉🎉🎉")
        }
         if (this.hunger === 0 && this.sleepiness === 0 && this.boredom ===0){
            this.endGame()
        }
        if (this.age === 3){
            secondTamagochiImage()
         } 
         if (this.age === 6){
            thirdTamagochiImage()
         }
    }

    // when this function is called, it creates another function within itself that calls the function increaseAge() and also changes the display of each property through multiple diplay functions. within the main function, we also create a setInterval function that passes the ageFunction and sets the time to 1 minute, which then stored in the this.timer property so that it is also updated.
    startAgeTimer(){
      const ageFunction = () => {
    if(this.isAlive === true){
        this.increaseAge()
    }
        updateAgeDisplay()
        updateHungerDisplay()
        updateSleepinessDisplay()
        updateboredomDisplay()
      }
      this.timer = setInterval(ageFunction,6000)
    }
    // the endGame() function is called once the three values being displayed equal to zero. once that happens, the stopAnimation() will be called to stop animations, the values would be hardset to 0 to show that the user cannot make any more moves. this.isAlive would be false and alert of "you lost" will pop up as well.
    endGame(){
            stopAnimation()
            this.hunger = 0
            this.sleepiness = 0
            this.boredom = 0
            this.isAlive = false
            alert("You Lost")
        
    }
}
//users tamagochi character is created but nothing is inside
let yourTamagochi

// each of the next 4 functions are used to update the display of its designated property
const updateHungerDisplay = () => {
    document.getElementById("hunger").textContent = "Hunger: " + yourTamagochi.hunger

}
const updateSleepinessDisplay = () => {
    document.getElementById("sleepiness").textContent = "Sleepiness: " + yourTamagochi.sleepiness

}
const updateboredomDisplay = () => {
    document.getElementById("boredom").textContent = "Boredom: " + yourTamagochi.boredom

}
const updateAgeDisplay = () => {
    document.getElementById("age").textContent = "Age: " + yourTamagochi.age

}
//startGame(): when called, the value that his been stored in the input field would be stored into the petName variable by taking the inputs ID and it's value. the function will then take the yourTamagochi value that has been outside the function and create a new Tamagochi instance with the petName variable being passed in so that the name of the pet would stored in the yourTamagochi variable. the display of the landing page is none so that it is hidden and gameLive is has the style of display block since thats the one I want on screen when called. the textContent of the petNameVariable will be assigned as petName, this would help the welcome message when the person clicks start so that the sentence is personalized. the first Tamagochi-logo is set to 0 so nobody sees it, the second one is still up since its HTML values are still valid. the button and display list are also set to display block to make it visible, whilst the second and third gameCharacters are hidden when startGame is called. finally, the display of each value is updated so that we know where the values start from and the startTimer function is called so that the user can get an alert if the pet has had a birthday.

const startGame = () =>{
    const petName = document.getElementById("petName").value
    yourTamagochi = new Tamagochi(petName)
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("gameLive").style.display="block";
    document.getElementById("petNameDisplay").textContent = petName;
    document.getElementsByClassName("Tamagochi-logo")[0].style.display = "none";
    document.getElementById("buttons-container").style.display="block"
    document.getElementById("displayList").style.display="block"
    document.getElementById("secondGameCharacter").style.display="none"
    document.getElementById("thirdGameCharacter").style.display="none"
    updateAgeDisplay()
    updateHungerDisplay()
    updateSleepinessDisplay()
    updateboredomDisplay()
    yourTamagochi.startAgeTimer()
}
// This is to make the buttons work. DOMContent Loaded lets us know that the HTML doc has been loaded into the browser. If this works, then each button variable will recieve its respective id and will have EventListeners hooked onto them so that for every click thats made, a function will run and will access each respective function in the yourTamagochi character.
document.addEventListener("DOMContentLoaded",function(){
    const feedPetButton = document.getElementById("feedPet")
    feedPetButton.addEventListener("click",function(){
    yourTamagochi.feedPet()
})
    const lightsOffButton = document.getElementById("lightsOff")
    lightsOffButton.addEventListener("click", function(){
        yourTamagochi.turnOffLights()
    })
    const activitiesButton = document.getElementById("activities")
    activitiesButton.addEventListener("click", function(){
        yourTamagochi.playWithPet()
    })
})

// each of these are used to change the display of the display of the image when the age reaches a certain point. if age reaches 3, secondTamagochiImage is called. if age reaches 6, thirdTamagochi is called.

 const secondTamagochiImage = () => {
    document.getElementById("gameCharacter").style.display = "none"
    document.getElementById("secondGameCharacter").style.display = "block"
} 
const thirdTamagochiImage = () => {
    document.getElementById("gameCharacter").style.display = "none"
    document.getElementById("secondGameCharacter").style.display = "none"
    document.getElementById("thirdGameCharacter").style.display = "block"
} 
// stopAnimation function is called to end any animations when required. by setting all animations to none, all animations would stop.

const stopAnimation = () => {
    document.getElementById("gameCharacter").style.animation = "none"   
    document.getElementById("secondGameCharacter").style.animation = "none"   
    document.getElementById("thirdGameCharacter").style.animation = "none"   
}
