import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
      <div className="bottom-bar">
        <div className="bottom-container">
          <div className="d-flex justify-content-between align-items-center">
            <p className="copyrightText"  style={{marginLeft:20,marginTop:20,color:'white' }}>
              Copyright © 2025 Morse consulting. All rights reserved.
            </p>
            <div className="d-flex justify-content-center gap-4 align-items-center"   style={{marginRight:20, }}>
              <Link to={'/terms-and-conditions'} style={{color:'white'}} className="copyrightText">Terms of Service</Link>
              <Link to={'/privacy-policy'} style={{color:'white'}} className="copyrightText">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
