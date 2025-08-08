// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 2000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the future of driving with the Tesla Malibu — a sleek, electric-powered sedan offering instant torque, smooth acceleration, and a whisper-quiet ride. Perfect for eco-conscious travelers who refuse to compromise on performance or style.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 1500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Toyota Aventador combines reliability with luxury, featuring a spacious interior, advanced safety features, and a fuel-efficient engine. Ideal for family trips or business travel, this car ensures you arrive in comfort and style.",},

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 3000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW X3 is the epitome of luxury and performance, offering a powerful engine, dynamic handling, and a premium interior. Perfect for those who appreciate the finer things in life, this SUV is designed for both city driving and off-road adventures.",

  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 1500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Nissan Mercielago is a blend of style and performance, featuring a sleek design, advanced technology, and a comfortable ride. Whether you’re commuting in the city or exploring the countryside, this car offers a smooth and enjoyable driving experience.",},

  {
    id: 5,
    brand: "Toyota",
    rating: 94,
    carName: "Toyota Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 1000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Ferrari Camry is a stunning sports car that delivers exhilarating performance and head-turning looks. With its powerful engine, precise handling, and luxurious interior, this car is perfect for those who crave speed and style on the open road.",

  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 3000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes Benz XC90 is a luxury SUV that combines elegance with performance. With its spacious interior, cutting-edge technology, and superior comfort, this vehicle is perfect for long journeys or city driving, ensuring you travel in style and sophistication.",

  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 4000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Audi Fiesta is a compact car that offers a perfect balance of performance and efficiency. With its agile handling, modern design, and advanced features, this car is ideal for urban driving and weekend getaways, making every journey enjoyable.",

  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 25000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Rolls Royce Colorado is the pinnacle of luxury and craftsmanship, offering an unparalleled driving experience. With its exquisite design, powerful performance, and state-of-the-art technology, this car is perfect for those who demand the very best in automotive excellence.", 
    },
];

export default carData;
