
import { Module } from '../../core/module.js'
import { startDeathScreenModule } from './deathScreenSimulator.js'
import '../daeathScreenModule/styles/deathScreenStyles.css'

export class DeathScreenModule extends Module {
  constructor() {
    super(`upgrade`, `Улучшение качества изображения`)
  }
  trigger() {
    console.log (`trigger`)
    startDeathScreenModule()
  }
}