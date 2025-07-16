import { useState, useEffect } from "react";

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

interface JobListSuccessResponse {
  status: true;
  count: number;
  next: string | null;
  previous: string | null;
  data: Job[];
}

interface JobListErrorResponse {
  status: false;
  message: string;
}

type JobListResponse = JobListSuccessResponse | JobListErrorResponse;

interface UseJobList {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  fetchJobs: () => Promise<void>;
}

export const useJobList = (): UseJobList => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.mnimedu.com/api/browse/pro-jobs/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result: JobListResponse = await response.json();

      if (!response.ok) {
        if ("message" in result) {
          throw new Error((result as JobListErrorResponse).message);
        }
        throw new Error("Failed to fetch jobs");
      }

      // Replicate the single job data into an array of 6 items
      const originalJob = (result as JobListSuccessResponse).data[0];
      const replicatedJobs = Array(6)
        .fill(null)
        .map((_, index) => ({
          ...originalJob,
          id: originalJob.id + index, // Ensure unique IDs
        }));

      setJobs(replicatedJobs);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      console.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return { jobs, loading, error, fetchJobs };
};
