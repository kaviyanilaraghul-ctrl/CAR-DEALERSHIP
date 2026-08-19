# Apex Motors — Car Dealership Website

A professional, responsive car dealership website with inventory browsing, detailed car pages, and online pre-booking.

## Features

- **Homepage** with hero, features, and featured vehicles
- **Inventory page** with live filters (brand, fuel, max price)
- **Car detail page** with full specifications
- **Pre-booking form** with validation and reference number generation
- Preselects car/type automatically when navigating from a car detail page
- Fully responsive (mobile, tablet, desktop)
- No build tools or dependencies — pure HTML/CSS/JS

## How to Run

1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
   - Or simply double-click `index.html` to open in any browser.

## How to Customize

### Add or Edit Cars
Open `js/cars.js` and edit the `CARS` array. Each car object supports:

| Field | Description |
|---|---|
| `id` | Unique identifier (e.g. "c9") |
| `name` | Display name |
| `brand` | Manufacturer |
| `fuel` | Petrol / Diesel / Electric / Hybrid |
| `transmission` | Manual / Automatic |
| `year` | Model year |
| `price` | Price in ₹ (number) |
| `mileage` | e.g. "12,000 km" |
| `color` | Exterior colour |
| `seats` | Seating capacity |
| `image` | Image URL |
| `description` | Short marketing copy |

### Change Branding
Edit the logo text, colours (in `css/style.css` `:root` variables), and contact details in the footer of each HTML file.

### Connect Bookings to a Real Backend
The booking form currently logs the submission to the console and shows a success message. To send data to a server, replace the `console.log(...)` block in `js/booking.js` with a `fetch()` call:

```javascript
await fetch("[your-api.com](https://your-api.com/bookings)", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(bookingData)
});
```

## File Overview

```
car-dealership/
├── index.html          Homepage
├── inventory.html      Browse + filter all cars
├── car-detail.html     Single car info page
├── booking.html        Pre-booking form
├── css/style.css       All styling
├── js/cars.js          Car data (edit this)
├── js/main.js          Homepage rendering
├── js/inventory.js     Inventory filtering
├── js/car-detail.js    Detail page rendering
├── js/booking.js       Booking form logic
└── README.md
```

## Going Live

For a real domain:
1. Upload files to any web host (Netlify, Vercel, Hostinger, etc.)
2. Or deploy via GitHub Pages from a repository.
3. Replace Unsplash image URLs with photos of your actual inventory.
4. Add a real backend or CRM webhook for booking submissions.

---

© 2026 Apex Motors
