# Getting Started

## Slides
For slides, [check out the presentation](http://slides.com/dainguyendo/aws-lambda)

## Application

After cloning the repository, run `yarn` and start the application by `yarn start`.

## Amazon Web Services Console
Visit the [AWS console homepage](https://console.aws.amazon.com/console/home?region=us-east-1). If you can log in, you are golden! (We can resolve issue with permissions later).

# Learning Lambda

## On the console, visit the [Lambda service page](https://console.aws.amazon.com/lambda/home?region=us-east-1)

This page provides an overview of your account's Lambda functions for the region.

## 1. Create your Lambda

Copy our `index.js` code under `lambda` into our console editor.

## 2. Hook into API Gateway

Use the Designer to configure the connection to Lambda

## 3. Deploy your API

## 4. Within the application, create a `.env` file

Create an environment variable titled `REACT_APP_SECRET_CODE` whose value points to the URL of your API resource. See if you can successfully trigger your serverless code! If you can - awesome! 🤘 If you can't, let's debug  💻

