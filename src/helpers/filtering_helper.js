export default function filter(arr, type, ...args) {
    let initValue = [];
    args.forEach((item) => {
        initValue = [...initValue, [(item).toString(), []]]
    });
    return arr.reduce((prev, current) => {
        let x = current[type];
        prev[x] = prev[x].concat(current);
        return prev;
    }, Object.fromEntries(new Map(initValue)));
}