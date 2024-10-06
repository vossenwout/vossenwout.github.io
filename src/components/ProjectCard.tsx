import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
} from "react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: any) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6 ">
      <div className="p-6">
        {/* Title at the top */}
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover rounded-md"
          />
        </div>
        {/* Description */}
        <p className="text-gray-600 mb-4">{project.description}</p>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(
            (
              tech:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined,
              index: Key | null | undefined
            ) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                {tech}
              </span>
            )
          )}
        </div>
        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            Visit Site
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
