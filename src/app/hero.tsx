// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            {/* Adjust Typography props */}
            <Typography variant="h1" color="white" className="mb-4" >
              The WASH App
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Expanded Sanitary Inspections, Compliance Application
            </Typography>
            <Typography variant="h6" color="white" className="mb-4">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Link
                  href="https://apps.apple.com/gh/app/esicapps-2/id6502910175"
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-apple.png"
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  App Store
                </Link>
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=org.esicapps.mobile"
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                > <Image
                    width={256}
                    height={256}
                    src="/logos/logo-google.png"
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  Google Play


                </Link>
              </Button>
            </div>
          </div>
          <Image
            width={400}
            height={576}
            src="/image/phones2.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
           {/* <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          /> */}
        </div>
      </header >
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            ESICApps
          </Typography>
          <Typography className="font-normal !text-gray-500 lg:w-5/12">
            ESICApps is a mobile application software tool that collects, manages,
            analyses, and displays geographically referenced monitoring and
            inspection data using mobile phones and web-based dashboards and maps.

            ESICApps provides information on access to basic sanitation
            and potable water, as well as liquid and solid waste disposal methods
            in residential, eating & drinking, health, hospitality, industry, institution,
            markets & lorry parks, and sanitary premises. This database is the main
            avenue for data entry from all MMDAs.
          </Typography>
        </div>
      </div>
    </div >
  );
}

export default Hero;
