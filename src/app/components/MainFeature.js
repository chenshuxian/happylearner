export const MainFeature = ({imageUrl, title, subtitle}) => {
    return (
      <div className="main-feature" style={{ backgroundImage: `url("${imageUrl}")` }}>
        {/* Replace with your actual content */}
        <div className="title-info">
          <h1>{title}</h1>
          <div className="main-subtitle">
          <h4>{subtitle}</h4>
          </div>
        </div>
      </div>
    );
  };