// Central car data — edit this to add/update vehicles.
// Image URLs use Unsplash; replace with your own photos for production.

const CARS = [
  {
    id: "c1",
    name: "BMW 3 Series 320d",
    brand: "BMW",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2024,
    price: 4850000,
    mileage: "12,000 km",
    color: "Alpine White",
    seats: 5,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1555215695-170498b4f409?auto=format&fit=crop&w=800&q=80)",
    description: "A refined sport sedan with powerful diesel performance, premium interior, and advanced driver assistance systems."
  },
  {
    id: "c2",
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2025,
    price: 5500000,
    mileage: "5,000 km",
    color: "Obsidian Black",
    seats: 5,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1617814065-7c98b2d2f3be?auto=format&fit=crop&w=800&q=80)",
    description: "Luxury redefined with a plush cabin, intuitive infotainment, and silky-smooth petrol engine."
  },
  {
    id: "c3",
    name: "Audi Q5",
    brand: "Audi",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2024,
    price: 6200000,
    mileage: "8,500 km",
    color: "Navarra Blue",
    seats: 5,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1606664517123-3d4044655378?auto=format&fit=crop&w=800&q=80)",
    description: "Premium mid-size SUV with Quattro all-wheel drive, spacious interior, and cutting-edge technology."
  },
  {
    id: "c4",
    name: "Tesla Model 3",
    brand: "Tesla",
    fuel: "Electric",
    transmission: "Automatic",
    year: 2025,
    price: 4500000,
    mileage: "3,200 km",
    color: "Pearl White",
    seats: 5,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1560958089-b875c8d1f99a?auto=format&fit=crop&w=800&q=80)",
    description: "All-electric sedan with 580 km range, instant acceleration, and Autopilot capabilities."
  },
  {
    id: "c5",
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    fuel: "Diesel",
    transmission: "Manual",
    year: 2023,
    price: 2200000,
    mileage: "25,000 km",
    color: "Silver",
    seats: 7,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1635461204147-13d233c46c41?auto=format&fit=crop&w=800&q=80)",
    description: "Reliable 7-seater MPV, ideal for families with comfortable ride and proven durability."
  },
  {
    id: "c6",
    name: "Hyundai Creta",
    brand: "Hyundai",
    fuel: "Petrol",
    transmission: "Automatic",
    year: 2024,
    price: 1850000,
    mileage: "10,000 km",
    color: "Thunder Blue",
    seats: 5,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1606220945250-2a4b6c5d8e30?auto=format&fit=crop&w=800&q=80)",
    description: "Stylish compact SUV with feature-loaded cabin, smooth petrol engine, and excellent value."
  },
  {
    id: "c7",
    name: "Toyota Camry Hybrid",
    brand: "Toyota",
    fuel: "Hybrid",
    transmission: "Automatic",
    year: 2025,
    price: 4100000,
    mileage: "2,000 km",
    color: "Graphite",
    seats: 5,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1621007219891-9b70dd23d4e1?auto=format&fit=crop&w=800&q=80)",
    description: "Elegant hybrid sedan delivering exceptional fuel efficiency with luxury-level comfort."
  },
  {
    id: "c8",
    name: "Mahindra XUV700",
    brand: "Mahindra",
    fuel: "Diesel",
    transmission: "Automatic",
    year: 2024,
    price: 2450000,
    mileage: "9,500 km",
    color: "Red",
    seats: 7,
    image: "[images.unsplash.com](https://images.unsplash.com/photo-1549399542-7c4f6d2f4cc7?auto=format&fit=crop&w=800&q=80)",
    description: "Tech-forward SUV with ADAS features, powerful diesel engine, and premium 7-seat layout."
  }
];

function formatPrice(p) {
  return "₹" + p.toLocaleString("en-IN");
}

function getCarById(id) {
  return CARS.find(c => c.id === id);
}

function carCardHTML(car) {
  return `
    <div class="car-card">
      <a href="car-detail.html?id=${car.id}">
        <img src="${car.image}" alt="${car.name}" loading="lazy" />
      </a>
      <div class="car-card-body">
        <h3>${car.name}</h3>
        <div class="car-specs">
          <span>${car.year}</span>
          <span>${car.fuel}</span>
          <span>${car.transmission}</span>
        </div>
        <div class="car-price">${formatPrice(car.price)}</div>
        <a href="car-detail.html?id=${car.id}" class="btn btn-outline">View Details</a>
      </div>
    </div>
  `;
}
