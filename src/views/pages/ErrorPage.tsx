import { JSX } from 'react'
import setHeadMeta from '../../scripts/tools/setHeadMeta.ts'
import Er404 from '../components/errors/er404.tsx'

export default function ErrorPage (): JSX.Element {
  setHeadMeta('Упс...')
  return (
    <>
      <Er404/>
    </>
  )
}
