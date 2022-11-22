const NavItem = ({ children, label }) => {
  return (
    <li className="side-nav--active">
      <a href="#">
        {children}
        <span>{label}</span>
      </a>
    </li>
  );
};

export default NavItem;
