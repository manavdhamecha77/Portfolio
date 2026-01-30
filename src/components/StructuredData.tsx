export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manav Dhamecha",
    url: "https://manav-dhamecha.vercel.app",
    image: "https://manav-dhamecha.vercel.app/profile.jpg",
    sameAs: [
      "https://github.com/manavdhamecha77",
      "https://linkedin.com/in/manavdhamecha",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "NIT Surat",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Sardar Vallabhbhai National Institute of Technology",
    },
    knowsAbout: [
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "React",
      "Next.js",
      "Node.js",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}