import resources from "../ressurser.js";

function Resources({ category, children }) {
  const filteredResources = resources.filter(
    (resource) => resource.category === category
  );

  const displayCategory =
    category === "headless-cms" ? "Sanity" : category.toUpperCase();

  return (
    <section id="resources-list">
      {children}{" "}
      {/* Rendrer PageTitle her, men var bare i veien så fjernet den. var lettere og bare displaye categorien istede*/}
      <h2>{displayCategory} Resources</h2>
      <ul>
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))
        ) : (
          <li>
            Ingen ressurser funnet for denne kategorien.
          </li> /*Viser melding hvis ingen ressurser matches for den valgte kategorien */
        )}
      </ul>
    </section>
  );
}

export default Resources;
