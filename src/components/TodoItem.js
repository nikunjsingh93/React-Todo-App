import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render() {
      const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
         <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
         {' '}    
        { title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired

}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    float: 'right',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: '7px 9px'

}

export default TodoItem