# Amazon Chime Chat SDK Developer Start Up Guide

## Summary

This doc is intended for developers interested in the Amazon Chime Chat SDK, even those who may not have a strong technical background. It is meant to guide the developer through the steps required to start using the basic Chat SDK demo client against their own AWS account. On completion of this guide, the developer will have a fully functional Chat client with basic auth sign in supported against their AWS resources. From here, the developer should have the minimal foundation required to expand the functionality to meet their own requirements.  For more information, please see the Amazon Chime SDK Messaging App blog post.

## Assumptions

- The developer should have their own AWS account. No preexisting set up is required.
- The developer should have node.js installed to support running the Chime sample app
  - Node.js can be downloaded here → https://nodejs.org/en/download/
- ** IMPORTANT** : We currently only support us-east-1 so all the set-up must be done in us-east-1.

## Cloudformation Deployment

1. Ensure AWS CLI is installed
    ```aws --version```
2. Obtain AWS credentials for your AWS account
3. Set the AWS credentials in the AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.
4. Deploy included Cloudformation template via [Cloudformation Console](https://aws.amazon.com/cloudformation/)
    
    or
    
    ```aws cloudformation create-stack --stack-name <STACKNAME> --template-body file://src/backend/serverless/template.yaml --parameters ParameterKey=DemoName,ParameterValue=<NAME_OF_DEMO> --capabilities CAPABILITY_NAMED_IAM```
5. Verify and record outputs via [Cloudformation Console](https://aws.amazon.com/cloudformation/)
    
    or

    ```aws cloudformation describe-stacks --stack-name <STACKNAME>```

## Running the Amazon Chime Sample App

1. Ensure your workspace has node.js installed. Type `node -v` in your terminal to confirm, and it should return a version number.
2. In the root directory of the downloaded `amazon-chime-sdk-component-library-react` repo, run `npm install` to install the required dependencies.
3. Navigate to the root folder of Amazon Chime Sample App `demo/chat`
4. Install [yalc](https://www.npmjs.com/package/yalc) to get the latest changes from the local component library: `npm i yalc -g`
5. Open `src/Config.js` with the editor of your choice and update the each missing config with the values from the
 previously created resources.
6. In the root directory `demo/chat`, run `npm start` to start the client
7. Open https://0.0.0.0:9000/ in your browser

### Register a New User

New users can register through the Amazon Chime Sample App.

1. Open a browser of your choice and navigate to [http://localhost:9000](http://localhost:9000/) to access the client
2. Provide a Username and Password for the new user. The default user pool requires the password to be a minimum of 8 characters and contain at least one uppercase, lowercase, special character, and number.
3. Choose **Register**
4. Before this user can login, their account must be confirmed. The quickest way is to follow the steps under **Confirming a New Cognito User as an Account Admin**

### **Confirming a New Cognito User as an Account Admin**

1. Go to the [Amazon Cognito console](https://console.aws.amazon.com/cognito/home)
2. Choose **Manage User Pools**
3. Choose the pool that you created
4. Choose **Users and groups **in the left side panel.
5. Choose the new user whose **Account Status** is **UNCONFIRMED.**
6. Choose **Confirm user.**
7. Now that user should be able to log in.

### **Logging In**

1. Open a browser of your choice and navigate to [http://localhost:9000](http://localhost:9000/)to access the client
2. Provide the username and password of the desired user.
3. Choose Login

### Creating a Channel

1. Log into the client
2. In the **Create new channel** box, enter a desired channel name
3. Choose **Create**

**Sample Code**

```
async function createChannel(appInstanceArn, name, mode, privacy, userId) {
  console.log('createChannel called');
  const chime =  new AWS.Chime({
        region: 'us-east-1',
        endpoint: endpoint
  });
  const params = {
    AppInstanceArn: appInstanceArn,
    Name: name,
    Mode: mode,
    Privacy: privacy
  };

  const request = chime.createChannel(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      userId
    );
  });
  const response = await request.promise();
  return response.ChannelArn;
}
```

### Adding Channel Members

1. Log into the client
2. Select a channel from the channel list
3. Click channel actions button
4. Click on “Add Member” option, ( will only show up if you have privileges to do so)
5. Pick a user from the provided list and click on them
6. Click ‘Add’ button to add user to the channel

**Sample Code**

```
async function createChannelMembership(channelArn, memberArn, userId) {
    console.log("createChannelMembership called");
    const chime =  new AWS.Chime({
        region: 'us-east-1',
        endpoint: endpoint
    });

    var params = {
        ChannelArn: channelArn,
        MemberArn: memberArn
    };

    let request = chime.createChannelMembership(params);
    request.on('build', function() {
        request.httpRequest.headers[serviceUserHeader] = createMemberArn(userId);
    });
    let response = await request.promise();
    return response.Member;
}
```

### Sending Messages

1. Log into the client
2. Choose a channel. Create one if there is none.
3. Type the desired message
4. Choose **Send**

**Sample Code**

```
/**
 * Function to send channel message
 * @param {channelArn} string Channel Arn
 * @param {messageContent} string Message content
 * @param {member} string Chime channel member
 * @param {options{}} object Additional attributes for the request object.
 * @returns {object} sendMessage object;
 */
async function sendChannelMessage(
  channelArn,
  messageContent,
  member,
  options = null
) {
  console.log('sendChannelMessage called');
  const chime =  new AWS.Chime({
        region: 'us-east-1',
        endpoint: endpoint
  });
  const params = {
    ChannelArn: channelArn,
    Content: messageContent,
    Persistence: 'PERSISTENT', // Allowed types are PERSISTENT and NON_PERSISTENT
    Type: 'STANDARD' // Allowed types are STANDARD and CONTROL
  };
  if (options && options.Metadata) {
    params.Metadata = options.Metadata;
  }

  const request = chime.sendChannelMessage(params);
  request.on('build', function() {
    request.httpRequest.headers[appInstanceUserArnHeader] = createMemberArn(
      member.userId
    );
  });
  const response = await request.promise();
  const sentMessage = {
    response: response,
    CreatedTimestamp: new Date(),
    Sender: { Arn: createMemberArn(member.userId), Name: member.username }
  };
  return sentMessage;
}
```
