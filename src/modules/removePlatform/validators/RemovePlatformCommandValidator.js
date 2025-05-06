import IRemovePlatformCommandValidator from './IRemovePlatformCommandValidator';

/**
 * RemovePlatformCommandValidator class.
 * Validates the options for removing a platform.
 * @extends IRemovePlatformCommandValidator
 */
class RemovePlatformCommandValidator extends IRemovePlatformCommandValidator {
  /**
   * Validates the options.
   * @param {Object} options - Options to validate.
   * @throws Will throw an error if validation fails.
   */
  validate(options) {
    if (!options.directory) {
      throw new Error('Project directory is required.');
    }
    if (!options.platform) {
      throw new Error('Platform is required.');
    }
  }
}

export default RemovePlatformCommandValidator;
