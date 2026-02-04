import { StaticImageData } from "next/image";

import image1 from '@/assets/image1.webp'
import image2 from '@/assets/image2.webp'
import image3 from '@/assets/image3.webp'
import nobg1 from '@/assets/nobg2.png'

export interface Vehicle {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string | StaticImageData;
  range: string | number;
  power: string | number;
  description: string;
  features: string[];
}

export const vehicleData: Vehicle[] = [
  {
    id: 1,
    slug: 'ivm-g80', // URL will be /models/ivm-g80
    name: 'G80 Luxury SUV',
    category: 'SUVs',
    price: '₦60,000,000',
    // image: 'https://img.freepik.com/premium-psd/modern-car-transparent-background-3d-rendering-illustration_494250-34947.jpg',
    image: image1,
    range: 650,
    power: 350,
    description: "The IVM G80 is designed for the African elite. Combining rugged durability with executive-class luxury, it features a reinforced chassis suitable for all terrains without compromising on comfort.",
    features: ["All-Wheel Drive", "Leather Interior", "360 Camera", "Reinforced Chassis"]
  },
  {
    id: 2,
    slug: 'ivm-g40',
    name: 'G40 Heritage',
    category: 'SUVs',
    price: '₦55,000,000',
    // image: 'https://www.innosonvehicles.com/wp-content/uploads/2024/09/IVM-EV-BOX-WHITE-FRONT-1.png',
    image: image2,
    range: 580,
    power: 300,
    description: "A testament to our heritage, the G40 is built for those who lead. It offers superior handling and safety features that redefine what an SUV can be.",
    features: ["Off-road Mode", "High Ground Clearance", "Smart Infotainment"]
  },
  {
    id: 3,
    slug: 'ivm-caris',
    name: 'IVM Caris',
    category: 'Sedans',
    price: '₦32,000,000',
    image: image3,
    range: 420,
    power: 220,
    description: "The IVM Caris is designed for the African elite. Combining rugged durability with executive-class luxury, it features a reinforced chassis suitable for all terrains without compromising on comfort.",
    features: ["All-Wheel Drive", "Leather Interior", "360 Camera", "Reinforced Chassis"]
  },
  {
    id: 4,
    slug: 'ivm-g80', // URL will be /models/ivm-g80
    name: 'G80 Luxury SUV',
    category: 'SUVs',
    price: '₦60,000,000',
    // image: 'https://www.innosonvehicles.com/wp-content/uploads/2024/09/IVM-EV-LEMON-FRONT-1.png',
    image: image1,
    range: 650,
    power: 350,
    description: "The IVM G80 is designed for the African elite. Combining rugged durability with executive-class luxury, it features a reinforced chassis suitable for all terrains without compromising on comfort.",
    features: ["All-Wheel Drive", "Leather Interior", "360 Camera", "Reinforced Chassis"]
  },
  {
    id: 5,
    slug: 'ivm-g40',
    name: 'G40 Heritage',
    category: 'SUVs',
    price: '₦55,000,000',
    // image: 'https://www.innosonvehicles.com/wp-content/uploads/2024/09/IVM-EV-BOX-WHITE-FRONT-1.png',
    image: image2,
    range: 580,
    power: 300,
    description: "A testament to our heritage, the G40 is built for those who lead. It offers superior handling and safety features that redefine what an SUV can be.",
    features: ["Off-road Mode", "High Ground Clearance", "Smart Infotainment"]
  },
  {
    id: 6,
    slug: 'ivm-caris',
    name: 'IVM Caris',
    category: 'Sedans',
    price: '₦32,000,000',
    image: image3,
    range: 420,
    power: 220,
    description: "The IVM Caris is designed for the African elite. Combining rugged durability with executive-class luxury, it features a reinforced chassis suitable for all terrains without compromising on comfort.",
    features: ["All-Wheel Drive", "Leather Interior", "360 Camera", "Reinforced Chassis"]
  },
  {
    id: 7,
    slug: 'ivm-granite',
    name: 'IVM Granite',
    category: 'Trucks',
    price: '₦45,000,000',
    image: image1,
    range: 420,
    power: 220,
    description: "The IVM G80 is designed for the African elite. Combining rugged durability with executive-class luxury, it features a reinforced chassis suitable for all terrains without compromising on comfort.",
    features: ["All-Wheel Drive", "Leather Interior", "360 Camera", "Reinforced Chassis"]
  },
  {
    id: 8,
    slug: 'ivm-g40',
    name: 'IVM G40',
    category: 'SUVs',
    price: '₦55,000,000',
    image: image2,
    range: 420,
    power: 220,
    description: "The IVM G40 is designed for the African elite. Combining rugged durability with executive-class luxury, it features a reinforced chassis suitable for all terrains without compromising on comfort.",
    features: ["All-Wheel Drive", "Leather Interior", "360 Camera", "Reinforced Chassis"]
  },
];