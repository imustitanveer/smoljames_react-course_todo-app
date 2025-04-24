import { Header } from './Header'
import { Tabs } from './Tabs'
import { TodoList } from './TodoList'
import { TodoInput } from './TodoInput'
import { useState, useEffect } from 'react'

function App() {
  // const todos = [
    // { input: 'Hello! Add your first todo!', complete: true },
    // { input: 'Get the groceries!', complete: false },
    // { input: 'Learn how to web design', complete: false },
    // { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodos = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleCompleteTodo(index) {
    let newTodos = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodos[index] = completedTodo
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleDeleteTodo(index) {
    let newTodos = todos.filter((todo, todoIndex) => {return todoIndex !== index})
    setTodos(newTodos)
    handleSaveData(newTodos)
  }

  function handleSaveData (currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
      let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
  }, [])

  return (
    <>
        <Header todos={todos}/>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
        <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos}/>
        <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
