
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Board></Board>
      </div>
    </>
  )
}


// Board 
function Board() {

  const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [player, setPlayer] = useState(1)

  useEffect(() => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let c of combination) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        setTimeout(() => {
          alert('player 1 win')
        }, 1000)
      }
      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        setTimeout(() => {
          alert('player 2 win')
        }, 1000);
      }
    }
  }, [marks])


  const changeMark = (i) => {
    const m = [...marks]
    if (m[i] === 0) {
      m[i] = player
      setMarks(m)
      setPlayer(player == 1 ? 2 : 1)
    } else {
      alert('plese click on empty block')
    }
  }


  return (
    <div className="Board ">
      <div>
        <Block mark={marks[0]} postion={0} changeMark={changeMark}></Block>
        <Block mark={marks[1]} postion={1} changeMark={changeMark}></Block>
        <Block mark={marks[2]} postion={2} changeMark={changeMark}></Block>
      </div>
      <div>
        <Block mark={marks[3]} postion={3} changeMark={changeMark}></Block>
        <Block mark={marks[4]} postion={4} changeMark={changeMark}></Block>
        <Block mark={marks[5]} postion={4} changeMark={changeMark}></Block>
      </div>
      <div>
        <Block mark={marks[6]} postion={5} changeMark={changeMark}></Block>
        <Block mark={marks[7]} postion={6} changeMark={changeMark}></Block>
        <Block mark={marks[8]} postion={7} changeMark={changeMark}></Block>
      </div>
    </div>
  )
}

// Block
function Block({ mark, changeMark, postion }) {
  return (
    <div className={`Block mark${mark}`} onClick={event => changeMark(postion)}>

    </div >
  )


}

export default App
