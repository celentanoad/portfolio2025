export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">My Story</h1>
        <div className="space-y-6 text-gray-700">
        <p>
          I am a software developer who enjoys finding solutions to problems and seeking out answers from different perspectives. Coming from a background in social work, I am passionate about improving efficiency and motivated by making things work for people. I strive to always learn more through communicating with others and working with a team.
        </p>
        <p>
          Prior to my decision to make a career change, I was working at a treatment center for foster children. While I found my job to be extremely rewarding and impactful, I knew that it was not a career I would be happy with for the rest of my life. Once I started to learn the basics of programming, I became passionate about starting a new career in this field.
        </p>
        <div className="mt-8">
          <a 
            href="https://docs.google.com/document/d/1HrXDHFm8Q0NbEfXLf1r2HSvjqtD1At1TgQUYoj6ECXg/edit?usp=sharing"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 h-11 px-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Languages/Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Angular', 'Ember', 'HTML/CSS'].map((skill) => (
                <span key={skill} className="bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200 rounded-full px-3 py-1 text-sm text-gray-800 hover:from-blue-200 hover:to-green-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Tools & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'CircleCI', 'Terraform', 'Docker', 'AWS', 'Jenkins'].map((skill) => (
                <span key={skill} className="bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200 rounded-full px-3 py-1 text-sm text-gray-800 hover:from-blue-200 hover:to-green-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Testing</h3>
            <div className="flex flex-wrap gap-2">
              {['Cypress', 'Jest', 'Spectator'].map((skill) => (
                <span key={skill} className="bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200 rounded-full px-3 py-1 text-sm text-gray-800 hover:from-blue-200 hover:to-green-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'MongoDB'].map((skill) => (
                <span key={skill} className="bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200 rounded-full px-3 py-1 text-sm text-gray-800 hover:from-blue-200 hover:to-green-200 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
