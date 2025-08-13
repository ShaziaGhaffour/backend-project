import React from 'react';
import CameraImage from '../assets/camera.svg';
import FrameImage from '../assets/Frame 11.svg';

const Offers = () => {
  return (
    <main className="flex flex-wrap justify-center gap-6 my-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col bg-white items-center w-[232px] p-2 shadow-lg rounded-lg"
        >
          <img src={CameraImage} alt="Camera" className="w-full mb-2" />
          <img src={FrameImage} alt="Frame" className="mb-2 self-start" />
          <h3
            className="text-left text-black"
            style={{ fontSize: '12px', fontWeight: '400' }}
          >
            System 16 Camera 2MP HD + Installation and configuration Fee
          </h3>
        </div>
      ))}
    </main>
  );
};

export default Offers;
