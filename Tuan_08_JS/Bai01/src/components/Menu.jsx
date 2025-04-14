// components/Menu.jsx
import React from 'react';
import RecipeCard from './RecipeCard';

const Menu = () => {
  const summerRecipes = [
    { title: 'Italian-style tomato', img: '/images/italian-tomato.jpg' },
    { title: 'Spaghetti with vegetables', img: '/images/spaghetti.jpg' },
    { title: 'Lotus delight salad', img: '/images/lotus-salad.jpg' },
    { title: 'Snack cakes', img: '/images/snack-cakes.jpg' },
  ];

  const videoRecipes = [
    { title: 'Salad with cabbage and shrimp', img: '/images/salad-cabbage.jpg' },
    { title: 'Stuffed glove beans, shrimp and potatoes', img: '/images/stuffed-glove.jpg' },
    { title: 'Sunny side up fried egg', img: '/images/sunny-egg.jpg' },
    { title: 'Lotus delight salad', img: '/images/lotus-salad-delight.jpg' },
  ];

  const editorPicks = [
    { title: 'Stuffed sticky rice ball', img: '/images/sticky-rice.jpg', author: 'Jennifer King', description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy glutinous rice and a flavorful surprise filling.' },
    { title: 'Strawberry smoothie', img: '/images/strawberry-smoothie.jpg', author: 'Matthew Martinez', description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers.' },
    { title: 'Latte art', img: '/images/latte-art.jpg', author: 'Sarah Hill', description: 'Latte art: the skillful craft of creating captivating designs on the surface of a latte.' },
    { title: 'Butter fried noodles', img: '/images/butter-noodles.jpg', author: 'Julie Perez', description: 'Butter fried noodles: Savory noodles cooked in butter with spices and stir fry.' },
  ];

  return (
    <div className="py-8 bg-gray-50">
      {/* This Summer Recipes Section */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-pink-500 mb-2">This Summer Recipes</h2>
        <p className="text-gray-600 mb-6">We have all your Independence Day sweets covered!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summerRecipes.map((recipe, index) => (
            <RecipeCard key={index} title={recipe.title} img={recipe.img} />
          ))}
        </div>
      </section>

      {/* Recipes With Videos Section */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-pink-500 mb-2">Recipes With Videos</h2>
        <p className="text-gray-600 mb-6">Cooking Up Culinary Creations with Step-by-Step Videos</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoRecipes.map((recipe, index) => (
            <RecipeCard key={index} title={recipe.title} img={recipe.img} />
          ))}
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-2">Editor's Pick</h2>
        <p className="text-gray-600 mb-6">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {editorPicks.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              img={recipe.img}
              author={recipe.author}
              description={recipe.description}
              isEditorPick
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;