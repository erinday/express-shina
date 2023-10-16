import '../../../styles/components/tile.sass'
import { JSX } from 'react'

export default function Tile ({ caption }: PropsTile): JSX.Element {
  const tiles = []
  for (let i = 1; i <= 8; i++) {
    tiles.push(
      <div className="tile__item" key={i}>
        <picture className="tile__picture">
          <source srcSet="https://placehold.co/284 1x, https://placehold.co/426 1.5x"/>
          <img src="https://placehold.co/284" alt="" className="tile__image" loading="lazy"/>
        </picture>
        <span className="tile__name">{ `${caption} ${i}` }</span>
      </div>
    )
  }

  return (
    <div className="tile">
      <div className="tile__cont">
        <h1 className="tile__caption">{ caption }</h1>
        <div className="tile__list">
          { tiles }
        </div>
      </div>
    </div>
  )
}

interface PropsTile {
  caption: string
}
