import './Navbar.scss';
import * as React from 'react';
import Link from 'next/link';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav>
        <div>
          <Link href="/">
            <a className="testing">Home</a>
          </Link>
          <p className="testing">This is a test</p>
        </div>
      </nav>
    )
  }
}