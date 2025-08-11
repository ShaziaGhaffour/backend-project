import React, { useState } from 'react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        {['profile', 'security', 'permissions', 'notifications', 'system'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mr-4 pb-2 text-sm font-semibold border-b-2 ${
              activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <input type="text" placeholder="Admin Name" className="w-full border px-4 py-2 rounded" />
            <input type="email" placeholder="Admin Email" className="w-full border px-4 py-2 rounded" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Update Profile</button>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-4">
            <input type="password" placeholder="Current Password" className="w-full border px-4 py-2 rounded" />
            <input type="password" placeholder="New Password" className="w-full border px-4 py-2 rounded" />
            <button className="bg-yellow-600 text-white px-4 py-2 rounded">Change Password</button>
          </div>
        )}

        {activeTab === 'permissions' && (
          <div>
            <p className="text-gray-600">Assign or update admin roles & permissions here.</p>
            <ul className="list-disc list-inside mt-2">
              <li>Manage Users</li>
              <li>Edit Products</li>
              <li>Access Reports</li>
            </ul>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Email notifications for new orders</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Push alerts for system updates</span>
            </label>
          </div>
        )}

        {activeTab === 'system' && (
          <div>
            <p className="text-gray-600 mb-2">System Preferences</p>
            <input type="text" placeholder="Website Title" className="w-full border px-4 py-2 rounded mb-2" />
            <select className="w-full border px-4 py-2 rounded">
              <option>Timezone: UTC</option>
              <option>Timezone: GMT+5</option>
              <option>Timezone: EST</option>
            </select>
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded">Save Settings</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;