const names = document.getElementById('cohort-lima')
const responseContainer = document.getElementById('response-container')
const usersUrl = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'
const progressUrl = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'
const cohortsUrl = '../data/cohorts.json'
let users 
let progress
let courses

//declaramos el objeto global cohort data vacío que se llenará cuando se obtenga la data
// las variables se puede cargar de cualquier archivo por que esta dentro del ob windows //

const saveUsers = (event) => {
  //guardndo la data user en cohortData.users
  users = JSON.parse(event.target.responseText);
  getData(progressUrl, saveProgress, 'progress');

}

const saveProgress = (event) => {
  progress = JSON.parse(event.target.responseText);
  getData(cohortsUrl, saveCohorts, 'cohorts');

}

const saveCohorts = (event) => {
  cohorts = JSON.parse(event.target.responseText);
  const currentCohort = cohorts.find((cohort) => {
    return cohort.id === 'lim-2018-03-pre-core-pw';
  });

  courses = Object.keys(currentCohort.coursesIndex)

computeUsersStats(users, progress, courses)

}

const handleError = () => {
  console.log('hay un error')
}

//Creamos una funcion donde pasamos de parametro las url y el onload
const getData = (url, callback, stringData) => {

  let requestData = new XMLHttpRequest();
  requestData.open('GET', url);
  requestData.onload = callback;
  requestData.onerror = handleError;
  requestData.send();
};

getData(usersUrl, saveUsers, 'users');

names.addEventListener('click', (e) => {
  e.preventDefault();


});


