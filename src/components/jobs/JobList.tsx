"use client";

import React from "react";
import { useJobList } from "@/hooks/useJobList";
import JobCard from "./JobCard";

const JobList = () => {
  const { jobs, loading, error } = useJobList();

  if (loading)
    return <div className="text-center py-6 text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center py-6 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
