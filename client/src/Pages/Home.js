import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 2.8,
    },
  },
};
const pathVariants1 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 1.4,
    },
  },
};
const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 2,
    },
  },
};
const pathVariants3 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 2.4,
    },
  },
};

const colorFadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 3.8,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-5">
            <div className="home-img-content">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 873 560"
              >
                <motion.path
                  d="M704.69,755.5c-36.46,0-71.54-14.58-98.8-41l-14.42-14v54.64c-22.16-2.13-42.77-12.6-58.76-30-18.19-19.82-28.21-46.23-28.21-74.36V317.29c0-54.64,38.29-99.64,87-104.38V484.44l14.42-14c27.26-26.47,62.34-41.05,98.79-41.05,41.24,0,79.85,18.29,107.91,50.66-66.41,11.87-116.41,72.23-116.41,144,0,49.27,23.42,94.34,62.09,121.3A149.48,149.48,0,0,1,704.69,755.5Z"
                  transform="translate(-496 -204)"
                  style={{ fill: "rgba(255, 255, 255, 0.7)" }}
                  variants={colorFadeIn}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M583,222.85V504.54l28.84-28c25.66-24.92,58.64-38.64,92.87-38.64a128.6,128.6,0,0,1,62,15.82,140.69,140.69,0,0,1,29.5,21.49C733.31,493.54,687.68,553.59,687.68,624c0,46.34,19.63,89.19,52.8,118.17A137.31,137.31,0,0,1,704.69,747c-34.23,0-67.22-13.72-92.88-38.64l-28.84-28v64.83c-16.51-3.62-31.73-12.49-44-25.84-16.75-18.26-26-42.63-26-68.62V317.29c0-46.66,30.12-85.67,70-94.44M600,204c-57.42,0-104,50.72-104,113.29V650.71c0,31.29,11.64,59.61,30.45,80.11S571.26,764,600,764V720.55c27.83,27,64.51,43.45,104.72,43.45,23.14,0,47.45-5.44,71.91-17.42-42.69-22.77-71.92-69.11-71.92-122.58,0-73.23,54.82-133.09,124-137.33-28.82-40.05-73.64-65.79-124-65.79-40.2,0-76.88,16.42-104.71,43.45V204Z"
                  transform="translate(-496 -204)"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M825.5,751.07a117.65,117.65,0,0,1-55.9-14C728,714.9,702.18,670.8,702.18,622c0-68.26,51-124.86,116-128.85,2.42-.15,4.88-.22,7.33-.22A118.34,118.34,0,0,1,888,510.67c-30.16,27.72-47.24,66.95-47.24,109.33,0,43.11,18.45,84,49.86,111.67A118.25,118.25,0,0,1,825.5,751.07Z"
                  transform="translate(-496 -204)"
                  style={{ fill: "rgba(255, 255, 255, 0.7)" }}
                  variants={colorFadeIn}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M825.5,501.43a109.62,109.62,0,0,1,48.41,11.2c-26.73,28.61-41.7,66.62-41.7,107.37a158.09,158.09,0,0,0,44.33,110,110.24,110.24,0,0,1-102.94-.47,117.64,117.64,0,0,1-45.38-43.51A124.59,124.59,0,0,1,710.68,622c0-63.78,47.44-116.65,108-120.36,2.25-.14,4.54-.21,6.81-.21m0-17c-2.64,0-5.25.08-7.85.24-69.15,4.24-124,64.1-124,137.33,0,53.47,29.23,99.81,71.92,122.58a127.34,127.34,0,0,0,139-12.5c-33.51-25-55.36-65.85-55.36-112.08,0-45,20.72-85,52.75-110.08a127.53,127.53,0,0,0-76.46-25.49Z"
                  transform="translate(-496 -204)"
                  variants={pathVariants1}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M972,751.07a118.82,118.82,0,0,1-71.39-23.81C868.13,703.05,848.71,663.7,848.71,622c0-41.07,18-78.75,49.49-103.39a119,119,0,0,1,148.25.46V724.93A118.33,118.33,0,0,1,972,751.07Z"
                  transform="translate(-496 -204)"
                  style={{ fill: "rgba(255, 255, 255, 0.7)" }}
                  variants={colorFadeIn}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M972,501.43A109.71,109.71,0,0,1,1038,523.26V720.74a110.43,110.43,0,0,1-132.23-.3,120.15,120.15,0,0,1-35.22-42.08A125.72,125.72,0,0,1,857.21,622a124.12,124.12,0,0,1,12.63-55,120.43,120.43,0,0,1,33.6-41.66A110.3,110.3,0,0,1,972,501.43m0-17A127.68,127.68,0,0,0,893,511.92C860.93,537,840.21,577,840.21,622c0,46.23,21.85,87.13,55.36,112.08A127.51,127.51,0,0,0,1055,729V515.05A127.92,127.92,0,0,0,972,484.43Z"
                  transform="translate(-496 -204)"
                  variants={pathVariants3}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M1302.13,755.5c-51.94,0-106.73-21.16-146.56-56.59l-14.15-12.59v18.94a52.64,52.64,0,0,1-13.55,35.79c-8.56,9.32-19.87,14.45-31.85,14.45h-41.57V212.91c22.16,2.13,42.77,12.6,58.76,30,18.19,19.82,28.21,46.23,28.21,74.36V498.54L1155.57,486c39.84-35.43,94.63-56.58,146.56-56.58h1.1c22.48.13,42.36,11.92,51.85,30.77,8.53,16.94,6.84,36.3-4.52,51.81l-40.83,55.71a42.4,42.4,0,0,0,0,49.57l40.84,56c11.27,15.46,12.92,34.76,4.41,51.61-9.48,18.76-29.29,30.5-51.72,30.64Z"
                  transform="translate(-496 -204)"
                  style={{ fill: "rgba(255, 0, 0, 0.7)" }}
                  variants={colorFadeIn}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M1063,222.83c16.51,3.62,31.73,12.49,44,25.84,16.75,18.26,26,42.63,26,68.62V517.48l28.3-25.17a219.42,219.42,0,0,1,65.48-39.7c24.7-9.64,50.79-14.73,75.43-14.73h1c19.3.12,36.28,10.12,44.32,26.09,7.17,14.24,5.79,29.9-3.78,43l-40.84,55.72a51,51,0,0,0-.06,59.6l40.84,56c9.5,13,10.84,28.62,3.69,42.78-8,15.9-24.95,25.85-44.17,26h-1c-24.65,0-50.73-5.09-75.43-14.73a219.65,219.65,0,0,1-65.48-39.71l-28.3-25.18v37.88a44.19,44.19,0,0,1-11.31,30c-6.93,7.55-16,11.7-25.59,11.7H1063V222.83M1046,204V764H1096c14.88,0,28.36-6.58,38.11-17.2a61.31,61.31,0,0,0,15.79-41.54c40.39,35.93,97.15,58.74,152.21,58.74h1.1c52.74-.3,83.71-55.22,54.16-95.76l-40.84-56a34,34,0,0,1,0-39.54L1357.42,517c29.76-40.62-1.26-95.8-54.19-96.1h-1.1c-55.06,0-111.82,22.81-152.21,58.73V317.29c0-31.29-11.64-59.61-30.45-80.11S1074.66,204,1046,204Z"
                  transform="translate(-496 -204)"
                  variants={pathVariants2}
                  initial="hidden"
                  animate="visible"
                />
              </svg>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 home-info-content">
              <div className="home-info-content-info">
                <p className="lead text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="home-content-q">
            <h3>Why Book ?</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              animi libero! Voluptates excepturi quo esse. Labore, vel? Maiores,
              explicabo quasi! Quis, accusantium. Quas sit laboriosam officia ad
              soluta beatae ratione.
            </p>
          </div>
          <div className="home-content-q">
            <h3>Benefit of Study</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              animi libero! Voluptates excepturi quo esse. Labore, vel? Maiores,
              explicabo quasi! Quis, accusantium. Quas sit laboriosam officia ad
              soluta beatae ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
