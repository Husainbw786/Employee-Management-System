export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  resume_url: string;
  file_name: string;
  skills: string[];
  experience_years: number;
  job_titles: string[];
  companies: string[];
  education: string[];
  summary: string;
  match_score: number;
  match_explanation: string;
}

export interface ApiResponse {
  candidates: Candidate[];
  total_found: number;
  search_query: string;
  search_time_ms: number;
  timestamp: string;
}

export interface JobDescription {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  level: string;
  visaStatus: string;
  description: string;
}
