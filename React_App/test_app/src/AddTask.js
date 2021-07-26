import React from 'react'

class AddTask extends React.Component {


    state = {
        Task : {name : null, id : null}
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.NewTask(this.state.Task)
    }

    handleChange = (e) => {
        var id = Math.random()
        this.setState({
            Task : { name : e.target.value, id : id}
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Task</label>
                    <input type="text" id="Task" onChange={this.handleChange}></input>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}

export default AddTask