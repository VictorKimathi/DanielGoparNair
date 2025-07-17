// Portfolio.js
import React from 'react';

const portfolioItems = [
  {
    title: "When Family Recipes Exist Only by Memory",
    description: "Some memories are carried not in stories, but in the air. A trace of butter in a hot pan or the warm sweetness of cardamom can pull someone back to a childhood kitchen where a meal was served without ceremony. These moments often carry more emotion than photographs. While the color of a curtain or the shape of a plate may fade, the smell of garlic, ghee, or slow-cooked lentils can stay vivid for decades.",
    role: "Freelance Food Writer",
    date: "March 17 2025",
    href: "When_Family_Recipes_Exist_Only_by_Memory.pdf"
  },
  {
    title: "5 Comfort Dishes That Start with a Can of Fish",
    description: "Comfort food doesn’t always begin with a recipe passed down or a long list of fresh ingredients. It often begins with an overlooked item in the pantry, like a can of tuna, salmon, or sardines that’s been sitting in plain sight. Long tied to quick lunches or convenience cooking, canned fish has more to offer than most expect. It brings warmth, memory, and a kind of depth that doesn't need much else.",
    role: "Freelance Food Writer",
    date: "April 28 2025",
    href: "5_Comfort_Dishes_That_Start_with_a_Can_of_Fish.pdf"
  },
  {
    title: "What You’re Actually Paying for When You Buy Fancy Butter",
    description: "Walk through the dairy aisle these days, and the butter section tells a new story. Alongside familiar store-brand sticks are bars wrapped in parchment or foil, labeled with words like “European-style” or “cultured,” and priced two or three times higher. These options signal more than a simple pantry staple. They suggest that butter has become a place to express care, taste, and sometimes even status. Butter has shifted from background to foreground, with its role in both cooking and finishing dishes re-evaluated in kitchens across the country. Once thought of as simple and uniform, butter now carries the mark of craftsmanship and culinary choice.",
    role: "Content Creator & Editor",
    date: "June 20 2025",
    href: "What_You’re_Actually_Paying_for_When_You_Buy_Fancy_Butter.pdf"
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
