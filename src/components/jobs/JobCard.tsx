"use client";
import React from "react";

interface Job {
  id: number;
  category: { id: number; title: string };
  sub_category: { id: number; title: string };
  job_type: { id: number; title: string; slug: string };
  skills: Array<{ id: number; label: string; value: string | null }>;
  language: Array<{ id: number; title: string; slug: string }>;
  keywords: Array<{ id: number; title: string; slug: string }>;
  job_attachments: Array<{ id: number; file: string }>;
  job_applications: Array<unknown>;
  status: string;
  hiring_status: string;
  is_active: boolean;
  title: string;
  slug: string;
  budget_type: string;
  rate_from: string;
  rate_to: string;
  job_description: string;
  hiring_capacity: string;
  experience_level: string;
  project_duration: string;
  created_at: string;
  updated_at: string;
  buyer: number;
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-1">
          {job.category.title} / {job.sub_category.title}
        </p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {job.title}
        </h3>
        <p className="text-lg font-medium text-gray-800">
          ${job.rate_from} - ${job.rate_to}
        </p>
      </div>

      <div className="mb-4">
        <span className="text-sm text-gray-600">{job.job_type.title}</span>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          {job.job_description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.slice(0, 3).map((skill) => (
          <span
            key={skill.id}
            className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded"
          >
            {skill.label}
          </span>
        ))}
        {job.keywords.slice(0, 2).map((keyword) => (
          <span
            key={keyword.id}
            className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded"
          >
            {keyword.title}
          </span>
        ))}
        {job.language.slice(0, 1).map((lang) => (
          <span
            key={lang.id}
            className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded"
          >
            {lang.title}
          </span>
        ))}
        {job.skills.length + job.keywords.length + job.language.length > 6 && (
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
            +{job.skills.length + job.keywords.length + job.language.length - 6}{" "}
            more
          </span>
        )}
      </div>

      <div className="text-sm text-gray-500 mb-4">
        <span className="mr-4">{job.experience_level}</span>
        <span>{job.project_duration}</span>
      </div>

      <button className="bg-black hover:bg-primary text-white text-sm font-medium px-6 py-2 rounded-full transition-colors duration-200">
        Apply Now
      </button>
    </div>
  );
};
export default JobCard;
