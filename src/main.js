const names = document.getElementById('submit-btn')
const responseContainer = document.getElementById('response-container')

names.addEventListener('click', (e) => {
   e.preventDefault();
    computeUsersStats()
});