// Write a Function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.
function getChar(c) {
  return String.fromCharCode(c);
}
// Our Football team finished the championship.The result of each match looks like "x:y".Results of all matches are recorded in the collection.
// For Example: ["3:1","2:2","0:1",...]
// Write a Function that takes such collection and the points of our team in the championship.Rules for counting points for each match.
// if x>y - 3 points
// if x<y - 0 points
// if x=y - 1 points
const points = (games) =>
  games.reduce((acc, game) => {
    const [x, y] = game.split(":");
    const points = x > y ? 3 : x === y ? 1 : 0;
    return (acc += points);
  }, 0);

// Given an Array
const people = [
  {
    firstName: "Sam",
    lastName: "Hughes",
    DOB: "07/07/1978",
    department: "Development",
    salary: "45000",
  },
  {
    firstName: "Terri",
    lastName: "Bishop",
    DOB: "02/04/1989",
    department: "Development",
    salary: "35000",
  },
  {
    firstName: "Jar",
    lastName: "Burke",
    DOB: "11/01/1985",
    department: "Marketing",
    salary: "38000",
  },
  {
    firstName: "Julio",
    lastName: "Miller",
    DOB: "12/07/1991",
    department: "Sales",
    salary: "40000",
  },
  {
    firstName: "Chester",
    lastName: "Flores",
    DOB: "03/15/1988",
    department: "Development",
    salary: "41000",
  },
  {
    firstName: "Madison",
    lastName: "Marshall",
    DOB: "09/22/1980",
    department: "Sales",
    salary: "32000",
  },
  {
    firstName: "Ava",
    lastName: "Pena",
    DOB: "11/02/1986",
    department: "Development",
    salary: "38000",
  },
  {
    firstName: "Gabriella",
    lastName: "Steward",
    DOB: "08/26/1994",
    department: "Marketing",
    salary: "46000",
  },
  {
    firstName: "Charles",
    lastName: "Campbell",
    DOB: "09/04/1977",
    department: "Sales",
    salary: "42000",
  },
  {
    firstName: "Tiffany",
    lastName: "Lambert",
    DOB: "05/11/1990",
    department: "Development",
    salary: "34000",
  },
  {
    firstName: "Antonio",
    lastName: "Gonzalez",
    DOB: "03/24/1985",
    department: "Office Management",
    salary: "49000",
  },
  {
    firstName: "Aaron",
    lastName: "Garrett",
    DOB: "09/04/1985",
    department: "Development",
    salary: "39000",
  },
];
// Find the average income of all the people in the array?

const personSalary =
  people.reduce(
    (accumulator, person) => accumulator + parseInt(person.salary),
    0
  ) / people.length;

console.log(personSalary);

// Who are the people that are currently older than 30?

const isAge30 = people.filter(
  (person) => new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30
);

console.log(isAge30);

// Get a list of people's full name (first name and last name).
const firstLastNames = people.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);

console.log(firstLastNames);

// Get a list of people in the array ordered from youngest to oldest.
const isYoungorOld = people.sort(
  (personA, personB) => new Date(personA.DOB) - new Date(personB.DOB)
);

console.log(isYoungorOld);

// How many people are there in each department?
const departments = people.reduce(
  (accumulator, person) => ({
    ...accumulator,
    [person.department]: accumulator[person.department] + 1 || 1,
  }),
  {}
);

console.log(departments);

// Given an Array
const orders = [
  {
    orderId: "123",
    customerId: "123",
    deliveryDate: "01-01-2020",
    delivered: true,
    items: [
      { productId: "123", price: 55 },
      { productId: "234", price: 30 },
    ],
  },
  {
    orderId: "234",
    customerId: "234",
    deliveryDate: "01-02-2020",
    delivered: false,
    items: [{ productId: "234", price: 30 }],
  },
  {
    orderId: "345",
    customerId: "234",
    deliveryDate: "05-01-2020",
    delivered: true,
    items: [
      { productId: "567", price: 30 },
      { productId: "678", price: 80 },
    ],
  },
  {
    orderId: "456",
    customerId: "345",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "789", price: 12 },
      { productId: "890", price: 90 },
    ],
  },
  {
    orderId: "578",
    customerId: "456",
    deliveryDate: "12-01-2020",
    delivered: true,
    items: [
      { productId: "901", price: 43 },
      { productId: "123", price: 55 },
    ],
  },
];

// Get a list of orders for the customer with the ID 234 that have not been delivered.
const id234 = orders.filter(
  (order) => order.customerId === "234" && !order.delivered
);

console.log(id234);

// Create a new property on each order with the total price of items ordered.
const totalorderPrice = orders.map((order) => ({
  ...order,
  orderTotal: order.items.reduce((acc, item) => acc + item.price, 0),
}));

console.log(totalorderPrice);

// Have all the orders been delivered?
const orderDelivered = orders.every((order) => order.delivered);

console.log(orderDelivered);

// Has the customer with ID '123' made any orders?
const id123 = orders.some((order) => order.customerId === "123");
// orders.filter(order => order.customerId === '123')

console.log(id123);

// Have any products with and id of 123 been sold?
const id123Orders = orders.reduce(
  (acc, order) =>
    acc +
    order.items.reduce((acc, item) => acc + (item.productId === "123"), 0),
  0
);

console.log(id123Orders);
