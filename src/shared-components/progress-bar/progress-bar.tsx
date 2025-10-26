import React from 'react';
import './progress-bar.scss';

interface ProgressBarProps {
  value: number | undefined;
  maxValue: number;
  type?: 'success' | 'warning' | 'danger' | 'info';
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value = 0, maxValue, type = 'info' }) => {
  const safeValue = typeof value === 'number' ? value : 0;
  const percentage = Math.min((safeValue / maxValue) * 100, 100);
  
  return (
    <div className="progress-bar">
      <div 
        className={`progress-fill ${type}`}
        style={{ width: `${percentage}%` }}
      >
        <span className="progress-text">
          {typeof value === 'number' ? value.toLocaleString() : '0'}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;