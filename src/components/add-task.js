import React, { useState } from "react";
import TaskDataService from "../services/task.service";

const AddTask = () => {
  const initialtaskstate = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [task, setTask] = useState(initialtaskstate);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const saveTask = () => {
    var data = {
      title: task.title,
      description: task.description
    };

    TaskDataService.create(data)
      .then(response => {
        setTask({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTask = () => {
    setTask(initialtaskstate);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTask}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={task.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={task.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          
          <div className="form-group">
  <label htmlFor="role">AssignTo</label>
  <select className="form-control" id="role" name="role">
  {/* {roles.map(user => (
    <option key={user.id} value={user.name}>{user.name}</option>
  ))} */}
    
  </select>
</div>

          <button onClick={saveTask} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTask;
