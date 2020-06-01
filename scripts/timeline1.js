import Thing from './creations/thing.js';

function createThing(name, position) {
  const newThing = new Thing(name, position);
  document.getElementById('universe').appendChild(newThing.matter);
  return newThing;
}

const theFirst = createThing('Primus');
