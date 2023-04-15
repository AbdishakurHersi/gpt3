import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Discover the Power of OpenAI: Paving the Way for a Smarter, More
          Connected World
        </h1>
        <p>
          We're dedicated to exploring the world of OpenAI and the possibilities
          it holds for the future. OpenAI is a cutting-edge artificial
          intelligence research organization that's pushing the boundaries of
          what's possible with machine learning and AI. By developing advanced
          algorithms, training models on massive data sets, and collaborating
          with experts from around the world, OpenAI is paving the way for a
          smarter, more connected world.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
