/**
 * Interface for DownloadManager.
 * @interface
 */
class IDownloadManager {
    /**
     * Creates the assets directory.
     * @param {string} projectDirectory - The project directory.
     */
    createAssetsDirectory(projectDirectory) {
      throw new Error('Method not implemented');
    }
  
    /**
     * Bundles the React Native assets.
     * @param {string} projectDirectory - The project directory.
     */
    bundleAssets(projectDirectory) {
      throw new Error('Method not implemented');
    }
  
    /**
     * Builds the debug unsigned APK.
     * @param {string} projectDirectory - The project directory.
     */
    buildApk(projectDirectory) {
      throw new Error('Method not implemented');
    }
  
    /**
     * Moves the APK to the specified folder.
     * @param {string} projectDirectory - The project directory.
     */
    moveApk(projectDirectory) {
      throw new Error('Method not implemented');
    }
  }
  
  export default IDownloadManager;
  