import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
 
// Combine MDX and Next.js config
export default withMDX(nextConfig)

// function throwError(envVar) {
//   throw `Abort: You need to define ${envVar} in the .env file.`
// }

// if (!process.env.RESEND_API_KEY) return throwError('RESEND_API_KEY');