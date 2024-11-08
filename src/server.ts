import app from "./app"
import { APP_CONFIG } from "./env.config"

app.listen(APP_CONFIG.PORT, () => {
  console.log(`Server listening in port ${APP_CONFIG.PORT}`)
})
