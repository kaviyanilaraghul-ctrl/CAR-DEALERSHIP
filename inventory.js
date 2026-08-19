// Populate brand filter, render list, apply filters
document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("car-list");
  const brandSel = document.getElementById("brand");
  const fuelSel = document.getElementById("fuel");
  const maxPrice = document.getElementById("maxPrice");
  const noResults = document.getElementById("no-results");

  // Populate brand dropdown
  const brands = [...new Set(CARS.map(c => c.brand))].sort();
  brands.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    brandSel.appendChild(opt);
  });

  function render(cars) {
    if (cars.length === 0) {
      list.innerHTML = "";
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
      list.innerHTML = cars.map(carCardHTML).join("");
    }
  }

  function apply() {
    const b = brandSel.value;
    const f = fuelSel.value;
    const mp = parseInt(maxPrice.value, 10);

    let filtered = CARS.filter(c => {
      if (b && c.brand !== b) return false;
      if (f && c.fuel !== f) return false;
      if (mp && c.price > mp) return false;
      return true;
    });
    render(filtered);
  }

  render(CARS);
  document.getElementById("applyFilters").addEventListener("click", apply);
  document.getElementById("clearFilters").addEventListener("click", () => {
    brandSel.value = "";
    fuelSel.value = "";
    maxPrice.value = "";
    render(CARS);
  });
});
