# ./build/MY-API create --name MaighaInc --platform-ios --platform-android --url https://maigha.com --directory /Users/vhmaigha/Desktop/AppAnySitePOC/AppAnySite/Utils/tools/my-node-cli-tool/
# # ./build/APPANYSITE update-icon --directory ./MaighaInc/ --icon ./logo.png
# # ./build/APPANYSITE update-splash --directory ./MaighaInc/ --splash ./logo.svg

# Create directories
mkdir -p src/modules/create/validators
mkdir -p src/modules/addPlatform/validators
mkdir -p src/modules/removePlatform/validators
mkdir -p src/modules/updateIcon/validators
mkdir -p src/modules/updateSplash/validators
mkdir -p src/core/project
mkdir -p src/core/platform
mkdir -p src/core/webview
mkdir -p src/core/icon
mkdir -p src/core/splash
mkdir -p src/utils/commandRunner
mkdir -p src/utils/logger
mkdir -p src/utils/errorHandler

# Create files
touch src/modules/create/index.js
touch src/modules/create/CreateCommand.js
touch src/modules/create/ICreateCommand.js
touch src/modules/create/validators/CreateCommandValidator.js
touch src/modules/create/validators/ICreateCommandValidator.js

touch src/modules/addPlatform/index.js
touch src/modules/addPlatform/AddPlatformCommand.js
touch src/modules/addPlatform/IAddPlatformCommand.js
touch src/modules/addPlatform/validators/AddPlatformCommandValidator.js
touch src/modules/addPlatform/validators/IAddPlatformCommandValidator.js

touch src/modules/removePlatform/index.js
touch src/modules/removePlatform/RemovePlatformCommand.js
touch src/modules/removePlatform/IRemovePlatformCommand.js
touch src/modules/removePlatform/validators/RemovePlatformCommandValidator.js
touch src/modules/removePlatform/validators/IRemovePlatformCommandValidator.js

touch src/modules/updateIcon/index.js
touch src/modules/updateIcon/UpdateIconCommand.js
touch src/modules/updateIcon/IUpdateIconCommand.js
touch src/modules/updateIcon/validators/UpdateIconCommandValidator.js
touch src/modules/updateIcon/validators/IUpdateIconCommandValidator.js

touch src/modules/updateSplash/index.js
touch src/modules/updateSplash/UpdateSplashCommand.js
touch src/modules/updateSplash/IUpdateSplashCommand.js
touch src/modules/updateSplash/validators/UpdateSplashCommandValidator.js
touch src/modules/updateSplash/validators/IUpdateSplashCommandValidator.js

touch src/core/project/index.js
touch src/core/project/ProjectCreator.js
touch src/core/project/IProjectCreator.js

touch src/core/platform/index.js
touch src/core/platform/PlatformSetup.js
touch src/core/platform/IPlatformSetup.js

touch src/core/webview/index.js
touch src/core/webview/WebViewComponentCreator.js
touch src/core/webview/IWebViewComponentCreator.js

touch src/core/icon/index.js
touch src/core/icon/IconManager.js
touch src/core/icon/IIconManager.js

touch src/core/splash/index.js
touch src/core/splash/SplashScreenManager.js
touch src/core/splash/ISplashScreenManager.js

touch src/utils/commandRunner/index.js
touch src/utils/commandRunner/checkCommand.js
touch src/utils/commandRunner/runCommand.js

touch src/utils/logger/index.js
touch src/utils/errorHandler/index.js
touch src/utils/fileUtils.js

src/config.js
touch src/diContainer.js
touch src/main.js
