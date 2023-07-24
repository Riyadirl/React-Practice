import './Headers.css'; // Import the CSS file for styling

const Header = () => {
  // Define some data for the header
  const companyName = 'Project L';
  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <header className="header-container">
      <div className="header-content">
        <h1>{companyName}</h1>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
