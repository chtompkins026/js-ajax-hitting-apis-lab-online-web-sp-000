// your code here

function getRepositories() {
  const req = new XMLHttpRequest() ; 
  const user = document.getElementById('username').value ;
  const uri = 'https://api.github.com/users/' + user + '/repos'; 
  req.addEventListener("load", showRepositories);
  req.open("GET", uri); 
  req.send() ; 
  return false; 
}

function showRepositories(){
  const repos = JSON.parse(this.responseText);
  const repoList =
    '<ul>' +
    repos
      .map(repo => {
        const dataUsername = 'data-username="' + repo.owner.login + '"';
        const dataRepoName = 'data-repository="' + repo.name + '"';
        return `
          <li>
            <h2>${repo.name}</h2>
            <a href="${repo.html_url}">${repo.html_url}</a><br>
            <a href="#" ${dataRepoName} ${dataUsername} onclick="getCommits(this)">Get Commits</a><br>
            <a href="#" ${dataRepoName} ${dataUsername} onclick="getBranches(this)">Get Branches</a></li>
          </li>`;
      })
      .join('') +
    '</ul>';
  document.getElementById('repositories').innerHTML = repoList;
}


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



