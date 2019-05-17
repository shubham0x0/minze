#!/usr/bin/env bash
source scripts/common.sh
################################################################################
# POST-INSTALL SCRIPT
################################################################################

while getopts ":e:o:p:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    o) APP_OS="$OPTARG"
    ;;
    p) APP_SECRET_PASSPHRASE="$OPTARG"
    ;;
    \?) echo "❌ ${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done


echo -e "${YELLOW}- - - - -"
echo -e "↪ post-install script 🤖"
echo -e "- - - - -${NO_COLOR}"
echo -e "CURRENT APP_ENV: ${YELLOW}$APP_ENV"

################################################################################
# SECRETS FOR SIGNING AND OTHER THINGS
# symmetric cipher is used to encrypt the secrets.
################################################################################
./scripts/secrets.sh -m unpack -e ${APP_ENV} -p ${APP_SECRET_PASSPHRASE}
################################################################################

source fastlane/.env.$APP_ENV
source fastlane/.env.$APP_ENV.secret

success "post-install succeed 📦"
