window.computeUsersStats = (users, progress, courses) => {
  const usersWithStats = users.map((user) => {
    let percent;
    let totalExcercises = 0;
    let completedExercises = 0;
    let totalReads = 0;
    let completedReads= 0;
    let totalQuizzes=0;
    let completedQuizzes=0;
    let scoreSum=0;
    let scoreAvg=0;

    courses.forEach(courseName => {
      if(progress[user.id].hasOwnProperty(courseName)){
        percent = progress[user.id].intro.percent;
        const userUnits = progress[user.id].intro.units;
        
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
              })
            }
            if (part.hasOwnProperty('type')) {
              if(part.type === 'read'){
              totalReads += 1; 
              completedReads += part.completed 
              }
            }       
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

    const percentExercises = (completedExercises / totalExcercises)*100
    const percentReads = (completedReads / totalReads)*100
    const percentQuizzes = (completedQuizzes / totalQuizzes)*100

    const newUser = {
      name: user.name,
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

window.sortUsers = (users, orderBy, OrderDirection) => {
  let sortingList = users;
  if (orderBy === "Nombre") {
    sortingList.sort((a, b) => {
      let firstUser = a.stats.name.toLowerCase(), lastUser = b.stats.name.toLowerCase();
      if (firstUser < lastUser)
        return -1
      if (firstUser > lastUser)
        return 1
    });
  }
  if (orderBy === "% de Completitud Total") {
    sortingList.sort((a, b) => {
      return a.stats.percent - b.stats.percent;
    });
  }
  if (orderBy === "% de Ejercicios completados") {
    sortingList.sort((a, b) => {
      return a.stats.exercises.completed - b.stats.exercises.completed;
    });
  }
  if (orderBy === "% de Lecturas completadas") {
    sortingList.sort((a, b) => {
    return a.stats.reads.completed - b.stats.reads.completed;  
    });
  }
  if (orderBy === "% de Quizzes completadas") {
    sortingList.sort((a, b) => {
      return a.stats.quizzes.completed - b.stats.quizzes.completed;
    });
  }  
  if (orderBy === "Promedio de Quizzes") {
    sortingList.sort((a, b) => {
      return a.stats.quizzes.scoreAvg - b.stats.quizzes.scoreAvg;
    });
  }
  if (OrderDirection === "desc"){
    sorting = sortingList.reverse();
  }
  console.log(sortingList)
  return sortingList;
}

window.filterUsers = (users, search) => {
  let filteringList = users.filter(user => (user.name.toUpperCase()).indexOf(search.toUpperCase()) !== -1);
  return filteringList;
}

window.processCohortData = (options) => {
  // cohort: [{},{}],
  // cohortData: {
  //   users: [{},{}],
  //   progress: {},
  // },
  // orderBy:,
  // orderDirection:,
  // search:,
}