import React, { useState, useEffect } from 'react'
import * as styles from './math.module.css'

const QuadraticSolver = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  const [currentInput, setCurrentInput] = useState('a')
  const [result, setResult] = useState(null)

  const solveQuadratic = (a, b, c) => {
    const discriminant = b * b - 4 * a * c
    if (discriminant > 0) return 2
    if (discriminant === 0) return 1
    return 0
  }

  useEffect(() => {
    setResult(solveQuadratic(a, b, c))
  }, [a, b, c])

  const handleNumberClick = (number) => {
    const setValue = (prev) => {
      const absValue = Math.abs(prev)
      const newAbsValue = parseInt(`${absValue}${number}`)
      return prev < 0 ? -newAbsValue : newAbsValue
    }

    switch (currentInput) {
      case 'a':
        setA(setValue)
        break
      case 'b':
        setB(setValue)
        break
      case 'c':
        setC(setValue)
        break
    }
  }

  const handleClear = () => {
    switch (currentInput) {
      case 'a':
        setA(0)
        break
      case 'b':
        setB(0)
        break
      case 'c':
        setC(0)
        break
    }
  }

  const handleToggleSign = () => {
    switch (currentInput) {
      case 'a':
        setA(prev => -prev)
        break
      case 'b':
        setB(prev => -prev)
        break
      case 'c':
        setC(prev => -prev)
        break
    }
  }

  const renderNumberButtons = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
      <button key={number} onClick={() => handleNumberClick(number)} className={styles.numberButton}>
        {number}
      </button>
    ))
  }

  const formatTerm = (coefficient, variable) => {
    if (coefficient === 0) return '';
    const absCoefficient = Math.abs(coefficient);
    const formattedCoefficient = absCoefficient === 1 ? '' : absCoefficient;
    return `${coefficient > 0 ? '+' : '-'} ${formattedCoefficient}${variable}`;
  }

  const formatEquation = (a, b, c) => {
    const xSquaredTerm = formatTerm(a, 'x²');
    const xTerm = formatTerm(b, 'x');
    const constantTerm = c !== 0 ? `${c > 0 ? '+' : '-'} ${Math.abs(c)}` : '';

    let equation = xSquaredTerm;
    if (b !== 0 || c !== 0) equation += ' ' + xTerm;
    if (c !== 0) equation += ' ' + constantTerm;

    // 最初の項が正の場合、先頭の'+' を削除
    equation = equation.trim().replace(/^\+\s/, '');

    return equation + ' = 0';
  }

  return (
    <section className={styles.section}>
        <div className={styles.container}>
        <h2>判別式でんたく</h2>
        <div className={styles.equation}>
            {formatEquation(a, b, c)}
        </div>
        <div className={styles.inputArea}>
            <div className={styles.variableButtons}>
            <button onClick={() => setCurrentInput('a')} className={`${styles.variableButton} ${currentInput === 'a' ? styles.active : ''}`}>a</button>
            <button onClick={() => setCurrentInput('b')} className={`${styles.variableButton} ${currentInput === 'b' ? styles.active : ''}`}>b</button>
            <button onClick={() => setCurrentInput('c')} className={`${styles.variableButton} ${currentInput === 'c' ? styles.active : ''}`}>c</button>
            </div>
            <div className={styles.numberPad}>
            {renderNumberButtons()}
            <button onClick={handleToggleSign} className={styles.signButton}>±</button>
            <button onClick={handleClear} className={styles.clearButton}>C</button>
            </div>
        </div>
        <p className={styles.currentInput}>現在の入力: {currentInput}</p>
        {result !== null && (
            <p className={styles.result}>
            実数解の個数: {result}
            </p>
        )}
        </div>
    </section>
  )
}

export default QuadraticSolver
