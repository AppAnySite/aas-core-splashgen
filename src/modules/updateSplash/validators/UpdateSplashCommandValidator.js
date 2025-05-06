import IUpdateSplashCommandValidator from './IUpdateSplashCommandValidator';

/**
 * UpdateSplashCommandValidator class.
 * Validates the options for updating the splash screen.
 * @extends IUpdateSplashCommandValidator
 */
class UpdateSplashCommandValidator extends IUpdateSplashCommandValidator {
  validate(options) {
    if (!options.directory) {
      throw new Error('Project directory is required.');
    }
    if (!options.splash) {
      throw new Error('Splash path is required.');
    }
    if (options.platform && !['android', 'ios', 'both'].includes(options.platform)) {
      throw new Error('Platform must be either "android", "ios", or "both".');
    }
    // Add more validations as necessary
  }
}

export default UpdateSplashCommandValidator;
