import classNames from 'classnames'
import { ReactNode } from 'react'
import NavLink from '../components/NavLink'

export interface NavLayoutProps {
  children: ReactNode
}

export default function NavLayout({ children }: NavLayoutProps) {
  const list = [
    {
      href: '/',
      name: '首页',
    },
    {
      href: '/about',
      name: '关于',
    },
  ]

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex space-x-4">
              {list.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className={({ isActive }) =>
                    classNames(
                      'rounded-md px-3 py-2 text-sm font-medium',
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}
