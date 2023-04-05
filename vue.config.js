module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      outputDir: 'dist',
      builderOptions: {
        appId: 'com.solartweaks.launcher',
        productName: 'Solar Tweaks',
        win: {
          target: 'nsis',
          icon: 'build/icons/win/icon.ico',
          publisherName: 'Solar Tweaks',
          verifyUpdateCodeSignature: true,
          requestedExecutionLevel: 'asInvoker',
        },
        nsis: {
          oneClick: true,
          installerIcon: 'build/icons/win/icon.ico',
          uninstallerIcon: 'build/icons/win/icon.ico',
          installerHeaderIcon: 'build/icons/win/icon.ico',
          runAfterFinish: true,
        },
        linux: {
          target: 'AppImage',
          maintainer: 'Solar Tweaks',
          vendor: 'Solar Tweaks',
          icon: 'build/icons/linux/1024x1024.png',
          synopsis: 'Luanr Client tweaker/customizer',
          description: 'Solar Tweaks is a tool for tweaking and customizing Lunar Client. Give yourself an upgrade in your gaming experience.',
          category: 'Game',
        },
        mac: {
          category: 'Game',
          target: 'dmg',
          icon: 'build/icons/macos/icon.icns',
        },
      },
    },
  },
};
