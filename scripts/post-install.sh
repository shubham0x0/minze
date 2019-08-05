#!/usr/bin/env bash

################################################################################
# POST-INSTALL SCRIPT
################################################################################

################################################################################
# App development has 4 phases
# for local-branches: checkout from development branch
################################################################################

PRODUCTION="master"       # Resticted access
STAGING="staging"         # Resticted access; pre-production alpha testing
DEVELOPMENT="development" # merge point and development takes place here
TESTING="testing"         # full access to everyone

################################################################################
# SETUP VARIABLES
################################################################################

ENV_WHITELIST=${ENV_WHITELIST:-"^RN.*$|^APP_.*$|^SERVER_.*"}

BRANCH=$APPCENTER_BRANCH
if [ -z $BRANCH ]; then
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
fi
echo "CURRENT BRANCH: "
echo $BRANCH

################################################################################
# SECRETS UNPACKING FOR SIGNING
# symmetric cipher is used to encrypt the secrets.
################################################################################
if [ ${BRANCH} == $PRODUCTION ]; then
  yarn secrets:unpack -e production -p ${PRODUCTION_SECRET_PASSPHRASE}
elif [ $BRANCH == $STAGING ]; then
  yarn secrets:unpack -e staging -p ${STAGING_SECRET_PASSPHRASE}
elif [ $BRANCH == $DEVELOPMENT ]; then
  yarn secrets:unpack -e development -p ${DEVELOPMENT_SECRET_PASSPHRASE}
fi
################################################################################

SOURCE_DIRECTORY=$APPCENTER_SOURCE_DIRECTORY
if [ -z $SOURCE_DIRECTORY ]; then
  SOURCE_DIRECTORY=.
fi
echo "CURRENT SOURCE DIRECTORY: "
echo $SOURCE_DIRECTORY

GOOGLE_SERVICES_JSON_FILE=$SOURCE_DIRECTORY/android/app/google-services.json

################################################################################
# GENERATES GOOGLE_SERVICES_JSON FILE TO APPROPRIATE LOCATIONS
################################################################################

if [[ ! -e $GOOGLE_SERVICES_JSON_FILE ]]; then
  echo "Creating an empty google-services.json file"
  touch $GOOGLE_SERVICES_JSON_FILE
  if [ -e $GOOGLE_SERVICES_JSON_FILE ]; then
    echo "Updating google-services.json file"
    echo "$GOOGLE_SERVICES_JSON" >$GOOGLE_SERVICES_JSON_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_SERVICES_JSON_FILE
    echo "GOOGLE_SERVICES_JSON_FILE content: "
    cat $GOOGLE_SERVICES_JSON_FILE
    echo "Successfuly generated google-services.json"
  fi
fi

################################################################################
# GENERATES .env FILE with env VARIABLES
################################################################################

if [[ ! -e .env ]]; then
  touch .env
  set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" >.env
  # echo ".env content"
  # cat .env
else
  if [[ $BRANCH == $DEVELOPMENT ]]; then
    if [[ ! -e .env.development ]]; then
      touch .env.development
      set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" >.env.development
    fi
    cat .env.development >.env
  elif [[ $BRANCH == $STAGING ]]; then
    if [[ ! -e .env.staging ]]; then
      touch .env.staging
      set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" >.env.staging
    fi
    cat .env.staging >.env
  elif [[ $BRANCH == $PRODUCTION ]]; then
    if [[ ! -e .env.production ]]; then
      touch .env.production
      set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" >.env.production
    fi
    cat .env.production >.env
  elif [[ $BRANCH == $TESTING ]]; then
    if [[ ! -e .env.testing ]]; then
      touch .env.testing
      set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" >.env.testing
    fi
    cat .env.testing >.env
  else
    cat .env.local >.env
  fi
fi
