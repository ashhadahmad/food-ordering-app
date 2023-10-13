import User from "./User";

const About = () => {
  return (
    <div className="pt-5">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        About
      </h2>
      <User name={"Ashhad from class component"} />
    </div>
  );
};

export default About;
