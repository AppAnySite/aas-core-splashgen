/**
 * Interface for AddPlatformCommand.
 * @interface
 */
class IAddPlatformCommand {
  /**
   * Executes the command to add a platform.
   * @param {Object} options - Options for adding the platform.
   */
  execute(options) {
    throw new Error('Method not implemented');
  }
}

export default IAddPlatformCommand;
