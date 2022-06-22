import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'

export interface NavLinkProps {
  href: string
  className?: (isActive: boolean) => string
  style?: (isActive: boolean) => React.CSSProperties
  children?: React.ReactNode
}

export default function NavLink({
  children,
  href,
  className,
  style,
}: NavLinkProps) {
  const router = useRouter()

  const isActive = router.asPath === href
  console.log(router.asPath, href, isActive)

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault()
    router.push(href)
  }

  return (
    <a
      href={href}
      className={className && className(isActive)}
      onClick={handleClick}
      style={style && style(isActive)}
    >
      {children}
    </a>
  )
}
