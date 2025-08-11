import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap, Heart, MessageCircle, Share2, Edit } from 'lucide-react';

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  const stats = [
    { label: 'Posts', value: '127' },
    { label: 'Followers', value: '2.3K' },
    { label: 'Following', value: '456' }
  ];

  const skills = ['React', 'JavaScript', 'Node.js', 'Express', 'UI/UX Design', 'MongoDB'];
  
  const posts = [
    { id: 1, content: 'Just completed a new project using React and Tailwind CSS! Excited to share it with everyone.', likes: 45, comments: 12, time: '2 hours ago' },
    { id: 2, content: 'Learning new technologies every day. Currently exploring AI and machine learning concepts.', likes: 67, comments: 8, time: '1 day ago' },
    { id: 3, content: 'Beautiful sunset from my morning walk. Nature always inspires creativity! 🌅', likes: 89, comments: 23, time: '3 days ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Edit size={16} />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                    <img src='/public/imagessss.png'></img>
                  <div className="absolute bottom-4 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Shazia Ghaffour</h2>
                <p className="text-purple-600 font-medium">Full Stack Developer</p>
                <p className="text-gray-500 text-sm mt-2">Passionate about creating amazing web experiences</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                {stats.map((stat, index) => (
                  <div key={index} className="py-3">
                    <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mb-6">
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    isFollowing 
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle size={18} />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={16} />
                  <span>Shazia@email.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={16} />
                  <span>+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin size={16} />
                  <span>Bahawalpur, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={16} />
                  <span>Joined March 2023</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award size={20} />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg mb-6">
              <div className="flex border-b border-gray-200">
                {['about', 'posts', 'experience'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 px-6 text-center font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'text-purple-600 border-b-2 border-purple-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* About Tab */}
                {activeTab === 'about' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">About Me</h3>
                      <p className="text-gray-600 leading-relaxed">
                        I'm a passionate Full Stack Developer with over 3 years of experience in creating 
                        modern web applications. I love working with React, Node.js, and exploring new 
                        technologies. When I'm not coding, you can find me reading tech blogs, playing 
                        cricket, or exploring the beautiful landscapes of Pakistan.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Web Development', 'Novel Writing', 'Photography', 'Cocking', 'Traveling', 'Reading'].map((interest, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Posts Tab */}
                {activeTab === 'posts' && (
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                        <p className="text-gray-800 mb-4">{post.content}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                              <Heart size={16} />
                              {post.likes}
                            </button>
                            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                              <MessageCircle size={16} />
                              {post.comments}
                            </button>
                          </div>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Briefcase size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Senior Frontend Developer</h3>
                        <p className="text-purple-600 font-medium">TechCorp Solutions</p>
                        <p className="text-gray-500 text-sm">2022 - Present</p>
                        <p className="text-gray-600 mt-2">
                          Leading frontend development for multiple client projects using React, Next.js, and modern CSS frameworks.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Full Stack Developer</h3>
                        <p className="text-blue-600 font-medium">Digital Innovations</p>
                        <p className="text-gray-500 text-sm">2021 - 2022</p>
                        <p className="text-gray-600 mt-2">
                          Developed and maintained web applications using MERN stack, collaborated with design teams.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <GraduationCap size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Bachelor of Computer Science</h3>
                        <p className="text-green-600 font-medium">University of Punjab</p>
                        <p className="text-gray-500 text-sm">2020 - 2024</p>
                        <p className="text-gray-600 mt-2">
                          Graduated with distinction, specialized in Software Engineering and Web Technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}