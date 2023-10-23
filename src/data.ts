export type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
  tags: string;
};

export const data: Product[] = [
  {
    id: 1,
    title: "Check Textured Coat",
    category: "Coat",
    price: "175",
    tags: "coat check textured camel brown long sleeves buttoned cuffs",
  },
  {
    id: 2,
    title: "Contrast Check Coat",
    category: "Coat",
    price: "155",
    tags: "coat camel black grey marl lapel collar hip flap pockets",
  },
  {
    id: 3,
    title: "White Coat",
    category: "Coat",
    price: "125",
    tags: "coat camel white short sleeves double-breasted button",
  },
  {
    id: 4,
    title: "Basic Hoodie",
    category: "Hoodies",
    price: "55",
    tags: "hoodie solid plain purple long baggy hood",
  },
  {
    id: 5,
    title: "Basic Hoodie",
    category: "Hoodies",
    price: "55",
    tags: "hoodie solid plain black long baggy hood",
  },
  {
    id: 6,
    title: "Basic short Hoodie",
    category: "Hoodies",
    price: "55.4",
    tags: "hoodie solid plain gray grey short hood",
  },
];

export const trendingData: Product[] = [
  {
    id: 3,
    title: "White Coat",
    category: "Coat",
    price: "125.4",
    tags: "coat camel white short sleeves double-breasted button",
  },
  {
    id: 4,
    title: "Basic Hoodie",
    category: "Hoodies",
    price: "55.4",
    tags: "hoodie solid plain purple long baggy hood",
  },
];

export const popularData: Product[] = [
  {
    id: 1,
    title: "Check Textured Coat",
    category: "Coat",
    price: "175",
    tags: "coat check textured camel brown long sleeves buttoned cuffs",
  },
  {
    id: 2,
    title: "Contrast Check Coat",
    category: "Coat",
    price: "155",
    tags: "coat camel black grey marl lapel collar hip flap pockets",
  },
  {
    id: 3,
    title: "White Coat",
    category: "Coat",
    price: "125",
    tags: "coat camel white short sleeves double-breasted button",
  },
  {
    id: 4,
    title: "Basic Hoodie",
    category: "Hoodies",
    price: "55",
    tags: "hoodie solid plain purple long baggy hood",
  },
  {
    id: 5,
    title: "Basic Hoodie",
    category: "Hoodies",
    price: "55",
    tags: "hoodie solid plain black long baggy hood",
  },
  {
    id: 6,
    title: "Basic short Hoodie",
    category: "Hoodies",
    price: "55.4",
    tags: "hoodie solid plain gray grey short hood",
  },
];

export const categories: string[] = [
  ...new Set(data.map((item) => item.category)),
];
