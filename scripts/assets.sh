#! /bin/bash
source scripts/common.sh
################################################################################
# ASSETS SCRIPT
################################################################################

echo -e "${YELLOW}- - - - -"
echo -e "↪ Assets script 🤖 "
echo -e "- - - - -${NO_COLOR}"

# imagemagic required
# ↪ sudo apt-get install imagemagick-6-common
echo -e "↪ converting svg to png"
convert ./app/assets/images/splash/splash.svg -background  '#333' -gravity center -extent 768x768 ./app/assets/images/splash/splash.png

# requires yeoman and rn-toolbox
# ↪ npm install -g yo generator-rn-toolbox
echo -e "↪ generating splash and icons"
npx react-native set-icon --platform ios --path ./app/assets/images/icons/icon.png
npx react-native set-icon --platform android --path ./app/assets/images/icons/icon.png
# npx react-native set-splash --path ./app/assets/images/splash/splash.png --resize center --background #ffffff
yo rn-toolbox:assets  --splash ./app/assets/images/splash/splash.png

echo -e "↪ run react-native-assets"
npx react-native-asset

success "📦 script succeeded."
