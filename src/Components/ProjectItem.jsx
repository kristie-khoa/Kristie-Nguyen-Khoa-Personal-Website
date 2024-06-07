import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../StyleSheets/ProjectItem.css";
import { FaAngleRight } from "react-icons/fa";

function ProjectItem({ project }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [imageIndex, setImageIndex] = useState(0);

  const variants = {
    enter: (direction) => {
      return {
        x: direction === 1 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction === 1 ? -1000 : 1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if (imageIndex + newDirection >= project.images.length) {
      setImageIndex(0);
    } else if (imageIndex + newDirection < 0) {
      setImageIndex(project.images.length - 1);
    } else {
      setImageIndex(imageIndex + newDirection);
    }
    setPage([page + newDirection, newDirection]);
  };

  let projectTags = project.tags.map((tag) => {
    return <div className="project-item-tag">{tag}</div>;
  });

  return (
    <div>
      <h2 className="proj-item-title">{project.name}</h2>
      <a className="proj-item-live-link" href={project.url} target="_blank">
        visit live site
      </a>
      <div className="proj-item-imgs-container">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            className="proj-item-img"
            key={page}
            src={project.images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>

        <div className="proj-item-next" onClick={() => paginate(1)}>
          <FaAngleRight />
        </div>
        <div className="proj-item-prev" onClick={() => paginate(-1)}>
          <FaAngleRight />
        </div>
      </div>
      <div className="proj-item-img-count">
        <div
          className="proj-item-prev mobile-prev"
          onClick={() => paginate(-1)}
        >
          <FaAngleRight />
        </div>

        <span>{`${imageIndex + 1} / ${project.images.length}`}</span>
        <div className="proj-item-next mobile-next" onClick={() => paginate(1)}>
          <FaAngleRight />
        </div>
      </div>

      <div className="proj-item-info">
        <b>Description:</b> {project.description}
      </div>
      <br></br>
      <div className="proj-item-info">
        <b>Skills:</b> {projectTags}
      </div>
    </div>
  );
}

export default ProjectItem;
