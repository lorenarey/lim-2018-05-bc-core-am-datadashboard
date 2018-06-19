const names = document.getElementById('submit-btn')
const responseContainer = document.getElementById('response-container')
//declaramos el objeto global vacío que se llenará cuando se obtenga la data//
window.cohortData = {}
console.log (cohortData);

const getUser = () => {
   let requestUsers = new XMLHttpRequest();
   requestUsers.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json');
   requestUsers.onload = saveUsers;
   requestUsers.onerror = handleError;
   requestUsers.send();
};

const saveUsers = (event) => {
    cohortData.users = JSON.parse(event.target.responseText);
    getProgress(); 
}



/*const getProgress = () => {
    let requestProgress = new XMLHttpRequest();
    requestProgress.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/progress.json');
    requestProgress.onload = saveProgress;
    requestProgress.onerror = handleError;
    requestProgress.send();
 };

 const saveProgress = (event) => {
    cohortData.progress = JSON.parse(event.target.responseText);
    getCohorts();
 }  

 const getCohorts= () => {
    let requestCohorts = new XMLHttpRequest();
    requestCohorts.open('GET', '../data/cohorts.json');
    requestCohorts.onload = saveCohorts;
    requestCohorts.onerror = handleError;
    requestCohorts.send();
 };
 
 const saveCohorts = (event) => {
     cohortData.cohorts = JSON.parse(event.target.responseText);
     printCohorts();
 }*/

    const printUsers = () => {
    const showUsers = getUser.map(function(user) {
        console.log(cohortData);
    })

    let li = document.createElement('li');
    li.className = 'articleClass';
    li.innerHTML = `<a href='#'>${users.name}</a>`;
    responseContainer.appendChild(li);

        /*console.log(user.id); 

     });
       - ${progressData[user.id].intro.completedDuration} 
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
    }
