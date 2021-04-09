
export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Task {
  id: string;
  name: string;
  categoryId: string;
  SubTasks: string[];
}
