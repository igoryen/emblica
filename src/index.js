import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addInterlinear } from './actions/interlinears'
import getVisibleInterlinears from './selectors/interlinears'
import AppRouter from './routers/AppRouter';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

store.dispatch(addInterlinear(
  {
    id: 'aaaaaa',
    title: 'first',
    createdAt: 1601409341560,
    lines: [
      {
        "one": "…",
        "two": ""
      },
      {
        "one": "Y",
        "two": "и"
      },
      {
        "one": "me",
        "two": "меня"
      },
      {
        "one": "llama",
        "two": "зовёт"
      },
      {
        "one": "el cocinero.",
        "two": "повар"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "-¡Risitas!",
        "two": "хихикало!"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "-¿Qué?",
        "two": "что?"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "-Ve",
        "two": "иди"
      },
      {
        "one": "por",
        "two": "за"
      },
      {
        "one": "la paellera,",
        "two": "сковородкой для паэльи"
      },
      {
        "one": "¡venga!",
        "two": "давай"
      },
      {
        "one": "Que",
        "two": "чтоб"
      },
      {
        "one": "a",
        "two": "к"
      },
      {
        "one": "las dos",
        "two": "двум часам"
      },
      {
        "one": "de la tarde",
        "two": "дня"
      },
      {
        "one": "¡ya",
        "two": "уже"
      },
      {
        "one": "están",
        "two": "были (да суть)"
      },
      {
        "one": "aquí!",
        "two": "здесь"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "Mira,",
        "two": "смотри"
      },
      {
        "one": "en bañador,",
        "two": "в плавках"
      },
      {
        "one": "con las chanclas,",
        "two": "в шлёпках"
      },
      {
        "one": "todo",
        "two": "весь"
      },
      {
        "one": "despeinado",
        "two": "нечёсаный"
      },
      {
        "one": "porque",
        "two": "потому что"
      },
      {
        "one": "no",
        "two": "не"
      },
      {
        "one": "me dio",
        "two": "дал мне"
      },
      {
        "one": "tiempo…",
        "two": "времени"
      },
      {
        "one": "na",
        "two": "?"
      },
      {
        "one": "ponerme",
        "two": "одеть"
      },
      {
        "one": "las chanclas…",
        "two": "шлёпки"
      },
      {
        "one": "¡y",
        "two": "и"
      },
      {
        "one": "el bañador!",
        "two": "плавки"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "Voy",
        "two": "иду"
      },
      {
        "one": "a",
        "two": "на"
      },
      {
        "one": "la playa",
        "two": "пляж"
      },
      {
        "one": "[y]",
        "two": "а"
      },
      {
        "one": "había subido",
        "two": "поднялось"
      },
      {
        "one": "la marea.",
        "two": "море (прилив)"
      },
      {
        "one": "¡Jijiji….!",
        "two": "хи-хи-хи"
      },
      {
        "one": "¡Había subido",
        "two": "Поднялось"
      },
      {
        "one": "la marea",
        "two": "море"
      },
      {
        "one": "y",
        "two": "и"
      },
      {
        "one": "[?]",
        "two": "?"
      },
      {
        "one": "encontré",
        "two": "я нашёл"
      },
      {
        "one": "una ",
        "two": "одну"
      },
      {
        "one": "paella!",
        "two": "сковородку"
      },
      {
        "one": "¡Y",
        "two": "а"
      },
      {
        "one": "la ",
        "two": "её"
      },
      {
        "one": "encontré…",
        "two": "я нашёл"
      },
      {
        "one": "porque",
        "two": "потому что"
      },
      {
        "one": "intentaba…",
        "two": "пробовал"
      },
      {
        "one": "montaba",
        "two": "сидел верхом"
      },
      {
        "one": "la paellera",
        "two": "сковородка"
      },
      {
        "one": "agarrada!",
        "two": "вцепивш..."
      },
      {
        "one": "Entremetído",
        "two": "засунута"
      },
      {
        "one": "entre",
        "two": "между"
      },
      {
        "one": "las piedras",
        "two": "камнями"
      },
      {
        "one": "de Chipiona,",
        "two": "Чипионы"
      },
      {
        "one": "del Faro.",
        "two": "маяка"
      },
      {
        "one": "Y",
        "two": "и"
      },
      {
        "one": "cuando",
        "two": "когда"
      },
      {
        "one": "me entro",
        "two": "я вхожу"
      },
      {
        "one": "en",
        "two": "в"
      },
      {
        "one": "el restaurante",
        "two": "ресторан"
      },
      {
        "one": "y",
        "two": "и"
      },
      {
        "one": "me",
        "two": "меня"
      },
      {
        "one": "ve",
        "two": "видит"
      },
      {
        "one": "el cocinero",
        "two": "повар"
      },
      {
        "one": "con",
        "two": "с"
      },
      {
        "one": "una ",
        "two": "одной"
      },
      {
        "one": "paellera…",
        "two": "сковородкой"
      },
      {
        "one": "¡y",
        "two": "а"
      },
      {
        "one": "donde",
        "two": "где"
      },
      {
        "one": "todas",
        "two": "все"
      },
      {
        "one": "la veinte",
        "two": "двадцать"
      },
      {
        "one": "pаelleras",
        "two": "сковородок"
      },
      {
        "one": "jijijiji!",
        "two": "хи-хи-хи"
      },
      {
        "one": "[??????]",
        "two": "?"
      },
      {
        "one": "¡Llegaba",
        "two": "Прибыла"
      },
      {
        "one": "el agua",
        "two": "вода"
      },
      {
        "one": "hasta",
        "two": "до"
      },
      {
        "one": "el restaurán!",
        "two": "ресторана"
      },
      {
        "one": "¡Había subido",
        "two": "Поднялось"
      },
      {
        "one": "la marea,",
        "two": "море"
      },
      {
        "one": "jijijiji!",
        "two": "хи-хи-хи"
      },
      {
        "one": "¡Jajajaja!",
        "two": "ха-ха-ха"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "¡Jesús!",
        "two": "Хесус"
      },
      {
        "one": "¡Hay",
        "two": "есть"
      },
      {
        "one": "que",
        "two": "что"
      },
      {
        "one": "hacé...",
        "two": "сделать"
      },
      {
        "one": "[???]...",
        "two": "?"
      },
      {
        "one": "con",
        "two": "с"
      },
      {
        "one": "los",
        "two": "теми"
      },
      {
        "one": "dos",
        "two": "двумя"
      },
      {
        "one": "sacos",
        "two": "мешками"
      },
      {
        "one": "de arroz!",
        "two": "риса"
      },
    ]
  }
))

