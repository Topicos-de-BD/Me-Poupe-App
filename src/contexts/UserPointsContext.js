import React, {
  createContext,
  useContext,
  useState
} from 'react'

export const UserPointsContext = createContext({
  user: null,
  setUser: null,
  error: '',
  setError: null,
})

const UserPointsContextProvider = ({children}) => {
  const [user, setUser] = useState({name: "", email: "", cpf:"", objetivo:"", renda: "", aluguel:"", alimentacao:"", contasDiversas: "", objetivoPatrimonio: "", tempoInvestimento: "", periodicidadeAportes: "" , perfil: "", pergunta01:"", pergunta02:"", pergunta03:"", pergunta04:""});
  const [error, setError] = useState("");

  return (
    <UserPointsContext.Provider value={{user, setUser, error, setError}}>
      {children}
    </UserPointsContext.Provider>
  )
} 

export default UserPointsContextProvider

export const useUserPointsContext = () => {
  const context = useContext(UserPointsContext)
  if (!context) {
    throw Error('useUserPointsContext must be inside a UserContextProvider')
  }
  return context
}
