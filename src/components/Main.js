import React, { Component } from 'react';
import fire from './fire';
import Header from './layout/Header';
import Todos from './Todos';
import AddTodo from './AddTodo';

var tile;
var UnId;
var Comp;


class Main extends Component {

    state = {
        todos: [
        //   {
        //     id: '1',
        //     title: 'Get Milk!',
        //     completed: false
        //   }
        ]
      }
    
      // Toggle complete method
    //   markComplete = (id) => {
    //     this.setState({
    //       todos: this.state.todos.map(todo => {
    //         if (todo.id === id) {
    //           todo.completed = !todo.completed
    //         }
    //         return todo;
    //       })
    //     });
    //   }


    
  componentDidMount() {

    let my = this;

    const userUid = fire.auth().currentUser.uid;

    this.setState({ todos: []})

    
   fire.database().ref('UsersList/').child(userUid).child('AllTasks/').on('value', function (snapshot) {
   
    snapshot.forEach(function(snapshot1) {
     console.log("Unique Key: "+snapshot1.key); 
     snapshot1.forEach(function(snapshot2) {
       
       
       //titleArr.push(snapshot2.val());
       UnId = snapshot1.key;

       if(snapshot2.key === 'Task'){

        tile = snapshot2.val();
        console.log("Task: "+snapshot2.val());

       }

       if(snapshot2.key === 'Completed'){

        Comp = snapshot2.val();

        console.log("Completed: "+snapshot2.val());

       }

       
       });

       var newTodo1 = {
        title: tile,
        id: UnId,
        completed: Comp
      }
    
     my.setState({ todos: [...my.state.todos, newTodo1] })

       
     });


   });

  }
    
      // Delete Item
      delTodo = (id) => {

      //this.setState({ todos: []})

        const userUid = fire.auth().currentUser.uid;

        fire.database().ref('UsersList/').child(userUid).child('AllTasks/').on('value', function (snapshot) {
   
            snapshot.forEach(function(snapshot1) {
             console.log("Unique Key: "+snapshot1.key); 
             snapshot1.forEach(function(snapshot2) {
               console.log("Task: "+snapshot2.val());
               
               //titleArr.push(snapshot2.val());
               UnId = snapshot1.key;
        
               tile = snapshot2.val();
      
               if(UnId === id) {
      
                fire.database().ref('UsersList/').child(userUid).child('AllTasks/').child(UnId).remove();
                
          
               }
               
      
               
               });
             });
        
        
           });

          this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
           
      }
    
      // Add todo
    
      addTodo = (title) => {
        this.setState({ todos: []})

        // const newTodo = {
        //   title: title,
        //   id: '5',
        //   completed: false
        // }
    
        // this.setState({ todos: [...this.state.todos, newTodo] })
      }



    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <div className="container2">
                
                <button className="btn" onClick={this.logout}>Logout</button>
                </div>
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} markComplete={this.markComplete}
                        delTodo={this.delTodo} />
                </div>
              
            </div>
        );

    }

}



export default Main;