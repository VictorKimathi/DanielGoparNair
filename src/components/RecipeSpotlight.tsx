import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, UsersIcon } from 'lucide-react';
const recipes = [{
  id: 1,
  title: 'Cardamom-Infused Pear Galette with Rosemary Crust',
  image: 'https://images.unsplash.com/photo-1562007908-17c67e878c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  prepTime: '45 min',
  servings: '8',
  difficulty: 'Intermediate',
  description: 'A rustic free-form tart that balances sweet pears with aromatic herbs and warm spices.',
  url: '#'
}, {
  id: 2,
  title: 'Pacific Northwest Seafood Stew with Saffron & Fennel',
  image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  prepTime: '60 min',
  servings: '6',
  difficulty: 'Advanced',
  description: "A celebration of Oregon's coastal bounty with layers of complex flavors and a golden broth.",
  url: '#'
}, {
  id: 3,
  title: 'Hazelnut & Wild Mushroom Salad with Apple Cider Vinaigrette',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  prepTime: '25 min',
  servings: '4',
  difficulty: 'Easy',
  description: 'A seasonal celebration of Pacific Northwest ingredients with contrasting textures and flavors.',
  url: '#'
}];
const RecipeCard = ({
  recipe
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-[#8ba888] border-opacity-10 h-full flex flex-col">
      <div className="relative h-48">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="inline-block bg-[#f4b942] text-[#2d4a3a] text-xs font-bold px-2 py-1 rounded">
            {recipe.difficulty}
          </span>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-serif text-xl font-bold text-[#2d4a3a] mb-2">
          {recipe.title}
        </h3>
        <p className="text-[#2d4a3a] text-sm mb-4">{recipe.description}</p>
        <div className="flex items-center text-sm text-[#2d4a3a] space-x-4 mb-4">
          <div className="flex items-center">
            <ClockIcon size={16} className="mr-1" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center">
            <UsersIcon size={16} className="mr-1" />
            <span>Serves {recipe.servings}</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <a href={recipe.url} className="block w-full text-center bg-[#faf6f2] border border-[#d4704a] text-[#d4704a] font-medium py-2 rounded-md hover:bg-[#d4704a] hover:text-white transition duration-300">
          View Recipe
        </a>
      </div>
    </div>;
};
const RecipeSpotlight = () => {
  return <section className="py-16 md:py-24 bg-[#faf6f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2d4a3a] mb-4">
            Recipe Spotlight
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#2d4a3a] font-serif">
            Seasonal recipes developed and tested in my Portland kitchen.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/recipes" className="inline-block bg-[#d4704a] text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">
            Browse All Recipes
          </Link>
        </div>
      </div>
    </section>;
};
export default RecipeSpotlight;