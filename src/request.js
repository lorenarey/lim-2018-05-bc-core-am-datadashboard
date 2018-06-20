const UsersUrl = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'
const ProgressUrl = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'
const CohortsUrl = '../data/cohorts.json'

//declaramos el objeto global cohort data vacío que se llenará cuando se obtenga la data
// las variables se puede cargar de cualquier archivo por que esta dentro del ob windows //
window.cohortData = {}

const saveUsers = (event) => {
    //guardndo la data user en cohortData.users
    cohortData.users = JSON.parse(event.target.responseText);
}

const saveProgress = (event) => {
    cohortData.progress = JSON.parse(event.target.responseText);
} 

 const saveCohorts = (event) => {
    cohortData.cohorts = JSON.parse(event.target.responseText);   
}

const handleError= () => {
  console.log('hay un error')
}

//Creamos una funcion donde pasamos de parametro las url y el onload
const getData = (url, onload, stringData) => {

    let requestData = new XMLHttpRequest();
    requestData.open('GET', url);
    requestData.onload = onload;
    requestData.onerror = handleError;
    requestData.send();
 };

 getData(UsersUrl, saveUsers, 'users'); 
 getData(ProgressUrl, saveProgress, 'progress');
 getData(CohortsUrl, saveCohorts, 'cohorts');
 