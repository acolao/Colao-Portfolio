export default function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/acolao",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/alisoncolao",
    },
  ];

  return (
    <footer className="sticky-footer">
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
