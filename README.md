# Chat Feature sample for Amazon Chime SDK React Component Library
This repository is the sample of chat feature with Amazon Chime SDK React Component Library's chat component.

And this is forked from original official [repository](https://github.com/aws/amazon-chime-sdk-component-library-react) and based on version 1.5.0 of demo/meeting


This is temporal project for the experiments.
Our complete project is in [this repository](https://github.com/w-okada/flect-chime-sdk-demo). please refer.


## To run sample
```
$ npm install
$ cd demo/meeting
$ npm install
$ npm run start
```

## To use sample
Access https://localhost:9000 with your browser.

#### Developing memo
## to merge original repository
```
$ git remote -v
$ git remote add fork_master https://github.com/aws/amazon-chime-sdk-component-library-react.git
$ git fetch fork_master
$ git checkout -b fork_master_develop fork_master/master
$ git checkout chat_feature
$ git merge --no-ff fork_master_develop
```
???
