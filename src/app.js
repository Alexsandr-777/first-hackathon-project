
import '././styles.css'
import { CustomMenu } from './menu.js'
import { DeathScreenModule } from './modules/daeathScreenModule/deathScreenModule.js'
import { BackgroundModule } from './modules/migrationModule/backgroundModule.js'
import { ClicksModule } from './modules/migrationModule/clicksModule.js'
import { ShapeModule } from './modules/migrationModule/shapeModule.js'
import { SparkModule } from './modules/migrationModule/sparkModule.js'
import { TimerModule } from './modules/timerModule/timerModule.js'
const menu = new CustomMenu('#menu')

menu.add(new DeathScreenModule())
menu.add(new BackgroundModule())
menu.add(new ClicksModule())
menu.add(new ShapeModule())
menu.add(new SparkModule())
menu.add(new TimerModule())




