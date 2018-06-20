window.computeUsersStats = () => {  
   const userWithStats = cohortData.users.map(function (obj){
       //console.log(cohortData.progress[obj.id]);
      // console.log(cohortData.progress[obj.id]);

        return {name: obj.name, stats: {exercises:''}}
    });
    console.log(userWithStats);
    return userWithStats;
}
