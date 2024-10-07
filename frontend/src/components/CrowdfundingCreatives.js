import React from 'react';

const CrowdfundingCreatives = ({ project }) => {
  return (
    <section className="crowdfunding-creatives py-8 bg-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pl-4">Crowdfunding Creatives</h2>
      <div className="crowdfunding-project bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-center">{project.projectName}</h3>
        <div className="flex flex-col items-center mb-4">
          <img
            src={project.artistImage}
            alt={project.artistName}
            className="rounded-full w-[183px] h-[183px] object-cover mb-2"
          />
          <span className="font-semibold text-center">{project.artistName}</span>
        </div>
        <p className="mb-4 text-gray-700 text-center">{project.projectDescription}</p>
        <div className="flex items-center mb-4">
          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-full bg-green-500 rounded-full"
              style={{ width: `${(project.currentAmount / project.goalAmount) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrowdfundingCreatives;
