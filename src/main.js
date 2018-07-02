const cohortSelect = document.getElementById('orderSelect')
const responseContainerEl = document.getElementById('container-user')
const usersUrl = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressUrl = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsUrl = '../data/cohorts.json';
let users;
let progress;
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
  const currentCohort = cohorts.find((cohort) => {
    return cohort.id === 'lim-2018-03-pre-core-pw';
  });

  courses = Object.keys(currentCohort.coursesIndex)

   
  const usersWithStats = computeUsersStats(users, progress, courses)
  usersWithStats.forEach((user) => {
    let totalPercent = (user.stats.percent === undefined || NaN) ?  0 : user.stats.percent;
    let exercisesPercent = isNaN(user.stats.exercises.percent) ?  0 : user.stats.exercises.percent;
    let readsPercent = isNaN(user.stats.reads.percent) ? 0 : user.stats.reads.percent;
    let quizzesPercent = isNaN(user.stats.quizzes.percent) ? 0 : user.stats.quizzes.percent;
    const row = document.createElement('tr')
    row.innerHTML = `<td>${user.name}</td><td>${totalPercent}%</td><td>${exercisesPercent}%</td><td>${readsPercent}%</td><td>${quizzesPercent}%</td><td>${user.stats.quizzes.scoreAvg}</td>`;
    responseContainerEl.appendChild(row)
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

cohortSelect.addEventListener('change', (e) => {
  const value = cohortSelect.options[cohortSelect.selectedIndex].value;
  getData(usersUrl, saveUsers, 'users');
})

document.getElementById("show-datos-and-order").classList.add("hidden");

