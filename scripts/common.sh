#! /bin/bash
set -e
## common consts
DEV=0
RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'

success(){
  echo -e "✅  ${GREEN}$1${NO_COLOR}"
}

warn(){
  echo -e "🚫  ${YELLOW}$1${NO_COLOR}"
  if [ $DEV -eq 0 ]
  then
    exit 1
  fi
}

################################################################################
# App development has 4 phases
# for local-branches: checkout from development branch
################################################################################
PRODUCTION="master"       # Resticted access; main release; auto deploy
STAGING="staging"         # Resticted access; beta release; auto deploy
DEVELOPMENT="development" # alpha release; all merge takes place here
TESTING="testing"         # branch for testing out stuffs. full access
################################################################################

GIT_BRANCH=$APPCENTER_BRANCH
if [ -z $GIT_BRANCH ]; then
  GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
fi

# there are two secrets
# production and development

if [ ${GIT_BRANCH} == $PRODUCTION ] || [ $GIT_BRANCH == $STAGING ]; then
  APP_ENV='production'
else
  APP_ENV='development'
fi

APP_OS="android"
