import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Games from './Games'
import Singer from './singer'
import BookStore from './bookStore'


function App() {

  const games = ['football', 'cricket', 'hockey', 'Basket ball', 'Golf']

  const books = [
    {id: 1, name: 'Physics', price: 120},
    {id: 2, name: 'Math', price: 170},
    {id: 3, name: 'Chemistry', price: 190},
    {id: 4, name: 'Biology', price: 140}
  ]
  const singers = [
    { name: 'Dr. Mahfuzur Rahman', age: 68 },
    { name: 'Eva Rahman', age: 38 },
    { name: 'Shuvro Dev', age: 58 },
    { name: 'Pritom', age: 34 },
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer name={singer.name} age={singer.age}></Singer>)
      }

      <Games games='football'></Games>
      {games.map(play => <Games games={play}></Games>)}



      {/* <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='Try to import' isDone={true}></Todo>
      <Todo task='Try JSX' isDone={false}></Todo> */}

      {/* <Person age='23' money='300'></Person>
      <Person age='33' money='40000'></Person>
      <Person age='30' money='60000'></Person>
      <Student grade='11' roll='45'></Student> */}
    </>
  )
}

function Person(props) {
  const age = props.age
  const money = props.money
  return <h3>I am a Person with age: {age} and he have {money}tk</h3>
}


function Student({ grade, roll }) {
  return (<div>
    <h3>Karim</h3>
    <p>I am a student</p>
    <p>I read in class: {grade}</p>
    <p>My roll in the class is: {roll}</p>
  </div>
  )
}
export default App
