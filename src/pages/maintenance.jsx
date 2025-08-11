import React from "react";
import { Calendar } from "lucide-react";

export default function Maintenance() {
    const maintenanceItems = [
        {
            id: 1,
            title: "Diy - Noc password reset difficult BMC OAR",
            image: "/2021-10-23_04-26-32_-Jamasouq-Maintenance-003 1.svg",
            badge: "DIY"
        },
        {
            id: 2,
            title: "Maintenance 2 BMC OAR",
            image: "/2021-10-23_04-26-32_-Jamasouq-Maintenance-003 1.svg",
            badge: "DIY"
        },
        {
            id: 3,
            title: "Maintenance 1 NOC OAR",
            image: "/2021-10-23_04-26-32_-Jamasouq-Maintenance-003 1.svg",
            badge: "DIY"
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50 py-12 px-6">
                <div className="max-w-6xl mx-auto mb-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
                            Maintenance
                        </h1>
                    </div>

                    {/* Maintenance Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {maintenanceItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Image Section */}
                                <div className="relative aspect-video bg-white">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* DIY Badge */}
                                    <div className="absolute top-3 right-3">
                                        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                                            {item.badge}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-gray-800 font-medium text-sm mb-4 leading-relaxed">
                                        {item.title}
                                    </h3>
                                    <div className="flex justify-end">
                                        <button className="bg-teal-600 hover:bg-teal-700 p-3 rounded-lg transition-colors duration-200">
                                            <Calendar className="w-5 h-5 text-white" />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
