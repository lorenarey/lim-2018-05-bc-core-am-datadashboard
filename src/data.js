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