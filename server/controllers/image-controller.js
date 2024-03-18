import File from '../models/file.js'
export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  }
  try {
    const file = await File.create(fileObj)
    // console.log(file)
    res.status(200).json({ path: `http://localhost:3000/file/${file._id}` })
  } catch (error) {
    res.status(500)({ error: error.message })
  }
}

export const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId)
    console.log(req)
    file.downloadContent++
    await file.save()
    res.download(file.path, file.name)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: error.message })
  }
}
