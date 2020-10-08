import ACTION_TYPE from '../actions/types';

const initialState = {
    tasks: [],
};

let serial = 0;

const todoReducer = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_TYPE.CREATE_TASK: {
            const {tasks} = state;
            const {values} = action;
            const newTasks = [
                ...tasks,
                {
                    ...values,
                    id: ++serial,
                },
            ];

            return {
                ...state,
                tasks: newTasks,
            };
        }

        case ACTION_TYPE.UPDATE_TASK: {
            const {tasks} = state;
            const {taskIndex, values} = action;

            const newTasks = [...tasks];
            newTasks[taskIndex] = {
                ...newTasks[taskIndex],
                ...values,
            };

            return {
                ...state,
                tasks: newTasks,
            };
        }

        case ACTION_TYPE.DELETE_TASK: {
            const {tasks} = state;
            const {taskIndex} = action;

            const newTasks = [...tasks];
            newTasks.splice(taskIndex, 1);
            return {
                ...state,
                tasks: newTasks,
            };
        }
        default:
            return state;
    }
};

export default todoReducer;