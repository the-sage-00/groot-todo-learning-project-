import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiTrash2, FiTag } from 'react-icons/fi';

const TaskItem = ({ task, onToggle, onDelete, index }) => {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(task.id);
  };

  return (
    <motion.div
      className={`task-item ${task.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50, height: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="task-content">
        <motion.button
          className={`checkbox ${task.completed ? 'checked' : ''}`}
          onClick={() => onToggle(task.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {task.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <FiCheck />
            </motion.div>
          )}
        </motion.button>

        <div className="task-text-container">
          <motion.p 
            className={`task-text ${task.completed ? 'completed' : ''}`}
            initial={{ textDecoration: 'none' }}
            animate={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.6 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            {task.text}
          </motion.p>
          
          {task.tag && (
            <motion.div 
              className="task-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <FiTag size={12} />
              <span>{task.tag}</span>
            </motion.div>
          )}
        </div>

        <motion.button
          className="delete-btn"
          onClick={handleDelete}
          whileHover={{ scale: 1.1, color: '#ff4757' }}
          whileTap={{ scale: 0.9 }}
          title="Delete task"
        >
          <FiTrash2 />
        </motion.button>
      </div>

      <motion.div
        className="task-progress"
        initial={{ width: 0 }}
        animate={{ width: task.completed ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TaskItem; 