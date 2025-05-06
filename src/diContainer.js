import AddPlatformCommand from './modules/addPlatform/AddPlatformCommand';
import AddPlatformCommandValidator from './modules/addPlatform/validators/AddPlatformCommandValidator';
import RemovePlatformCommand from './modules/removePlatform/RemovePlatformCommand';
import RemovePlatformCommandValidator from './modules/removePlatform/validators/RemovePlatformCommandValidator';
import UpdateSplashCommand from './modules/updateSplash/UpdateSplashCommand';
import UpdateSplashCommandValidator from './modules/updateSplash/validators/UpdateSplashCommandValidator';
import PlatformSetup from './core/platform/PlatformSetup';
import SplashScreenManager from './core/splash/SplashScreenManager';
import ErrorHandler from './utils/errorHandler';

class DIContainer {
  constructor() {
    this.services = {};
  }

  register(name, Constructor, dependencies = []) {
    if (typeof Constructor !== 'function') {
      throw new Error(`Constructor for ${name} is not a function`);
    }
    this.services[name] = { Constructor, dependencies };
  }

  get(name) {
    const service = this.services[name];
    if (!service) {
      throw new Error(`Service ${name} not found`);
    }
    const { Constructor, dependencies } = service;
    const resolvedDependencies = dependencies.map(dep => this.get(dep));
    return new Constructor(...resolvedDependencies);
  }
}

const container = new DIContainer();

// Registering all services with their dependencies
container.register('AddPlatformCommand', AddPlatformCommand, ['AddPlatformCommandValidator', 'PlatformSetup', 'ErrorHandler']);
container.register('AddPlatformCommandValidator', AddPlatformCommandValidator);
container.register('RemovePlatformCommand', RemovePlatformCommand, ['RemovePlatformCommandValidator', 'PlatformSetup', 'ErrorHandler']);
container.register('RemovePlatformCommandValidator', RemovePlatformCommandValidator);
container.register('UpdateSplashCommand', UpdateSplashCommand, ['UpdateSplashCommandValidator', 'SplashScreenManager', 'ErrorHandler']);
container.register('UpdateSplashCommandValidator', UpdateSplashCommandValidator);
container.register('PlatformSetup', PlatformSetup);
container.register('SplashScreenManager', SplashScreenManager);
container.register('ErrorHandler', ErrorHandler);


export default container;
