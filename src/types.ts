export enum UserRole {
  ADMIN = 'admin',
  VOLUNTEER = 'volunteer',
  COORDINATOR = 'coordinator'
}

export enum UrgencyLevel {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export enum NeedCategory {
  HEALTH = 'Health',
  EDUCATION = 'Education',
  FOOD = 'Food',
  INFRASTRUCTURE = 'Infrastructure',
  SANITATION = 'Sanitation',
  OTHER = 'Other'
}

export enum Status {
  PENDING = 'Pending',
  ASSIGNED = 'Assigned',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  RESOLVED = 'Resolved',
  STALLED = 'Stalled'
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface CommunityNeed {
  id: string;
  title: string;
  description: string;
  location: string;
  coordinates: Coordinates;
  urgency: UrgencyLevel;
  category: NeedCategory;
  status: Status;
  priorityScore: number;
  collectedAt: string;
  reportedBy: string;
}

export interface Volunteer {
  userId: string;
  name: string;
  email: string;
  skills: string[];
  location: string;
  availability: string;
  experienceLevel: 'Novice' | 'Experienced' | 'Expert';
  activeWorkload: number;
  joinedAt: string;
  matchScore?: number;
}

export interface TaskAssignment {
  id: string;
  needId: string;
  volunteerId: string;
  assignedBy: string;
  status: Status;
  assignedAt: string;
  deadline?: string;
  impactSummary?: string;
}

export interface ImpactStats {
  totalNeeds: number;
  resolvedNeeds: number;
  activeVolunteers: number;
  totalTasks: number;
  communityReach: number;
}
