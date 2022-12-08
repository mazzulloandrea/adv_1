import { h } from "preact";
import { html } from "htm/preact";
import { useEffect, useState, useCallback } from "preact/hooks";
import Rolldate from "rolldate";
import TitleIcon from "../TitleIcon";
import Clessidra from "../Clessidra/index";
import circularProgressBar from "./circularProgressBar.css";
import switchCheckox from "./switch.css";
import style from "./style.css";
import increment from "/assets/images/increment.jpeg";
import decrement from "/assets/images/decrement.png";

function Cassaforte({ data, onend }) {
  const { successo, fallimento, combinazione, domanda, durata, type } = data;
  const [viewSand, setViewSand] = useState(true);

  //memorizzo lo stato di ogni componente
  const [datetimeValue, setDatetimeValue] = useState();
  const [selectValue, setSelectValue] = useState();
  const [progress, setProgress] = useState(Math.floor(Math.random() * 100));
  const [switchValue, setSwitchValue] = useState(Math.random() < 0.5);
  const [roller, setRoller] = useState(null);
  const [rollerVisible, setRollerVisibile] = useState(false);

  useEffect(() => {
    const rd = new Rolldate({
      el: "#date",
      format: "mm:ss",
      beginYear: 1,
      endYear: 100,
      minStep: 1,
      lang: {
        cancel: "",
        confirm: "conferma",
        title: "- - - - - -",
        year: "",
        month: "",
        day: "",
        hour: "",
        min: "",
        sec: "",
      },
      // trigger:'tap',
      // init: function() {
      //   console.log('init');
      // },
      // moveEnd: function(scroll) {
      //   console.log('moveEnd');
      // },
      confirm(date) {
        setRollerVisibile(false);
        verifica(date);
      },
      cancel() {
        setRollerVisibile(false);
      },
    });
    setRoller(rd);
  }, [verifica]);

  useEffect(() => {
    // document.getElementById('progressBar').style.backgroundImage = `conic-gradient(#B5838D ${progress}%, #FFCDB2 0`;
  }, [progress]);

  useEffect(() => {
    if (!viewSand) verifica();
  }, [viewSand]);
  useEffect(() => {
    console.log("switchValue", switchValue);
  }, [switchValue]);

  useEffect(() => {
    console.log("datetime", datetimeValue);
  }, [datetimeValue]);

  useEffect(() => {
    console.log("select", selectValue);
  }, [selectValue]);

  const verifica = useCallback(
    (date) => {
      if (type === "roll") {
        if (rollerVisible) {
          setRollerVisibile(false);
          roller.hide();
        }
        console.log(roller);
        if (date === combinazione) {
          return onend(successo, true);
        }
        return onend(fallimento, false);
      }
      // console.log(datetimeValue, selectValue, progress, switchValue);
      if (
        datetimeValue.split("-").reverse().join("-") ===
          combinazione[0].giusto &&
        selectValue === combinazione[1].giusto &&
        progress === combinazione[2].giusto &&
        switchValue === combinazione[3].giusto
      )
        return onend(successo, true);
      return onend(fallimento, false);
    },
    [
      combinazione,
      datetimeValue,
      fallimento,
      onend,
      progress,
      roller,
      rollerVisible,
      selectValue,
      successo,
      switchValue,
      type,
    ]
  );

  const getCombinazione = () =>
    combinazione.map((el) => el.giusto).join("    ");

  const getOptions = () => combinazione.filter((el) => el["select"])[0].select;

  if (type === "roll") {
    return html`
      <div>
        <div class=${style.header}>
          ${viewSand &&
          html`<${Clessidra}
            class=${style.clessidraContainer}
            duration=${durata}
            onend=${() => {
              setViewSand(false);
            }}
          />`}
          <div class=${style.spiega}>
            <div class=${style.title}>combinazione</div>
            <div class=${style.indicazioni}>${domanda}</div>
          </div>
        </div>

        <div
          class=${style.scrigno}
          onClick=${() => {
            if (rollerVisible) {
              setRollerVisibile(false);
              roller.hide();
            } else {
              setRollerVisibile(true);
              roller.show();
            }
          }}
        >
          <${TitleIcon} type=${"lucchetto"} />
        </div>
        <div id="date" style=${{ visibility: "hidden" }} />
      </div>
    `;
  }

  return html`
    <div>
      <div class=${style.header}>
        ${viewSand &&
        html`<${Clessidra}
          class=${style.clessidraContainer}
          duration=${durata}
          onend=${() => {
            setViewSand(false);
          }}
        />`}
        <div class=${style.spiega}>combinazione: ${getCombinazione()}</div>
      </div>
      <div class=${style.widgetContainer}>
        <div class=${style.widget}>
          <input
            type="date"
            onchange=${(evt) => {
              setDatetimeValue(evt.target.value);
            }}
          />
        </div>
        <div class=${style.widget}>
          <select
            onchange=${(evt) => {
              setSelectValue(evt.target.value);
            }}
          >
            ${getOptions().map(
              (opt) => html`<option key=${opt} value=${opt}>${opt}</option>`
            )}
          </select>
        </div>
        <div class=${style.widget}>
          <div class=${style.comands}>
            <div
              class=${circularProgressBar.increment}
              onclick=${() => setProgress(progress < 100 ? progress + 1 : 0)}
            >
              <img src=${increment} />
            </div>
            <div
              class=${circularProgressBar.decrement}
              onclick=${() => setProgress(progress > 0 ? progress - 1 : 100)}
            >
              <img src=${decrement} />
            </div>
          </div>
          <div id="progressBar" class=${circularProgressBar.circle}>
            <div class=${circularProgressBar.inner}>${progress}</div>
          </div>
        </div>
        <div class=${style.widget}>
          <div class=${switchCheckox.item}>
            <div class=${switchCheckox.toggle}>
              <input
                type="checkbox"
                id="pill4"
                checked=${switchValue}
                name="check"
                onchange=${(evt) => setSwitchValue(evt.target.checked)}
              />
              <label for="pill4"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export default Cassaforte;
