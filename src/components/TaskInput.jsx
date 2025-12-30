import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiTag } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';

const TaskInput = ({ onAddTask, tags }) => {
  const [text, setText] = useState('');
  const [tag, setTag] = useState('');
  const [showTagInput, setShowTagInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text.trim(), tag.trim() || null);
      setText('');
      setTag('');
      setShowTagInput(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <motion.div 
      className="task-input-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <form onSubmit={handleSubmit} className="task-input-form">
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="task-input"
            autoFocus
          />
          
          <motion.button
            type="button"
            className="tag-toggle-btn"
            onClick={() => setShowTagInput(!showTagInput)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Add tag"
          >
            <FiTag />
          </motion.button>

          <motion.button
            type="submit"
            className="add-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!text.trim()}
          >
            <FiPlus />
          </motion.button>
        </div>

        <AnimatePresence>
          {showTagInput && (
            <motion.div
              className="tag-input-container"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Add a tag (optional)"
                className="tag-input"
                onKeyPress={handleKeyPress}
              />
              
              {tags.length > 0 && (
                <div className="existing-tags">
                  <span>Existing tags:</span>
                  <div className="tag-suggestions">
                    {tags.slice(0, 5).map((existingTag) => (
                      <motion.button
                        key={existingTag}
                        type="button"
                        className="tag-suggestion"
                        onClick={() => setTag(existingTag)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {existingTag}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default TaskInput; 