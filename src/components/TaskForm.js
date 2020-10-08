import React from 'react';
import {connect} from 'react-redux';
import {createTask} from '../actions';
import {useFormik} from 'formik';
import styles from './Task.module.scss'

const TaskForm = (props) => {
    const {dispatch} = props
    const formik = useFormik({
        initialValues: {
            isDone: false,
            body: '',
        },
        onSubmit: values => {
            dispatch(createTask(values));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <input name="body"
                   className={styles.input}
                   onChange={formik.handleChange}
                   placeholder="task value"/>
            <button className={styles.button} type="submit">add task</button>
            <button className={styles.button} type="reset">reset</button>
        </form>
    );
};

export default connect()(TaskForm);