#! /bin/bash
source scripts/common.sh
################################################################################
# FASTLANE SCRIPT
################################################################################

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

source fastlane/.env.$APP_ENV

if [[ $APP_OS == "android" ]]; then
  echo -e "${YELLOW}- - - - -"
  echo -e "↪ fastlane Android ${APP_ENV} 🤖"
  echo -e "- - - - -${NO_COLOR}"
  if [ $# -eq 0 ]; then
    bundle exec fastlane android --env=$APP_ENV
  else
    for ARG in "$@"; do
      bundle exec fastlane android $ARG --env=$APP_ENV
      echo -e "↪ fastlane Android ${ARG} succeded"
    done
  fi
fi

success "📦 succees."
