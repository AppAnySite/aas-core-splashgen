/**
 * Interface for AddPlatformCommandValidator.
 * @interface
 */
class IAddPlatformCommandValidator {
  /**
   * Validates the options.
   * @param {Object} options - Options to validate.
   * @throws Will throw an error if validation fails.
   */
  validate(options) {
    throw new Error('Method not implemented');
  }
}

export default IAddPlatformCommandValidator;
