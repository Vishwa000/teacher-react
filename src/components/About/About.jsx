import React from "react";
import Header from "../header/Header";

const About = () => {
  return (
    <div>
      <Header/>
      <div className="container" id="about">
        <div className="row">
          <div className="col-md-4">
          <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div>
        <h2 style={{ margin: "5px", padding: "5px", color: "green" }}>
          Our Vision
        </h2>
        <p style={{ margin: "5px", padding: "5px", color: "crimson" }}>
          Education consists in showing persons how “to be more’ and not only to
          ‘have more’. They should become better not only for themselves, but
          also with and for others”. Our Vision is the same as the Vision of
          Jesus Christ, the Teacher of LIFE, who came, that all may have life
          and have it in abundance. The mission of Jesus Christ is to restore
          the integrity of God’s original creation, both human and material and
          thus to build the kingdom of God on earth.
        </p>
        <h2 style={{ margin: "5px", padding: "5px", color: "green" }}>
          Our Mission
        </h2>
        <p style={{ margin: "5px", padding: "5px", color: "crimson" }}>
          An Education of quality and relevance to all and in particular to the
          marginalized sections of society. An Education that frees persons from
          the social conditioning and which instead enables them to see life as
          a vocation and as a gift and helping them to make free and right
          choices in life. An Education that leads the young into the sacred
          space of the human person and of every person, making them aware of
          the inalienable human rights of every individual. This enables them to
          foster unity in diversity, to live in a pluralistic country,
          respecting and appreciating the cultural and religious differences in
          a globalized world.
        </p>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
