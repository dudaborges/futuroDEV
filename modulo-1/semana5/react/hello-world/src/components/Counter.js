import {useState, useRef, useEffect} from "react"

const Counter = () => {
    // inicialização
    const [count, setCout] = useState(0)
    const [show, setShow] = useState(true)
    const numRef = useRef()

    // montagem
    useEffect(() => {
        console.log('Componente está sendo montado!')
    }, [])
    // sem dependecia roda uma vez

    // atualização
    useEffect(() => {
        console.log('Componente está sendo atualizado!')
        numRef.current.style.color = randomColor()
    }, [count])
    // com dependencia roda conforme a atualização do estado dele

    // desmontagem
    useEffect(() => {
        return () => {
          console.log('Component está sendo desmontado!');
        }
      })

    // count recebe um valor, e o setcut é a função que altera o valor
    const handleIncrease = () => {
        setCout (count + 1)
    }

    const handleDecrease = () => {
        setCout (count - 1)
    }

    const randomColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'cyan', 'black']
        return colors[Math.trunc(Math.random()*6) + 1]
    }

    return (
        <div>
          {show && <div>
            <p ref={numRef}>{count}</p>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
          </div>}
          <button onClick={() => setShow(!show)}>{show ? 'Esconder' : 'Mostrar'}</button>
        </div>
      )
}

export default Counter