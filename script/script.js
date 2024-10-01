

function loadComponent(url, targetId) {
  fetch(url)
      .then((res) => {
          if (!res.ok) {
              throw new Error("Network response was not ok");
          }
          return res.text();
      })
      .then((data) => {
          console.log(data)
          document.getElementById(targetId).innerHTML = data;

          const script = data.find(script)
      })
      .catch((error) => console.error("Error loading component:", error));
}

// Load the numbers component into the numbersContainer div
loadComponent('./pages/hero.html', 'hero');
loadComponent('./pages/trending.html', 'trending');
loadComponent('./pages/footer.html', 'footer');
