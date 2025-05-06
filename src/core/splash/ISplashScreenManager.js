/**
 * Interface for SplashScreenManager.
 * @interface
 */
class ISplashScreenManager {
  /**
   * Updates the splash screen.
   * @param {string} projectDirectory - The project directory.
   * @param {string} splashPath - The path to the new splash screen.
   */
  updateSplashScreen(projectDirectory, splashPath) {
    throw new Error('Method not implemented');
  }
}

export default ISplashScreenManager;
