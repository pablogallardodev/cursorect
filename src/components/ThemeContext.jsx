
import { useContext } from 'react';
import { ThemeContext as TemaContext } from '../context/ThemeContext';

const ThemeContext = () => {
  const { theme } = useContext(TemaContext)
  return (
    <div className={theme}>
      <h2>Theme context</h2>
    </div>
  )
}

export default ThemeContext