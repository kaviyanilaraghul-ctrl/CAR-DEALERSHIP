// Populate car dropdown, handle URL preselect, validate & submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const carSelect = document.getElementById("carSelect");
  const typeSelect = document.getElementById("bookingType");
  const dateInput = document.getElementById("preferredDate");

  // Set min date to today
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  // Populate cars
  CARS.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = `${c.name} — ${formatPrice(c.price)}`;
    carSelect.appendChild(opt);
  });

  // Preselect from URL (?car=c1&type=Test%20Drive)
  const params = new URLSearchParams(window.location.search);
  if (params.get("car")) carSelect.value = params.get("car");
  if (params.get("type")) typeSelect.value = params.get("type");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple validation
    const required = ["name", "phone", "email", "city", "car", "bookingType"];
    let valid = true;
    required.forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.style.borderColor = "#dc2626";
        valid = false;
      } else {
        el.style.borderColor = "";
      }
    });

    // Email format check
    const email = document.getElementById("email").value;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("email").style.borderColor = "#dc2626";
      valid = false;
    }

    if (!valid) {
      alert("Please fill all required fields correctly.");
      return;
    }

    // Generate reference number
    const ref = "APX-" + Date.now().toString().slice(-6);

    // Show success
    form.style.display = "none";
    const success = document.getElementById("bookingSuccess");
    success.style.display = "block";
    document.getElementById("successName").textContent = document.getElementById("name").value;
    document.getElementById("successPhone").textContent = document.getElementById("phone").value;
    document.getElementById("successType").textContent = typeSelect.value.toLowerCase();
    document.getElementById("refNumber").textContent = ref;

    // In a real deployment, send this data to your backend / CRM here.
    console.log("Booking submitted:", {
      ref,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email,
      city: document.getElementById("city").value,
      car: carSelect.options[carSelect.selectedIndex].text,
      type: typeSelect.value,
      date: dateInput.value,
      time: document.getElementById("preferredTime").value,
      message: document.getElementById("message").value
    });
  });
});
