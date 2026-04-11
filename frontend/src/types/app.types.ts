import { ReactNode } from "react";

export type StatCardProps = {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  trendColor?: "green" | "red" | "gray";
  iconBg?: string;
};

export type QuickActionProps = {
  title: string;
  description: string;
  icon: ReactNode;
  iconClassname: string;
  onClick?:  () => void;
  className?: string;
}

export type BranchStats = {
  clients: number;
  bookings: number;
  revenue: number;
}

export type BranchManager = {
  name: string;
  email: string;
};

export type BranchCardProps = {
  name: string;
  address: string;
  status: "active" | "inactive";
  manager: BranchManager;
  stats: BranchStats;
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export type StatBoxProps = {
  label: string;
  value: number | string;
  color: "blue" | "pink" | "green";
  icon?: React.ReactNode;
};

export type ClientTab =  
  "overview"
  | "bookings"
  | "profile"
  | "newBookings"
  | "logout";

export type BranchManagerTab = 
  "overview"
  | "admins"
  | "clients"
  | "teams"
  | "services"
  | "logout";

export interface ApiResponse<T = null> {
  success: boolean;
  message: string;
  data: T;
  errors?: Record<string, string[]> | null;
}


export interface ClientProfile {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  contact_number: string;
  created_at: string;
  user: ClientUser;
}

export interface ClientUser {
  id: number;
  email: string;
  user_type: string;
}