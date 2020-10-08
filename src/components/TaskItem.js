import React from 'react';

const TaskItem = (props) => {
    const {index, isDone, update, remove, body} = props;
    return (
        <div>
            <strong>{body}</strong>
            <input data-task-index={index}
                   type="checkbox"
                   checked={isDone}
                   onChange={update}
            />
            <button data-task-index={index} onClick={remove}>
                delete
            </button>
        </div>
    );
};

export default TaskItem;


