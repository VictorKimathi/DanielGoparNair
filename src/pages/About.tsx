import React from 'react';

const About = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen w-full py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center md:text-left">
          <img
            src="profile.jpg"
            alt="Daniel Nair"
            className="w-48 h-48 rounded-full object-cover mb-4 shadow-md"
          />
          <h1 className="text-3xl font-bold text-[#2d4a3a] mb-2">Daniel Nair</h1>
          <p className="text-[#2d4a3a] mb-1">4252 NE Beaumead St, Hillsboro, OR 97124-6842</p>
          <p className="text-[#2d4a3a] mb-1">(201) 878-4506</p>
          <p className="text-[#2d4a3a]">danielnair861@gmail.com</p>
        </div>

        {/* Bio Section */}
        <div>
          <h2 className="text-2xl font-semibold text-[#2d4a3a] mb-3">Professional Summary</h2>
          <p className="text-[#2d4a3a] mb-6">
            Food writer with over eight years of experience creating restaurant reviews,
            cooking guides, and culinary features for online and print publications. Skilled in
            transforming everyday food moments into compelling narratives that resonate with
            diverse audiences. Strong foundation in research-based writing, recipe development,
            and editorial planning.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d4a3a] mb-3">Experience</h2>
          <div className="mb-4">
            <p className="font-semibold text-[#2d4a3a]">Freelance Food Writer</p>
            <p className="text-sm italic text-[#2d4a3a]">Remote / Multiple Clients | 2017 – Present</p>
            <ul className="list-disc ml-6 text-[#2d4a3a]">
              <li>Write in-depth restaurant reviews, ingredient spotlights, and home cooking tutorials.</li>
              <li>Contributor to Oregon Eats, Spoon & Savor, and Daily Foodie.</li>
              <li>Collaborate with editors to pitch and develop seasonal content.</li>
              <li>Use SEO best practices to increase article visibility.</li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-[#2d4a3a]">Content Creator & Blog Editor</p>
            <p className="text-sm italic text-[#2d4a3a]">The Pantry Table Blog | 2015 – 2017</p>
            <ul className="list-disc ml-6 text-[#2d4a3a]">
              <li>Managed weekly blog on home cooking.</li>
              <li>Developed/tested recipes and photographed dishes.</li>
              <li>Built loyal readership and collaborated with local chefs.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-[#2d4a3a] mb-3">Education</h2>
          <p className="text-[#2d4a3a] mb-6">B.A. in Creative Writing — Portland State University, 2015</p>

          <h2 className="text-2xl font-semibold text-[#2d4a3a] mb-3">Skills</h2>
          <p className="text-[#2d4a3a] mb-6">
            Food journalism, Recipe writing, SEO content creation, WordPress, AP style, Interviewing chefs, Cultural research, Newsletter writing
          </p>

          <h2 className="text-2xl font-semibold text-[#2d4a3a] mb-3">Additional Activities</h2>
          <ul className="list-disc ml-6 text-[#2d4a3a]">
            <li>Volunteer Recipe Writer, Meals for All Project</li>
            <li>Judge, Portland Food Cart Awards</li>
            <li>Conversational in Hindi and Spanish</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
