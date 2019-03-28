import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
type FormElem = React.FormEvent<HTMLFormElement>
interface ITodo {
  text: string
  complete: boolean
}


export default function Otro1(): JSX.Element {

    /*const sum=(a:number,b:number):number=>a+b*/
    const [value, setValue] = useState<String>('')
    const [todos, setTodos] = useState<ITodo[]>([])
    const handleSubmit = (e: FormElem): void => {
      e.preventDefault()
      addTodo(value)
      setValue('')
    }
  
    const addTodo = (text: string) => {
      const newTodos: ITodo = [...todos, { text, complete: false }]
      setTodos(newTodos)
    }
    const completeTodo = (index: number): void => {
      const newTodos: ITodo = todos
      newTodos[index].complete = !newTodos[index].complete
      setTodos(newTodos)
    }
    const removeTodo = (index: number): void => {
      const newTodos: ITodo[] = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
    }
    console.log(todos)
    return (
      <Fragment>
       
        <h1>Todo List
              {/*Hola {sum(15,15)}*/}
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value}
            onChange={e => setValue(e.target.value)} required />
          <button type='submit'> Add Todo</button>
        </form>
        <section>
          {todos.map((todos: ITodo, index: number) => {
            return (<Fragment>
              <div key={index} style={{ textDecoration: todos.complete ? 'line-through' : '' }}>{todos.text}</div>
              <button type="button" onClick={() => completeTodo(index)}>
                {' '}
                {todos.complete ? 'Incomplete' : 'Complete'}{' '}
              </button>
              <button type='button' onClick={() => removeTodo(index)}>&times;</button>
            </Fragment>)
          })}
        </section>
      </Fragment>
    )
  }
