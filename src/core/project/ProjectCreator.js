import IProjectCreator from './IProjectCreator';
import { runCommand } from '../../utils/commandRunner';
import { log } from '../../utils/logger';
import IconManager from '../icon/IconManager';

/**
 * ProjectCreator class.
 * Creates a new React Native project and manages updates to icons and splash screens.
 * @extends IProjectCreator
 */
class ProjectCreator extends IProjectCreator {
  constructor() {
    super();
    this.iconManager = new IconManager();  // Properly instantiate IconManager
  }

  async createProject(options) {
    await runCommand('npx', ['@react-native-community/cli@latest', 'init', options.name], {
      cwd: options.directory,
      input: 'y\n'
    });
  }

  async updateIcon({ directory, icon, platform, folder, iconType }) {
    try {
      await this.iconManager.updateIcon(directory, icon, platform, folder, iconType);
    } catch (error) {
      log('ERROR', `Error in ProjectCreator.updateIcon: ${error.message}`);
      throw error;
    }
  }

  async updateSplashScreen(splashPath) {
    await SplashScreenManager.updateSplashScreen(this.directory, splashPath);
  }
}

export default ProjectCreator;
