import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy groceries', completed: false },
    { text: 'Walk the dog', completed: false },
    { text: 'Read a book', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue.trim(), completed: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h1 style={styles.title}>✨ Todo List ✨</h1>

        <div style={styles.todoWrapper}>
          <form onSubmit={handleAddTodo}>
            <input 
              type="text"
              placeholder="Add new todo..."
              style={styles.todoInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>

          <ul style={styles.todoList}>
            {todos.map((todo, index) => (
              <li 
                key={index}
                style={styles.todoItem}
                onClick={() => toggleTodo(index)}
              >
                <div style={styles.checkbox}>
                  <div style={{
                    ...styles.checkmark,
                    opacity: todo.completed ? 1 : 0
                  }}>✓</div>
                </div>
                <span style={{
                  ...styles.todoText,
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : '#000'
                }}>
                  {todo.text}
                </span>
                <button 
                  style={styles.deleteButton} 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTodo(index);
                  }}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '20px'
  },
  container: {
    padding: '20px',
  },
  title: {
    color: '#2c3e50',
    fontSize: '2.5em',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  },
  todoWrapper: {
    maxWidth: '500px',
    margin: '20px auto',
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
  },
  todoInput: {
    width: '90%',
    padding: '12px',
    marginBottom: '20px',
    border: '2px solid #e8e8e8',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
    outline: 'none',
    '&:focus': {
      borderColor: '#3498db'
    }
  },
  todoList: {
    listStyle: 'none',
    padding: 0,
  },
  todoItem: {
    padding: '12px 15px',
    backgroundColor: '#f8f9fa',
    marginBottom: '8px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '1px solid transparent',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderColor: '#e0e0e0'
    }
  },
  checkbox: {
    width: '20px',
    height: '20px',
    border: '2px solid #3498db',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px'
  },
  checkmark: {
    color: '#3498db',
    fontSize: '14px',
    fontWeight: 'bold',
    transition: 'opacity 0.2s ease'
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    color: '#ff6b6b',
    cursor: 'pointer',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    opacity: 0.7,
    transition: 'all 0.2s ease',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.1)'
    }
  },
  todoText: {
    flex: 1,
    textAlign: 'left',
    padding: '0 10px',
    fontSize: '16px',
    transition: 'all 0.2s ease'
  }
};

export default App;
