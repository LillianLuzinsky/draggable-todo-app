import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render(){
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <TaskList>{this.props.tasks.map(task => <Task key={task.id} task={task}/>)}</TaskList>
      </Container>
    );
  }
}