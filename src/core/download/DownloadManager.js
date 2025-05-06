import IDownloadManager from './IDownloadManager';
import fs from 'fs';
import path from 'path';
import { runCommand } from '../../utils/commandRunner';

/**
 * DownloadManager class.
 * Handles the process of building and moving the APK.
 * @extends IDownloadManager
 */
class DownloadManager extends IDownloadManager {
    async createAssetsDirectory(projectDirectory) {
      const assetsDir = path.join(projectDirectory, 'android', 'app', 'src', 'main', 'assets');
      if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
      }
    }
  
    async bundleAssets(projectDirectory) {
      await runCommand('npx', ['react-native', 'bundle', '--platform', 'android', '--dev', 'false', '--entry-file', 'index.js', '--bundle-output', 'android/app/src/main/assets/index.android.bundle', '--assets-dest', 'android/app/src/main/res'], {
        cwd: projectDirectory
      });
    }
  
    async buildApk(projectDirectory) {
      const gradlewPath = path.join(projectDirectory, 'android', 'gradlew');
      await runCommand('sh', [gradlewPath, 'assembleDebug'], {
        cwd: path.join(projectDirectory, 'android')
      });
    }
  
    async moveApk(projectDirectory) {
      const apkSourcePath = path.join(projectDirectory, 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
      const apkDestDir = path.join(projectDirectory, 'apk');
      const apkDestPath = path.join(apkDestDir, 'app-debug.apk');
  
      if (!fs.existsSync(apkDestDir)) {
        fs.mkdirSync(apkDestDir, { recursive: true });
      }
  
      await runCommand('mv', [apkSourcePath, apkDestPath]);
    }
  }
  
  export default DownloadManager;
  