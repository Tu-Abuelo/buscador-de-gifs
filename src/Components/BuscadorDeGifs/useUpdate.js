import { useReducer } from 'react'

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
  UPDATE_LANG: 'update_lang'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD: return {
      ...state,
      keyword: action.payload
    }
    case ACTIONS.UPDATE_RATING: return {
      ...state,
      rating: action.payload
    }
    case ACTIONS.UPDATE_LANG: return {
      ...state,
      lang: action.payload
    }

    default:
      return state
  }
}

export default function useUpdate ({ initialLang, initalKeyword, initialRating }) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURI(initalKeyword),
    rating: initialRating,
    lang: initialLang
  })

  const { keyword, rating, lang } = state

  const updateKeyword = (keyword) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword })
  }
  const updateRating = (rating) => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating })
  }
  const updateLang = (lang) => {
    dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang })
  }

  return {
    keyword,
    rating,
    lang,
    updateKeyword,
    updateLang,
    updateRating
  }
}
