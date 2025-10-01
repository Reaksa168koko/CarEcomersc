export const menu = [
    {name :"Vehicles" , link:"/Vehicles"},
    {name :"New Arrivals" , link:"/NewArrivals"},
    {name :"Luxury" , link:"/Luxury"},
    {name :"Electric" , link:"/Electric"},
    {name: "About" , link: "/About"}
]

import categories1 from '../src/assets/image/categories1.jpg'
import categories2 from '../src/assets/image/categories2.jpg'
import categories3 from '../src/assets/image/categories3.jpg'
import categories4 from '../src/assets/image/categories4.jpg'
import categories7 from '../src/assets/image/categories7.jpg'
import categories6 from '../src/assets/image/categories6.jpg'
// categories title car top
export const cars = [
  {
    id: 1,
    model: "Mercedes-AMG GT 63 S",
    year: 2024,
    mileage: "0",
    price: 129990,
    feature1: "Autopilot",
    feature2: "Premium Interior",
    feature3: "Ludicrous Mode",
    image: categories1,
    link: "/car/1",
    description:
      "The 2024 Mercedes-AMG GT 63 S combines luxury and raw power. With a handcrafted engine, advanced driver assist, and a refined interior, it delivers elegance and thrilling performance."
  },
  {
    id: 2,
    model: "Porsche 911 Turbo S",
    year: 2024,
    mileage: "0",
    price: 59990,
    feature1: "Autopilot",
    feature2: "Sport Wheels",
    feature3: "Premium Audio",
    image:categories2,
    link: "/car/2",
    description:
      "The Porsche 911 Turbo S blends iconic design with modern tech. Its powerful performance, premium cockpit, and instant acceleration redefine driving excitement."
  },
  {
    id: 3,
    model: "BMW iX xDrive50",
    year: 2024,
    mileage: "0",
    price: 109990,
    feature1: "Falcon Wing Doors",
    feature2: "7 Seats",
    feature3: "Autopilot",
    image:categories3,
    link: "/car/3",
    description:
      "The BMW iX xDrive50 is a futuristic SUV with bold design. Spacious, luxurious, and packed with advanced tech, it’s perfect for families and adventurers."
  },
  {
    id: 4,
    model: "Tesla Model S Plaid",
    year: 2024,
    mileage: "0",
    price: 52990,
    feature1: "Autopilot",
    feature2: "Panoramic Roof",
    feature3: "All-Wheel Drive",
    image:categories4,
    link: "/car/4",
    description:
      "The Tesla Model S Plaid offers record-breaking speed with zero compromise. Its sleek design, luxury interior, and cutting-edge autopilot make every ride unforgettable."
  },
  {
    id: 5,
    model: "Audi e-tron GT",
    year: 2024,
    mileage: "0",
    price: 79990,
    feature1: "Exoskeleton Design",
    feature2: "Vault Storage",
    feature3: "All-Terrain",
    image:categories7,
    link: "/car/5",
    description:
      "The Audi e-tron GT is bold, stylish, and electrifying. With its sporty lines, premium interior, and seamless performance, it makes a strong statement on the road."
  },
  {
    id: 6,
    model: "Range Rover Sport",
    year: 2024,
    mileage: "0",
    price: 200000,
    feature1: "Supercar Speed",
    feature2: "Glass Roof",
    feature3: "SpaceX Package",
    image:categories6,
    link: "/car/6",
    description:
      "The 2024 Range Rover Sport delivers luxury with power. Combining off-road capability, premium comfort, and cutting-edge tech, it commands attention anywhere."
  }
];



import pro1 from './assets/image/pro1.jpg'
import pro2 from './assets/image/pro2.jpg'
import pro3 from './assets/image/pro3.jpg'
import prosv1 from './assets/image/prosv1.jpg'


//category buttom
// carCategories.js
export const products = [
  {
    id: 1,
    name: "Luxury Sedans",
    description: "Premium sedans with elegant design, comfort, and top-tier performance.",
    image:pro1,
  },
  {
    id: 2,
    name: "Sports Cars",
    description: "High-performance cars built for speed, agility, and thrill.",
    image: pro2,
  },
  {
    id: 3,
    name: "SUVs & Crossovers",
    description: "Spacious and versatile vehicles designed for families and adventures.",
    image: pro3,
  },
  {
    id: 4,
    name: "Electric Vehicles",
    description: "Eco-friendly and innovative cars powered by electricity.",
    image:prosv1,
  }
];




