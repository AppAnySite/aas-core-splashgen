import ISplashScreenManager from './ISplashScreenManager';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { log } from '../../utils/logger';
import { handleError } from '../../utils/errorHandler';
import chalk from 'chalk';
import os from 'os';

/**
 * SplashScreenManager class.
 * Manages updating the splash screen for a React Native project.
 * @extends ISplashScreenManager
 */
class SplashScreenManager extends ISplashScreenManager {
  async updateSplashScreen(projectDirectory, splashPath, platform = 'both', suppressLogs = false) {
    try {
      log('INFO', `Updating splash screen for platform: ${platform}`, chalk.green);

      const inputImagePath = path.resolve(splashPath);
      const projectPath = path.resolve(projectDirectory);
      let binaryPath;

      // Determine the binary path based on the operating system
      if (os.platform() === 'win32') {
        binaryPath = process.pkg ? 
          path.join(path.dirname(process.execPath), 'libs', 'IconSplashLib', 'IconSplashLib.exe') : 
          path.resolve(__dirname, '../../build/IconSplashLib/IconSplashLib.exe');
      } else {
        binaryPath = process.pkg ? 
          path.join(path.dirname(process.execPath), 'libs', 'IconSplashLib', 'IconSplashLib') : 
          path.resolve(__dirname, '../../build/IconSplashLib/IconSplashLib');
      }

      if (!fs.existsSync(binaryPath)) {
        log('ERROR', `Binary file not found: ${binaryPath}`, chalk.red);
        return;
      }

      const args = [projectPath, '--splash', inputImagePath];

      if (platform === 'android' || platform === 'both') {
        args.push('--platform', 'android');
      }
      if (platform === 'ios' || platform === 'both') {
        args.push('--platform', 'ios');
      }

      console.log(`Executing: ${binaryPath} ${args.join(' ')}`);
      const child = spawn(binaryPath, args);

      if (!suppressLogs) {
        child.stdout.on('data', (data) => {
          process.stdout.write(data);
        });

        child.stderr.on('data', (data) => {
          process.stderr.write(data);
        });
      }

      child.on('close', (code) => {
        if (code === 0) {
          log('INFO', 'Splash screen update completed successfully', chalk.green);
        } else {
          log('ERROR', `Binary process exited with code ${code}`, chalk.red);
        }
      });

    } catch (error) {
      handleError(error);
    }
  }
}

export default SplashScreenManager;
