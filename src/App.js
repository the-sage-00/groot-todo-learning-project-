import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import FilterBar from './components/FilterBar';
import ThemeToggle from './components/ThemeToggle';
import Stats from './components/Stats';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDark, setIsDark] = useState(false);

  // Theme effect
  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  // Add new task
  const addTask = (text, tag) => {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
      tag,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    let matchesFilter = true;
    
    if (filter === 'all') {
      matchesFilter = true;
    } else if (filter === 'pending') {
      matchesFilter = !task.completed;
    } else if (filter === 'completed') {
      matchesFilter = task.completed;
    } else {
      matchesFilter = task.tag === filter;
    }
    
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Get unique tags
  const tags = [...new Set(tasks.map(task => task.tag).filter(Boolean))];

  // Calculate stats
  const stats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    pending: tasks.filter(task => !task.completed).length
  };

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.header 
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="header-content">
            <h1 className="title">
              <span className="groot-icon">🌱</span>
              Groot Todo
            </h1>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
          </div>
          <p className="subtitle">Organize your tasks with style</p>
        </motion.header>

        {/* Task Input */}
        <TaskInput onAddTask={addTask} tags={tags} />

        {/* Filter Bar */}
        <FilterBar 
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          tags={tags}
        />

        {/* Stats */}
        <Stats stats={stats} />

        {/* Task List */}
        <motion.div className="task-list">
          <AnimatePresence>
            {filteredTasks.length === 0 ? (
              <motion.div 
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="empty-icon">📝</div>
                <p>No tasks found. Add your first task above!</p>
              </motion.div>
            ) : (
              filteredTasks.map((task, index) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                  index={index}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>Built with ❤️ by <strong>Rishi Kataria</strong></p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/rishi-kataria-14998331b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://www.instagram.com/_the_sage_00?igsh=MXFibnl4M2JkbTFwYQ==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default App;
