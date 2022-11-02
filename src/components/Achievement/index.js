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
    text: 'corpo 3',
    icon: 'corpo',
    cond: (abilita) => {
      if (abilita.corpo > 2) return true;
      return false;
    }
  },
  {
    text: 'mente 3',
    icon: 'mente',
    cond: (abilita) => {
      if (abilita.mente > 2) return true;
      return false;
    }
  },
  {
    text: 'spirito 3',
    icon: 'spirito',
    cond: (abilita) => {
      if (abilita.spirito > 2) return true;
      return false;
    }
  },
  {
    text: '2 monete',
    icon: 'borsello',
    cond: (abilita) => {
      if (abilita.borsello > 1) return true;
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
  // {
  //   text: 'finire in 20 minuti',
  //   icon: 'timer',
  //   cond: (abilita) => {
  //     if (abilita.timer - abilita.initTime < minutes * 20) return true;
  //     return false;
  //   }
  // },
  {
    text: 'finire con almeno 4 vite',
    icon: 'cuore',
    cond: (abilita) => {
      if (abilita.vita > 3) return true;
      return false;
    }
  },
  {
    text: "vincere sempre",
    icon: 'perfezionista',
    cond: (abilita) => {
      if (abilita.error) return false;
      return true;
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
  // eliminato perchè troppo simile a "vinci 2° sfida"
  // {
  //   text: 'uccidere una guardia',
  //   icon: 'uccidere',
  //   cond: (abilita) => {
  //     if (abilita.darius) return true;
  //     return false;
  //   }
  // },
  {
    text: 'incontrare Giakkos',
    icon: 'giakkos',
    cond: (abilita) => {
      if (abilita.giakkos) return true;
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
          }, 1000 * (index + 1));
        }
        if (index > 1) setTimeout(() => scroller.current.scrollTop = scroller.current.scrollTop + 100, 1000 * (index + 1));
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
    document.getElementById("resetButton").classList.add(style.initPulse);
  };

  return (
    html`
    <div class=${style.wrapper}>
      <div id="resetButton" class=${style.reset} onClick=${() => onClick()}>
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
            <${TitleIcon} type=${el.cond(abilita) ? 'ok' : 'ko'} />
          </div>
        </div>
        `)}
      </div>
    </div>`
  );
}

export default Achievement;