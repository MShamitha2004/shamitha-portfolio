
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        M. SHAMITHA<span>.</span>
      </a>

      <nav className="navbar-links">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>

      <a href="#contact" className="navbar-connect">
        Let's Connect ↗
      </a>
    </header>
  );
};

export default Navbar;
