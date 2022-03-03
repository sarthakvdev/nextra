/* eslint-disable import/no-anonymous-default-export */
export default {
  github: 'https://github.com/sarthakvdev',
  docsRepositoryBase: 'https://github.com/sarthakvdev/internet-garden',
  titleSuffix: ' – Sarthak Verma',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">SARTHAK.</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Sarthak's Internet Garden" />
      <meta
        name="og:description"
        content="Welcome to my Internet Garden. Here, you will find about me, my projects, writings and bookshelf."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/banner.png" />
      <meta
        name="twitter:site:domain"
        content="https://sarthakverma.vercel.app"
      />
      <meta name="twitter:url" content="https://sarthakverma.vercel.app" />
      <meta name="twitter:creator" content="0xSarthak" />
      <meta name="og:title" content="Sarthak Verma's Internet Garden" />
      <meta name="og:image" content="/banner.png" />
      <meta name="apple-mobile-web-app-title" content="Sarthak." />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png" 
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {/* <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" /> */}
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  darkMode: true,
  footer: true,
  footerText: (
    <>
      <a
        href="https://twitter.com/srthkv"
        target="_blank"
        rel="noreferrer noopener"
      >
        Twitter
      </a>{' '}
      •{' '}
      <a
        href="https://linkedin.com/in/sarthakv"
        target="_blank"
        rel="noreferrer noopener"
      >
        LinkedIn
      </a>{' '}
      •{' '}
      <a
        href="https://github.com/sarthakvdev"
        target="_blank"
        rel="noreferrer noopener"
      >
        Github
      </a>{' '}
      •{' '}
      <a
        href="https://sarthakv.hashnode.dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        Blog
      </a>
    </>
  ),
  footerEditLink: true,
  // unstable_faviconGlyph: '',
}
