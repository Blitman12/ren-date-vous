const { Date } = require('../models');
import aquarium from "../seeds/images/aquarium.jpg";
import theater from "../seeds/images/theater.jpg";
import museum from "../seeds/images/museum.jpg";
import hiking from "../seeds/images/hiking.jpg";
import dinner from "../seeds/images/Dinner.jpg";
import cookingClasses from "../seeds/images/cooking-classes.jpg";
import cookingDinner from "../seeds/images/cooking-dinner.jpg";
import StarGazing from "../seeds/images/starGazing.jpg";
import picnic from "../seeds/images/picnic";
import shooting from "../seeds/images/Shooting.jpg";
import art from "../seeds/images/art";
import archery from "../seeds/images/archery";
import axe from "../seeds/images/axe-throwing.jpg";
import pillowFort from "../seeds/images/pillowFort.jpg";
import horseback from "../seeds/images/horseback.jpg";
import walk from "../seeds/images/walk.jpg";
import bowling from "../seeds/images/bowling.jpg";
import skydiving from "../seeds/images/skydiving.jpg";
import kayaking from "../seeds/images/kayaking.jpg";
import fishing from "../seeds/images/fishing.jpg";
import iceSkating from "../seeds/images/ice-skating.jpg";
import wine from "../seeds/images/wine.jpg";
import paint from "../seeds/image/paint.jpg";
import pool from "../seeds/images/pool.jpg";
import trivia from "../seeds/images/trivia.jpg";
import clothing from "../seeds/images/clothing.jpg";
import dog from "../seeds/images/dog.jpg";
import karts from "../seeds/images/karts.jpg";
import arcade from "../seeds/images/arcade.jpg";
import lazer from "../seeds/images/lazerTag.jpg";
import gym from "../seeds/images/gym.jpg";




