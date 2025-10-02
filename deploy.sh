#!/bin/bash

# Exit on error
set -e

# Load environment variables from .env file if it exists
if [ -f .env ]; then
  export $(cat .env | grep -v '^#' | xargs)
fi

# Configuration - Set these environment variables or update here
S3_BUCKET="${S3_BUCKET}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID}"
AWS_REGION="${AWS_REGION:-us-east-1}"

# Check required variables
if [ -z "$S3_BUCKET" ]; then
  echo "Error: S3_BUCKET environment variable is not set"
  echo "Usage: S3_BUCKET=your-bucket CLOUDFRONT_DISTRIBUTION_ID=your-id npm run deploy"
  exit 1
fi

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
  echo "Error: CLOUDFRONT_DISTRIBUTION_ID environment variable is not set"
  echo "Usage: S3_BUCKET=your-bucket CLOUDFRONT_DISTRIBUTION_ID=your-id npm run deploy"
  exit 1
fi

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting deployment process...${NC}"

# Build the project
echo -e "${BLUE}Building project...${NC}"
npm run build

# Sync to S3
echo -e "${BLUE}Syncing to S3 bucket: ${S3_BUCKET}...${NC}"
aws s3 sync dist/ s3://${S3_BUCKET} --delete --region ${AWS_REGION}

# Invalidate CloudFront cache
echo -e "${BLUE}Invalidating CloudFront distribution: ${CLOUDFRONT_DISTRIBUTION_ID}...${NC}"
aws cloudfront create-invalidation \
  --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} \
  --paths "/*"

echo -e "${GREEN}Deployment completed successfully!${NC}"
