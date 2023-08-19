import React from 'react'
import "./style.css"
import ReactMarkdown from 'react-markdown'

import { useState } from 'react'
function Markdown() {
  const[markDown,setMarkDown]=useState(`# Markdown preview
# This is header 1
## This is header 2
### This is header 3


\`\`\`
this is some code

\`\`\`
![](https://images.unsplash.com/photo-1600354587397-681c16c184bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80)

This is some image

- list 1
- list 2
- List 3`)
  return (
    <>
    <div className='center-div'>
      <textarea className='left-side' 
      value={markDown} 
      onChange={(e)=>setMarkDown(e.target.value)}>
      </textarea>
      <div className='right-side'><ReactMarkdown>{markDown}</ReactMarkdown></div>
    </div>
    </>
  )
}

export default Markdown
