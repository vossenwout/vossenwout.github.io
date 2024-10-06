import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PublicationCard from "@/components/PublicationCard";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "CREV",
      description:
        "CREV is a Go-based CLI tool designed to get AI-powered code reviews from your terminal. The idea came from my frustration with manually copying code into ChatGPT or Claude to get feedback on my projects. Although ChatGPT could provide me with useful suggestions, it lacked the full context of my project, which often resulted in incomplete reviews since it didn’t know my entire directory structure and the content of all the files. I wanted to fix that, while also eliminating the constant switching between VSCode and my browser.",
      url: "https://crevcli.com",
      githubUrl: "https://github.com/vossenwout/crevcli",
      image: "/images/crev.png",
      launchDate: "October 2024",
      technologies: [
        "Go",
        "GoReleaser",
        "GitHub Actions",
        "OpenAI",
        "NextJS",
        "Tailwind CSS",
        "Google Cloud (Firebase)",
      ],
    },
    {
      id: 2,
      title: "PsyScribe",
      description:
        "An AI mental health assistant that helps you organize your thoughts and feelings. This project grew out of my interest to combine my psychology background with my software engineering skills. With the OpenAI api just released, I thought it was the perfect time to start this project.",
      url: "https://psyscribe.com",
      image: "/images/psyscribe.png",
      launchDate: "October 2023",
      technologies: ["React", "Chakra UI", "ChatGPT", "Flask", "Google Cloud (Firebase)"],
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Zero-shot recommendation as language modeling (Sileo, Vossen, Raymaekers, 2022)",
      description:
        "This grew out of a bachelor thesis I did together with a friend. We wrote this when GPT-3 was just released and compared the capabilities of llms to generate movie recommendations with specialized matrix factorization models. It eventually got published at European Conference on Information Retrieval.",
      url: "https://link.springer.com/chapter/10.1007/978-3-030-99739-7_26",
    },
    {
      id: 2,
      title:
        "The effect of personalizing a psychotherapy conversational agent on therapeutic bond and usage intentions (Vossen, Szymanski, Verbert, 2023)",
      description:
        "For my computer science master thesis I wanted to combine my psychology background with my AI skills. I developed a personalizabe chatbot agent that aimed at helping people with their mental health. The topic of this paper was to analyze the effect that personalization of such a psychotherapy conversational agent has on the therapeutic bond and usage intentions of the users. I got the opportunity to present this project at IUI 2024 in South Carolina 🤠",
      url: "https://dl.acm.org/doi/abs/10.1145/3640543.3645195",
    },
  ];

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-gray-100 pt-10 pb-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Wout Vossen</h1>
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://www.linkedin.com/in/wout-vossen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-600" />
          </a>
          <a href="https://github.com/vossenwout" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/@pookiehd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-2xl text-red-600" />
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Welcome</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <Image
              src="/images/wout.JPG"
              alt="Wout Vossen"
              width={800}
              height={800}
              className="object-cover rounded-md"
            />
          </div>
          <div className="md:w-2/3 md:pl-10">
            <p className="text-gray-700 mb-4">
              Hello, welcome to my personal homepage! I love building products at the intersection
              of AI and Software Engineering. This page showcases some of my personal projects and
              experiences.
            </p>
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bachelor&apos;s in Psychology, KULeuven, 2015-2018</li>
              <li>Bachelor&apos;s in Computer Science, KULeuven, 2018-2021</li>
              <li>
                Master&apos;s in Engineering, Computer Science (Option AI), KULeuven, 2021-2023
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="bg-gray-50 py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">My professional experience</h2>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-semibold">Data Scientist</h3>
                <p className="text-gray-600">CM (Christelijke Mutualiteit)</p>
              </div>
              <span className="text-gray-500">2024 - Present</span>
            </div>
            <p className="text-gray-700 mb-4">
              At CM, I develop AI-driven solutions to enhance organizational processes. Our team
              handles the entire product lifecycle, focusing mainly on NLP projects.
            </p>
            <h4 className="text-xl font-semibold mb-2">Key Contributions:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Built and deployed an API for email forwarding and reply suggestions.</li>
              <li>Data extraction from medical documents and reports.</li>
              <li>
                Developed an AI assistant using RAG to help employees understand internal
                documentation.
              </li>
              <li>Currently designing an AI assistant framework to build all future assistants.</li>
            </ul>
            <h4 className="text-xl font-semibold mt-4 mb-2">Most Used Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">Python</span>
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">FastAPI</span>
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                NLP (TensorFlow, Hugging Face)
              </span>
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                GenAI (OpenAI, Anthropic)
              </span>
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                AWS (SageMaker, ECS, Bedrock, Lambda, S3, ...)
              </span>
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">Terraform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="bg-gray-50 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">I also wrote some papers</h2>
          <div className="space-y-6">
            {publications.map((paper) => (
              <PublicationCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      </section>
      {/* Hobbies Section */}
      <section id="hobbies" className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">What I like to do besides coding</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Gym (4-5 times/week) 💪</li>
          <li>Investing 💸</li>
          <li>Manga & Anime 🇯🇵</li>
          <li>Electronic Music (mainly harderstyles) 🕺</li>
          <li>Gaming (Elden Ring, CS, Dragon Quest) 🕹️</li>
        </ul>
      </section>
      {/* Projects Section */}
      <section id="projects" className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Personal Projects</h2>
        <p className="text-gray-700 mb-6">
          I enjoy working on personal projects that solve problems I&apos;m facing or find
          interesting. Here are some projects I&apos;ve developed and launched publicly.
        </p>
        <div className="flex-col justify-center items-center gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
