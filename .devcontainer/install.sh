#!/usr/bin/env zsh

# Install Node.js version defined in .nvmrc
. "${NVM_DIR}/nvm.sh"
nvm install

# Install pnpm version defined in package.json
corepack enable

# Install project dependencies defined in lockfile
pnpm install --frozen-lockfile
