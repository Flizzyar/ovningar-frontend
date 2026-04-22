type Props = {
    file: File | null
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onUpload: () => void
}

const FileUpload = ({ file, onFileChange, onUpload }: Props) => {
    return (
        <>
            <label className="file-label">
                <input type="file" onChange={onFileChange} />
                <span>{file ? file.name : 'Choose a file...'}</span>
            </label>

            <button className="upload-btn" onClick={onUpload}>
                Upload
            </button>
        </>
    )
}

export default FileUpload
