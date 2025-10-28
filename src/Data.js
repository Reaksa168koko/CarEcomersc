export const menu = [
    {name :"Vehicles" , link:"/Vehicles"},
    {name :"New Arrivals" , link:"/NewArrivals"},
    {name :"Luxury" , link:"/Luxury"},
    {name :"Electric" , link:"/Electric"},
    {name: "About" , link: "/About"}
]


import categories1 from './assets/image/categories1.jpg'
import categories2 from './assets/image/categories2.jpg'
import categories3 from './assets/image/categories3.jpg'
import categories4 from './assets/image/categories4.jpg'
import categories7 from './assets/image/categories7.jpg'
import categories6 from './assets/image/categories6.jpg'
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
    link : "luxary"
  },
  {
    id: 2,
    name: "Sports Cars",
    description: "High-performance cars built for speed, agility, and thrill.",
    image: pro2,
    link : "Sports"
  },
  {
    id: 3,
    name: "SUVs & Crossovers",
    description: "Spacious and versatile vehicles designed for families and adventures.",
    image: pro3,
    link : "SUVs"
  },
  {
    id: 4,
    name: "Electric Vehicles",
    description: "Eco-friendly and innovative cars powered by electricity.",
    image:prosv1,
    link : "Electric"
  }
];

    

//product
// data.js
// Example data for products
import lux1 from './assets/image/luxcar1.jpg'
import lux2 from './assets/image/luxcar2.jpg'
import lux3 from './assets/image/luxcar3.jpg'
import lux4 from './assets/image/luxcar4.jpg'
import lux5 from './assets/image/luxcar5.jpg'
import lux6 from './assets/image/luxcar6.jpg'
import lux7 from './assets/image/luxcar7.jpg'
import lux8 from './assets/image/luxcar8.jpg'
import lux9 from './assets/image/luxcar9.jpg'
import { HiH1 } from 'react-icons/hi2'

export const luxaryCars = [
{
id: 1,
model: "Mercedes-AMG GT 63 S",
year: 2024,
mileage: "0",
price: 129990,
feature1: "Autopilot",
feature2: "Premium Interior",
feature3: "Ludicrous Mode",
link: "/car/1",
image : lux1,
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
link: "/car/2",
image : lux2,
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
link: "/car/3",
image : lux3,
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
link: "/car/4",
image : lux4,
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
link: "/car/5",
image : lux5,
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
link: "/car/6",
image : lux6,
description:
"The 2024 Range Rover Sport delivers luxury with power. Combining off-road capability, premium comfort, and cutting-edge tech, it commands attention anywhere."
},
{
id: 7,
model: "Lamborghini Huracan EVO",
year: 2024,
mileage: "0",
price: 249990,
feature1: "V10 Engine",
feature2: "Race Mode",
feature3: "Carbon Fiber Trim",
link: "/car/7",
image : lux7,
description:
"The Lamborghini Huracan EVO is designed for pure adrenaline. With sharp handling, explosive acceleration, and an unmistakable design, it’s a supercar icon."
},
{
id: 8,
model: "Ferrari Roma",
year: 2024,
mileage: "0",
price: 229990,
feature1: "Launch Control",
feature2: "Premium Cockpit",
feature3: "Sport Exhaust",
link: "/car/8",
image : lux8,
description:
"The Ferrari Roma embodies Italian elegance with thrilling performance. Sleek, powerful, and luxurious, it’s the ultimate grand tourer."
},
{
  id: 9,
  model: "Bentley Continental GT Speed",
  year: 2024,
  mileage: "0",
  price: 274900,
  feature1: "W12 Engine",
  feature2: "All-Wheel Drive",
  feature3: "Handcrafted Interior",
  link: "/car/13",
  image : lux9,
  description:
    "The Bentley Continental GT Speed combines elegance with brute force. Its handcrafted luxury and immense power create an unforgettable driving experience."
},

];


