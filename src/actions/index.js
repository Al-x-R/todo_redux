import ACTION_TYPE from './types';

export const createTask = (values) => ({
    type: ACTION_TYPE.CREATE_TASK,
    values,
});

export const updateTask = (taskIndex, values) => ({
    type: ACTION_TYPE.UPDATE_TASK,
    taskIndex,
    values,
});

export const deleteTask = (taskIndex) => ({
    type: ACTION_TYPE.DELETE_TASK,
    taskIndex,
});
