import React from 'react'
export default function SectionHeading({eyebrow,title,text,action}){return <div className="section-heading"><div><div className="eyebrow"><span/>{eyebrow}</div><h2>{title}</h2>{text&&<p>{text}</p>}</div>{action}</div>}
