const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <p className="text-yellow-400 mb-3 font-bold">---{subHeading}---</p>
      <h1 className="text-4xl uppercase border-y-4 p-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
