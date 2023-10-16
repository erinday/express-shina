import { JSX } from 'react'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'
import Home from '../components/home/home.tsx'

export default function HomePage (): JSX.Element {
  setHeadMeta('Главная')
  return (
    <>
      <Home/>
    </>
  )
}
