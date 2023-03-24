import React from 'react'
import Link from "next/link";
const SmallFooter = () => {
    return (
        <footer className="footer-half sub-bg">
          <div className="container">
          <div className="copyrights text-center">
          <p>
            © 2023 Made with passion by  - 
            <Link href="https://dimaforus.com"><a className="curve">
              &nbsp;Dimaforus
              </a>
            </Link>
          </p>

        </div>
          </div>
        </footer>
    )
}

export default SmallFooter
