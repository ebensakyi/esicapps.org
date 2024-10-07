// @ts-nocheck

"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Mobile App",
    children:
      "The mobile application is for data collection. It is used by field data collectors.",
  },
  {
    icon: HeartIcon,
    title: "Web application",
    children:
      "The web application is used to visualized and manage the mobile application",
  },
  // {
  //   icon: LockClosedIcon,
  //   title: "Achievement Unlocked",
  //   children:
  //     "Earn certificates and badges as you complete courses, showcasing your newfound skills to the world.",
  // },
  // {
  //   icon: LightBulbIcon,
  //   title: "Personalized Progress Tracking",
  //   children:
  //     "Stay on top of your learning journey with progress tracking and personalized recommendations to keep you motivated.",
  // },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          ESICApps
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Features
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
        ESICApps is a mobile application software tool that collects, manages,
analyses and displays geographically referenced monitoring and
inspection data using mobile phones and web-based dashboards and maps.

        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
