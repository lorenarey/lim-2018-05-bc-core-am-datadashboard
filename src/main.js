const requestCohorts = new XMLHttpRequest();
requestCohorts.open('GET', 'http://127.0.0.1:8080/data/cohorts.json');
requestCohorts.onload = function() {
	const data = JSON.parse(this.responseText);
	console.log(data);
};
requestCohorts.onerror = function() {
console.log('Hay un error');
};
requestCohorts.send();

const requestUsers = new XMLHttpRequest();
requestUsers.open('GET', 'http://127.0.0.1:8080/data/cohorts/lim-2018-03-pre-core-pw/users.json');
requestUsers.onload = function() {
	const data = JSON.parse(this.responseText);
	console.log(data);
};
requestUsers.onerror = function() {
console.log('Hay un error');
};
requestUsers.send();

const requestProgress = new XMLHttpRequest();
requestProgress.open('GET', 'http://127.0.0.1:8080/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
requestProgress.onload = function() {
	const data = JSON.parse(this.responseText);
	console.log(data);
};
requestProgress.onerror = function() {
console.log('Hay un error');
};
requestProgress.send();