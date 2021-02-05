npx nuxt generate; 
aws s3 cp ./dist s3://dylanclose.com/ --recursive --profile personal;
aws cloudfront create-invalidation --distribution-id ETR3ZIDGI5A35 --profile personal --paths "/*";
