import React from "react";

const cameraData = [
  { title: "VILLA", img: "/image masque.svg" },
  { title: "OFFICE", img: "/image masque.svg" },
  { title: "SCHOOL", img: "/image masque.svg" },
  { title: "MOSQUE", img: "/image masque.svg" },
  { title: "FACTORY", img: "/image masque.svg" },
  { title: "STORE", img: "/image masque.svg" },
  { title: "HOSPITAL", img: "/image masque.svg" },
  { title: "HOTEL", img: "/image masque.svg" },
];

const Camera = () => {
  return (
    <>
    <div className="p-6 bg-[#FFFDF6] min-h-screen">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">CAMERA SOLUTIONS</h2>
      <p className="text-center text-sm text-gray-500 mb-8">
        <span className="text-orange-600 font-semibold">LOCATION TYPE</span> &nbsp; » CAMERA TYPE » CHOOSE DVR » SELECT HARD DISK » SELECT MONITOR » INSTALLING MONITORS
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center pb-10">
        {cameraData.map((item, index) => (
          <div
            key={index}
            className="bg-teal-600 text-white rounded-b-full w-[150px] h-[180px] flex flex-col items-center justify-start pt-5 relative"
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-white mb-3">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-bold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Camera;