export const electricCars = [
{
id: 1,
model: "Tesla Model S Plaid",
year: 2024,
mileage: "0",
price: 89990,
feature1: "Autopilot",
feature2: "Panoramic Roof",
feature3: "All-Wheel Drive",
image: categories1,
link: "/electric/1",
description:
"The Tesla Model S Plaid offers groundbreaking performance with zero emissions. Featuring advanced autopilot, a futuristic cabin, and blistering acceleration, it redefines electric driving."
},
{
id: 2,
model: "Lucid Air Dream Edition",
year: 2024,
mileage: "0",
price: 139990,
feature1: "Ultra Fast Charging",
feature2: "Luxury Interior",
feature3: "Long Range Battery",
image: categories2,
link: "/electric/2",
description:
"The Lucid Air Dream Edition is an electric luxury sedan that delivers stunning design, advanced technology, and an industry-leading range."
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
image: categories3,
link: "/electric/3",
description:
"The BMW iX xDrive50 is a bold electric SUV combining futuristic design, luxurious space, and advanced connectivity, making it ideal for families and tech lovers."
},
{
id: 4,
model: "Audi e-tron GT",
year: 2024,
mileage: "0",
price: 99990,
feature1: "Sport Wheels",
feature2: "Premium Audio",
feature3: "All-Terrain Mode",
image: categories4,
link: "/electric/4",
description:
"The Audi e-tron GT is an electrifying grand tourer with dynamic handling, premium craftsmanship, and zero-emission performance."
},
{
id: 5,
model: "Porsche Taycan Turbo S",
year: 2024,
mileage: "0",
price: 185000,
feature1: "Sport Chrono",
feature2: "AWD",
feature3: "Fast Charging",
image: "categories5",
link: "/electric/5",
description:
"The Porsche Taycan Turbo S is a performance electric sports car offering thrilling acceleration, cutting-edge tech, and timeless Porsche design."
},
{
id: 6,
model: "Mercedes-Benz EQS",
year: 2024,
mileage: "0",
price: 125000,
feature1: "Hyperscreen Display",
feature2: "Luxury Cabin",
feature3: "Advanced Driver Assist",
image: categories6,
link: "/electric/6",
description:
"The Mercedes-Benz EQS is a flagship electric luxury sedan with futuristic design, unmatched comfort, and intelligent tech for a premium driving experience."
},
{
id: 7,
model: "Rivian R1T",
year: 2024,
mileage: "0",
price: 95000,
feature1: "All-Terrain Capability",
feature2: "Adventure Gear Tunnel",
feature3: "Quad Motor Drive",
image: categories7,
link: "/electric/7",
description:
"The Rivian R1T is a rugged electric pickup built for adventure. With incredible off-road ability, utility features, and long range, it’s perfect for explorers."
},
{
id: 8,
model: "Ford Mustang Mach-E GT",
year: 2024,
mileage: "0",
price: 69990,
feature1: "Performance Edition",
feature2: "Fast Charging",
feature3: "Panoramic Roof",
image: "categories",
link: "/electric/8",
description:
"The Ford Mustang Mach-E GT blends muscle car heritage with modern EV performance. Stylish, sporty, and practical, it’s designed for the future of driving."
}
];


export const sportsCars = [
{
id: 1,
model: "Ferrari 296 GTB",
year: 2024,
mileage: "0",
price: 319990,
feature1: "V6 Hybrid Engine",
feature2: "Race Mode",
feature3: "Carbon Fiber Trim",
image: categories1,
link: "/sports/1",
description:
"The Ferrari 296 GTB combines electrification with Ferrari DNA. Its hybrid V6 engine delivers incredible performance with stunning efficiency."
},
{
id: 2,
model: "Lamborghini Huracan EVO",
year: 2024,
mileage: "0",
price: 249990,
feature1: "V10 Engine",
feature2: "Dynamic Steering",
feature3: "Sport Exhaust",
image: categories2,
link: "/sports/2",
description:
"The Lamborghini Huracan EVO is pure adrenaline on wheels. With razor-sharp handling, explosive acceleration, and iconic design, it’s a true supercar."
},
{
id: 3,
model: "Porsche 911 Turbo S",
year: 2024,
mileage: "0",
price: 199990,
feature1: "Sport Chrono",
feature2: "All-Wheel Drive",
feature3: "Premium Interior",
image: categories3,
link: "/sports/3",
description:
"The Porsche 911 Turbo S blends timeless design with cutting-edge performance. Its unmatched precision makes it the ultimate driver’s sports car."
},
{
id: 4,
model: "McLaren 720S",
year: 2024,
mileage: "0",
price: 289990,
feature1: "Twin-Turbo V8",
feature2: "Lightweight Design",
feature3: "Race-Tuned Suspension",
image: categories4,
link: "/sports/4",
description:
"The McLaren 720S offers breathtaking speed and precision handling. Its aerodynamic design and V8 engine deliver a true supercar experience."
},
{
id: 5,
model: "Aston Martin Vantage",
year: 2024,
mileage: "0",
price: 159990,
feature1: "Twin-Turbo V8",
feature2: "Luxury Interior",
feature3: "Launch Control",
image: "categories5",
link: "/sports/5",
description:
"The Aston Martin Vantage combines British elegance with raw power. Stylish and fast, it offers a refined yet thrilling ride."
},
{
id: 6,
model: "Chevrolet Corvette Z06",
year: 2024,
mileage: "0",
price: 109990,
feature1: "V8 Engine",
feature2: "Track Mode",
feature3: "Sport Exhaust",
image: categories6,
link: "/sports/6",
description:
"The Chevrolet Corvette Z06 is America’s icon reborn. With track-focused engineering and bold design, it delivers supercar performance at an accessible price."
},
{
id: 7,
model: "Nissan GT-R Nismo",
year: 2024,
mileage: "0",
price: 149990,
feature1: "Twin-Turbo V6",
feature2: "AWD System",
feature3: "Carbon Fiber Accents",
image: categories7,
link: "/sports/7",
description:
"The Nissan GT-R Nismo is engineered for extreme performance. With legendary acceleration and advanced aerodynamics, it’s built for speed lovers."
},
{
id: 8,
model: "Jaguar F-Type R",
year: 2024,
mileage: "0",
price: 99990,
feature1: "Supercharged V8",
feature2: "Luxury Cockpit",
feature3: "Dynamic Handling",
image: "categories8",
link: "/sports/8",
description:
"The Jaguar F-Type R is a perfect blend of style and performance. With a roaring V8 engine and elegant design, it’s made to thrill."
}
];

