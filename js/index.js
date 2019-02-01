// your code here
function showCommits() {
  const commits = JSON.parse(this.responseText) ;
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>` ;
  document.getElementById("details").innerHTML = commitsList ;
}

function getCommits(el) {
  const name = el.dataset.repo;
  const username = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showCommits);
  req.open("GET", 'https://api.github.com/repos/' + user + '/' + name + '/commits'); 
  req.send(); 
}


function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText); 
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>` ;
  document.getElementById("repositories").innerHTML = repoList ;
}

function getRepositories() {
  const req = new XMLHttpRequest() ; 
  const user = document.getElementById('username').value ;
  const uri = 'https://api.github.com/users/' + name 
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/chtompkins026/repos') ; 
  req.send() ; 
}