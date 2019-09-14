import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {

const [view, setView] = useLocalStorage('view', { darkMode: false })


    useEffect(() => {
        if (view) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [view])


return [view, setView];

}