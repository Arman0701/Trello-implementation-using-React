export default function capitalize(value) {
    return value.split(' ').map(item => {
        return item[0].toUpperCase() + item.slice(1).toLowerCase();
    }).join(' ');
}