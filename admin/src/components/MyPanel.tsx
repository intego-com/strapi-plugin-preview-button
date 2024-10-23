import React from 'react';
import type { PanelComponent, PanelComponentProps } from '@strapi/content-manager/strapi-admin';

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#4945FF', // Strapi button primary color
  color: '#FFFFFF',           
  padding: '8px 14px',       
  borderRadius: '4px',        
  border: 'none',             
  fontSize: '12px',           
  fontWeight: 500,            
  cursor: 'pointer',          
  boxShadow: '0 1px 4px rgba(33, 33, 52, 0.1)', 
  display: 'inline-block',    
//   marginTop: '10px',          
  width: '100%',
};

const buttonHoverFocusStyle: React.CSSProperties = {
  backgroundColor: '#7C79FF', 
};

const handleClick = (document: any, activeTab: any, collectionType: any, documentId: any, meta: any, model: any) => {
    const baseUrl = process.env.STRAPI_ADMIN_PREVIEW_URL; 
    const secret = process.env.STRAPI_ADMIN_PREVIEW_URL_SECRET;
    const pageSlug = document?.slug || '';
    const fullUrl = `${baseUrl}?secret=${secret}&slug=/${pageSlug}`;
    window.open(fullUrl, '_blank');
  };

const MyPanel: PanelComponent = ({
  activeTab,
  collectionType,
  document,
  documentId,
  meta,
  model,
}: PanelComponentProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return {
    title: 'Custom Panel',
    content: (
      <button
        style={{
          ...buttonStyle,
          ...(isHovered ? buttonHoverFocusStyle : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleClick(document, activeTab, collectionType, documentId, meta, model)}
      >
        Preview
      </button>
    ),
  };
};

export default MyPanel;
