applet.currentConfigGroup = ["Shortcuts"]
applet.writeConfig("global", "Alt+F1")

applet.currentConfigGroup = ["General"]
applet.writeConfig("customButtonImage", "file:///usr/share/icons/hicolor/scalable/apps/homerun.svg")
applet.writeConfig("favoriteApps", ["systemsettings.desktop","synaptic.desktop","org.kde.ksysguard.desktop"])
applet.writeConfig("hiddenApplications", "org.kde.ksshaskpass.desktop")
applet.writeConfig("useCustomButtonImage", true)

applet.reloadConfig();
