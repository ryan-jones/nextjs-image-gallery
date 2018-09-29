import * as React from 'react'
import Navbar from './Navbar';

type Props = {
  title?: string
}

const Layout: React.SFC<Props> = ({ children }) => (
  <div>
   <Navbar />
    {children}
    <footer>
      I'm here to stay
    </footer>
  </div>
)

export default Layout