#! /bin/bash
set -e

DEV=0
RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'

APP_ENV="testing"
APP_OS="android"


success(){
  echo -e "✅  ${GREEN}$1${NO_COLOR}"
}

warn(){
  echo -e "⚠️  ${YELLOW}$1${NO_COLOR}"

  if [ $DEV -eq 0 ]
  then
    exit 1
  fi
}

check_environment(){
  CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`

  if [ "$CURRENT_BRANCH" != "$APP_ENV" ]
  then
    warn "Wrong branch, checkout $APP_ENV to deploy to $APP_ENV."
  else
    success "building $APP_ENV."
  fi
}


while getopts ":e:o:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    o) APP_OS="$OPTARG"
    ;;
    \?) echo "${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

source fastlane/.env.$APP_ENV

check_environment $APP_ENV

if [[ $APP_OS == "android" ]]; then
  echo -e "${YELLOW}- - - - -"
  echo -e "Codepush 🤖  Android ${APP_ENV}"
  echo -e "- - - - -${NO_COLOR}"
  bundle exec fastlane android build --env=$APP_ENV
fi

success "📦  Build succeeded."
