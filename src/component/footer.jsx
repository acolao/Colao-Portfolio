export default function Footer() {

  const icons = [
    {
      name: "github",
      link: "https://github.com/acolao",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/alisoncolao",
    },
  ];

  return (
    <footer className="footer">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}
