const todos = [
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ];
  
  function getValues(key) {
    if (key === 'id') { 
        return todos.map(todo => todo.id);
    } else if (key === 'content') {
        return todos.map(todo => todo.content);
    } else if (key === 'completed'){
        return todos.map(todo => todo.completed);
    }
  }

  
  
  console.log(getValues('id')); 
  console.log(getValues('content')); 
  console.log(getValues('completed')); 