import React from 'react';

class EditTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editItem: this.props.editItem
        }
    }

    handleEditTask = () => {
        this.props.doEdit(this.state.editItem.id, this.state.editItem.name)
        this.props.closeForm()
    }

    changedName = (e) => {
        this.setState({
            editItem: {id: this.props.editItem.id, name: e.target.value}
        })
    }

    render() {
        return(
            <React.Fragment>
                <div className='container'>
                    <h2>Edit task</h2>
                    <div className= 'form-group'>
                        <label>Name of task</label>
                        <input 
                            type='text' 
                            className= 'form-control' 
                            placeholder = 'Enter name of task' 
                            defaultValue = {this.state.editItem.name}
                            onChange= {this.changedName}
                        />
                    </div>
                    <button type="submit" style={{ marginRight: 5 + 'px' }} className="btn btn-success" onClick={this.handleEditTask}>Edit</button>
                    <button type="button" className="btn btn-secondary" onClick={this.props.closeForm}>Back</button>
                </div>
            </React.Fragment>
        );
    }
}

export default EditTask;