window.computeUsersStats = (users, progress, courses) => {
  const getResult = users.map(function (user) {
    courses.forEach(courseName => {
      console.log('courseName', courseName)
      if(progress[user.id].hasOwnProperty(courseName)){
        const percent = progress[user.id].intro.percent;
        const userUnits = progress[user.id].intro.units;
        //obteniendo ejercicios//
        let totalExcercises = 0;
        let completedExercises = 0;
        let totalReads = 0;
        let completedReads= 0;
        let totalQuizzes=0;
        let completedQuizzes=0;
        let scoreSum=0;
        let scoreAvg=0;
        Object.keys(userUnits).forEach((unitName) => {
          const parts = userUnits[unitName].parts
          Object.keys(parts).forEach((partName) => {
            const part = parts[partName];
            if (part.hasOwnProperty('exercises')) {
              const exercises = part.exercises;
              Object.keys(exercises).forEach((exerciseName) => {
                const excercise = exercises[exerciseName]
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
        const percentExercises = (completedExercises / totalExcercises)*100
        
        /*console.log(user.id, 'Percent completed exercises', percentExercises)
        console.log(totalExcercises);
        console.log(completedExercises);*/

        const percentReads = (completedReads / totalReads)*100

        /*console.log(user.id, 'Percent completed Reads', percentReads)
        console.log(totalReads);
        console.log(completedReads);*/

        const percentQuizzes = (completedQuizzes / totalQuizzes)*100
        
        console.log(percent)
        console.log(user.id, 'Percent completed Quizzes', percentQuizzes.toFixed(2))
        console.log(totalQuizzes);
        console.log(completedQuizzes)
        console.log(scoreSum)
        console.log(scoreAvg.toFixed(2))


        //--------------------------------------------------------//
        

        const usersWithStats = {
          name: user.name,
          stats: {
            percent: percent,
            exercises: {
              total: totalExcercises,
              completed: completedExercises,
              percent: percentExercises,
            },
            reads: {
              total: totalReads,
              completed: completedReads,
              percent: percentReads,
            },
            quizzes: {
              total: totalQuizzes,
              completed: completedQuizzes,
              percent: percentQuizzes,
              scoreSum: scoreSum,
              scoreAvg: scoreAvg,
            }
          }
        }
        
        console.log(usersWithStats)

        return usersWithStats;
      } 
    })
  });
 return getResult;
}
