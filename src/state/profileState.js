export default function reducer(state, action) {
    switch(action.type){
        case 'load':
            return [action.payload];
    }
}