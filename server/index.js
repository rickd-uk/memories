import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express()
dotenv.config()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(
  cors({
    // origin: 'https://mem.rickd.work',
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
)

app.use('/posts', postRoutes)
app.use('/user', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello to memories API')
})

const PORT = process.env.PORT || 4200
mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)),
  )
  .catch((err) => console.error(err))

mongoose.set('useFindAndModify', false)
