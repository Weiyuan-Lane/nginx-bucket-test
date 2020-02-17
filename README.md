# nginx-bucket-test

I created this to test out the usage of Nginx, for staged rollouts and A/B testing

## Setup

1. Install NPM and Docker
2. Clone this project
3. Run `npm run dev:start` to start the service
4. The service is now available on `localhost:8080`
   1. Test out `/assigned` route to see the assignment methodology (cookies are either `a`, `b` or `c`)
   2. Test out `/bucket/rollout-1` route to see the bucket methodology (cookie values range from 0 to 99). For this iteration, `0-9` falls under `a` instance, `10-24` under `b`, and `25-99` under `c`.
   3. Test out `/bucket/rollout-2` route to see the bucket methodology for a second iteration (cookie values range from 0 to 99). For this iteration, `0-24` falls under `a` instance, and `25-99` under `c`.
   4. Try using `/bucket/rollout-1?_segment_bucket_key=20` to see yourself at the `b` instance for the first iteration. Then visit `/bucket/rollout-2` to see yourself being transferred to the `a` instance.
5. Run `npm run dev:stop` to stop the service.

## Serverless deployment

I've added this to Google Cloud Platform (GCP), to make sure this idea works beyond running it locally.

1. Run `./init-project %1% %2% %3%` to create your GCP Project for hosting this application:
   1. `%1%` refers to your desired name for your project
   2. `%2%` refers to your billingId. Tip: run `gcloud beta billing accounts list` to see all your billing accounts.
   3. `%3%` refers to your cloudRunRegion. I have chosen Cloud Run as a way to test this on a remote server instance, as Cloud Run is able to deploy an instance very quickly and simply, with a Dockerfile. See here: https://cloud.google.com/run/docs/locations , for all possible values of the region types.
2. Run `npm run deploy %1%` to deploy this application
   1. `%1%` refers to your previously chosen name for your GCP project.