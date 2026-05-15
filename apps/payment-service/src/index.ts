import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { shouldBeUser } from './middleware/authMiddleware.js'

const app = new Hono()
app.use('*', clerkMiddleware())


app.get('/', (c) => {
  return c.text('Hello from Payment Service!')
})


app.get('/test', shouldBeUser, (c) => {
  
  console.log('User is logged in.')
  return c.json({
    message: 'You are logged in!',
    userId: c.get("userId")
  })
})

const start = async () => {
  try {
    serve({
      fetch: app.fetch,
      port: 8002
    }, (info) => {
      console.log(`Payment service is running on http://localhost:${info.port}`)
    })

  } catch (error) {
    console.log(error)
  }
}

start()