export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string;
  technologies: string[];
  timeline?: {
    date: string;
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "freddy-fazbear",
    title: "Freddy Fazbear Animatronic",
    description: "As a part of Point Loma High Schools Engineering Design and Development course we designed, constructed, and programmed Freddy Fazbear.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    fullDescription: "The Freddy Fazbear Animatronic project was an ambitious project that combined mechanical engineering and programming. We created a fully articulated animatronic character with seven joints, each powered by several motors and controlled through a VEX microcontroller. The project involved extensive CAD work for designing the structural components, 3D printing for creating custom parts, and programming in Python to coordinate the movements. This project demonstrated our ability to coordinate and combine our skills to animate a robot while maintaining a focused and enjoyable work environment.",
    technologies: ["VEX", "Python", "3D Printing", "CAD", "Mechanical Engineering", "Motor Control"],
    timeline: [
      {
        date: "September 2023",
        title: "Initial Design Phase",
        description: "Started with concept sketches and basic CAD models",
        imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
      },
      {
        date: "October 2023",
        title: "Prototype Development",
        description: "Created first prototype of the mechanical structure",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
      }
      // Note: Add more timeline entries with actual project photos when available
    ]
  }
];