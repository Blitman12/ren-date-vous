const { Date } = require('../models');

const dateIdeas = [
  {
    title: 'Aquarium',
    description: 'Go to an aquarium and take at least 5 selfies!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Theatres',
    description: 'Choose a play or a movie!',
    categories: 'indoor',
    image: '',
    reviews: ''
  },
  {
    title: 'Museum',
    description: 'Go to a local Museum!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Hiking',
    description: 'Go on a hike and take a few scenic pictures!',
    categories: 'Outdoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Dinner',
    description: 'Keep it classic and classy yet daring, find a restuaraunt nearby niether person has tried!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Cooking Classes',
    description: 'Find a local cooking class and learn a new recipe!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Star Gazing',
    description: 'On a clear night, lay outside and relax with a view of the stars.',
    categories: 'Outdoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Picnic',
    description: 'Gather some lunch favs and go enjoy a nice picnic!',
    categories: 'Outdoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Random Meal',
    description: 'Find a random recipe you have never made or had before and enjoy some new food right in your kitchen!',
    categories: 'Home',
    image: '',
    reviews: ''
  },
  {
    title: 'Pillow Fort',
    description: 'Who can build the better fort? You decide! Build a pillow fort either with, or against, one another. May the odds be ever in your favor.',
    categories: 'Home',
    image: '',
    reviews: ''
  },
  {
    title: 'Horse Back Riding',
    description: 'Find a local business and go on a trail on horseback!',
    categories: 'Outdoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Peaceful Walk',
    description: 'Go on a peaceful walk.',
    categories: 'Home',
    image: '',
    reviews: ''
  },
  {
    title: 'Bowling',
    description: 'Who is the better bowler? One way to find out!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Kayaking',
    description: 'Go kayaking and enjoy nature!',
    categories: 'Wild',
    image: '',
    reviews: ''
  },
  {
    title: 'Sky Diving',
    description: 'Go for the thrill of a lifetime! Please do remember to pull the parachute chord.',
    categories: 'Wild',
    image: '',
    reviews: ''
  },
  {
    title: 'Ice Skating',
    description: 'Go shred the ice! Bring a jacket it is a bit chilly.',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Fishing',
    description: 'Go put some food on your table with fishing! Or release it, whichever is legal.',
    categories: 'Outdoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Wine Tasting',
    description: 'Go taste some new wine at a local orchard, restaurant, or event. Drink responsibly!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Paint Classes',
    description: 'Ever wanted to learn to paint? Find your local painting class! P.S: May contain alcohol.',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Axe Throwing',
    description: 'Let loose some pent up work frustration! See who can throw an axe the best, safely of course.',
    categories: 'Wild',
    image: '',
    reviews: ''
  },
  {
    title: 'Shooting',
    description: 'Go shoot some guns, whether owned or rented! Make sure you wear ear/eye protection!',
    categories: 'Wild',
    image: '',
    reviews: ''
  },
  {
    title: 'Archery',
    description: 'Time to tap into your inner medival ranger! Go shoot a bow, whether you own one or rent one!',
    categories: 'Wild',
    image: '',
    reviews: ''
  },
  {
    title: 'Pool',
    description: 'Time to relax, go to your local water park or community pool and relax under the sun!',
    categories: 'Outdoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Lazer tag',
    description: 'Who is the best at lazer tag? Time to find out!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Gym',
    description: 'Is fitness your passion? Go hit the weights and set a new PR!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Arcade',
    description: 'Go to a local arcade and see how many tickets you win! Buy the other person a gift with your tickets.',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Go Karts',
    description: 'Find your local kart track and go burn some rubber!',
    categories: 'Wild',
    image: '',
    reviews: ''
  },
  {
    title: 'Dog Park',
    description: 'If you have dogs, time to treat them too! Go let them make new friends!',
    categories: 'Outdoors',
    image: '',
    reviews: ''
  },
  {
    title: 'Goodwill Gamble',
    description: 'Buy the other an outfit from goodwill (and vice versa) and go to a restaraunt in style! The one with the best reactions wins!',
    categories: 'Wild',
    image: '',
    reviews: ''
  },
  {
    title: 'Triva Night',
    description: 'Crack out a triva app/game, time to see who really knows more!',
    categories: 'Home',
    image: '',
    reviews: ''
  },
  {
    title: 'Art Exhibit',
    description: 'Go to your local Art Exhibit and enjoy the scenery!',
    categories: 'Indoors',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
  {
    title: '',
    description: '',
    categories: '',
    image: '',
    reviews: ''
  },
];

// const seedProducts = () => Product.bulkCreate(productData);

module.exports = dateIdeas;