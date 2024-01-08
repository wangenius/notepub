export interface Directory {
    name: string;
    path: string;
    subdirectories: Directory[];
    files:ArticleFile[]
}

export interface ArticleFile {
    name:string;
    path:string;
}