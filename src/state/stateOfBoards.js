export default function reducer(state, action){
    switch(action.type){
        case 'load':
            return [action.value];
        case 'addBoard':
            return [...state, action.value];
    }
}