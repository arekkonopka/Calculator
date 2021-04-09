import { useState, useEffect } from 'react'

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState([''])
  const [secondNumber, setSecondNumber] = useState([''])
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('')


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const action = ["+", "-", "*", "/",]

  const onClickNumberHandler = (number) => {
    if (!operator) {
      setFirstNumber((prev) => [...prev, number.target.textContent])
    }
    else {
      setSecondNumber((prev) => [...prev, number.target.textContent])
    }
  }

  const onClickActionHandler = (act) => {
    setOperator(act.target.textContent)
  }

  const onClickResultHandler = () => {
    switch (operator) {
      case "+":
        setResult(Number(firstNumber.join('')) + Number(secondNumber.join('')))
        break;
      case "-":
        setResult(Number(firstNumber.join('')) - Number(secondNumber.join('')))
        break;
      case "*":
        setResult(Number(firstNumber.join('')) * Number(secondNumber.join('')))
        break;
      case "/":
        setResult(Number(firstNumber.join('')) / Number(secondNumber.join('')))
        break;
    }
  }


  const onClickClear = () => {
    if (Number(firstNumber.join('')) && operator && Number(secondNumber.join(''))) {
      secondNumber.splice(secondNumber.length - 1, 1)
      setSecondNumber(prev => [...prev])


    } else if (firstNumber.join('') && operator) {
      setOperator('')

    } else {
      firstNumber.splice(firstNumber.length - 1, 1)
      setFirstNumber(prev => [...prev])

    }
  }
  const onClickReset = () => {
    setFirstNumber([''])
    setSecondNumber([''])
    setOperator('')
    setResult([''])
  }



  return (
    <div className='calculator'>
      <div className="operation-wrap">
        <div className="operation">
          <h4>Operation:</h4>
          <p>{`${firstNumber.join("")}${operator}${secondNumber.join('')}`}</p>
        </div>
        <div className='result'>
          <h4>Score:</h4>
          <p>{(result)}</p>
        </div>
      </div>
      <div className="keybord">
        <div className="numbers">
          {numbers.map((number, key) => <div key={key} className="number" onClick={num => onClickNumberHandler(num)}>{number}</div>)}
        </div>
        <div className='actions'>
          {action.map((action, key) => <div key={key} className='action' onClick
            ={act => onClickActionHandler(act)}>{action}</div>)}
          <div className="equal" onClick={onClickResultHandler}>=</div>
        </div>
      </div>
      <div className="reset-box">
        <div className="clear" onClick={onClickClear}>C</div>
        <div className="reset" onClick={onClickReset}>Reset</div>
      </div>
    </div>
  )
}

export default Calculator
