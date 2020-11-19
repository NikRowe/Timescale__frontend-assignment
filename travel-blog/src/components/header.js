const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h1 className="nav__logo__header nav__logo__header--skinny">
          Travelize
        </h1>
        <p className="nav__logo__text">
          <i>My traveling experiences</i>
        </p>
      </div>
      <ul className="menu">
        <li className="menu__item">Home</li>
        <li className="menu__item">Blog</li>
        <li className="menu__item">About</li>
      </ul>
    </div>
  );
};

export default Nav;
