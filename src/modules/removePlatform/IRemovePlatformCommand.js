/**
 * Interface for RemovePlatformCommand.
 * @interface
 */
class IRemovePlatformCommand {
  /**
   * Executes the command to remove a platform.
   * @param {Object} options - Options for removing the platform.
   */
  execute(options) {
    throw new Error('Method not implemented');
  }
}

export default IRemovePlatformCommand;
