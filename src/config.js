export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HKkp8Bp2zEiNLR1BOfDdlSnejxYd7J88Ls39xd4UUjdr2O0i9HSvjq1Bf0JxAKDtTeuDWjm2NKSTYKOPrNFONmW00jiXAnm2T",
  s3: {
    REGION: "eu-west-1",
    BUCKET: "capic-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://dlkbmd1zk4.execute-api.eu-west-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_gb1CavyN2",
    APP_CLIENT_ID: "6m7mqesqurvg5tsuh3icpbfqrq",
    IDENTITY_POOL_ID: "eu-west-1:a2ebd275-d7ed-47e7-9967-b43e492fc5d2"
  }
};