export type UserRole = 'writer' | 'client';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  bio?: string;
  avatar_url?: string;
  hourly_rate?: number;
  skills: string[];
  years_experience?: number;
  created_at: string;
}

export interface Project {
  id: string;
  client_id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  status: 'open' | 'in_progress' | 'completed';
  category: string;
  created_at: string;
}

export interface Bid {
  id: string;
  project_id: string;
  writer_id: string;
  amount: number;
  proposal: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
}

export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  project_id?: string;
  content: string;
  created_at: string;
}

export interface Review {
  id: string;
  reviewer_id: string;
  reviewee_id: string;
  project_id: string;
  rating: number;
  comment?: string;
  created_at: string;
}
