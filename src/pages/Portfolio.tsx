// Portfolio.js
import React from 'react';

const portfolioItems = [
  {
    title: "In-Depth Restaurant Reviews",
    description: "Wrote detailed, voice-driven reviews for Oregon Eats and Spoon & Savor that combined sensory storytelling with journalistic research.",
    role: "Freelance Food Writer",
    client: "Oregon Eats / Spoon & Savor",
    year: "2017 – Present",
    tags: ["Food Writing", "SEO", "Journalism"]
  },
  {
    title: "Ingredient Spotlights & Tutorials",
    description: "Created cooking guides and tutorials highlighting seasonal ingredients and practical kitchen skills.",
    role: "Freelance Food Writer",
    client: "Daily Foodie",
    year: "2017 – Present",
    tags: ["Recipe Writing", "Tutorials", "Culinary"]
  },
  {
    title: "The Pantry Table Blog",
    description: "Created a blog dedicated to accessible home cooking. Handled recipes, photography, editing, and guest collaborations.",
    role: "Content Creator & Editor",
    client: "Self-initiated project",
    year: "2015 – 2017",
    tags: ["Blogging", "WordPress", "Food Photography"]
  },
  {
    title: "Recipe Volunteer - Meals for All",
    description: "Contributed recipes tailored to community needs. Focused on affordable, nutritious meal plans.",
    role: "Volunteer Writer",
    client: "Meals for All Project",
    year: "Ongoing",
    tags: ["Community", "Nutrition", "Volunteer Work"]
  },
  {
    title: "Judge at Portland Food Cart Awards",
    description: "Selected and rated Portland's best food carts, emphasizing originality, taste, and cultural impact.",
    role: "Food Awards Judge",
    client: "Portland Events",
    year: "Ongoing",
    tags: ["Curation", "Food Trends", "Cultural Writing"]
  },
];

const Portfolio = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2d4a3a] mb-10 text-center">Portfolio</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-[#2d4a3a] mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 italic mb-1">{item.role}</p>
              <p className="text-sm text-gray-600 mb-2">{item.client} • {item.year}</p>
              <p className="text-gray-700 mb-3">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#e0d8cf] text-[#2d4a3a] px-3 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
