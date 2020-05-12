import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

import { Container } from './styles';

interface TodoDto {
  task: string;
  onDelete: Function;
}

const Todo: React.FC<TodoDto> = ({ task, onDelete }: TodoDto) => {
  return (
    <Container>
      <strong>{task}</strong>
      <button onClick={(): void => onDelete(task)} type="button">
        <AiFillDelete size={18} color="#e63946" />
      </button>
    </Container>
  );
};

export default Todo;
