import preact from 'preact';
import { useRef, useEffect, useState } from 'preact/hooks';
import { html } from 'htm/preact';
import { initialAbilita } from '../config';
import TitleIcon from '../TitleIcon';
import style from './style.css';

const seconds = 1000;
const minutes = seconds * 60;

const aList = [
  {
    text: 'morire',
    icon: 'morte',
    cond: (abilita) => {
      if (abilita.morte) return true;
      return false;
    },
  },
  {
    text: 'corpo 2',
    icon: 'corpo',
    cond: (abilita) => {
      if (abilita.corpo > 1) return true;
      return false;
    }
  },
  {
    text: 'mente 2',
    icon: 'mente',
    cond: (abilita) => {
      if (abilita.mente > 1) return true;
      return false;
    }
  },
  {
    text: 'spirito 2',
    icon: 'spirito',
    cond: (abilita) => {
      if (abilita.spirito > 1) return true;
      return false;
    }
  },
  {
    text: '2 monete',
    icon: 'borsello',
    cond: (abilita) => {
      if (abilita.borsello === 2) return true;
      return false;
    }
  },
  {
    text: 'zaino pieno',
    icon: 'zaino',
    cond: (abilita) => {
      if (abilita.zaino.length === initialAbilita.zainoMaxLength) return true;
      return false;
    }
  },
  {
    text: 'finire in 45 minuti',
    icon: 'timer',
    cond: (abilita) => {
      if (abilita.timer - abilita.initTime < minutes * 45) return true;
      return false;
    }
  },
  {
    text: 'finire in 30 minuti',
    icon: 'timer',
    cond: (abilita) => {
      if (abilita.timer - abilita.initTime < minutes * 30) return true;
      return false;
    }
  },
  {
    text: 'finire in 15 minuti',
    icon: 'timer',
    cond: (abilita) => {
      if (abilita.timer - abilita.initTime < minutes * 15) return true;
      return false;
    }
  },
  {
    text: 'finire con 4 vite',
    icon: 'cuore',
    cond: (abilita) => {
      if (abilita.vita === initialAbilita.vitaMaxLength) return true;
      return false;
    }
  },
  {
    text: 'salvare Aaron',
    icon: 'aaron',
    cond: (abilita) => {
      if (abilita.aaron) return true;
      return false;
    }
  },
  {
    text: 'uccidere una guardia',
    icon: 'uccidere',
    cond: (abilita) => {
      if (abilita.darius) return true;
      return false;
    }
  },
  {
    text: 'vinci 1° sfida',
    icon: 'primaProva',
    cond: (abilita) => {
      if (abilita.vittoria1) return true;
      return false;
    }
  },
  {
    text: 'vinci 2° sfida',
    icon: 'secondaProva',
    cond: (abilita) => {
      if (abilita.vittoria2) return true;
      return false;
    }
  },
  {
    text: 'vinci 3° sfida',
    icon: 'terzaProva',
    cond: (abilita) => {
      if (abilita.vittoria3) return true;
      return false;
    }
  }
]

function Achievement({ abilita, onClick }) {
  const [totale, setTotale] = useState(0);

  const point = Math.round(100 / aList.length * 100) / 100;
  const scroller = useRef(null);


  useEffect(() => {
    setTimeout(() => startAnimation(), 500);
  }, []);

  useEffect(() => {
    console.log(totale);
  }, [totale]);

  const startAnimation = () => {
    if (!scroller || !scroller.current) {
      return;
    }
    [...scroller.current.children].map(
      (element, index) => {
        //se è presente la spunta
        if (element.children.length > 1) {
          setTimeout(() => {
            element.classList.toggle(style.active);
            if (index === aList.length - 1) {
              updateTotale();
            }
          }, 1500 * (index + 1));
        } else {
          // setTimeout(() => element.children[0].classList.toggle(style.unactive), 1500 * (index + 1));
        }
        if (index > 1) setTimeout(() => scroller.current.scrollTop = scroller.current.scrollTop + 100, 1500 * (index + 1));
      }
    )
  }

  const updateTotale = () => {
    const total = aList.reduce(
      (acc, element) => {
        if (!acc) acc = 0;
        if (element.cond(abilita)) {
          acc = acc + point;
        }
        return acc;
      }, 0
    );
    setTotale(Math.round(total * 100 / 100));
  };

  return (
    html`
    <div class=${style.wrapper}>
      <div class=${style.reset} onClick=${()=> onClick()}>
        <${TitleIcon} type='reset' />
      </div>
      <div class=${style.title}>
        <div>Obiettivi raggiunti</div>
        <div>${totale} %</div>
      </div>
      <div ref=${scroller} class=${style.scrollerPanel}>
        ${aList.map(el => html`
        <div class=${style.element}>
          <div class=${style.ach}>
            <${TitleIcon} type=${el.icon} />
            <div class=${style.text}>${el.text}</div>
          </div>
          <div class=${style.check}>
            <${TitleIcon} type=${el.cond(abilita) ? 'ok' : 'ko' } />
          </div>
        </div>
        `)}
      </div>
    </div>`
  );
}

export default Achievement;