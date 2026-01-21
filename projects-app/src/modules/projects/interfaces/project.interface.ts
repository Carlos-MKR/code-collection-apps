export interface Project {
  id: string;
  name: string;
  tasks: Taks[];
}

export interface Taks {
  id: string;
  name: string;
  completedAt?: Date | null;
}
