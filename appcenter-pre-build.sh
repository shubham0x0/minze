GOOGLE_JSON_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/google-services.json
## SEE:
# https://www.jimbobbennett.io/updating-your-google-service-json-from-an-appcenter-environment-variable/

echo "Creating an empty google-services.json file"
touch $GOOGLE_JSON_FILE

if [ -e "$GOOGLE_JSON_FILE" ]
then
    echo "Updating Google Json"
    echo "$GOOGLE_JSON" > $GOOGLE_JSON_FILE
    sed -i -e 's/\\"/'\"'/g' $GOOGLE_JSON_FILE

    echo "File content:"
    cat $GOOGLE_JSON_FILE
    echo "Successfuly generated google-services.json"
fi

# # Creates an .env from existing env files for use with react-native-config
# # based on branch
# if [  "$APPCENTER_BRANCH" == "master" ]; then
#    cp .env.prod .env
# else
#    cp .env.dev .env
# fi

# printf "\n.env created with contents:\n"
# cat .env

# Creates an .env from ENV variables for use with react-native-config
ENV_WHITELIST=${ENV_WHITELIST:-"^RN"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env
printf "\n.env created with contents:\n"
cat .env
