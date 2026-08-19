// Homepage: render 3 featured cars
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("featured-cars");
  if (grid) {
    const featured = CARS.slice(0, 3);
    grid.innerHTML = featured.map(carCardHTML).join("");
  }
});