store.dispatch(addInterlinear(
  {
    id: 'bbbbbb',
    title: 'second',
    createdAt: 1601409341550,
    lines: [
      {
        "one": "¡Llama,",
        "two": "Звони"
      },
      {
        "one": "llama",
        "two": "Звони"
      },
      {
        "one": "para",
        "two": "в"
      },
      {
        "one": "Sevilla!",
        "two": "Севилью"
      },
      {
        "one": "¡Llama",
        "two": "Звони"
      },
      {
        "one": "a ",
        "two": "в"
      },
      {
        "one": "Sevilla,",
        "two": "Севилью"
      },
      {
        "one": "que…",
        "two": "что"
      },
      {
        "one": "que",
        "two": "что"
      },
      {
        "one": "hay",
        "two": "есть"
      },
      {
        "one": "un…",
        "two": "одна"
      },
      {
        "one": "jajajaja!",
        "two": "ха-ха-ха"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "¡Jesús",
        "two": "Хесус"
      },
      {
        "one": "y",
        "two": "и"
      },
      {
        "one": "yo",
        "two": "я"
      },
      {
        "one": "con",
        "two": "в"
      },
      {
        "one": "el bañador!",
        "two": "плавках"
      },
      {
        "one": "¡Con",
        "two": "в"
      },
      {
        "one": "el bañador",
        "two": "плавках"
      },
      {
        "one": "y",
        "two": "и"
      },
      {
        "one": "con",
        "two": "со"
      },
      {
        "one": "la paellera!",
        "two": "сковородкой"
      },
      {
        "one": "¡Y",
        "two": "и"
      },
      {
        "one": "el cocinero…!",
        "two": "повар"
      },
      {
        "one": "¡No veas!",
        "two": "не смотри"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "¡Ea,",
        "two": "эй"
      },
      {
        "one": "para",
        "two": "в"
      },
      {
        "one": "Sevilla!",
        "two": "Севилью"
      },
      {
        "one": "Y",
        "two": "и"
      },
      {
        "one": "me…",
        "two": "мне"
      },
      {
        "one": "me…",
        "two": "мне"
      },
      {
        "one": "y",
        "two": "и"
      },
      {
        "one": "el último",
        "two": "последнее"
      },
      {
        "one": "que",
        "two": "что"
      },
      {
        "one": "cuando",
        "two": "когда"
      },
      {
        "one": "ya",
        "two": "уже"
      },
      {
        "one": "salió",
        "two": "ушла"
      },
      {
        "one": "la Virgen",
        "two": "дева"
      },
      {
        "one": "de Regla,",
        "two": "уставная"
      },
      {
        "one": "estamos",
        "two": "стоим"
      },
      {
        "one": "llorando",
        "two": "плача"
      },
      {
        "one": "los dos.",
        "two": "вдвоём"
      },
      {
        "one": "Me cobró",
        "two": "я получил"
      },
      {
        "one": "el tio",
        "two": "..."
      },
      {
        "one": "la paell…",
        "two": "сковородок"
      },
      {
        "one": "¡jijijiji!",
        "two": "хи-хи-хи"
      },
      {
        "one": "¡Qué",
        "two": "вот"
      },
      {
        "one": "cabrón!",
        "two": "козёл"
      },
      {
        "one": "¡Ha queriendo",
        "two": "..."
      },
      {
        "one": "mete…",
        "two": ""
      },
      {
        "one": "jijiji…",
        "two": "хи-хи-хи"
      },
      {
        "one": "y",
        "two": "и"
      },
      {
        "one": "ya",
        "two": "уже"
      },
      {
        "one": "no",
        "two": "не"
      },
      {
        "one": "voy",
        "two": "иду"
      },
      {
        "one": "más!",
        "two": "больше"
      },
      {
        "one": "Me fui ",
        "two": "я ушёл"
      },
      {
        "one": "andando",
        "two": "пешком"
      },
      {
        "one": "a coger",
        "two": "взять"
      },
      {
        "one": "los Amarillos",
        "two": "Жёлтых (автобус)"
      },
      {
        "one": "hasta",
        "two": "по"
      },
      {
        "one": "hoy.",
        "two": "сегодняшний день"
      },
      {
        "one": "¡Me",
        "two": "."
      },
      {
        "one": "van…",
        "two": "."
      },
      {
        "one": "me",
        "two": "."
      },
      {
        "one": "van",
        "two": "."
      },
      {
        "one": "a….",
        "two": ""
      },
      {
        "one": "Jiiiiii!",
        "two": "хи-хи-хи"
      },
      {
        "one": "¡Me",
        "two": "меня"
      },
      {
        "one": "manda",
        "two": "он посылает"
      },
      {
        "one": "por",
        "two": "на"
      },
      {
        "one": "la noche…",
        "two": "ночь"
      },
      {
        "one": "había bajado",
        "two": "опустилась"
      },
      {
        "one": "la marea",
        "two": "море"
      },
      {
        "one": "el agua,",
        "two": "вода"
      },
      {
        "one": "y",
        "two": "а"
      },
      {
        "one": "por",
        "two": "к"
      },
      {
        "one": "la mañana",
        "two": "утру"
      },
      {
        "one": "había subido.",
        "two": "поднялась"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "¡Cualquiera",
        "two": "хоть кто"
      },
      {
        "one": "sabe",
        "two": "знает"
      },
      {
        "one": "dónde",
        "two": "где"
      },
      {
        "one": "está",
        "two": "суть"
      },
      {
        "one": "la paellera,",
        "two": "сковородки"
      },
      {
        "one": "sabe!",
        "two": "знает"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "¡A lo mejor",
        "two": "не ровён час"
      },
      {
        "one": "está",
        "two": "есть"
      },
      {
        "one": "en",
        "two": "в"
      },
      {
        "one": "el…",
        "two": "этом"
      },
      {
        "one": "en",
        "two": "в"
      },
      {
        "one": "el barco",
        "two": "корабле"
      },
      {
        "one": "ese",
        "two": "этом"
      },
      {
        "one": "del petróleo...",
        "two": "с бензином"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "-En",
        "two": "в"
      },
      {
        "one": "el Prestish",
        "two": "Престиже"
      },
      {
        "one": "",
        "two": ""
      },
    ]
  }
))

