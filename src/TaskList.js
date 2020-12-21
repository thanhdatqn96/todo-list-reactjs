import React from 'react';
import TodoList from './TodoList';
import AddTask from './AddTask';
import EditTask from './EditTask';

class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks : ['Task 1','Task 2'],
            showAddForm: false,
            showEditForm: false,
            editTask: {id: -1, name: ''}
        }
    }

    setStatus = () => {
        this.setState({
            showAddForm: true,
            showEditForm: false
        })
    }

    closeForm = () => {
        this.setState({
            showAddForm: false,
            showEditForm: false
        })
    }

    addTask = (name) => {
        this.state.tasks.push(name)
        this.forceUpdate()
    }

    openEditForm = () => {
        this.setState({
            showEditForm: true
        })
    }

    editTask = (name,index) => {
        this.setState({editTask: {id: index, name: name}})
    }

    doEdit = (id, name) => {
        this.state.tasks[id] = name
        this.forceUpdate()
    }

    deleteTask = (name) => {
        const filteredTask = this.state.tasks.filter(task => {
            return task != name
        })
        this.setState({
            tasks : filteredTask
        })
    }

    render(){
        if(this.state.showAddForm == true){
            return (
                <AddTask addTask={this.addTask} closeForm={this.closeForm}/>
            );

        } else if(this.state.showEditForm == true){
            return (
                <EditTask doEdit={this.doEdit}  closeForm={this.closeForm} editItem={this.state.editTask}/>
            );
        } else{
            return(
                <div className='container'>
                    <button type="button" className="btn btn-info" onClick={this.setStatus} >Add Task</button>
                    <h2>List Task</h2>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Name of task</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(function(name,index) {
                                    return (<TodoList name= {name} 
                                        openEditForm = {this.openEditForm}
                                        getIndexTask = {index}
                                        editTask = {this.editTask}
                                        deleteTask = {this.deleteTask}
                                    />);
                                }.bind(this))
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
        
    }
}

export default TaskList;