import { Play, Send } from "lucide-react";

export default function Villa() {
  return (
    <>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative bg-gray-100 p-4 text-center border-b">
          <div className="absolute top-4 right-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium">
              NEW VILLA
            </span>
            <div className="text-xs text-gray-500 mt-1">191 x 36</div>
          </div>
          <h1 className="text-gray-700 font-medium">New Villa Security System</h1>
        </div>

        {/* Video Section */}
        <div className="p-4">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-4">
            {/* Video Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 relative">
              {/* 3D Villa Model Representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Simple 3D-like villa representation */}
                  <div className="w-32 h-20 bg-white rounded transform rotate-12 shadow-lg relative">
                    <div className="absolute top-2 left-2 w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-gray-300 rounded"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-8 h-4 bg-red-500 rounded-t"></div>
                  </div>
                </div>
              </div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-lg transition-colors">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </button>
              </div>
            </div>

            {/* Channel Info */}
            <div className="absolute bottom-2 left-2 flex items-center">
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">JA</span>
              </div>
              <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-2 py-1 rounded">
                JAMA AUTOMATION
              </span>
            </div>

            {/* Watch on YouTube badge */}
            <div className="absolute bottom-2 right-2">
              <div className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center">
                <span>Watch on</span>
                <span className="ml-1 font-bold">YouTube</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-4 border-t bg-gray-50">
          <h2 className="text-gray-800 font-medium mb-4">
            Send us your villa design and get a free Design
          </h2>
          
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-medium transition-colors flex items-center">
            <Send className="w-4 h-4 mr-2" />
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
