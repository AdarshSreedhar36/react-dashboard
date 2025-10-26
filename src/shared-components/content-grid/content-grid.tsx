import React from 'react';
import './content-grid.scss';
import ContentCard from '../content-card/content-card';
import { useContentData } from '../../custom-hooks/use-content-data.hook';

const ContentGrid: React.FC = () => {
  const { data, loading, error } = useContentData();

  if (loading) {
    return (
      <div className="content-grid-loading">
        <div className="loader"></div>
        <p>Loading content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-grid-error">
        <span className="error-icon">⚠️</span>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="content-grid">
      {Array.isArray(data) && data.map((item) => (
        <ContentCard
          key={item?.id || Math.random()}
          name={item?.name || ''}
          description={item?.description || ''}
          genre={item?.genre || ''}
          provider={item?.provider || ''}
          videoImage={item?.videoImage || ''}
          assetImage={item?.assetImage || ''}
          duration={item?.duration || '0'}
          totalViews={item?.totalViews || 0}
          prevTotalViews={item?.prevTotalViews || 0}
          status={item?.status || 'unknown'}
          createdAt={item?.created_at || new Date().toISOString()}
        />
      ))}
      {Array.isArray(data) && data.length === 0 && (
        <div className="content-grid-empty">
          <p>No content available</p>
        </div>
      )}
    </div>
  );
};

export default ContentGrid;