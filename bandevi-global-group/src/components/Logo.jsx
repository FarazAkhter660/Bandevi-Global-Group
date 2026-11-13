import React from 'react'
export default function Logo({light=false}) { return <a className={`brand ${light?'brand-light':''}`} href="/" aria-label="Bandevi Global Group home"><img src="/logo.svg" alt="Bandevi Global Group" /></a> }
