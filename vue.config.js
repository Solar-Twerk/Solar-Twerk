module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      outputDir: 'dist',
      builderOptions: {
        appId: 'com.solartwerk.launcher',
        productName: 'Solar Twerk',
        win: {
          target: 'nsis',
          icon: 'build/icons/win/icon.ico',
          publisherName: 'Solar Twerk',
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
          maintainer: 'qualk',
          vendor: 'Solar Twerk',
          icon: 'build/icons/linux/1024x1024.png',
          synopsis: 'Lunar Client Twerker',
          description: 'Solar Twerk is a tool for twerking and customizing Lunar Client. Give yourself an upgrade in your twerking experience.',
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
