/**
 * Interface for UpdateSplashCommand.
 * @interface
 */
class IUpdateSplashCommand {
  /**
   * Executes the command to update the splash screen.
   * @param {Object} options - Options for updating the splash screen.
   */
  execute(options) {
    throw new Error('Method not implemented');
  }
}

export default IUpdateSplashCommand;
