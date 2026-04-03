import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    id: 1,
    name: "BBQ Chicken Pizza",
    ingredients: "Chicken, BBQ Sauce, Onions, Cheese",
    price: 12.99,
    photoName: "pizzas/BBQ-chicken.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    ingredients: "Tomato Sauce, Mozzarella, Basil",
    price: 10.99,
    photoName: "pizzas/Italian maguerita.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    ingredients: "Tomato Sauce, Mozzarella, Pepperoni",
    price: 11.99,
    photoName: "pizzas/pepperoni.jpg",
    soldOut: true,
  },
  {
    id: 4,
    name: "Hawaiian Pizza",
    ingredients: "Tomato Sauce, Mozzarella, Ham, Pineapple",
    price: 13.99,
    photoName: "pizzas/hawaiian.jpg",
    soldOut: false,
  },
  {
    id: 5,
    name: "Veggie Pizza",
    ingredients: "Tomato Sauce, Mozzarella, Bell Peppers, Olives, Onions",
    price: 11.99,
    photoName: "pizzas/veggie-supreme.jpg",
    soldOut: false,
  },
  {
    id: 6,
    name: "Pesto and Tomato pizza",
    ingredients: "Tomato sauce, Olives, Onions",
    price: 9.5,
    photoName: "pizzas/pesto-tomato.jpg",
    soldOut: false,
  },
  {
    id: 7,
    name: "Meat Lovers Pizza",
    ingredients: "Tomato Sauce, Mozzarella, Pepperoni, Sausage, Bacon",
    price: 14.99,
    photoName: "pizzas/meat-lovers.jpg",
    soldOut: false,
  },
  {
    id: 8,
    name: "Supreme Pizza",
    ingredients:
      "Tomato Sauce, Mozzarella, Pepperoni, Sausage, Bell Peppers, Onions, Olives",
    price: 15.99,
    photoName: "pizzas/veggie-supreme.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1 className="header">Fast Pizza Company Ltd</h1>;
}
function Menu({ pizzaData }) {
  return (
    <div className="menu">
      <hr></hr>
      <h2>OUR MENU</h2>
      <hr></hr>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      We are open 24hrs! make your order now! Call us at 0707297649
    </footer>
  );
}

function Pizza(props) {
  return (
    <div>
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>${props.pizzaObject.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
