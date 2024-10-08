// @ts-nocheck
"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <Typography variant="h1" color="blue-gray" className="mb-6">
          ESICApps Support
        </Typography>

        <Typography variant="paragraph" className="font-normal !text-gray-700 mb-6">
          ESICApps is a mobile application software tool that collects, manages, analyses, 
          and displays geographically referenced monitoring and inspection data using mobile 
          phones and web-based dashboards and maps.
        </Typography>

        <Typography variant="h5" color="blue-gray" className="mb-4">
          Features of ESICApps
        </Typography>

        <Typography variant="paragraph" className="font-normal !text-gray-700 mb-4">
          ESICApps provides information on access to basic sanitation and potable water, as well as 
          liquid and solid waste disposal methods in the following areas:
        </Typography>

        <ul className="list-disc ml-8 mb-6">
          <li>Residential premises</li>
          <li>Eating & drinking establishments</li>
          <li>Health facilities</li>
          <li>Hospitality and tourism</li>
          <li>Industrial areas</li>
          <li>Institutions (schools, offices, etc.)</li>
          <li>Markets & lorry parks</li>
          <li>Sanitary premises</li>
        </ul>

        <Typography variant="h5" color="blue-gray" className="mb-4">
          Data Entry and Access
        </Typography>

        <Typography variant="paragraph" className="font-normal !text-gray-700">
          This database serves as the main avenue for data entry from all Metropolitan, Municipal, 
          and District Assemblies (MMDAs). It helps ensure that monitoring and inspections are accurately 
          recorded and geographically referenced for better decision-making.
        </Typography>

        <Typography variant="h5" color="blue-gray" className="mt-8 mb-4">
          Need Further Assistance?
        </Typography>

        <Typography variant="paragraph" className="font-normal !text-gray-700">
          If you have any questions or need further assistance, please don't hesitate to reach out to our support team. 
          We are here to help you with any issues regarding the ESICApps platform.
        </Typography>

        {/* Contact Information */}
        <div className="mt-8">
          <Typography variant="h5" color="blue-gray" className="mb-4">
            Contact Us
          </Typography>

          <Typography variant="paragraph" className="font-normal !text-gray-700 mb-2">
            <strong>Phone:</strong> +233256607552
          </Typography>

          <Typography variant="paragraph" className="font-normal !text-gray-700 mb-2">
            <strong>Email:</strong> esicapp2022@gmail.com
          </Typography>
        </div>
      </div>
    </div>
  );
}
