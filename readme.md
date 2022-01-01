# Auction System

### Auction system microservices built with:
- AWS Lambda + API Gateway
- DynamoDB
- S3
- SQS, SES, EventBridge
- Logging w/ Cloudwatch
- Auth0
  
</br>

 - [x] Users can create auctions
 - [x] Users can bid on existing auctions
 - [x] Authentication w/ claim-based JWT. Schema validation w/ Middy middleware.
 - [x] Users can upload images for their listed auctions.
 - [x] Auctions expire after 1 hr.
 - [x] EventBridge configured to run every minute and process auctions based on timestamp.
 - [x] Closed auctions pushed to SQS Queue
 - [x] Notification service reads messages from SQS and creates/sends email notifications (SES) for auction creator and auction winner.
 
 
 