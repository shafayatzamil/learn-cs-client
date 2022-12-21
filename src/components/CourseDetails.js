import React from "react";
import resume from "../assets/resume-shafayat zamil (3).pdf";
import { Link, useLoaderData } from "react-router-dom";

// Course details +download btn

const CourseDetails = () => {
  const course = useLoaderData();

  return (
    <div className="flex flex-col col-span-1 md:col-span-8 gap-8 mb-14">
      {/* <button className="btn w-16 btn-outline btn-accent">download</button>
       */}
      <a href={resume} download="resume" target="_blank">
        <button className="btn w-16 btn-outline btn-primary">download</button>
      </a>

      <figure className="flex justify-center border-br-1 border-primary">
        <img
          src={course.image}
          alt="course thumbnail"
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="flex gap-5 justify-between flex-wrap">
        <h2 className="bg-gradient-to-r from-purple to-primary text-transparent bg-clip-text text-2xl md:text-4xl font-bold">
          {course.title.toUpperCase()}
        </h2>

        <span className="font-bold text-primary text-4xl whitespace-nowrap">
          {course.price} <span className="font-mono">$</span>
        </span>
      </div>
      <p className="leading-[1.8] font-normal text-gray-500">
        {course.details}
      </p>

      <Link to={`/checkout/${course.id}`} className="button self-end">
        Get premium access
      </Link>
    </div>
  );
};

export default CourseDetails;
