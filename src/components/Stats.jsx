import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiList } from 'react-icons/fi';

const Stats = ({ stats }) => {
  const statItems = [
    {
      icon: <FiList />,
      label: 'Total',
      value: stats.total,
      color: '#4834d4'
    },
    {
      icon: <FiClock />,
      label: 'Pending',
      value: stats.pending,
      color: '#f0932b'
    },
    {
      icon: <FiCheckCircle />,
      label: 'Completed',
      value: stats.completed,
      color: '#6ab04c'
    }
  ];

  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <motion.div 
      className="stats-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="stats-grid">
        {statItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="stat-content">
              <motion.div
                className="stat-value"
                initial={{ number: 0 }}
                animate={{ number: item.value }}
                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
              >
                {Math.round(item.value)}
              </motion.div>
              <div className="stat-label">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {stats.total > 0 && (
        <motion.div 
          className="completion-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="completion-label">
            <span>Progress</span>
            <span>{completionRate}%</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${completionRate}%` }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Stats; 