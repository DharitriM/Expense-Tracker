import React from "react";
import "../Card/SecondCard.css";
import ExpenseItems from "./ExpenseItems";

export default function ExpenseList(props) {
  return (
    <div className="expenses-list">
      {props.data.length > 0 ? (
        props.data.length === 1 ? (
          <ul className="expenses-list">
            {props.data?.map((item, index) => (
              <ExpenseItems
                id={index}
                updateExpense={props.updateExpense}
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              ></ExpenseItems>
            ))}
            <h3>Single Expense </h3>
          </ul>
        ) : (
          <ul className="expenses-list">
            {props.data?.map((item, index) => (
              <ExpenseItems
                id={index}
                updateExpense={props.updateExpense}
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              ></ExpenseItems>
            ))}
          </ul>
        )
      ) : (
        <h3>No Expense Found</h3>
      )}
    </div>
  );
}
