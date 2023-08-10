import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Nav({ currentPage }) {
  const pages = ["portfolio", "contact", "resume"];

  return (
    <section className="container">
      <nav>
        <ul className="grid-row">
            <li className={`m-5 ${currentPage === '/' && 'navActive'}`}
            key="about"
            >
             <Link to="/">About</Link>
            </li>
            {pages.map((Page) => (
                <li
                className={`/${currentPage === `/${Page}` && 'navActive'}`}
                key={Page}
                >
                    <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
                </li>
            ))}
        </ul>
      </nav>
    </section>
  );
}