store.dispatch(addInterlinear(
  {
    id: 'cccccccc',
    title: 'third',
    createdAt: 1601409341540,
    lines: [
      {
        "one": "¡En",
        "two": "в"
      },
      {
        "one": "el pestrish",
        "two": "пестрише"
      },
      {
        "one": "de ese!",
        "two": "этом"
      },
      {
        "one": "¡Jajajaja!",
        "two": "ха-ха-ха"
      },
      {
        "one": "¡Y",
        "two": "и"
      },
      {
        "one": "ya",
        "two": "уже"
      },
      {
        "one": "no se abre",
        "two": "не ..."
      },
      {
        "one": "más",
        "two": "больше"
      },
      {
        "one": "la cocina…",
        "two": "кухню"
      },
      {
        "one": "jajaja…",
        "two": "ха-ха-ха"
      },
      {
        "one": "la cocina!",
        "two": "кухню"
      },
      {
        "one": "Pero",
        "two": "но"
      },
      {
        "one": "no",
        "two": "не"
      },
      {
        "one": "cobré",
        "two": "получил"
      },
      {
        "one": "nada;",
        "two": "ничего"
      },
      {
        "one": "me",
        "two": "мне"
      },
      {
        "one": "dieron",
        "two": "дали (они)"
      },
      {
        "one": "el dinero",
        "two": "деньги"
      },
      {
        "one": "del ",
        "two": "из "
      },
      {
        "one": "bote.",
        "two": "банки (для чаевых)"
      },
      {
        "one": "-¿Había",
        "two": "Имелось"
      },
      {
        "one": "mucho",
        "two": "много"
      },
      {
        "one": "dinero",
        "two": "денег"
      },
      {
        "one": "en",
        "two": "в"
      },
      {
        "one": "el bote?",
        "two": "банке"
      },
      {
        "one": "",
        "two": ""
      },
      {
        "one": "- Lo ",
        "two": "то"
      },
      {
        "one": "que",
        "two": "что"
      },
      {
        "one": "me",
        "two": "мне"
      },
      {
        "one": "echaban…",
        "two": "кидали"
      },
      {
        "one": "y",
        "two": "и "
      },
      {
        "one": "el dinero",
        "two": "деньги"
      },
      {
        "one": "me…",
        "two": "мне"
      },
      {
        "one": "de",
        "two": "из"
      },
      {
        "one": "lo",
        "two": "того"
      },
      {
        "one": "que",
        "two": "что"
      },
      {
        "one": "gané.",
        "two": "я заработал"
      },
      {
        "one": "Me",
        "two": "у меня"
      },
      {
        "one": "cobraron",
        "two": "забрали"
      },
      {
        "one": "veinte",
        "two": "двадцать"
      },
      {
        "one": "paelleras",
        "two": "сковородок"
      },
      {
        "one": "a ",
        "two": "по"
      },
      {
        "one": "quinientos ",
        "two": "пятьсот"
      },
      {
        "one": "\"calas\",",
        "two": "песе́т "
      },
      {
        "one": "porque",
        "two": "потому что"
      },
      {
        "one": "viste",
        "two": "ты увидел"
      },
      {
        "one": "lo ",
        "two": "то"
      },
      {
        "one": "que",
        "two": "что"
      },
      {
        "one": "me llevé",
        "two": "я взял с собой"
      },
      {
        "one": "yo",
        "two": "я"
      },
      {
        "one": "para",
        "two": "в"
      },
      {
        "one": "Sevilla.",
        "two": "Севилью"
      },
      {
        "one": "¡Ay,",
        "two": "Ой"
      },
      {
        "one": "ya",
        "two": "я"
      },
      {
        "one": "aborrecí",
        "two": "возненавидел"
      },
      {
        "one": "la playa!",
        "two": "пляж"
      },
      {
        "one": "Hemos llorado",
        "two": "поплакали мы"
      },
      {
        "one": "los dos!",
        "two": "двое"
      },
      {
        "one": "¡Ya está,",
        "two": "это всё"
      },
      {
        "one": "Jesús,",
        "two": "Хесус"
      },
      {
        "one": "que",
        "two": "что "
      },
      {
        "one": "no es para tanto",
        "two": "всё не так плохо. "
      },
      {
        "one": "hijo..!",
        "two": "...сын"
      },
      {
        "one": "¡Así",
        "two": "так"
      },
      {
        "one": "yo",
        "two": "я"
      },
      {
        "one": "no",
        "two": "не"
      },
      {
        "one": "quiero",
        "two": "хочу"
      },
      {
        "one": "arroz,",
        "two": "риса"
      },
      {
        "one": "Jesús!",
        "two": "Хесус"
      },
      {
        "one": "Yo",
        "two": "я"
      },
      {
        "one": "no",
        "two": "не"
      },
      {
        "one": "quiero",
        "two": "хочу"
      },
      {
        "one": "arroz",
        "two": "риса"
      },
      {
        "one": "ni",
        "two": "ни"
      },
      {
        "one": "en",
        "two": "в"
      },
      {
        "one": "chino,",
        "two": "китайце"
      },
      {
        "one": "¡vamos!",
        "two": "короче"
      }
    ]
  }
))

const state = store.getState()
const visibleInterlinears = getVisibleInterlinears(state.interlinears, state.filters)
console.log('visibleInterlinears', visibleInterlinears)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
