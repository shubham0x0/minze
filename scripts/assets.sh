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
convert ./app/assets/images/splash/splash.svg -background  '#e6e6e6' -gravity center -extent 1600x1600 ./app/assets/images/splash/splash.png

# requires yeoman and rn-toolbox
# ↪ npm install -g yo generator-rn-toolbox
echo -e "↪ generating splash and icons"
yo rn-toolbox:assets --icon ./app/assets/images/icons/icon.png  --splash ./app/assets/images/splash/splash.png

echo -e "↪ run react-native-assets"
npx react-native-asset

success "📦 script succeeded."
