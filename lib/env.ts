import { createEnv } from "@t3-oss/env-nextjs";
import { create } from "domain";
import {z} from "zod";

export const env = createEnv({
    server: {
        GITHUB_ID: z.string().min(1),
        GITHUB_SECRET: z.string().min(1),
    },

    client: {
        // Add your client-side environment variables here
    },

    runtimeEnv: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET
    },
});