/*const requestCohorts = new XMLHttpRequest();
requestCohorts.open('GET', '../data/cohorts.json');
requestCohorts.onload = addNames;
requestCohorts.onerror = handleError;
requestCohorts.send();


function addNames() {
        const data = JSON.parse(this.responseText);
        console.log(data);
}

function handleError() {
    console.log('hay un error')
}

window.computeUsersStats = (users, progress, courses) => {

    user:() =>{
       // creo que aqui va esto  for of...... (estudiar)
    }
 
 }


*/
//const responseContainer = document.getElementById('response-container');
//let searchedForText;

const names = document.getElementById('submit-btn')
const responseContainer = document.getElementById('response-container')

getNames = () => {
   let requestUsers = new XMLHttpRequest();
   requestUsers.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
   requestUsers.onload = addUsers;
   requestUsers.onerror = handleError;
   requestUsers.send();
};


const addUsers = (event) => {
   const data = JSON.parse(event.target.responseText);
   
   for (let i=0; i<data.length; i++) {
       let li = document.createElement('li');
       li.className = 'articleClass';
       li.innerText = data[i].name;

       responseContainer.appendChild(li);  
   }

}

const handleError= () => {
  console.log('hay un error')
}

names.addEventListener('click', (e) => {
   e.preventDefault();
   getNames();    
});





/*
const requestProgress = new XMLHttpRequest();
requestProgress.open('GET', 'http://127.0.0.1:8080/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
requestProgress.onload = function() {
	const data = JSON.parse(this.responseText);
	console.log(data);
};
requestProgress.onerror = function() {
console.log('Hay un error');
};
requestProgress.send();
*/