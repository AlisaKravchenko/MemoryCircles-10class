import { levels } from "./data";

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function createLocalStorage(){
  for (let i=1; i<=Object.keys(levels).length; i++){
    localStorage.setItem(i, '0')
  }
  localStorage.setItem('darkTheme', false)
  localStorage.setItem('currentLevel', 1)
  localStorage.setItem('speed', 500)
}