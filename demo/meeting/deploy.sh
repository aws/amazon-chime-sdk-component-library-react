## Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
## SPDX-License-Identifier: Apache-2.0

 #!/bin/bash
if ! [ -x "$(command -v node)" ]; then
  echo 'Error: node is not installed.' >&2
  exit 1
fi
NODEVER="$(node --version)"
REQNODE="v12.0.0"
if ! [ "$(printf '%s\n' "$REQNODE" "$NODEVER" | sort -V | head -n1)" = "$REQNODE" ]; then 
    echo 'node must be version 12+'
    exit 1
fi
if ! [ -x "$(command -v npm)" ]; then
  echo 'Error: npm is not installed.' >&2
  exit 1
fi
if ! [ -x "$(command -v aws)" ]; then
  echo 'Error: aws is not installed.' >&2
  exit 1
fi
if ! [ -x "$(command -v cdk)" ]; then
  echo 'Error: cdk is not installed.' >&2
  exit 1
fi
if ! [ -x "$(command -v yalc)" ]; then
  echo 'Error: yalc is not installed.' >&2
  exit 1
fi
if [ -f "cdk.context.json" ]; then
    echo ""
    echo "INFO: Removing cdk.context.json"
    rm cdk.context.json
else
    echo ""
    echo "INFO: cdk.context.json not present, nothing to remove"
fi
if [ ! -f "package-lock.json" ]; then
    echo ""
    echo "Installing Packages"
    echo ""
    npm install --legacy-peer-deps
fi
if [ ! -d "front-end-resources/react-meeting/build" ]; then
    echo ""
    echo "Creating front-end-resources/react-meeting/build directory"
    echo ""
    mkdir front-end-resources/react-meeting/build
fi
echo ""
echo "Building CDK"
echo ""
npm run build
echo ""
echo "Deploying Back End"
echo ""
cdk deploy MeetingBackEnd -O front-end-resources/react-meeting/src/cdk-outputs.json
echo ""
echo "Building React App"
echo ""
cd front-end-resources/react-meeting
if [ ! -f "package-lock.json" ]; then
    echo ""
    echo "Installing Packages"
    echo ""
    npm install --legacy-peer-deps
fi
npm run build
cd -
if [ ! "$1" == "backend-only" ]; then
    echo ""
    echo "Deploying Front End"
    echo ""
    cdk deploy MeetingFrontEnd
fi
