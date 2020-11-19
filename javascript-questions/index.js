const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  let marvel = []
  heroes.forEach(hero => {
    hero.publisher.includes("Marvel") ? marvel.push(hero) : ""
  })

  heroes = marvel

  return heroes;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  heroes.forEach(hero => {
    let charactersArr = []
    charactersArr.push(hero.characters)
    hero.characters = charactersArr
  })

  return heroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let marvel = []
  let dc = []

  heroes.forEach(hero => {
    hero.publisher.includes("Marvel") ? marvel.push(hero) : dc.push(hero)
  })

  heroes = {
    "publisher 1": marvel,
    "publisher 2": dc
  }

  console.log(heroes)

  return heroes;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  let multiCharacters = []
  heroes.forEach(hero => {
    let chars = hero.characters
    let split = chars[0].split(', ')
    split.length > 1 ? multiCharacters.push(hero) : ""
  })
  heroes = multiCharacters

  return heroes;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
