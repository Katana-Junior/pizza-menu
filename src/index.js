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
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <hr></hr>
      <h2>OUR MENU</h2>
      <hr></hr>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.id} />
          ))}
        </ul>
      ) : (
        <p>We are currently working on our menu please check back later.</p>
      )}
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open until {closeHour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are currently closed. Our working hours are from {openHour}:00 to{" "}
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Pizza(props) {
  return (
    <li>
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>${props.pizzaObject.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
