import countryData from "../api/countryData.json";
function About() {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">Here are some Interesting Facts</h2>
        <div className="gradient-cards">
          {countryData.map((item) => {
            return (
              <div key={item.ID} className="card">
                <div className="container-card bg-blue-box">
                  <p className="card-title">{item.CountryName}</p>
                  <p>
                    <span className="card-description"> Capital: </span>
                    {item.Capital}
                  </p>
                  <p>
                    <span className="card-description"> Population: </span>
                    {item.Population}
                  </p>
                  <p>
                    <span className="card-description">
                      {" "}
                      Interesting Fact:{" "}
                    </span>
                    {item.InterestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default About;
