import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import rsc from "@vitejs/plugin-rsc";
import { responseStoreServiceBinding } from "./cloudflare.config.ts";
import { responseStoreAdapter } from "@vinext/cloudflare/cache/response-store-adapter";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    vinext({
      cache: responseStoreAdapter(),
      images: { optimizer: imagesOptimizer() },
      rsc: false,
    }),
    rsc({
      environment: {
        rsc: "intellix_project_nextjs",
      },
      defineEncryptionKey: "process.env.VITE_RSC_ENCRYPTION_KEY",
    }),
    cloudflare({
      experimental: {
        newConfig: {
          cfBuildOutput: true,
        },
      },
    }),
    tailwindcss(),
  ],
});
