import '../../../styles/components/loading.sass'
import { JSX } from 'react'
import { useNavigation, Navigation } from "react-router-dom"

export default function Loading (): JSX.Element {
  const navigation: Navigation = useNavigation()
  return (
    <div className={ navigation.state === 'loading' ? 'loading loading_active' : 'loading' }></div>
  )
}
