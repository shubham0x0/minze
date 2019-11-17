#!/usr/bin/env bash

if [ "$APPCENTER_BRANCH" == "master" ]; then
    yarn run setup:production
else
    yarn run setup:development
fi
