/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMmI3NDY5Ny0xYmRkLTQ2ZTctOTVhNS02NDFjYzdhYTFjMWIiLCJpc3MiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJhdWQiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJuYW1lIjoidGVzdGUtMSIsInJvbGVzIjpbInN1cGVyQWRtaW4iXSwidGVuYW50SWQiOiI3MGUxZGE5Mi1mMjk1LTQ3OTgtYTQxMS1hMTNmZjAzNWUxNTYiLCJ2ZXJpZmllZCI6ZmFsc2UsInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjcxNTc1MzEyLCJleHAiOjE2NzE1NzYyMTJ9.NVqcNLIQlZmNtn5MPhNS3FkvJhbk0rjeL1FYQ7RYaamCrMEljrdnpiXMFGQOXeNk_a0swmnYPgBIF4RpRKjFGkUzks1z1KygK0nXZ_9_3KJqjeB3spGnvbySQJbwwj5PsWDsRNorteQqIoIt-5BDFnuxgH38zVVixh6OX8616hU',
    baseUrl: 'http://localhost:3000/trpc',
    tenantId: '377ac173-12fb-4ec9-85fd-758d5a4f103b'
  },
}

module.exports = nextConfig
