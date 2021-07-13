function addDownClass(selector) {
  let team = document.querySelector(selector);

  let windowWidth = window.innerWidth;
  for (let i = 1; i < team.children.length; i += windowWidth <= 872 ? 2 : 3) {
    let member = team.children[i];
    member.classList.add("down");
  }
}

function removeDownClass(selector) {
  let team = document.querySelector(selector);
  for (let i = 1; i < team.children.length; i++) {
    let child = team.children[i];
    child.classList.remove("down");
  }
}

window.onload = function (ev) {
  addDownClass("#team");
};

window.onresize = function (ev) {
  let selector = "#team";
  removeDownClass(selector);
  addDownClass(selector);
};
