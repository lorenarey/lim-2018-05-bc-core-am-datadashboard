window.computeUsersStats = (users, progress, courses) => {
  let usersWithStats = users.map((user) => {
    let percent;
    let totalExcercises = 0;
    let completedExercises = 0;
    let totalReads = 0;
    let completedReads= 0;
    let totalQuizzes=0;
    let completedQuizzes=0;
    let scoreSum=0;
    let scoreAvg=0;

    //calculamos el porcentaje total de completitud
    courses.forEach(courseName => {
      if(progress[user.id].hasOwnProperty(courseName)){
        percent = progress[user.id].intro.percent;
        const userUnits = progress[user.id].intro.units;
        
    //calculamos datos de ejercicios (completitud, total de ejercicios completados)
        Object.keys(userUnits).forEach((unitName) => {
          const parts = userUnits[unitName].parts
          Object.keys(parts).forEach((partName) => {
            const part = parts[partName];
            if (part.hasOwnProperty('exercises')) {
              const exercises = part.exercises;
              Object.keys(exercises).forEach((exerciseName) => {
                const excercise = exercises[exerciseName];
                totalExcercises += 1;
                completedExercises += excercise.completed;
              });          
            }
    //calculamos datos de lecturas (completitud, total de lecturas completadas)
            if (part.hasOwnProperty('type')) {
              if(part.type === 'read'){
              totalReads += 1; 
              completedReads += part.completed 
              }
            }
    //calculamos datos de quizzes (completitud, total de quizzes completados, suma de score y promedio de score)       
            if (part.hasOwnProperty('type')) {
              if(part.type === 'quiz'){
              totalQuizzes +=1;
              completedQuizzes += part.completed;
              scoreSum += part.score ? part.score : 0; //si existe 'score' sumarle el valor del mismo, si no exite, no sumarle nada y continuar
              scoreAvg = scoreSum/completedQuizzes ? scoreSum/completedQuizzes : 0;
              }
            }    
          })
        })

      } 
    })
    //calculamos porcentajes (ejercicios, lecturas y quizzes)
    const percentExercises = (completedExercises / totalExcercises)*100
    const percentReads = (completedReads / totalReads)*100
    const percentQuizzes = (completedQuizzes / totalQuizzes)*100

    //El valor de retorno dará como resultado el usuario junto con el progreso extraído arriba
    const newUser = {
      name: user.name.toUpperCase(),
      stats: {
        percent: Math.round(percent),
        exercises: {
          total: totalExcercises,
          completed: completedExercises,
          percent: percentExercises,
        },
        reads: {
          total: totalReads,
          completed: completedReads,
          percent: Math.round(percentReads),
        },
        quizzes: {
          total: totalQuizzes,
          completed: completedQuizzes,
          percent: Math.round(percentQuizzes),
          scoreSum: Math.round(scoreSum),
          scoreAvg: Math.round(scoreAvg),
        }
      }
    }
    
    return newUser
  });
  return usersWithStats;
  
}

window.sortUsers = (users, orderBy, orderDirection) => {
  let sortedUsers;

  if (orderDirection ==='asc'){
    if (orderBy === 'name') {
      sortedUsers = users.sort((a ,b) => {
        let firstUser = a.name.toLowerCase(), lastUser = b.name.toLowerCase();
        if (firstUser < lastUser)
          return -1
        if (firstUser > lastUser)
          return 1
      });
    }
  }

  if (orderDirection ==='desc'){
    if (orderBy === 'name') {
      sortedUsers = users.sort((a ,b) => {
        let firstUser = a.name.toLowerCase(), lastUser = b.name.toLowerCase();
        if (firstUser < lastUser)
          return 1
        if (firstUser > lastUser)
          return -1
      });
    }
  }

  return sortedUsers ? sortedUsers : users;
}

window.filterUsers = (users, search) => {
  let filteringList = users.filter(user => {
  return user.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
  });
  return filteringList;
}

window.processCohortData = (options) => {
  const courses = Object.keys(options.cohort.coursesIndex);
  let users = options.cohortData.users;
  let progress = options.cohortData.progress;
  let usersFiltered = filterUsers(users, options.search); 
  let usersProcess = computeUsersStats(usersFiltered, progress, courses);
  let usersOrdered = sortUsers(usersProcess, options.orderBy, options.orderDirection);
  return usersOrdered;
}

