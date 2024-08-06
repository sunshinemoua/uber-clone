import uuid from "react-native-uuid";

export const goAnywhereList = [
  {
    id: uuid.v4(),
    title: "Ride",
    icon: "car",
    url: "https://help.uber.com",
    color: "darkorange",
    imgURL: require("../pics/ride1.png"),
    isBig: true,
  },
  {
    id: uuid.v4(),
    title: "Reserve",
    icon: "calendar-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "red",
    imgURL: require("../pics/reserve2.png"),

    isBig: true,
  },
  {
    id: uuid.v4(),
    title: "Rental Cars",
    icon: "key",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
    imgURL: require("../pics/rentKeys3.png"),
    isMedium: true,
  },
  {
    id: uuid.v4(),
    title: "2-Wheels",
    icon: "bicycle",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "green",
    imgURL: require("../pics/bike.png"),
    isMedium: true,
  },
  {
    id: uuid.v4(),
    title: "Group Ride",
    icon: "people",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "black",
    imgURL: require("../pics/group.png"),
    isMedium: true,
  },
];

export const getAnythingDeliveredList = [
  {
    id: uuid.v4(),
    title: "Food",
    icon: "restaurant",
    url: "https://help.uber.com",
    imgURL: require("../pics/food.png"),
    color: "darkorange",
  },
  {
    id: uuid.v4(),
    title: "Grocery",
    icon: "fast-food-outline",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    imgURL: require("../pics/grocery.png"),
    color: "darkgreen",
  },
  {
    id: uuid.v4(),
    title: "Alcohol",
    icon: "beer",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "#b5651d",
    imgURL: require("../pics/alcohol.png"),
  },
  {
    id: uuid.v4(),
    title: "Convenience",
    icon: "storefront",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "black",
    imgURL: require("../pics/convenience.png"),
  },
  {
    id: uuid.v4(),
    title: "Health",
    icon: "medkit",
    url: "https://help.uber.com",
    color: "red",
    imgURL: require("../pics/health.png"),
  },
  {
    id: uuid.v4(),
    title: "Personal Care",
    icon: "fitness",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "#7f7fff",
    imgURL: require("../pics/personal.png"),
  },
  {
    id: uuid.v4(),
    title: "Baby",
    icon: "sunny",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "#ffc04c",
    imgURL: require("../pics/baby.png"),
  },
  {
    id: uuid.v4(),
    title: "Gourmet",
    icon: "wine",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "darkred",
    imgURL: require("../pics/gourmet.png"),
  },
  {
    id: uuid.v4(),
    title: "Pet Supplies",
    icon: "paw",
    url: "https://help.uber.com",
    color: "brown",
    imgURL: require("../pics/petsupplies.png"),
  },
  {
    id: uuid.v4(),
    title: "Flowers",
    icon: "flower",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "#cc99a2",
    imgURL: require("../pics/flowers.png"),
  },
  {
    id: uuid.v4(),
    title: "Retail",
    icon: "gift",
    url: "https://www.uber.com/us/en/r/cities/car-rentals/sacramento-ca-us/",
    color: "blue",
    imgURL: require("../pics/retail.png"),
  },
  {
    id: uuid.v4(),
    title: "Electronics",
    icon: "watch",
    url: "https://www.uber.com/us/en/ride/uber-moto/",
    color: "darkgray",
    imgURL: require("../pics/electronics.png"),
  },
];

export const getAnythingDoneList = [
  {
    id: uuid.v4(),
    title: "Package",
    icon: "logo-dropbox",
    url: "https://help.uber.com",
    color: "#521515",
    imgURL: require("../pics/package.png"),
    isBig: true,
  },
  {
    id: uuid.v4(),
    title: "Store Pickup",
    icon: "storefront",
    url: "https://www.uber.com/us/en/ride/how-it-works/reserve/",
    color: "#a52a2a",
    imgURL: require("../pics/pickup.png"),
    isBig: true,
  },
];
