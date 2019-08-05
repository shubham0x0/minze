#!/usr/bin/env bash

########################################################################################
# Unzip secrets archive, copying the secret files to the correct locations in the repo #
# Command: ./secrets-scripts/unpack-secrets.sh -e <environment> -p <password>          #
########################################################################################

set -e

APP_ENV="testing"
SECRETS_PASSPHRASE=""
GREEN='\033[0;32m'


while getopts ":e:p:" opt; do
  case $opt in
    e) APP_ENV="$OPTARG"
    ;;
    p) SECRETS_PASSPHRASE="$OPTARG"
    ;;
    \?) echo "${RED}Invalid option -$OPTARG${NO_COLOR}" >&2
    ;;
  esac
done

# Select encrypted file
FILE_ROOT="${APP_ENV}_app_secrets_with_paths"

## Decrypt
gpg --decrypt --passphrase $SECRETS_PASSPHRASE --batch secrets/$FILE_ROOT.tar.gz.gpg > $FILE_ROOT.tar.gz

## Unzip to correct locations in project
tar -xzvf $FILE_ROOT.tar.gz

## Remove intermediaries
rm $FILE_ROOT.tar.gz

echo -e "✅ ${GREEN} ${APP_ENV} secrets have been unpacked to the correct location in your local environment"
