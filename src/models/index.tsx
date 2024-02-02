import truckFast from "../assets/icons/freeshipping.png";
import shieldTick from "../assets/icons/secure.png";
import support from "../assets/icons/support.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import bigShoe1 from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
import shoe4 from "../assets/images/shoe4.png";
import shoe5 from "../assets/images/shoe5.png";
import shoe6 from "../assets/images/shoe6.png";
import shoe7 from "../assets/images/shoe7.png";
import shoe8 from "../assets/images/shoe8.png";
import thumbnailShoe1 from "../assets/images/thumbnail-shoe1.png";
import thumbnailShoe2 from "../assets/images/thumbnail-shoe2.png";
import thumbnailShoe3 from "../assets/images/thumbnail-shoe3.png";
import customer1 from "../assets/images/review1.jpg";
import customer2 from "../assets/images/review2.jpg";

export {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "NORDA-003 Haven",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "ON-Cloudflow",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "NIKE-Vaporfly 3",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "ASICS-Novablast 4",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Paul Determine",
    rating: 4.5,
    feedback:
      "The gear boosted my run, vaulting me into a sphere where I dash not just for the thrill, but as a boundless dynamo chasing horizons. Each leap forward, I'm not just advancing, but you're glimpsing my speed's shadow. None can match my velocity. I am, unequivocally, Paul the Determiner, the epitome of pace!",
  },
  {
    imgURL: customer2,
    customerName: "Cyp Tech",
    rating: 5,
    feedback:
      "The product surpassed my expectations, propelling me into a realm where I run not just for the sake of it, but as an unstoppable force chasing my dreams. With each stride, I'm not looking back, but you'll always be catching glimpses of my trail. No one can match my pace. I am, undeniably, Cyp the best Tech!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "NIKE - VAPORFLY 3 HAKONE", link: "/" },
      { name: "ON - CLOUDFLOW 4 DISTANCE", link: "/" },
      { name: "NORDA - 003 HAVEN", link: "/" },
      { name: "ASICS - NOVABLAST 4", link: "/" },
      { name: "ARC'TERYX - NORVAN LD 3 GTX", link: "/" },
      { name: "HOKA X SATISFY - CLIFTON LS", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@choese.com", link: "mailto:customer@choese.com" },
      { name: "Phone: +33798198050" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
