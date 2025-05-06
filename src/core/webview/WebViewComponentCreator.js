import IWebViewComponentCreator from './IWebViewComponentCreator';
import { writeFile } from '../../utils/fileUtils';
import path from 'path';
import { log } from '../../utils/logger';
import { handleError } from '../../utils/errorHandler';
import fs from 'fs';

/**
 * WebViewComponentCreator class.
 * Creates a WebView component for a React Native project.
 * @extends IWebViewComponentCreator
 */
class WebViewComponentCreator extends IWebViewComponentCreator {
  constructor(directory, name) {
    super();
    this.directory = directory;
    this.name = name;
  }

  async createWebViewComponent(url) {
    try {
      const projectDir = path.join(this.directory, this.name);
      const srcDir = path.join(projectDir, 'src');
      if (!fs.existsSync(srcDir)) {
        fs.mkdirSync(srcDir, { recursive: true });
      }

      const webviewComponent = `
import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ url }) => (
  <SafeAreaView style={styles.container}>
    <WebView source={{ uri: url }} style={styles.webview} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
      `;

      writeFile(path.join(srcDir, 'WebViewScreen.tsx'), webviewComponent);

      const appComponent = `
import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebViewScreen from './src/WebViewScreen';

const App = () => {
  const websiteUrl = '${url}';

  return (
    <View style={styles.container}>
      <WebViewScreen url={websiteUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
      `;

      writeFile(path.join(projectDir, 'App.tsx'), appComponent);

      const tsConfig = `
{
  "compilerOptions": {
    "jsx": "react"
  },
  "extends": "@react-native/typescript-config/tsconfig.json",
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
      `;

      writeFile(path.join(projectDir, 'tsconfig.json'), tsConfig);

    } catch (error) {
      handleError(error);
    }
  }
}

export default WebViewComponentCreator;
