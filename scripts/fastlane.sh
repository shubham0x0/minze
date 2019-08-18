#! /bin/bash
source scripts/common.sh

source .env
source fastlane/.env
source fastlane/.env.secret
################################################################################
# FASTLANE SCRIPT
################################################################################
#  make sure fastlane is installed
if ! gem query -i -n fastlane > /dev/null 2>&1; then
  sudo gem install fastlane -NV
fi

while getopts ":e:o:" opt; do
  case $opt in
  e)
    APP_ENV="$OPTARG"
    ;;
  o)
    APP_OS="$OPTARG"
    ;;
  \?)
    echo "❌ ${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

if [[ $APP_OS == "android" ]]; then
  echo -e "${YELLOW}- - - - -"
  echo -e "↪Android ${APP_ENV} 🤖"
  echo -e "- - - - -${NO_COLOR}"
  if [ $# -eq 0 ]; then
    bundle exec fastlane android
  else
    for ARG in "$@"; do
      bundle exec fastlane android $ARG
      echo -e "↪ fastlane Android ${ARG} succeded"
    done
  fi
fi

success "📦 succees."
