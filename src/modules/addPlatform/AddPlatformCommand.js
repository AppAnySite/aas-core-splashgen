import IAddPlatformCommand from './IAddPlatformCommand';
import { handleError } from '../../utils/errorHandler';

/**
 * AddPlatformCommand class.
 * Handles adding a platform to an existing project.
 * @extends IAddPlatformCommand
 */
class AddPlatformCommand extends IAddPlatformCommand {
  constructor(addPlatformCommandValidator, platformSetup, errorHandler) {
    super();
    this.addPlatformCommandValidator = addPlatformCommandValidator;
    this.platformSetup = platformSetup;
    this.errorHandler = errorHandler;
  }

  /**
   * Executes the command to add a platform.
   * @param {Object} options - Options for adding the platform.
   * @param {string} options.directory - Directory where the project is located.
   * @param {string} options.platform - Platform to add (e.g., 'android', 'ios').
   * @returns {Promise<void>}
   */
  async execute(options) {
    try {
      this.addPlatformCommandValidator.validate(options);
      await this.platformSetup.setupPlatform(options.platform, options.url);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}

export default AddPlatformCommand;
