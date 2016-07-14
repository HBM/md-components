#!/usr/bin/env bash

# Exit on error. Append || true if you expect an error.
set -o errexit
# Exit on error inside any functions or subshells.
set -o errtrace
# Do not allow use of undefined vars. Use ${VAR:-} to use an undefined VAR
set -o nounset
# Catch the error in case mysqldump fails (but gzip succeeds) in `mysqldump |gzip`
set -o pipefail

# from https://gist.github.com/domenic/ec8b0fc8ab45f39403dd

# update sauce labs job id in README.md
# sed -i 's:saucelabs.com/beta/tests/[^\)]*:saucelabs.com/beta/tests/'$SAUCE_JOB_ID':' README.md

git clone `git config remote.origin.url` out
cd out
git checkout gh-pages || git checkout --orphan gh-pages
cd ..

rm -rf out/*

git rebase master
npm run examples
cp -r examples/* out/

cd out

# add and commit changes to readme
git config user.name "Travis CI"
git config user.email "builds@travis-ci.org"
git add --all .
git commit -m "travis-ci: update sauce labs job id in readme"
# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
# https://docs.travis-ci.com/user/deployment/custom/
eval "ssh-agent -s"
ls
chmod 600 ./travis
ssh-add ./travis
git push origin gh-pages
