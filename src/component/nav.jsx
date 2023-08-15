import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/helpers";

export default function Nav({ currentPage }) {
  const pages = ["portfolio", "contact", "resume"];

  return (
    <section>
      <nav>
        <ul>
          <li className={`${currentPage === "/" && "navActive"}`} key="about">
            <Link to="/">About</Link>
          </li>
          {pages.map((Page) => (
            <li
              className={`/${currentPage === `/${Page}` && "navActive"}`}
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
