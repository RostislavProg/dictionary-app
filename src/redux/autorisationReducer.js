import { CURRENT_ACCOUNT } from "./type"
import { AUTORIZATION } from "./type"
import { REGISTRATION } from "./type"
import { UPDATE_DATA } from "./type"


export const initialState = {
    words: [{eng: "Hello", deut: "Hallo"}],
    allAccounts: [[

      {eng: "Hello", deut: "Hallo"},

      {eng: "bye", deut: "Tschüss"},

      {eng: "Please", deut: "Bitte"},

      {eng: "Thanks", deut: "Danke"},

      {eng: "summer", deut: "Sommer"},

      {eng: "time", deut: "die Zeit"},

      {eng: "example", deut: "das Beispiel"},

      {eng: "No", deut: "Nein"},

      {eng: "Why", deut: "Warum"},

      {eng: "Friday", deut: "Freitag "},

      {eng: "do", deut: "Machen "},

      {eng: "go", deut: "Gehen "},

      {eng: "gut", deut: "Good"},

      {eng: "coffee", deut: "Kaffee "},

      {eng: "tea", deut: "Tee"},

      {eng: "funny", deut: "Komisch"},

      {eng: "high", deut: "Hoch"},

      {eng: "fantastic", deut: "Prima"},

      {eng: "short", deut: "Kurz"},

      {eng: "Big", deut: "Groß"},

      {eng: "rat", deut: "Ratte"},

      {eng: "kommen", deut: "to come"},

      {eng: "perhaps", deut: "vielleicht"},

      {eng: "here", deut: "hier"},

      {eng: "there", deut: "da"},

      {eng: "picture", deut: "Bild"},

      {eng: "world", deut: "Welt"},

      {eng: "father", deut: "Vater"}, 

      {eng: "house", deut: "Haus"},

      {eng: "try", deut: "versuchen"},

      {eng: "again", deut: "wieder"},

      {eng: "animal", deut: "Tier"},

      {eng: "point", deut: "Punkt"},

      {eng: "build", deut: "bauen"},

      {eng: "self", deut: "selbst"},

      {eng: "our", deut: "unsere"},

      {eng: "name", deut: "Name"},

      {eng: "just", deut: "nur "},

      {eng: "cause", deut: "Ursache "},

      {eng: "much", deut: "viel "},

      {eng: "mean", deut: "bedeuten"},

      {eng: "before", deut: "vor "},

      {eng: "boy", deut: "Junge"},

      {eng: "old", deut: "alt"},

      {eng: "too", deut: "zu"},

      {eng: "same", deut: "gleich"},

      {eng: "use", deut: "Verwendung"},

      {eng: "your", deut: "Ihre"},

      {eng: "about", deut: "über"},

      {eng: "these", deut: "diese"},

      {eng: "make", deut: "machen"},

      {eng: "two", deut: "zwei"},

      {eng: "könnte", deut: "könnte"},

      {eng: "people", deut: "Menschen"},

      {eng: "know", deut: "wissen"},

      {eng: "may", deut: "können"}, 

      {eng: "been", deut: "gewesen"},

      {eng: "now", deut: "jetzt"},

      {eng: "own", deut: "besitzen"},

      {eng: "found", deut: "gefunden"},

      {eng: "school", deut: "Schule"},

      {eng: "plant", deut: "Anlage"},

      {eng: "between", deut: "zwischen"},

      {eng: "city", deut: "Stadt"},

      {eng: "tree", deut: "Baum"},

      {eng: "cross", deut: "überqueren "},

      {eng: "story", deut: "Geschichte "},

      {eng: "far", deut: "weit "},

      {eng: "sea", deut: "Meer"},

      {eng: "draw", deut: "ziehen "},

      {eng: "close", deut: "Schließen"},

      {eng: "north", deut: "Norden"},

      {eng: "science", deut: "Wissenschaft"},

      {eng: "idea", deut: "Idee"},

      {eng: "fish", deut: "Fisch"},

      {eng: "stop", deut: "Stopp"},

      {eng: "once", deut: "einmal"},

      {eng: "cut", deut: "Schnitt"},

      {eng: "watch", deut: "beobachten"},

      {eng: "color", deut: "Farbe"},

      {eng: "face", deut: "Gesicht"},

      {eng: "paper", deut: "Papier"},

      {eng: "group", deut: "Gruppe"},

      {eng: "those", deut: "diejenigen"},
      
    ],
    [

      {eng: "river", deut: "Fluss"},

      {eng: "car", deut: "Auto"},

      {eng: "care", deut: "Pflege"},

      {eng: "second", deut: "zweite"},

      {eng: "girl", deut: "Mädchen"},

      {eng: "usual", deut: "üblich"},

      {eng: "ready", deut: "bereit"},


      {eng: "list", deut: "Liste"},

      {eng: "though", deut: "obwohl"},

      {eng: "feel", deut: "fühlen"},

      {eng: "Vortrag", deut: "Vortrag"},

      {eng: "bird", deut: "Vogel"},

      {eng: "body", deut: "Körper"},

      {eng: "leave", deut: "verlassen"}, 
    ]],
    accounts: [{name: 'Creator', password: '12345'}, {name: 'Logan', password: '54321'}],
    currentAccount: 0
  };

  export const autorisationReducer = (state = initialState, action) => {
    switch (action.type) {
      case CURRENT_ACCOUNT:
        return {
          ...state,
          currentAccount: action.currentAccount,
          words: state.allAccounts[action.currentAccount],
        };
      case AUTORIZATION:
        return {
          ...state,
          currentAccount: state.accounts.findIndex(account => account.name == action.login),
        };
      case REGISTRATION:
        return {
          ...state,
          accounts: [...state.accounts, {name: action.login, password: action.password}],
          allAccounts: [...state.allAccounts, [{eng: "Hello", deut: "Hallo"}]],
        };
      case UPDATE_DATA:
        return {
          ...state,
          allAccounts: [
            ...state.allAccounts.slice(0, action.currentAccount),
            action.words, 
            ...state.allAccounts.slice(action.currentAccount + 1), 
          ],
        };
      default:
        return state;
    }
  };