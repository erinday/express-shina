import { JSX } from 'react'
import Er404 from '../components/errors/er404.tsx'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'

export default function ErrorPage (): JSX.Element {
  setHeadMeta('Упс...')
  return (
    <>
      <Er404/>
    </>
  )
}
