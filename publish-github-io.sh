#!/bin/bash

SOURCES_BRANCH=${1:-source}
DEPLOY_BRANCH=${2:-master}

if [ `git symbolic-ref --short HEAD` != $SOURCES_BRANCH ]; then
  echo "Attention: Not in sources branch: $SOURCES_BRANCH"
  exit 1
fi

# Commit and push changes (may be empty)
git add *
git commit -m "publishing"
git push

# Move to the deployment branch
git checkout $DEPLOY_BRANCH

# Clean it
rm -rf *
git rm -rf *

# Get the generated site from the source branch
git checkout $SOURCES_BRANCH -- generated
mv generated/* .
rm -r generated

# Commit and push to deploy branch
git add *
git commit -m "deploy"
git push

# Go back to sources branch
git checkout $SOURCES_BRANCH
git checkout $SOURCES_BRANCH -- generated

