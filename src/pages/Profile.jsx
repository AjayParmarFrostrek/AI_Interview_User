import { useState } from "react";

export default function Profile() {
  const [edit, setEdit] = useState(false);

  const [data, setData] = useState({
    name: "John Doe",
    role: "Senior Software Engineer",
    joined: "January 2024",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love solving complex problems and mentoring junior developers.",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "johndoe.dev",
    linkedin: "linkedin.com/in/johndoe",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Corp",
        period: "2021 - Present",
        desc: "Leading frontend development for enterprise applications.",
      },
      {
        title: "Software Engineer",
        company: "StartupXYZ",
        period: "2019 - 2021",
        desc: "Built and maintained React-based web applications.",
      },
    ],
    education: "B.S. Computer Science, Stanford University",
    certifications: [
      "AWS Certified Developer",
      "Google Cloud Professional",
    ],
    skills: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL"],
  });

  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl border p-6 space-y-6">

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200" />

          <div className="flex-1">
            {edit ? (
              <>
                <input
                  value={data.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="text-lg font-semibold border rounded px-2 py-1 w-full"
                />
                <input
                  value={data.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="mt-1 border rounded px-2 py-1 w-full"
                />
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold">{data.name}</h2>
                <p className="text-sm text-gray-600">{data.role}</p>
                <p className="text-xs text-gray-400">Joined {data.joined}</p>
              </>
            )}
          </div>

          <button
            onClick={() => setEdit(!edit)}
            className="border rounded px-3 py-1 text-sm hover:bg-gray-100"
          >
            {edit ? "Save" : "Edit"}
          </button>
        </div>

        {/* Bio */}
        {edit ? (
          <textarea
            value={data.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            className="w-full border rounded p-2 text-sm"
          />
        ) : (
          <p className="text-sm text-gray-700">{data.bio}</p>
        )}

        {/* Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
          {edit ? (
            <>
              <input value={data.email} onChange={(e) => handleChange("email", e.target.value)} className="border rounded px-2 py-1" />
              <input value={data.phone} onChange={(e) => handleChange("phone", e.target.value)} className="border rounded px-2 py-1" />
              <input value={data.location} onChange={(e) => handleChange("location", e.target.value)} className="border rounded px-2 py-1" />
              <input value={data.website} onChange={(e) => handleChange("website", e.target.value)} className="border rounded px-2 py-1" />
              <input value={data.linkedin} onChange={(e) => handleChange("linkedin", e.target.value)} className="border rounded px-2 py-1" />
            </>
          ) : (
            <>
              <div>📧 {data.email}</div>
              <div>📞 {data.phone}</div>
              <div>📍 {data.location}</div>
              <div>🌐 {data.website}</div>
              <div>🔗 {data.linkedin}</div>
            </>
          )}
        </div>

        <hr />

        {/* Work Experience */}
        <section>
          <h3 className="font-semibold text-sm mb-2">Work Experience</h3>
          <div className="space-y-3">
            {data.experience.map((exp, i) => (
              <div key={i}>
                {edit ? (
                  <>
                    <input
                      value={exp.title}
                      onChange={(e) => {
                        const updated = [...data.experience];
                        updated[i].title = e.target.value;
                        setData({ ...data, experience: updated });
                      }}
                      className="border rounded px-2 py-1 w-full mb-1"
                    />
                    <input
                      value={exp.company}
                      onChange={(e) => {
                        const updated = [...data.experience];
                        updated[i].company = e.target.value;
                        setData({ ...data, experience: updated });
                      }}
                      className="border rounded px-2 py-1 w-full mb-1"
                    />
                    <input
                      value={exp.period}
                      onChange={(e) => {
                        const updated = [...data.experience];
                        updated[i].period = e.target.value;
                        setData({ ...data, experience: updated });
                      }}
                      className="border rounded px-2 py-1 w-full mb-1"
                    />
                    <textarea
                      value={exp.desc}
                      onChange={(e) => {
                        const updated = [...data.experience];
                        updated[i].desc = e.target.value;
                        setData({ ...data, experience: updated });
                      }}
                      className="border rounded px-2 py-1 w-full"
                    />
                  </>
                ) : (
                  <>
                    <p className="font-medium text-sm">
                      {exp.title} — <span className="text-gray-500">{exp.company}</span>
                    </p>
                    <p className="text-xs text-gray-400">{exp.period}</p>
                    <p className="text-sm text-gray-600">{exp.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* Education */}
        <section>
          <h3 className="font-semibold text-sm mb-2">Education</h3>
          {edit ? (
            <input
              value={data.education}
              onChange={(e) => handleChange("education", e.target.value)}
              className="border rounded px-2 py-1 w-full"
            />
          ) : (
            <p className="text-sm">{data.education}</p>
          )}
        </section>

        <hr />

        {/* Certifications */}
        <section>
          <h3 className="font-semibold text-sm mb-2">Certifications</h3>
          <div className="flex flex-wrap gap-2">
            {data.certifications.map((cert, i) => (
              edit ? (
                <input
                  key={i}
                  value={cert}
                  onChange={(e) => {
                    const updated = [...data.certifications];
                    updated[i] = e.target.value;
                    setData({ ...data, certifications: updated });
                  }}
                  className="border rounded px-2 py-1 text-xs"
                />
              ) : (
                <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                  {cert}
                </span>
              )
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="font-semibold text-sm mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 border rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
