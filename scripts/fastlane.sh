#! /bin/bash
source scripts/common.sh
source fastlane/.env
source fastlane/.env.secret
################################################################################
# FASTLANE SCRIPT
################################################################################
#  make sure fastlane is installed
if ! gem query -i -n fastlane > /dev/null 2>&1; then
  sudo gem install fastlane -NV
fi

while getopts ":e:o:m:" opt; do
  case $opt in
  e)
    APP_ENV="$OPTARG"
    ;;
  o)
    APP_OS="$OPTARG"
    ;;
  m)
    FASTLANE="$OPTARG"
    ;;
  \?)
    echo "❌ ${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

if [[ $APP_OS == "android" ]]; then
  echo -e "${YELLOW}- - - - -"
  echo -e "↪ Android FASTLANE ENV: ${ENV}  APP_ENV: ${APP_ENV} 🤖"
  echo -e "- - - - -${NO_COLOR}"
  if [[ $ENV != $APP_ENV ]]; then
    echo -e "${RED}Make sure to setup env vars properly!!!${NO_COLOR}"
    exit -1
  fi
  if [ $# -eq 0 ]; then
    bundle exec fastlane android
  else
      bundle exec fastlane android $FASTLANE
      echo -e "↪ fastlane Android ${FASTLANE} succeded"
  fi
fi

success "📦 succees."
