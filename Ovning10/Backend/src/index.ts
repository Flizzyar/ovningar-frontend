import express from 'express'
import multer from 'multer'
import cors from 'cors'

const app = express()
app.use(cors())

const upload = multer({ dest: 'uploads/' })

app.use('/uploads', express.static('uploads'))

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.')
  }
  res.send({ imageUrl: `http://localhost:3000/uploads/${req.file.filename}` })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
