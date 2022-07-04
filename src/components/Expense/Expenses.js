import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSaveFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onSaveFilterHandler}
        />
        {/* 조건부 필터 방법 1 */}
        {/* {filterExpenses.length === 0 && <p>No expenses found</p>}
        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* 조건부 필터 방법 2 */}
        {/* {filterExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
