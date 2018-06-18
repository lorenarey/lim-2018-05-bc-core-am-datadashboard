const names = document.getElementById('submit-btn')
const responseContainer = document.getElementById('response-container')

const getUser = () => {
   let requestUsers = new XMLHttpRequest();
   requestUsers.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
   requestUsers.onload = saveUsers;
   requestUsers.onerror = handleError;
   requestUsers.send();
};

const saveUsers = (event) => {
    window.userData = JSON.parse(event.target.responseText);
    getProgress(); 
}


const getProgress = () => {
    let requestProgress = new XMLHttpRequest();
    requestProgress.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
    requestProgress.onload = saveProgress;
    requestProgress.onerror = handleError;
    requestProgress.send();
 };

 const saveProgress = (event) => {
    window.progressData = JSON.parse(event.target.responseText);
    printData();
 }  

 const printData = () => {
    const showData = userData.map(function(user) {
        console.log(user.name);
        console.log(user.id); 
        //falta imprimir el progreso del usuarioooooo
     });
     
 };

/*const showUser = () => {
    const users = userData.map(function(user){
        console.log(user.name, progressData[user.id])

        progressData[user.id].hasOwnProperty('intro')
        if(!progressData[user.id].hasOwnProperty('intro')){
            return false    
        }

        let li = document.createElement('li');
        li.className = 'articleClass';
        li.innerHTML = `<a href='#'>${user.name}  - ${progressData[user.id].intro.completedDuration} </a>`;


        responseContainer.appendChild(li);
    });
}*/

const handleError= () => {
  console.log('hay un error')
}

names.addEventListener('click', (e) => {
   e.preventDefault();
   getUser(); 
});
