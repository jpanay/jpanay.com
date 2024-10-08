const ProjectItem = ({ project }) => {
  const openLink = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div
      className="flex sm:flex-row flex-col sm:justify-between sm:items-start items-center sm:space-x-4 py-4 px-4 border border-transparent rounded hover:border-zinc-700 hover:bg-zinc-800 hover:shadow-md cursor-pointer duration-300"
      onClick={openLink}
    >
      {/* Media */}
      <div className="sm:max-w-72 sm:mb-0 mb-2 rounded-lg overflow-hidden border border-zinc-800">
        {project.image && (
          <img src={`/projects/${project.image}`} alt={project.title} />
        )}
        {project.video && (
          <video
            src={`/projects/${project.video}`}
            alt={project.title}
            type="video/quicktime"
            autoPlay
            muted
            loop
          />
        )}
      </div>
      {/* Title, Subheader, and Description */}
      <div className="flex-1">
        <h3 className="text-lg font-medium whitespace-nowrap">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-400 font-medium mb-1">
          {project.subheader}
        </p>
        <p className="text-sm text-zinc-400 ">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
