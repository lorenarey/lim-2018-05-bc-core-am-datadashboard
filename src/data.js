window.computeUsersStats = () => {
  const responseContainerElem = document.getElementById('response-container')
  const userWithStats = cohortData.users.map(function (obj) {

    if(cohortData.progress[obj.id].hasOwnProperty('intro')){
      const completedExercises = (cohortData.progress[obj.id]['intro']['units']['02-variables-and-data-types']['parts']['06-exercises']['completed']) * 100;
      const userResult = { name: obj.name, stats: {exercises: completedExercises} }
      const liElem = document.createElement('li')
      liElem.innerHTML = userResult.name + '<b> ejercicios completados: ' + userResult.stats.exercises + '</b>';
      responseContainerElem.appendChild(liElem)
    }

  });
  console.log(userWithStats);

 /*return userWithStats;*/
}


