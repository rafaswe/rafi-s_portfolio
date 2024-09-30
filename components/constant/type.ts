export type ToolsType = { icon: string; name: string }[];
export type Skills = {
  title: string;
  tools: ToolsType;
}[];
export type ProjectsListProps = {
  imgUrl: string;
  projectName: string;
  projectGenre: string;
  link: string;
};
export type PortpholioProps = {
  menuList: string[];
  projectsList: ProjectsListProps[];
};
