const resList = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    name: "Biryani House",
    avgRating: 4.5,
    cuisines: ["Biryani", "North Indian"],
    costForTwo: 40000,
    deliveryTime: 30,
    promoted:true
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    name: "Pizza Palace",
    avgRating: 4.1,
    cuisines: ["Italian", "Fast Food"],
    costForTwo: 50000,
    deliveryTime: 25,
        promoted:false
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    name: "Sushi World",
    avgRating: 4.6,
    cuisines: ["Japanese", "Asian"],
    costForTwo: 70000,
    deliveryTime: 40,
        promoted:true
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    name: "Burger Hub",
    avgRating: 5,
    cuisines: ["American", "Burgers"],
    costForTwo: 35000,
    deliveryTime: 20,
        promoted:false
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1604908177225-6abf7c5cfe4c",
    name: "Tandoori Tales",
    avgRating: 4.5,
    cuisines: ["Indian", "Tandoor"],
    costForTwo: 60000,
    deliveryTime: 28,
        promoted:false
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    name: "Pasta Point",
    avgRating: 3.9,
    cuisines: ["Italian", "Continental"],
    costForTwo: 45000,
    deliveryTime: 22,
        promoted:true
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1603079846409-e2f2c5e7ec39",
    name: "Curry Corner",
    avgRating: 5,
    cuisines: ["Indian", "Curry"],
    costForTwo: 38000,
    deliveryTime: 26,
        promoted:false
  },
  {
    id: 8,
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    name: "Steak Station",
    avgRating: 3.7,
    cuisines: ["Steak", "Grill"],
    costForTwo: 90000,
    deliveryTime: 35,
      promoted:false
  },
  {
    id: 9,
    imageUrl: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da",
    name: "Falafel Fiesta",
    avgRating: 4.2,
    cuisines: ["Mediterranean", "Lebanese"],
    costForTwo: 42000,
    deliveryTime: 27,
      promoted:false
  },
  {
    id: 10,
    imageUrl: "https://images.unsplash.com/photo-1606788075761-4c65d85dc5df",
    name: "Vegan Vibes",
    avgRating: 4.5,
    cuisines: ["Vegan", "Healthy"],
    costForTwo: 46000,
    deliveryTime: 24,
      promoted:true
  },
  {
    id: 11,
    imageUrl: "https://images.unsplash.com/photo-1523983303491-73e12c1f6c2a",
    name: "Taco Town",
    avgRating: 4.3,
    cuisines: ["Mexican", "Street Food"],
    costForTwo: 39000,
    deliveryTime: 23,
      promoted:false
  },
  {
    id: 12,
    imageUrl: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    name: "Pancake Place",
    avgRating: 4.1,
    cuisines: ["Desserts", "Bakery"],
    costForTwo: 25000,
    deliveryTime: 18,
      promoted:false
  },
  {
    id: 13,
    imageUrl: "https://images.unsplash.com/photo-1516685018646-549d85c6f39d",
    name: "Seafood Shack",
    avgRating: 4.6,
    cuisines: ["Seafood", "Asian"],
    costForTwo: 80000,
    deliveryTime: 33,
      promoted:true
  },
  {
    id: 14,
    imageUrl: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
    name: "Salad Stop",
    avgRating: 4.0,
    cuisines: ["Salads", "Healthy"],
    costForTwo: 30000,
    deliveryTime: 20,
      promoted:false
  },
  {
    id: 15,
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    name: "Fried Chicken Express",
    avgRating: 4.3,
    cuisines: ["Fast Food", "Chicken"],
    costForTwo: 37000,
    deliveryTime: 21,
      promoted:false
  },
  {
    id: 16,
    imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    name: "Dimsum Delights",
    avgRating: 4.4,
    cuisines: ["Chinese", "Dim Sum"],
    costForTwo: 52000,
    deliveryTime: 29,
      promoted:false
  },
  {
    id: 17,
    imageUrl: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    name: "Kebab Kingdom",
    avgRating: 4.5,
    cuisines: ["Indian", "Mughlai"],
    costForTwo: 62000,
    deliveryTime: 32,
      promoted:true
  },
  {
    id: 18,
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    name: "Wrap World",
    avgRating: 4.2,
    cuisines: ["Fast Food", "Wraps"],
    costForTwo: 35000,
    deliveryTime: 19,
      promoted:false
  },
  {
    id: 19,
    imageUrl: "https://images.unsplash.com/photo-1617196033664-9aa31f85124d",
    name: "Ramen Republic",
    avgRating: 4.6,
    cuisines: ["Japanese", "Ramen"],
    costForTwo: 65000,
    deliveryTime: 34,
      promoted:false
  },
  {
    id: 20,
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    name: "Donut Den",
    avgRating: 4.1,
    cuisines: ["Desserts", "Bakery"],
    costForTwo: 28000,
    deliveryTime: 17,
      promoted:false
  },
    {
    id: 21,
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    name: "Donut Den",
    avgRating: 4.1,
    cuisines: ["Desserts", "Bakery"],
    costForTwo: 28000,
    deliveryTime: 17,
      promoted:true
  },
    {
    id: 22,
    imageUrl: "https://images.unsplash.com/photo-1546069901-eacef0df6022",
    name: "Kebab Kingdom",
    avgRating: 4.5,
    cuisines: ["Indian", "Mughlai"],
    costForTwo: 62000,
    deliveryTime: 32,
      promoted:false
  },
  {
    id: 23,
    imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    name: "Wrap World",
    avgRating: 4.2,
    cuisines: ["Fast Food", "Wraps"],
    costForTwo: 35000,
    deliveryTime: 19,
      promoted:false
  },
  {
    id: 24,
    imageUrl: "https://images.unsplash.com/photo-1617196033664-9aa31f85124d",
    name: "Ramen Republic",
    avgRating: 4.6,
    cuisines: ["Japanese", "Ramen"],
    costForTwo: 65000,
    deliveryTime: 34,
      promoted:false
  },
  // … continue up to id: 50 with similar structure
];

export default resList;
