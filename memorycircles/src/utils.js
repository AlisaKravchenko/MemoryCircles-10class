import { levels } from "./Components/data";

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function createLevelsBestStorage(){
  for (let i=1; i<=Object.keys(levels).length; i++){
    localStorage.setItem(i, '0')
  }
}