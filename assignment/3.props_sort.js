const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
];

function sortBy(key) {
    copiedTodos = [...todos];
    return copiedTodos.sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
}

console.log(sortBy('id'));
console.log(sortBy('content'));
console.log(sortBy('completed'));
