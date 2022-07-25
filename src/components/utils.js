const determinateVictory = (successList) => {
  if (
    successList === 'undefined' ||
    !successList ||
    !successList.length
  ) return false;
  return successList.filter(el => el).length > (successList.length / 2);
}

export default determinateVictory;