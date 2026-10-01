export interface ArnaTool {
  id: string;
  name: string;
  category: string;
  iconUrl: string;
  orbitLayer: "inner" | "middle" | "outer";
}

export const arnaTools: ArnaTool[] = [
  { id: "figma", name: "Figma", category: "Design", iconUrl: "/icons/figma-svgrepo-com.svg", orbitLayer: "inner" },
  { id: "vscode", name: "VS Code", category: "Development", iconUrl: "/icons/vs-code-svgrepo-com.svg", orbitLayer: "inner" },
  { id: "github", name: "GitHub", category: "Development", iconUrl: "/icons/github-142-svgrepo-com.svg", orbitLayer: "middle" },
  { id: "blender", name: "Blender", category: "3D", iconUrl: "/icons/blender-svgrepo-com.svg", orbitLayer: "middle" },
  { id: "photoshop", name: "Photoshop", category: "Design", iconUrl: "/icons/photoshop-svgrepo-com.svg", orbitLayer: "outer" },
  { id: "illustrator", name: "Illustrator", category: "Design", iconUrl: "/icons/illustrator-svgrepo-com.svg", orbitLayer: "outer" },
  { id: "marketing", name: "Marketing", category: "Strategy", iconUrl: "/icons/marketing-market-social-svgrepo-com.svg", orbitLayer: "outer" },
];
