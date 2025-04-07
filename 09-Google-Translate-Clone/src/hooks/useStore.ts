import { useReducer } from "react"
import { FromLanguage, Language, type Action, type State } from "../types"
import { AUTO_LANGUAGE } from "../constants"


// 1. Define the initial state
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  resultText: '',
  loading: false
}

// 2. Define the reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_FROM_LANGUAGE') {
    // lógica del estado dentro del reducer
    // porque lo evitamos en el componente
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }

  }  
  
  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage:  action.payload
    }
  } 
  
  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      resultText: ''
    }
  }

  if (type === 'SET_RESULT_TEXT') {
    return {
      ...state,
      loading: false,
      resultText: action.payload
    }
  }

  return state
}

export function useStore() {
  // 3. Use the hook useReducer
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    resultText,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_FROM_LANGUAGE' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResultText = (payload: string) => {
    dispatch({ type: 'SET_RESULT_TEXT', payload})
  }


  return {
    fromLanguage,
    toLanguage,
    fromText,
    resultText,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResultText
  }
}
