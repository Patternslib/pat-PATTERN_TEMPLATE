#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo "Usage: ./create.sh PROJECTNAME"
    exit 1
fi

SEARCHSTRING="PATTERN_TEMPLATE"
PROJECTNAME=$1

git checkout-index -a -f --prefix=./pat-$PROJECTNAME/
rm pat-$PROJECTNAME/create.sh
rename "s/$SEARCHSTRING/$PROJECTNAME/" pat-$PROJECTNAME/src/*
find ./pat-$PROJECTNAME -type f -exec sed -i "s/$SEARCHSTRING/$PROJECTNAME/g" {} \;
cd pat-$PROJECTNAME
git init
git add .
git commit -m"maint(Release): Initial for pat-$PROJECTNAME"

#
