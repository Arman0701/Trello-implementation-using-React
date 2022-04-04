export default function reducer(state, action){
    switch(action.type){
        case 'load':
            return [action.payload];
        case 'addBoard':
            return [...state, action.payload];
        
        default:
            return state;
    }
}