import Feature from "../../components/Feature/Feature";
import "./WhatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="We are at the forefront of the latest advancements in natural language processing with our use of GPT-3 technology. Our platform harnesses the power of GPT-3 to provide cutting-edge language solutions, such as automated content creation and language translation, that help businesses and individuals achieve their goals more efficiently and effectively."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We specialize in creating chatbots, which are AI programs designed to simulate human conversation. With our chatbots, you can provide instant, personalized assistance to your customers and improve their overall experience with your business "
        />
        <Feature
          title="Knowledgebase"
          text="We are a knowledge-centered organization, dedicated to providing high-quality, accurate information to our users. Our team of experts researches and verifies all information to ensure that our users have access to reliable and up-to-date knowledge"
        />
        <Feature
          title="Education"
          text="Education is key to unlocking one's potential, and we're here to help you do just that. Our platform offers a range of educational resources, from online courses to interactive learning tools, to help you acquire new skills and knowledge"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
