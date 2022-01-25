function Header() {
  return (
    <nav className="blue-grey">
      <div className="nav-wrapper">
        <a className="brand-logo">React Shop</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a>Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
