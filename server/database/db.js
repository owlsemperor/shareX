import mongoose from 'mongoose'

export const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('database connected successfuly')
  } catch (error) {
    console.error(`Error while connecting the database`, error.message)
  }
}
