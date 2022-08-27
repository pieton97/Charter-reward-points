import { useState } from "react";
import React from 'react'
import '../styles/home.css'
import TransactionForm from "../components/TransactionForm";

function Home(props) {
  const [inputCounter, setInputCounter] = useState(5);

  return (
    <div className='home'>
      <h2>Enter your transactions amount to calculate your reward points</h2>

      <TransactionForm 
        inputCounter={inputCounter}
        setInputCounter={setInputCounter}
        setRewardPoints={props.setRewardPoints}
      />

      <p>Your total Charter Rewards Points: {props.rewardPoints}</p>
    </div>
  )
}

export default Home
