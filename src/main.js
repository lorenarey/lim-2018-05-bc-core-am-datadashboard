const responseContainerEl = document.getElementById('container-user');
const cohortSelect = document.getElementById('cohortSelect');
let content = document.getElementById('content'); //nuevo selectores
let contentTable = document.getElementById('show-stats-and-order');
const orderSelect = document.getElementById('orderSelect');
const searchInput = document.getElementById('search-input');
const selectA=document.getElementById("select");
const usersUrl = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressUrl = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsUrl = '../data/cohorts.json';
let currentCohort;
let users;
let progress;
let cohorts;
let courses;

const saveUsers = (event) => {
  users = JSON.parse(event.target.responseText);
  getData(progressUrl, saveProgress, 'progress');
}

const saveProgress = (event) => {
  progress = JSON.parse(event.target.responseText);
  getData(cohortsUrl, saveCohorts, 'cohorts');
}

const saveCohorts = (event) => {
  cohorts = JSON.parse(event.target.responseText);
  content.classList.add('loaded');

  //para listar los cohorts filtrados por "lim"
  cohorts.forEach((cohort) => {
    nameCohorts = cohort.id;
    if (nameCohorts.indexOf('lim') === 0){
    selectA.innerHTML += `<option value="${nameCohorts}">${nameCohorts}</option>`
    }
})
}

const handleError = () => {
  console.log('hay un error')
}

const getData = (url, callback, stringData) => {

  let requestData = new XMLHttpRequest();
  requestData.open('GET', url);
  requestData.onload = callback;
  requestData.onerror = handleError;
  requestData.send();
};

const showData = (newUser) => {
  responseContainerEl.innerHTML = "";
  newUser.forEach((user) => {
    let totalPercent = (user.stats.percent === undefined || NaN) ?  0 : user.stats.percent;
    let exercisesPercent = isNaN(user.stats.exercises.percent) ?  0 : user.stats.exercises.percent;
    let readsPercent = isNaN(user.stats.reads.percent) ? 0 : user.stats.reads.percent;
    let quizzesPercent = isNaN(user.stats.quizzes.percent) ? 0 : user.stats.quizzes.percent;
    const row = document.createElement('tr')
    row.innerHTML = `<td>${user.name}</td><td>${totalPercent}%</td><td>${exercisesPercent}%</td><td>${readsPercent}%</td><td>${quizzesPercent}%</td><td>${user.stats.quizzes.scoreAvg}</td>`;
    responseContainerEl.appendChild(row)
  })
}

//para enlazar con el selector anterior
 cohortSelect.addEventListener('change', (e) => {
  contentTable.classList.add('loaded');
  
  const value = cohortSelect.options[cohortSelect.selectedIndex].value;
  currentCohort = cohorts.find((cohort) => {
    return cohort.id === value;
  }); 
  
  const options = {
    cohort : currentCohort,
    cohortData : {users, progress},
    orderBy: '',
    orderDirection: '',
    search: '',
  }
  const newUser = processCohortData(options)
  showData(newUser);
});
  

//para enlazar con el selector de cohorts NUEVO
content.addEventListener('change', (e) => {
  contentTable.classList.add('loaded');
  const value = content.options[content.selectedIndex].value; //si esta línea está comentada, sí lista pero no ordena
  currentCohort = cohorts.find((cohort) => {
    return cohort.id === 'lim-2018-03-pre-core-pw';
  });
  
  const options = {
    cohort : currentCohort,
    cohortData : {users, progress},
    orderBy: '',
    orderDirection: '',
    search: '',
  }
  const newUser = processCohortData(options)
  showData(newUser);
});
//-------------------------------------------------------



//selector de ordenado ascedente y descendente
orderSelect.addEventListener('change', (e) => {  
  const orderValue = orderSelect.options[orderSelect.selectedIndex].value;
  const orderArr = orderValue.split('|')
  const options = {
    cohort : currentCohort,
    cohortData : {users, progress},
    orderBy: orderArr[0],
    orderDirection: orderArr[1],
    search: '',
  }
  const newUser = processCohortData(options)
  showData(newUser);
})

getData(usersUrl, saveUsers, 'users');