const dateIdeas = [
  {
    title: 'Aquarium',
    description: 'Go to an aquarium and take at least 5 selfies!',
    categories: 'Indoors',
    image: {aquarium},
    reviews: ''
  },
  {
    title: 'Theatres',
    description: 'Choose a play or a movie!',
    categories: 'indoor',
    image: {theater},
    reviews: ''
  },
  {
    title: 'Museum',
    description: 'Go to a local Museum!',
    categories: 'Indoors',
    image: {museum},
    reviews: ''
  },
  {
    title: 'Hiking',
    description: 'Go on a hike and take a few scenic pictures!',
    categories: 'Outdoors',
    image: {hiking},
    reviews: ''
  },
  {
    title: 'Dinner',
    description: 'Keep it classic and classy yet daring, find a restaurant nearby neither person has tried!',
    categories: 'Indoors',
    image: {dinner},
    reviews: ''
  },
  {
    title: 'Cooking Classes',
    description: 'Find a local cooking class and learn a new recipe!',
    categories: 'Indoors',
    image: {cookingClasses},
    reviews: ''
  },
  {
    title: 'Star Gazing',
    description: 'On a clear night, lay outside and relax with a view of the stars.',
    categories: 'Outdoors',
    image: {StarGazing},
    reviews: ''
  },
  {
    title: 'Picnic',
    description: "Gather some lunch favorite's and go enjoy a nice picnic!",
    categories: 'Outdoors',
    image:{picnic},
    reviews: ''
  },
  {
    title: 'Random Meal',
    description: 'Find a random recipe you have never made or had before and enjoy some new food right in your kitchen!',
    categories: 'Home',
    image: {cookingDinner},
    reviews: ''
  },
  {
    title: 'Pillow Fort',
    description: 'Who can build the better fort? You decide! Build a pillow fort either with, or against, one another. May the odds be ever in your favor.',
    categories: 'Home',
    image: {pillowFort},
    reviews: ''
  },
  {
    title: 'Horse Back Riding',
    description: 'Find a local business and go on a trail on horseback!',
    categories: 'Outdoors',
    image:{horseback},
    reviews: ''
  },
  {
    title: 'Peaceful Walk',
    description: 'Go on a peaceful walk.',
    categories: 'Home',
    image: {walk},
    reviews: ''
  },
  {
    title: 'Bowling',
    description: 'Who is the better bowler? One way to find out!',
    categories: 'Indoors',
    image: {bowling},
    reviews: ''
  },
  {
    title: 'Kayaking',
    description: 'Go kayaking and enjoy nature!',
    categories: 'Wild',
    image: {kayaking},
    reviews: ''
  },
  {
    title: 'Sky Diving',
    description: 'Go for the thrill of a lifetime! Please do remember to pull the parachute chord.',
    categories: 'Wild',
    image: {skydiving},
    reviews: ''
  },
  {
    title: 'Ice Skating',
    description: 'Go shred the ice! Bring a jacket it is a bit chilly.',
    categories: 'Indoors',
    image: {iceSkating},
    reviews: ''
  },
  {
    title: 'Fishing',
    description: 'Go put some food on your table with fishing! Or release it, whichever is legal.',
    categories: 'Outdoors',
    image: {fishing},
    reviews: ''
  },
  {
    title: 'Wine Tasting',
    description: 'Go taste some new wine at a local orchard, restaurant, or event. Drink responsibly!',
    categories: 'Indoors',
    image: {wine},
    reviews: ''
  },
  {
    title: 'Paint Classes',
    description: 'Ever wanted to learn to paint? Find your local painting class! P.S: May contain alcohol.',
    categories: 'Indoors',
    image: {paint},
    reviews: ''
  },
  {
    title: 'Axe Throwing',
    description: 'Let loose some pent up work frustration! See who can throw an axe the best, safely of course.',
    categories: 'Wild',
    image: {axe},
    reviews: ''
  },
  {
    title: 'Shooting',
    description: 'Go shoot some guns, whether owned or rented! Make sure you wear ear/eye protection!',
    categories: 'Wild',
    image: {shooting},
    reviews: ''
  },
  {
    title: 'Archery',
    description: 'Time to tap into your inner medieval ranger! Go shoot a bow, whether you own one or rent one!',
    categories: 'Wild',
    image: {archery},
    reviews: ''
  },
  {
    title: 'Pool',
    description: 'Time to relax, go to your local water park or community pool and relax under the sun!',
    categories: 'Outdoors',
    image: {pool},
    reviews: ''
  },
  {
    title: 'Lazer tag',
    description: 'Who is the best at lazer tag? Time to find out!',
    categories: 'Indoors',
    image: {lazer},
    reviews: ''
  },
  {
    title: 'Gym',
    description: 'Is fitness your passion? Go hit the weights and set a new PR!',
    categories: 'Indoors',
    image: {gym},
    reviews: ''
  },
  {
    title: 'Arcade',
    description: 'Go to a local arcade and see how many tickets you win! Buy the other person a gift with your tickets.',
    categories: 'Indoors',
    image: {arcade},
    reviews: ''
  },
  {
    title: 'Go Karts',
    description: 'Find your local kart track and go burn some rubber!',
    categories: 'Wild',
    image: {karts},
    reviews: ''
  },
  {
    title: 'Dog Park',
    description: 'If you have dogs, time to treat them too! Go let them make new friends!',
    categories: 'Outdoors',
    image: {dog},
    reviews: ''
  },
  {
    title: 'Goodwill Gamble',
    description: 'Buy the other an outfit from goodwill (and vice versa) and go to a restaurant in style! The one with the best reactions wins!',
    categories: 'Wild',
    image: {clothing},
    reviews: ''
  },
  {
    title: 'Trivia Night',
    description: 'Crack out a trivia app/game, time to see who really knows more!',
    categories: 'Home',
    image: {trivia},
    reviews: ''
  },
  {
    title: 'Art Exhibit',
    description: 'Go to your local Art Exhibit and enjoy the scenery!',
    categories: 'Indoors',
    image: {art},
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