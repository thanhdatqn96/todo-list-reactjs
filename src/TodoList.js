import React from 'react';

class TodoList extends React.Component {
    handleEdit = () => {
        this.props.openEditForm()
        this.props.editTask(this.props.name, this.props.getIndexTask)
    }

    handleDelete = () => {
        this.props.deleteTask(this.props.name)
    }
    render(){
        return (<tr>
            <td>{this.props.name}</td>
            <td>
                <button type="button" className="btn btn-primary" onClick={this.handleEdit}><i className="far fa-edit"></i>Edit</button>
            </td>
            <td>
                <button type="button" className="btn btn-danger" onClick={this.handleDelete}><i className="fa fa-trash"></i>Delete</button>
            </td>
        </tr>
        );
    }
}

export default TodoList;