import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  
  const part1 = 'Fundamentals of React';
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course = 'Half Stack application development'></Header>
      <Content part1={part1} part2='Using props to pass data' part3='State of a component' exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Content>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}></Total>
    </div>
  )
}

export default App