export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getCirclesOrder(count){
    const order = [];
    for (let i=0;i<count;i++){
        order.push(getRandomInt(count))
    }
    return order;
}