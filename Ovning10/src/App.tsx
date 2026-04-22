import React, { useState } from 'react'
import axios from 'axios'
import './App.css'
import FileUpload from './components/fileUpload'

function App() {
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file to upload.')
            return
        }

        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await axios.post(
                'http://localhost:3000/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )

            setMessage(`File uploaded successfully: ${response.data.imageUrl}`)
            setPreview(response.data.imageUrl)
        } catch (error) {
            console.error(error)
            setMessage('Upload failed.')
        }
    }

    return (
        <div className="upload-container">
            <div className="upload-card">
                <h2>File Upload</h2>

                <FileUpload
                    file={file}
                    onFileChange={handleFileChange}
                    onUpload={handleUpload}
                />

                {message && <p className="message">{message}</p>}

                {preview && (
                    <div className="preview-wrapper">
                        <img
                            src={preview}
                            alt="Preview"
                            className="preview-img"
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
