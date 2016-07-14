#!/usr/bin/env bash

# Exit on error. Append || true if you expect an error.
set -o errexit
# Exit on error inside any functions or subshells.
set -o errtrace
# Do not allow use of undefined vars. Use ${VAR:-} to use an undefined VAR
set -o nounset
# Catch the error in case mysqldump fails (but gzip succeeds) in `mysqldump |gzip`
set -o pipefail

__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

# from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd

# update sauce labs job id in README.md
# sed -i 's:saucelabs.com/beta/tests/[^\)]*:saucelabs.com/beta/tests/'$SAUCE_JOB_ID':' README.md

git clone $REPO out
cd out
git checkout gh-pages || git checkout --orphan gh-pages
cd ..

git rebase master
npm run examples
cp -r examples/* out/

cd out

# add and commit changes to readme
git config user.name "Mirco Zeiss"
git config user.email "mirco.zeiss@gmail.com"
git add --all .
git commit -m "travis-ci: update sauce labs job id in readme"
# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
# https://docs.travis-ci.com/user/deployment/custom/
eval "$(ssh-agent -s)"
chmod 600 ${__dir}/travis
ssh-add ${__dir}/travis
git remote -v
git push $SSH_REPO gh-pages
