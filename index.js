const core = require('@actions/core');
// const github = require('@actions/github');

try {
  // `secrets` input defined in action metadata file
//   const secrets = core.getInput('secrets');
//   const output =
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
  core.setOutput("secrets", `
    [{
      "name": "ENEM_DATE",
      "valueFrom": "arn:aws:ssm:us-east-1:501056667400:parameter/ENEM_DATE"
    }]`);
  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
