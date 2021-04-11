import { v4 as uuidv4 } from "uuid";
import Jackets from "../assets/amanda-vick-ohWf6YuzOQk-unsplash.jpg";
import T_shirt from "../assets/anomaly-WWesmHEgXDs-unsplash.jpg";
import Jeans_jackets from "../assets/caio-coelho-QRN47la37gw-unsplash.jpg";
import Shirt from "../assets/caio-coelho-xFmXLq_KJxg-unsplash.jpg";
import Light_shirt from "../assets/elcarito-fouVDmGXoPI-unsplash.jpg";
import boxar from "../assets/ionut-vlad-ZUHkwzWvMvs-unsplash.jpg";
import backpack from "../assets/keagan-henman-xPJYL0l5Ii8-unsplash.jpg";
import TShirt from "../assets/max-ducourneau-vJRvABwAWX8-unsplash.jpg";
import michal from "../assets/michal-kubalczyk-oL-gSFVpI6A-unsplash.jpg";
import Shoes from "../assets/milada-vigerova-p8Drpg_duLw-unsplash.jpg";
import Short_blouse from "../assets/sarah-dorweiler-gUPiTDBdRe4-unsplash.jpg";

export default [
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "Jackets",
    new_product: "New",
    price: "$45.00",
    img: Jackets,
    start: 4.5,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "T shirt",
    price: "$30.00",
    sale: "%20",
    offer: "$23.99",
    img: T_shirt,
    start: 4,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "Jeans jackets",
    price: "$56.00",
    img: Jeans_jackets,
    start: 4.2,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "Shirt",
    price: "$12.99",
    img: Shirt,
    start: 5,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "Light shirt",
    price: "$50.00",
    sale: "%20",
    offer: "$30.99",
    img: Light_shirt,
    start: 2.9,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "boxar",
    price: "$20.00",
    img: boxar,
    start: 3.7,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "backpack",
    new_product: "New",
    price: "$40.00",
    img: backpack,
    start: 4.4,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "T_shirt",
    price: "$30.99",
    img: TShirt,
    start: 4,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "michal",
    price: "$25.00",
    img: michal,
    start: 2.4,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "Shoes",
    new_product: "New",
    price: "$60.00",
    img: Shoes,
    start: 4,
  },
  {
    id: uuidv4(),
    section: "mens wear",
    product_name: "Short_blouse",
    sale: "%50",
    price: "$54.00",
    offer: "$27.99",
    img: Short_blouse,
    start: 3.5,
  },
];
