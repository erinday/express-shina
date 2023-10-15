import { JSX } from 'react'
import { useNavigation, Navigation } from "react-router-dom"
import '../../../styles/components/loading.sass'

export default function Loading (): JSX.Element {
  const navigation: Navigation = useNavigation()
  return (
    <div className={ navigation.state === 'loading' ? 'loading loading_active' : 'loading' }></div>
  )
}
