import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';
import {updateTask, deleteTask} from '../actions';
import styles from './TasksList.module.scss'

const TasksList = (props) => {
    const {remove, tasks, update} = props;
    const taskRemove = useCallback(
        ({
             target: {
                 dataset: {taskIndex},
             },
             target,
         }) => {
            console.dir(target);
            remove(taskIndex);
        },
        [],
    );

    const taskUpdate = useCallback(
        ({
             target: {
                 dataset: {taskIndex},
                 checked,
             },
         }) => {
            update(Number(taskIndex), {
                isDone: checked,
            });
        },
        [],
    );

    return (
        <ul className={styles.list}>
            {tasks.map((t, index) => (
                <li key={t.id}>
                    <TaskItem
                        {...t}
                        index={index}
                        remove={taskRemove}
                        update={taskUpdate}
                    />
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = ({todo}) => todo;
const mapDispatchToProps = dispatch => ({
    remove: index => dispatch(deleteTask(index)),
    update: (index, values) => dispatch(updateTask(index, values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
