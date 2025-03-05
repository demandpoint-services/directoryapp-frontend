/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api"
        : "https://demandpoint-directoryapp-backend-production.up.railway.app/api",
  },
};

export default nextConfig;
