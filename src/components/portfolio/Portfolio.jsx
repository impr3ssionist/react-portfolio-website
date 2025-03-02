import "./Portfolio.css";
import portfolioData from "./portfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(
          ({ id, image, title, github, demoAvailable, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} loading="lazy" alt={title} />
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    {demoAvailable ? (
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span></span>
                    )}
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
