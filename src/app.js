import './styles.css';
import { CustomMenu } from './menu.js';
import { DeathScreenModule } from './modules/daeathScreenModule/deathScreenModule.js';
import { ColorChangeModule } from './modules/colorChangeModule/colorChangeModule.js';
const menu = new CustomMenu('#menu');
menu.add(new DeathScreenModule());
menu.add(new ColorChangeModule());


