import './style.css';

const CommonAuthLayout = ({ children, title }) => {
  return (
    <div className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default CommonAuthLayout;
