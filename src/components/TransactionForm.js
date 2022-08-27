import React from "react";
import "../styles/transactionForm.css";

const TransactionForm = ({
 inputCounter,
 setInputCounter,
 setRewardPoints,
}) => {
  // controls form transaction input fields
 const addInput = () => {
  setInputCounter(inputCounter + 1);
 };
 const deleteInput = (e) => {
  e.target.parentNode.remove();
 };

 const calculatePoints = (e) => {
  // grabs input values, calulates points, updates reward points
  e.preventDefault();
  let dollarsArray = [];
  const grabInputs = document.querySelectorAll("input");
  grabInputs.forEach((input) => {
   let amount = Number(input.value);
   if (amount !== "" && amount > 50) dollarsArray.push(Math.floor(amount));
  });
  const totalPoints = pointsCalculator(dollarsArray);
  setRewardPoints(totalPoints);
 };
 const pointsCalculator = (points) => {
  // takes in points array, returns caluclated points
  let totalPoints = 0;
  points.forEach((value) => {
   if (value > 100) {
    let difference = value - 100;
    totalPoints += difference * 2 + 50;
   } else {
    totalPoints += value - 50;
   }
  });
  return totalPoints;
 };

  // generate random data for each input fields
 const populateInputs = () => {
  const grabInputs = document.querySelectorAll("input");
  grabInputs.forEach((input) => {
   input.value = generateRandomNumber();
  });
 };
 const generateRandomNumber = () => {
  const randomNumber = Math.random() * (300 - 40) + 40;
  const roundedNumber = Math.round(randomNumber * 100) / 100;
  return roundedNumber;
 };

 return (
  <>
   <form onSubmit={calculatePoints}>
    <div className="teee">
     {Array.from(Array(inputCounter)).map((c, index) => {
      return (
       <div key={index} className="transaction-inputs">
        <p>total: </p>
        <input type="number" step="0.01" />
        <button type="button" onClick={deleteInput}>
         delete
        </button>
       </div>
      );
     })}
    </div>
    
    <div className="transaction-btns">
     <button type="button" onClick={addInput}>Add transaction</button>
     <button type="button" onClick={populateInputs}>Test data</button>
     <button type="submit">Calculate points</button>
    </div>
   </form>
  </>
 );
};

export default TransactionForm;
