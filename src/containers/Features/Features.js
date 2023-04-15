import { Feature } from "../../components";
import "./Features.css";
const Features = () => {
  const featureData = [
    {
      title: "Innovate and Excel",
      text: "Embracing Innovation: How to Stay Ahead of the Curve in a Rapidly Evolving World - This section provides insights and strategies for individuals and organizations to stay competitive in a rapidly evolving world. Topics covered may include emerging technologies, agile methodologies, and fostering a culture of innovation.",
    },
    {
      title: "Innovate and Excel",
      text: "Future-Proofing Your Career: Navigating the Job Market in an Age of Automation and Artificial Intelligence - This section explores the impact of automation and AI on the job market and provides guidance on how to prepare for the future of work. Topics covered may include upskilling, reskilling, and adapting to new technologies.",
    },
    {
      title: "Sustainable Community Living",
      text: "Sustainable Living: Creating a Greener, Cleaner Future for Everyone - This section focuses on the importance of sustainability and provides practical tips for individuals and organizations to reduce their environmental impact. Topics covered may include renewable energy, waste reduction, and sustainable transportation.",
    },
    {
      title: "Digital Connection Revolution",
      text: "The Power of Community: Building Stronger Connections in a Digital Age - This section highlights the importance of human connection and provides insights on how to build and strengthen relationships in a digital age. Topics covered may include online communities, social media, and virtual collaboration tools.",
    },
  ];
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
