
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  // Define some data for the footer
  const company = 'Project L';
  const year = new Date().getFullYear();
  const socialMediaLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/mycompany' },
    { name: 'Twitter', url: 'https://www.twitter.com/mycompany' },
    { name: 'Instagram', url: 'https://www.instagram.com/mycompany' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="company-info">
          <h3>{company}</h3>
          <p>&copy; {year}</p>
        </div>
        <div className="social-media">
          <h3>Follow us:</h3>
          <ul>
            {socialMediaLinks.map((link) => (
              <li key={link.name}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
