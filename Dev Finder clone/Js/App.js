let followers = document.getElementById("followers");
let following = document.getElementById("following");
let repo = document.getElementById("repo");

let followingValue = 0;
let coun;
function loadin() {
  followingValue++;
  following.innerHTML = followingValue;
  if (followingValue == 25) {
    clearInterval(coun);
  }
}
loadin();
coun = setInterval(loadin, 100);

var repoValue = 0;
let con;
function load() {
  repoValue++;
  repo.innerHTML = repoValue;
  if (repoValue == 15) {
    clearInterval(con);
  }
}
load();
con = setInterval(load, 100);

var followersValue = 0;
let count;
function loading() {
  followersValue++;
  followers.innerHTML = followersValue;
  if (followersValue == 120) {
    clearInterval(count);
  }
}
loading();
count = setInterval(loading, 10);
