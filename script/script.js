// folders
// add header page
fetch("./pages/hero.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("hero").innerHTML = data));

// add trending page
fetch("./pages/trending.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("trending").innerHTML = data));

// add footer page
fetch("./pages/footer.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

