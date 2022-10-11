import { spada, scudo, teschio, elmo, arco, pirata, fantasma, ascia, mago, pugno } from '/assets/icons/memory/combat'
import { corri, salta, stop, zigzag, indietro, sinistra, destra, su, giu } from '/assets/icons/memory/run';
import { acqua, aria, elettricita, fuoco, ghiaccio, natura, sole, luna, terra } from '/assets/icons/memory/element';
import {
  albero,
  ancora,
  barile,
  candela,
  carro,
  cobra,
  coltello,
  mare,
  orso,
  pietra,
  ponte,
  sentiero,
  tomba
} from '/assets/icons/memory/nature';
import { baffi, erba, falegnameria, foresta, granchio, grano, nave, pozioneCuore, ruota, veleno } from '/assets/icons/memory/vario';
import { keyToSaveInStorage } from './config';

const saveIntoStorage = (item) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(keyToSaveInStorage, JSON.stringify(item));
  };
}

const getFromStorage = () => {
  if (typeof window !== "undefined") {
    const res = localStorage.getItem(keyToSaveInStorage);
    if (res && typeof res === 'string') {
      return JSON.parse(res);
    }
  };
}

const determinateVictory = (successList) => {
  if (
    successList === 'undefined' ||
    !successList ||
    !successList.length
  ) return false;
  return successList.filter(el => el).length > (successList.length / 2);
}


const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const rgbToHex = (rgb) => {
  var hexDigits = new Array
    ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
  // Function to convert rgb color to hex format
  function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }
  function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }
  return rgb2hex(rgb);
}

// sono usati valori Hex per il gioco9
const paletteColors = {
  nero: '#000000',
  grigio: '#808080',
  marrone: '#964b00',
  viola: '#9f2b68',
  red: '#ff0000',
  arancione: '#ffa500',
  rosa: '#ffb6c1',
  azzurro: '#add8e6',
  verde: '#008000'
}

// sono usate le chiavi (mostrate nei cubi) per il gioco9
const directionsDataset = {
  'N': 'Nord',
  'S': 'Sud',
  'O': 'Ovest',
  'E': 'Est',
  'NO': 'Nord-Ovest',
  'NE': 'Nord-Est',
  'SO': 'Sud-Ovest',
  'SE': 'Sud-Est',
  'X': 'S.O.S.'
}

const combatSet = { spada, scudo, teschio, elmo, arco, pirata, fantasma, ascia, mago, pugno };

const runSet = { corri, salta, stop, zigzag, indietro, sinistra, destra, su, giu };
const natureSet = {
  albero,
  ancora,
  barile,
  candela,
  carro,
  cobra,
  coltello,
  mare,
  orso,
  pietra,
  ponte,
  sentiero,
  tomba
}
const elementSet = { acqua, aria, elettricita, fuoco, ghiaccio, natura, sole, luna, terra };
const varioSet = { baffi, erba, falegnameria, foresta, granchio, grano, nave, pozioneCuore, ruota, veleno };

const morteText = [
  "La tua vita e la tua missione finiscono qui",
  "E che dire, peccato...",
  "Io puntavo tutto su di te e invece",
  "Diviene tutto nero",
  "Le tue ferite sono tali da non poter proseguire",
  "L'ultima immagine prima di morire è il segno a forma di falce",
  "Tutti credevano in te, mannaggia",
  "Una morte orribile",
  "Ma come fai ad essere già morto?",
  "...ed eri un passo dalla fine...",
  "Puff, tutto finito!",
  "Nella tua mente appare il ricordo di Carcadena"
]

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = '0123456789';

function isIOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

export {
  saveIntoStorage,
  getFromStorage,
  determinateVictory,
  shuffle,
  rgbToHex,
  paletteColors,
  directionsDataset,
  morteText,
  alphabet,
  combatSet,
  runSet,
  elementSet,
  natureSet,
  numbers,
  varioSet,
  isIOS,
};