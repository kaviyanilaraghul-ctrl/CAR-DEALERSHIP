// Read ?id= from URL, render full detail
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const car = getCarById(params.get("id"));

  const container = document.getElementById("car-detail");
  const bc = document.getElementById("bc-name");

  if (!car) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:60px 0;">
        <h2>Vehicle not found</h2>
        <p>The car you're looking for isn't available.</p>
        <a href="inventory.html" class="btn btn-primary" style="margin-top:16px;">Back to Inventory</a>
      </div>`;
    return;
  }

  bc.textContent = car.name;

  container.innerHTML = `
    <div class="car-detail-image">
      <img src="${car.image}" alt="${car.name}" />
    </div>
    <div class="car-detail-info">
      <h1>${car.name}</h1>
      <div class="detail-price">${formatPrice(car.price)}</div>
      <p class="detail-desc">${car.description}</p>
      <table class="spec-table">
        <tr><th>Brand</th><td>${car.brand}</td></tr>
        <tr><th>Year</th><td>${car.year}</td></tr>
        <tr><th>Fuel Type</th><td>${car.fuel}</td></tr>
        <tr><th>Transmission</th><td>${car.transmission}</td></tr>
        <tr><th>Mileage</th><td>${car.mileage}</td></tr>
        <tr><th>Colour</th><td>${car.color}</td></tr>
        <tr><th>Seating Capacity</th><td>${car.seats} seats</td></tr>
      </table>
      <div class="detail-actions">
        <a href="booking.html?car=${car.id}" class="btn btn-primary">Pre-Book Now</a>
        <a href="booking.html?car=${car.id}&type=Test%20Drive" class="btn btn-outline">Schedule Test Drive</a>
      </div>
    </div>
  `;
});
