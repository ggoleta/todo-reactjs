import React, { useState, FormEvent } from 'react';

import { Title, Form } from './styles';

import Todo from '../../components/Todo';

const Home: React.FC = () => {
  const [newTask, setNewTask] = useState('');
  const [todos, setTodos] = useState(['Nova Tarefa 1']);

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    if (!newTask || newTask.trim() === '') return;

    setTodos([...todos, newTask]);
    setNewTask('');
  }

  function handleDelete(task: string): void {
    setTodos(todos.filter((todo) => todo !== task));
  }

  return (
    <>
      <Title>ToDo - ReactJS</Title>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Digite aqui a tarefa"
          value={newTask}
          onChange={(e): void => setNewTask(e.target.value)}
        />
        <button type="submit">Cadastrar tarefa</button>
      </Form>

      {todos.map((item) => (
        <Todo key={item} task={item} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default Home;
