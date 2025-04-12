
export interface Lesson {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  hours: number;
  marks: number;
  lessons: Lesson[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  chapters: Chapter[];
  references: {
    books: string[];
    websites: string[];
  };
  marksDistribution: {
    internal: number;
    external: number;
    practical: number;
  };
}

export interface Semester {
  id: string;
  number: number;
  subjects: Subject[];
}

export interface Faculty {
  id: string;
  name: string;
  description: string;
  semesters: Semester[];
}

const engineeringData: Faculty[] = [
  {
    id: "cse",
    name: "Computer Science Engineering",
    description: "Computer Science Engineering encompasses the design, development, and analysis of software and hardware used to solve problems in a variety of business, scientific, and social contexts.",
    semesters: Array.from({ length: 8 }, (_, i) => ({
      id: `cse-sem-${i + 1}`,
      number: i + 1,
      subjects: [
        {
          id: `cse-sem-${i + 1}-sub-1`,
          name: i < 4 ? "Engineering Mathematics" : "Advanced Algorithms",
          code: i < 4 ? `MATH10${i + 1}` : `CS40${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `cse-sem-${i + 1}-sub-1-ch-1`,
              title: i < 4 ? "Differential Equations" : "Graph Algorithms",
              hours: 10,
              marks: 15,
              lessons: [
                {
                  id: `cse-sem-${i + 1}-sub-1-ch-1-l-1`,
                  title: i < 4 ? "First Order ODEs" : "Shortest Path Algorithms",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `cse-sem-${i + 1}-sub-1-ch-1-l-2`,
                  title: i < 4 ? "Second Order ODEs" : "Minimum Spanning Trees",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `cse-sem-${i + 1}-sub-1-ch-2`,
              title: i < 4 ? "Linear Algebra" : "Dynamic Programming",
              hours: 12,
              marks: 20,
              lessons: [
                {
                  id: `cse-sem-${i + 1}-sub-1-ch-2-l-1`,
                  title: i < 4 ? "Matrices and Determinants" : "Optimal Substructure",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `cse-sem-${i + 1}-sub-1-ch-2-l-2`,
                  title: i < 4 ? "Eigenvalues and Eigenvectors" : "Memoization Techniques",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Advanced Engineering Mathematics by Erwin Kreyszig" : "Introduction to Algorithms by CLRS",
              i < 4 ? "Higher Engineering Mathematics by B.S. Grewal" : "Algorithm Design by Kleinberg and Tardos"
            ],
            websites: [
              "https://ocw.mit.edu/courses/mathematics/",
              "https://www.khanacademy.org/math",
              "https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        },
        {
          id: `cse-sem-${i + 1}-sub-2`,
          name: i < 4 ? "Physics" : "Machine Learning",
          code: i < 4 ? `PHY10${i + 1}` : `CS50${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `cse-sem-${i + 1}-sub-2-ch-1`,
              title: i < 4 ? "Mechanics" : "Supervised Learning",
              hours: 8,
              marks: 15,
              lessons: [
                {
                  id: `cse-sem-${i + 1}-sub-2-ch-1-l-1`,
                  title: i < 4 ? "Newton's Laws" : "Regression Algorithms",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `cse-sem-${i + 1}-sub-2-ch-1-l-2`,
                  title: i < 4 ? "Conservation Laws" : "Classification Algorithms",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `cse-sem-${i + 1}-sub-2-ch-2`,
              title: i < 4 ? "Electromagnetism" : "Unsupervised Learning",
              hours: 10,
              marks: 20,
              lessons: [
                {
                  id: `cse-sem-${i + 1}-sub-2-ch-2-l-1`,
                  title: i < 4 ? "Electric Fields" : "Clustering Algorithms",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `cse-sem-${i + 1}-sub-2-ch-2-l-2`,
                  title: i < 4 ? "Magnetic Fields" : "Dimensionality Reduction",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Fundamentals of Physics by Halliday and Resnick" : "Pattern Recognition and Machine Learning by Bishop",
              i < 4 ? "University Physics by Young and Freedman" : "Machine Learning: A Probabilistic Perspective by Murphy"
            ],
            websites: [
              "https://ocw.mit.edu/courses/physics/",
              "https://www.khanacademy.org/science/physics",
              "https://www.coursera.org/specializations/machine-learning"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        }
      ]
    }))
  },
  {
    id: "ece",
    name: "Electronics & Communication Engineering",
    description: "Electronics and Communication Engineering involves the study of electronic devices, circuits, communication equipment, protocols, and systems.",
    semesters: Array.from({ length: 8 }, (_, i) => ({
      id: `ece-sem-${i + 1}`,
      number: i + 1,
      subjects: [
        {
          id: `ece-sem-${i + 1}-sub-1`,
          name: i < 4 ? "Circuit Theory" : "VLSI Design",
          code: i < 4 ? `EC10${i + 1}` : `EC40${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `ece-sem-${i + 1}-sub-1-ch-1`,
              title: i < 4 ? "DC Circuits" : "MOS Technology",
              hours: 10,
              marks: 15,
              lessons: [
                {
                  id: `ece-sem-${i + 1}-sub-1-ch-1-l-1`,
                  title: i < 4 ? "Ohm's Law" : "CMOS Process Technology",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `ece-sem-${i + 1}-sub-1-ch-1-l-2`,
                  title: i < 4 ? "Kirchhoff's Laws" : "Layout Design Rules",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `ece-sem-${i + 1}-sub-1-ch-2`,
              title: i < 4 ? "AC Circuits" : "Digital System Design",
              hours: 12,
              marks: 20,
              lessons: [
                {
                  id: `ece-sem-${i + 1}-sub-1-ch-2-l-1`,
                  title: i < 4 ? "Phasors" : "RTL Design",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `ece-sem-${i + 1}-sub-1-ch-2-l-2`,
                  title: i < 4 ? "Resonance" : "Synthesis and Optimization",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Circuit Theory by A. Chakrabarti" : "CMOS VLSI Design by Weste and Harris",
              i < 4 ? "Engineering Circuit Analysis by Hayt and Kemmerly" : "Digital Integrated Circuits by Rabaey"
            ],
            websites: [
              "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
              "https://www.allaboutcircuits.com/",
              "https://www.vlsisystemdesign.com/"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        },
        {
          id: `ece-sem-${i + 1}-sub-2`,
          name: i < 4 ? "Digital Electronics" : "Wireless Communication",
          code: i < 4 ? `EC20${i + 1}` : `EC50${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `ece-sem-${i + 1}-sub-2-ch-1`,
              title: i < 4 ? "Number Systems" : "Modulation Techniques",
              hours: 8,
              marks: 15,
              lessons: [
                {
                  id: `ece-sem-${i + 1}-sub-2-ch-1-l-1`,
                  title: i < 4 ? "Binary and Hex Systems" : "Digital Modulation",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `ece-sem-${i + 1}-sub-2-ch-1-l-2`,
                  title: i < 4 ? "Binary Arithmetic" : "Analog Modulation",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `ece-sem-${i + 1}-sub-2-ch-2`,
              title: i < 4 ? "Logic Gates" : "Multiple Access Techniques",
              hours: 10,
              marks: 20,
              lessons: [
                {
                  id: `ece-sem-${i + 1}-sub-2-ch-2-l-1`,
                  title: i < 4 ? "Basic Logic Gates" : "TDMA and FDMA",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `ece-sem-${i + 1}-sub-2-ch-2-l-2`,
                  title: i < 4 ? "Universal Gates" : "CDMA and OFDMA",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Digital Design by Morris Mano" : "Wireless Communications by Rappaport",
              i < 4 ? "Digital Logic and Computer Design by M. Morris Mano" : "Wireless Communications by Andreas Molisch"
            ],
            websites: [
              "https://www.nptelhrd.com/",
              "https://www.electronics-tutorials.ws/",
              "https://www.radio-electronics.com/"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        }
      ]
    }))
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    description: "Mechanical Engineering is the discipline that applies engineering, physics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems.",
    semesters: Array.from({ length: 8 }, (_, i) => ({
      id: `mech-sem-${i + 1}`,
      number: i + 1,
      subjects: [
        {
          id: `mech-sem-${i + 1}-sub-1`,
          name: i < 4 ? "Engineering Mechanics" : "Robotics",
          code: i < 4 ? `ME10${i + 1}` : `ME40${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `mech-sem-${i + 1}-sub-1-ch-1`,
              title: i < 4 ? "Statics" : "Robot Kinematics",
              hours: 10,
              marks: 15,
              lessons: [
                {
                  id: `mech-sem-${i + 1}-sub-1-ch-1-l-1`,
                  title: i < 4 ? "Force Systems" : "Forward Kinematics",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `mech-sem-${i + 1}-sub-1-ch-1-l-2`,
                  title: i < 4 ? "Equilibrium" : "Inverse Kinematics",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `mech-sem-${i + 1}-sub-1-ch-2`,
              title: i < 4 ? "Dynamics" : "Robot Control",
              hours: 12,
              marks: 20,
              lessons: [
                {
                  id: `mech-sem-${i + 1}-sub-1-ch-2-l-1`,
                  title: i < 4 ? "Kinematics" : "PID Control",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `mech-sem-${i + 1}-sub-1-ch-2-l-2`,
                  title: i < 4 ? "Kinetics" : "Adaptive Control",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Engineering Mechanics by R.C. Hibbeler" : "Introduction to Robotics by Craig",
              i < 4 ? "Vector Mechanics for Engineers by Beer and Johnston" : "Robot Modeling and Control by Spong"
            ],
            websites: [
              "https://ocw.mit.edu/courses/mechanical-engineering/",
              "https://www.khanacademy.org/science/physics",
              "https://www.robotics.org/"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        },
        {
          id: `mech-sem-${i + 1}-sub-2`,
          name: i < 4 ? "Thermodynamics" : "CAD/CAM",
          code: i < 4 ? `ME20${i + 1}` : `ME50${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `mech-sem-${i + 1}-sub-2-ch-1`,
              title: i < 4 ? "Laws of Thermodynamics" : "CAD Fundamentals",
              hours: 8,
              marks: 15,
              lessons: [
                {
                  id: `mech-sem-${i + 1}-sub-2-ch-1-l-1`,
                  title: i < 4 ? "First Law" : "Solid Modeling",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `mech-sem-${i + 1}-sub-2-ch-1-l-2`,
                  title: i < 4 ? "Second Law" : "Surface Modeling",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `mech-sem-${i + 1}-sub-2-ch-2`,
              title: i < 4 ? "Power Cycles" : "CAM Systems",
              hours: 10,
              marks: 20,
              lessons: [
                {
                  id: `mech-sem-${i + 1}-sub-2-ch-2-l-1`,
                  title: i < 4 ? "Carnot Cycle" : "CNC Programming",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `mech-sem-${i + 1}-sub-2-ch-2-l-2`,
                  title: i < 4 ? "Rankine Cycle" : "Toolpath Generation",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Thermodynamics: An Engineering Approach by Cengel and Boles" : "Computer-Aided Design and Manufacturing by Groover and Zimmers",
              i < 4 ? "Fundamentals of Engineering Thermodynamics by Moran et al." : "CAD/CAM: Computer-Aided Design and Manufacturing by Groover"
            ],
            websites: [
              "https://www.e-educatio,n.psu.edu/",
              "https://www.learnengineering.org/",
              "https://www.cadcamfunda.com/"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        }
      ]
    }))
  },
  {
    id: "civil",
    name: "Civil Engineering",
    description: "Civil Engineering deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, and buildings.",
    semesters: Array.from({ length: 8 }, (_, i) => ({
      id: `civil-sem-${i + 1}`,
      number: i + 1,
      subjects: [
        {
          id: `civil-sem-${i + 1}-sub-1`,
          name: i < 4 ? "Strength of Materials" : "Advanced Structural Analysis",
          code: i < 4 ? `CE10${i + 1}` : `CE40${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `civil-sem-${i + 1}-sub-1-ch-1`,
              title: i < 4 ? "Stress and Strain" : "Matrix Methods",
              hours: 10,
              marks: 15,
              lessons: [
                {
                  id: `civil-sem-${i + 1}-sub-1-ch-1-l-1`,
                  title: i < 4 ? "Axial Loading" : "Stiffness Method",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `civil-sem-${i + 1}-sub-1-ch-1-l-2`,
                  title: i < 4 ? "Torsion" : "Flexibility Method",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `civil-sem-${i + 1}-sub-1-ch-2`,
              title: i < 4 ? "Bending" : "Finite Element Method",
              hours: 12,
              marks: 20,
              lessons: [
                {
                  id: `civil-sem-${i + 1}-sub-1-ch-2-l-1`,
                  title: i < 4 ? "Beam Theory" : "Element Formulation",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `civil-sem-${i + 1}-sub-1-ch-2-l-2`,
                  title: i < 4 ? "Deflection" : "Numerical Integration",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Mechanics of Materials by Beer and Johnston" : "Matrix Structural Analysis by McGuire et al.",
              i < 4 ? "Strength of Materials by Timoshenko" : "Finite Element Method by Zienkiewicz"
            ],
            websites: [
              "https://ocw.mit.edu/courses/civil-and-environmental-engineering/",
              "https://www.engineeringtoolbox.com/",
              "https://www.iitk.ac.in/ce/test/index.htm"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        },
        {
          id: `civil-sem-${i + 1}-sub-2`,
          name: i < 4 ? "Surveying" : "Transportation Engineering",
          code: i < 4 ? `CE20${i + 1}` : `CE50${i + 1}`,
          credits: 4,
          chapters: [
            {
              id: `civil-sem-${i + 1}-sub-2-ch-1`,
              title: i < 4 ? "Chain Surveying" : "Highway Planning",
              hours: 8,
              marks: 15,
              lessons: [
                {
                  id: `civil-sem-${i + 1}-sub-2-ch-1-l-1`,
                  title: i < 4 ? "Instruments" : "Geometric Design",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `civil-sem-${i + 1}-sub-2-ch-1-l-2`,
                  title: i < 4 ? "Field Work" : "Pavement Design",
                  content: "Detailed lesson content goes here."
                }
              ]
            },
            {
              id: `civil-sem-${i + 1}-sub-2-ch-2`,
              title: i < 4 ? "Leveling" : "Traffic Engineering",
              hours: 10,
              marks: 20,
              lessons: [
                {
                  id: `civil-sem-${i + 1}-sub-2-ch-2-l-1`,
                  title: i < 4 ? "Methods" : "Traffic Flow Theory",
                  content: "Detailed lesson content goes here."
                },
                {
                  id: `civil-sem-${i + 1}-sub-2-ch-2-l-2`,
                  title: i < 4 ? "Contour Mapping" : "Intersection Design",
                  content: "Detailed lesson content goes here."
                }
              ]
            }
          ],
          references: {
            books: [
              i < 4 ? "Surveying by Moffitt and Bouchard" : "Highway Engineering by Khanna and Justo",
              i < 4 ? "Surveying and Levelling by N.N. Basak" : "Traffic Engineering and Transport Planning by Kadiyali"
            ],
            websites: [
              "https://nptel.ac.in/courses/105/",
              "https://www.engineeringcivil.com/",
              "https://www.fhwa.dot.gov/"
            ]
          },
          marksDistribution: {
            internal: 30,
            external: 50,
            practical: 20
          }
        }
      ]
    }))
  }
];

export default engineeringData;
