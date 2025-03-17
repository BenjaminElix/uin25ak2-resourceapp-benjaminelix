import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  const categories = [
    { path: "/html", label: "HTML" },
    { path: "/css", label: "CSS" },
    { path: "/javascript", label: "JavaScript" },
    { path: "/react", label: "React" },
    { path: "/sanity", label: "Sanity and headless CMS" },
  ];

  return (
    <nav id="category-menu">
      {categories.map((category) => (
        <Link key={category.path} to={category.path}>
          <button
            className={currentPath === category.path.slice(1) ? "active" : ""}
            data-category={category.label}
            id={category.path.slice(1)}
          >
            {category.label}
          </button>
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
