import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Grace Harbor Members</title>
        <meta name="description" content="Grace Harbor Membership App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">Grace Harbor Church</a>
            </Link>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbar" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>
              <a className="navbar-item">
                Documentation
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    About
                  </a>
                  <a className="navbar-item">
                    Jobs
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default Home
