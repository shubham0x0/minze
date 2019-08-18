#!/usr/bin/env bash
source scripts/common.sh

################################################################################
# POST-INSTALL SCRIPT
################################################################################
################################################################################
# SECRETS FOR SIGNING AND OTHER THINGS
# symmetric cipher is used to encrypt the secrets.
# APP_SECRET_PASSPHRASE must be set in order to decrypt



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

################################################################################
./scripts/secrets.sh -m unpack -e ${APP_ENV} -p ${APP_SECRET_PASSPHRASE}
################################################################################
source .env
source fastlane/.env
source fastlane/.env.secret

echo -e "${YELLOW}- - - - -"
echo -e "↪ post-install script 🤖"
echo -e "- - - - -${NO_COLOR}"
echo -e "↪ APP_ENV: ${YELLOW}$APP_ENV${NO_COLOR}"
success "post-install succeed 📦"
#  npx jetify
# success "jetify succeed 📦"
