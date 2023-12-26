import { createClient } from "@sanity/client";

export const client =  createClient({
    projectId: "f9emze71",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-05-03',
});


