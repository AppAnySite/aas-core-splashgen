import IAddPlatformCommandValidator from './IAddPlatformCommandValidator';

/**
 * AddPlatformCommandValidator class.
 * Validates the options for adding a platform.
 * @extends IAddPlatformCommandValidator
 */
class AddPlatformCommandValidator extends IAddPlatformCommandValidator {
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
    // Add more validations as necessary
  }
}

export default AddPlatformCommandValidator;
