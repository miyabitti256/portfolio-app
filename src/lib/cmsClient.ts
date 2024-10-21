import { createClient } from "microcms-js-sdk";

const cmsClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export default cmsClient;
