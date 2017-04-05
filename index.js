function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var element = document.getElementById('grand-node');
  var nextElement = element.children[0];
  while (nextElement) {
    element = nextElement;
    nextElement = element.children[0];
  }
  return element
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (var i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children;

    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}