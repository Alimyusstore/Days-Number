let myDays = document.getElementById('myDays');
const displayDays = document.getElementById('displayDays');
let mySubmit = document.getElementById('mySubmit');


mySubmit.onclick = function(){
let day;

day = myDays.value;
day = Number(day);
switch(day) {
    case 1:
        displayDays.textContent = "it is Monday";
        break;
    case 2: 
        displayDays.textContent = "it is Tuesday";
        break;
    case 3: 
        displayDays.textContent = "it is Wednesday";
        break;
    case 4: 
        displayDays.textContent = "it is Thurday";
        break;
    case 5: 
         displayDays.textContent = "it is Friday";
        break;
    case 6: 
         displayDays.textContent = "it is Saturday";
        break;
    case 7: 
         displayDays.textContent = "it is Sunday";
        break;
    default:
        displayDays.textContent = "it's not a day of the week"

}
}
