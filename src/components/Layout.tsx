import { ReactNode, VFC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  const linkStyle = 'text-sm text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'

  return (
    <div className='flex flex-col justify-center items-center min-h-screen text-gray-600 font-mono'>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className='flex items-center pl-8 h-14'>
            <div className='flex space-x-4'>
              <Link className={linkStyle} to='/'>
                react-query
              </Link>
              <Link className={linkStyle} to='/fetch-a'>
                Regular fetch
              </Link>
              <Link className={linkStyle} to='/main-context'>
                useContext
              </Link>
              <Link className={linkStyle} to='/main-rtkit'>
                RTKit
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className='flex flex-col flex-1 justify-center items-center w-screen'>
        {children}
      </main>
    </div>
  )
};
