'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic1.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic2.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic3.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic4.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic5.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic6.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic7.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic8.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/img/pic9.jpg',
      medium: 'https://raw.githubusercontent.com/SaintHelios/OHJ-2-JS/master/js/module-4/exercise-5/thumbnails/pic9.jpg',
    },
  },
];

// add your code here

for (const x of picArray) {
  const node = document.createElement("article");
  
  const header = document.createElement("h2");
  header.innerText = `${x.title}`;

  const image = document.createElement("img");
  image.src = `${x.image["medium"]}`

  const caption = document.createElement("caption");
  caption.innerText = `${x.caption}`

  const desc = document.createElement("p");
  desc.innerText = `${x.description}`
  
  node.append(header, image, caption, desc);
  document.getElementById("pictures").appendChild(node);
}