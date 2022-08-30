

function _candidates(howMany = 0, maxPoint = 100) {
  const externalLimit = 10;
  const diffFromMax = 7;
  let candidates = [];
  while (howMany !== candidates.length) {
    const rand = Math.floor(Math.random() * maxPoint);
    if (rand > externalLimit && rand < (maxPoint - externalLimit)) {
      if (!candidates.length) {
        candidates.push(rand);
      } else {
        if (candidates.every(el =>
          (rand > (el + diffFromMax) || rand < (el - diffFromMax))
        )) {
          candidates.push(rand);
        }
      }
    }
  }
  candidates = candidates.sort((a, b) => a - b);
  return candidates;
};

function generate(maxPicchi, maxPoint = 100) {
  const data = [];
  const maxIncrement = 50;
  let prev = 0;

  const howManyPicchi = Math.floor(Math.random() * (maxPicchi + 1));
  const maxValues = _candidates(howManyPicchi, maxPoint);

  for (let i = 0, j = 0; i < maxPoint; i++) {
    if (i === (maxValues[j] - 1)) {
      prev = -10;
    } else if (i === (maxValues[j])) {
      prev += maxIncrement;
    } else if (i === (maxValues[j] + 1)) {
      prev = -15;
    } else if (i === (maxValues[j] + 2)) {
      prev = i % 2 === 0 ? 0 : 7;
      j++;
    }
    else {
      prev = 0;
    }
    data.push({ x: i, y: prev });
  }
  return { data, peaks: maxValues.length };
  // return { data };
}

export default generate;