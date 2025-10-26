import React from 'react';
import './content-card.scss';
import ProgressBar from '../progress-bar/progress-bar';

interface ContentCardProps {
  name: string;
  description: string;
  genre: string;
  provider: string;
  videoImage: string;
  assetImage: string;
  duration: string;
  totalViews: number | string | undefined; // API might send as string or undefined
  prevTotalViews: number | string | undefined; // API might send as string or undefined
  status: string;
  createdAt: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  name,
  description,
  genre,
  provider,
  videoImage,
  assetImage,
  duration,
  totalViews,
  prevTotalViews,
  status = 'unknown',
  createdAt
}) => {
  const getProgressType = (currentViews: number, previousViews: number): 'success' | 'warning' | 'danger' | 'info' => {
    const growth = previousViews > 0 ? (currentViews - previousViews) / previousViews * 100 : 0;
    if (growth > 20) return 'success';
    if (growth > 0) return 'info';
    if (growth > -20) return 'warning';
    return 'danger';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDuration = (duration: string) => {
    const minutes = Math.floor(parseInt(duration) / 60);
    const seconds = parseInt(duration) % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const statusClass = status ? status.toString().toLowerCase() : 'unknown';

  return (
    <div className="content-card">
      <div className="card-media">
        <img src={videoImage || assetImage} alt={name} className="content-thumbnail" />
        <span className="duration-badge">{formatDuration(duration)}</span>
      </div>

      <div className="card-content">
        <div className="card-header">
          <h3>{name || 'Untitled'}</h3>
          <span className={`status-badge ${statusClass}`}>
            {status}
          </span>
        </div>
        
        <p className="description">{description || 'No description available'}</p>
        
        <div className="meta-info">
          <div className="genre-badge">{genre || 'Unknown Genre'}</div>
          <div className="provider-badge">{provider}</div>
          <div className="date">Created: {formatDate(createdAt)}</div>
        </div>
        
        <div className="views-section">
          <div className="views-label">Views</div>
          <ProgressBar 
            value={Number(totalViews) || 0} 
            maxValue={Math.max(Number(totalViews) || 0, Number(prevTotalViews) || 0) * 1.5} 
            type={getProgressType(Number(totalViews) || 0, Number(prevTotalViews) || 0)}
          />
          <div className="views-comparison">
            <span className="previous-views">Previous: {(Number(prevTotalViews) || 0).toLocaleString()}</span>
            <span className="current-views">Current: {(Number(totalViews) || 0).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;