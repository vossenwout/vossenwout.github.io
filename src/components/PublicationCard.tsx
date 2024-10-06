export default function PublicationCard({ paper }: any) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-2xl font-semibold mb-2">{paper.title}</h3>
      <p className="text-gray-700 mb-4">{paper.description}</p>
      <a href={paper.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        Link to publication
      </a>
    </div>
  );
}
