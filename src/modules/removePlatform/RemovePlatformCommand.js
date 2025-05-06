import IRemovePlatformCommand from './IRemovePlatformCommand';
import { handleError } from '../../utils/errorHandler';

/**
 * RemovePlatformCommand class.
 * Handles removing a platform from an existing project.
 * @extends IRemovePlatformCommand
 */
class RemovePlatformCommand extends IRemovePlatformCommand {
  constructor(removePlatformCommandValidator, platformSetup, errorHandler) {
    super();
    this.removePlatformCommandValidator = removePlatformCommandValidator;
    this.platformSetup = platformSetup;
    this.errorHandler = errorHandler;
  }

  /**
   * Executes the command to remove a platform.
   * @param {Object} options - Options for removing the platform.
   * @param {string} options.directory - Directory where the project is located.
   * @param {string} options.platform - Platform to remove (e.g., 'android', 'ios').
   * @returns {Promise<void>}
   */
  async execute(options) {
    try {
      this.removePlatformCommandValidator.validate(options);
      await this.platformSetup.removePlatform(options.platform);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}

export default RemovePlatformCommand;
