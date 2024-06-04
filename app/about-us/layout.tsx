
export const metadata = {
  title: 'ABOUT US',
  // description: 'Generated by Next.js',
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
      {children}
      &copy; Next JS
      </div>
  )
}