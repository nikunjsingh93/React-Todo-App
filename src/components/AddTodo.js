import React, { Component } from 'react'
import fire from './fire';


export class AddTodo extends Component {
 state = {
     title: ''
 }

 onChange = (e) => this.setState({ [e.target.name]: e.target.value});

 onSubmit = (e) => {
     e.preventDefault();
     this.props.addTodo(this.state.title);


     const userUid = fire.auth().currentUser.uid;

     fire.database().ref('UsersList/').child(userUid).child('AllTasks/').push({
      Task: this.state.title,
      
     // Completed: false
     }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })


     this.setState({ title: '' })
 }


  render() {
    return (
      <form style={{ display: 'flex'}} onSubmit={this.onSubmit}>
      
          <input  placeholder=' Add Todo...'
           name='title' style={{ flex: '10' }} 
           value={this.state.title} 
           onChange={this.onChange}
           />

           <input type='submit' value='Add It!'
           className='btn btn-primary' style={{ flex: '1' }}  />
      </form>
    )
  }
}

export default AddTodo
