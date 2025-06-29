import './styles.css'
import { CustomMenu } from './menu.js'
import { DeathScreenModule } from './modules/daeathScreenModule/deathScreenModule.js'
const menu = new CustomMenu('#menu')
menu.add(new DeathScreenModule())


