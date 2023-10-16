import { JSX } from 'react'
import Home from '../components/home/home.tsx'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'

export default function HomePage (): JSX.Element {
  setHeadMeta('Главная')
  return (
    <>
      <Home/>
    </>
  )
}
