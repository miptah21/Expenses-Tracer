import React from "react";
import Expense from "./components/Expenses/Expense";

const App = () => {
  const expense = [
    {
      title: "UKT Semester Genap 2023/2024",
      amount: 7400,
      date: new Date(2023, 0, 25),
    },
    {
      title: "Pajak Motor",
      amount: 1400,
      date: new Date(2023, 0, 26),
    },
    {
      title: "Upgrade RAM Laptop",
      amount: 400,
      date: new Date(2023, 1, 2),
    },
    {
      title: "Beli Buku",
      amount: 345,
      date: new Date(2023, 1, 3),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expense, { items: expense })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expense}/>
    </div>
  );
}

export default App;
