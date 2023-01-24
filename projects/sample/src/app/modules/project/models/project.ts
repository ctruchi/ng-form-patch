export interface Project {
    id: string;
    name: string;
    metadata: ProjectMetadata;
    modules: ProjectModule[]
}

export interface ProjectMetadata {
    category: ProjectCategory;
}

export enum ProjectCategory {
    WORK = 'WORK',
    HOME = 'HOME'
}

export interface ProjectModule {
    id: string;
    name: string;
    description: string;
}