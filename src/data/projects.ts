export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string;
  technologies: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "freddy-fazbear",
    title: "Freddy Fazbear Animatronic",
    description: "As a part of Point Loma High Schools Engineering Design and Development course we designed, constructed, and programmed Freddy Fazbear.",
    imageUrl: "https://imgur.com/jjOOgwa.jpg",
    fullDescription: "The Freddy Fazbear Animatronic project was an ambitious undertaking that combined mechanical engineering, electronics, and programming. We created a fully articulated animatronic character with seven joints, each powered by servo motors and controlled through an Arduino microcontroller. The project involved extensive CAD work for designing the structural components, 3D printing for creating custom parts, and programming in C++ to coordinate the movements. This project demonstrated our ability to bring complex mechanical systems to life while maintaining precision and reliability in the movements.",
    technologies: ["Arduino", "C++", "3D Printing", "CAD", "Mechanical Engineering", "Servo Motors", "Electronics"],
    gallery: [
      "https://imgur.com/jHN7HwD.png",
      "https://imgur.com/jjOOgwa.jpg"
    ]
  }
];