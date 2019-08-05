#!/usr/bin/env bash

################################################################################
# POST-INSTALL SCRIPT
################################################################################

################################################################################
# App development has 4 phases
# for local-branches: checkout from development branch
################################################################################

################################################################################
# SETUP VARIABLES
################################################################################

PRODUCTION="master"       # Resticted access
STAGING="staging"         # Resticted access; pre-production alpha testing
DEVELOPMENT="development" # merge point and development takes place here
TESTING="testing"         # full access to everyone


BRANCH=$APPCENTER_BRANCH
if [ -z $BRANCH ]; then
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
fi

echo "CURRENT BRANCH: "
echo $BRANCH
################################################################################

################################################################################
# SECRETS FOR SIGNING AND OTHER THINGS
# symmetric cipher is used to encrypt the secrets.
################################################################################
if [ ${BRANCH} == $PRODUCTION ]; then
  yarn secrets:unpack -e production -p ${PRODUCTION_SECRET_PASSPHRASE}
elif [ $BRANCH == $STAGING ]; then
  yarn secrets:unpack -e staging -p ${STAGING_SECRET_PASSPHRASE}
elif [ $BRANCH == $DEVELOPMENT ]; then
  yarn secrets:unpack -e development -p ${DEVELOPMENT_SECRET_PASSPHRASE}
else
  yarn secrets:unpack -e testing -p ${DEVELOPMENT_SECRET_TESTING}
fi
################################################################################
