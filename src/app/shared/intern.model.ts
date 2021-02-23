export class Intern {
  id: number;
  name: string;
  email: string;
  projects: Project[];
  skills: Skills[];
}

export class Project {
  project1: string;
  project2: string;
}

export class Skills {
  skillName: string;
  experience: string;
}