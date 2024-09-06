export const RENAME = 'RENAME';
export const UPDATE_AGE = 'UPDATE_AGE';

export const initialState = {
    id: 0,
    name: '',
    age: 0,
};

export const reducer = function (state = {}, action) {
    switch (action.type) {
        case RENAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        case UPDATE_AGE: {
            return {
                ...state,
                age: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
