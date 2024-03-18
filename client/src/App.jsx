import { useRef, useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import { uploadFile } from './services/api.jsx'

const App = () => {
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')
  // const [cleanResult2, setCleanResult2] = useState('')
  let cleanResult2

  const fileInputRef = useRef()
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData()
        data.append('name', file.name)
        data.append('file', file)
        let response = await uploadFile(data)
        setResult(response.path)
      }
    }
    getImage()
  }, [file])
  const onUploadClick = () => {
    fileInputRef.current.click()
  }
  if (result) {
    const cleanResult = result.replace('http://localhost:3000', '')
    cleanResult2 = `https://sharex-2rcv.onrender.com${cleanResult}`

    console.log(cleanResult2)
  }
  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>shareX</h1>
        <p>Upload and share the download link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={cleanResult2}>{cleanResult2}</a>
      </div>
    </div>
  )
}

export default App
