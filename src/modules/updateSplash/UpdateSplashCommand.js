import IUpdateSplashCommand from './IUpdateSplashCommand';
import { handleError } from '../../utils/errorHandler';
import { log } from '../../utils/logger';

/**
 * UpdateSplashCommand class.
 * Handles the updating of the splash screen.
 * @extends IUpdateSplashCommand
 */
class UpdateSplashCommand extends IUpdateSplashCommand {
  constructor(updateSplashCommandValidator, splashScreenManager, errorHandler) {
    super();
    this.updateSplashCommandValidator = updateSplashCommandValidator;
    this.splashScreenManager = splashScreenManager;
    this.errorHandler = errorHandler;
  }

  async execute(options) {
    try {
      this.updateSplashCommandValidator.validate(options);

      const platform = options.platform || 'both'; // Default to both platforms if not specified
      await this.splashScreenManager.updateSplashScreen(options.directory, options.splash, platform);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}

export default UpdateSplashCommand;