export const suvs = [
{
id: 1,
model: "Range Rover Vogue",
year: 2024,
mileage: "0",
price: 120000,
feature1: "Off-Road Capability",
feature2: "Panoramic Glass Roof",
feature3: "Adaptive Terrain Response",
image: categories1,
link: "/suv/1",
description:
"The Range Rover Vogue delivers ultimate SUV luxury. With advanced off-road systems and premium comfort, it’s ready for any journey."
},
{
id: 2,
model: "BMW X7",
year: 2024,
mileage: "0",
price: 95000,
feature1: "7-Seater",
feature2: "Premium Leather",
feature3: "Digital Cockpit",
image: categories2,
link: "/suv/2",
description:
"The BMW X7 combines presence and practicality. With three rows of luxury seating and powerful performance, it’s the ultimate family SUV."
},
{
id: 3,
model: "Mercedes-Benz GLE",
year: 2024,
mileage: "0",
price: 90000,
feature1: "MBUX Infotainment",
feature2: "All-Wheel Drive",
feature3: "Panoramic Roof",
image: categories3,
link: "/suv/3",
description:
"The Mercedes-Benz GLE blends performance and sophistication. With advanced tech and a refined interior, it offers a balanced driving experience."
},
{
id: 4,
model: "Audi Q8",
year: 2024,
mileage: "0",
price: 99000,
feature1: "Quattro AWD",
feature2: "Premium Interior",
feature3: "Sport Mode",
image: categories4,
link: "/suv/4",
description:
"The Audi Q8 is a sporty, luxurious SUV. Its bold design, quattro drive, and advanced technology make it perfect for performance and comfort."
},
{
id: 5,
model: "Porsche Cayenne Turbo",
year: 2024,
mileage: "0",
price: 130000,
feature1: "Turbo V6 Engine",
feature2: "Sport Suspension",
feature3: "Advanced Infotainment",
image: "categories5",
link: "/suv/5",
description:
"The Porsche Cayenne Turbo blends SUV practicality with sports car DNA. Powerful, agile, and luxurious, it’s built for both city and track."
},
{
id: 6,
model: "Land Rover Defender 130",
year: 2024,
mileage: "0",
price: 85000,
feature1: "Off-Road Package",
feature2: "All-Terrain Capability",
feature3: "Spacious Cabin",
image: categories6,
link: "/suv/6",
description:
"The Land Rover Defender 130 is a rugged SUV designed for adventure. With exceptional off-road performance and a roomy interior, it’s perfect for explorers."
},
{
id: 7,
model: "Tesla Model X Plaid",
year: 2024,
mileage: "0",
price: 120000,
feature1: "Falcon Wing Doors",
feature2: "Autopilot",
feature3: "Long Range Battery",
image: categories7,
link: "/suv/7",
description:
"The Tesla Model X Plaid is a futuristic electric SUV. With cutting-edge tech, incredible acceleration, and spacious seating, it sets the standard for EV SUVs."
},
{
id: 8,
model: "Chevrolet Tahoe RST",
year: 2024,
mileage: "0",
price: 75000,
feature1: "V8 Engine",
feature2: "Advanced Safety",
feature3: "Premium Cabin",
image: "categories8",
link: "/suv/8",
description:
"The Chevrolet Tahoe RST combines power, comfort, and tech in a full-size SUV. Spacious and capable, it’s ideal for family and long-distance travel."
}
];







