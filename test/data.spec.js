describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

  describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const {users, progress} = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);

      assert.equal(users.length, processed.length);

      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 0,
          percent: 0,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreSum: 57,
          scoreAvg: 29,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {
    let user1 = {
      stats: {
        name : "Lorena Reyes",
        percent: 100,
        exercises : {
          total: 2,
          completed: 2,
          percent: 100
        },
        reads : {
          total: 5,
          completed: 5,
          percent: 5
        },
        quizzes : {
          total: 4,
          completed: 4,
          percent: 100,
          scoreSum: 200,
          scoreAvg: 50
        }
      }
    }

    let user2 = {
      stats: {
        name : "Danelly Sotomayor",
        percent: 53,
        exercises : {
          total: 2,
          completed: 1,
          percent: 50
        },
        reads : {
          total: 15,
          completed: 10,
          percent: 7
        },
        quizzes : {
          total: 6,
          completed: 6,
          percent: 100,
          scoreSum: 600,
          scoreAvg: 100
        }
      }
    }

    let user3 = {
      stats: {
        name : "Heydy Carrasco",
        percent: 58,
        exercises : {
          total: 5,
          completed: 3,
          percent: 60
        },
        reads : {
          total: 8,
          completed: 2,
          percent: 20
        },
        quizzes : {
          total: 10,
          completed: 9,
          percent: 90,
          scoreSum: 540,
          scoreAvg: 60
        }
      }
    }

    let usersTest = [user1, user2, user3]

    it('debería retornar arreglo de usuarios ordenado por nombre ASC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "name", "asc"), [user2, user3, user1])
    });
    it('debería retornar arreglo de usuarios ordenado por nombre DESC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "name", "desc"), [user1, user3, user2])
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "completed", "asc"), [user2, user3, user1])
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "completed", "desc"), [user1, user3, user2])
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "exercises", "asc"), [user2, user1, user3])
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "exercises", "desc"), [user3, user1, user2])
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "quizzes", "asc"), [user1, user2, user3])
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "quizzes", "desc"), [user3, user2, user1])
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC', () => {
    assert.deepEqual(window.sortUsers(usersTest, "scoreAvg", "asc"), [user1, user3, user2])
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "scoreAvg", "desc"), [user2, user3, user1])
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "reads", "asc"), [user3, user1, user2])
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC', () => {
      assert.deepEqual(window.sortUsers(usersTest, "reads", "desc"), [user2, user1, user3])
    });

  });

  describe('filterUsers(users, filterBy)', () => {
    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)', () => {
      let filterList = [{"id":"15TkBigdPLMetXb9W9rFnBvUEN92","name":"luz edith","locale": "es-PE","signupCohort":"lim-2018-03-pre-core-pw","timezone":"America/Lima","role":"student"},{"id":"19GgN0LHXUgjZ6Hbd713hAWGoh83","timezone":"America/Lima","name":"BRENDA DURAND","locale":"es-PE","signupCohort":"lim-2018-03-pre-core-pw","role":"student"},{"id":"1AUu4Up4pJZ6SDQCyayVu16mMMp1","signupCohort":"lim-2018-03-pre-core-pw","timezone":"America/Lima","name":"katherine alva","locale":"es-PE","role":"student"}]
      assert.deepEqual(window.filterUsers(users,"BRENDA DURAND"), filterList);
      assert.deepEqual(window.filterUsers(users,"katherine alva"), filterList);
    });
  });

  let options = {
    cohort: "lim-2018-03-pre-core-pw",
    cohortData : {
      users,
      progress,
      coursesIndex : ["intro"]
    },
    orderBy:"name",
    orderDirection:"asc",
    search : "lorena"
  }

  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {

    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter', () => {
        assert.deepEqual(window.processCohortData(options),[{
          stats: {
            name : "lorena",
            percent: 100,
            exercises : {
              total: 2,
              completed: 2,
              percent: 100
            },
            reads : {
              total: 11,
              completed: 11,
              percent: 100
            },
            quizzes : {
              total: 3,
              completed: 3,
              percent: 100,
              scoreSum: 263,
              scoreAvg: 88
            }
          }
      }]);
  });
  
});
  
});

  
