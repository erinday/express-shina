import { JSX } from 'react'
import '../../../styles/components/footer.sass'

export default function Footer (): JSX.Element {
  const date: Date = new Date()
  return (
    <div className="footer">
      <div className="footer__cont">
        <span className="footer__note">© 2006-{date.getFullYear()}, Интернет-магазин Express-Шина</span>
      </div>
    </div>
  )
}
