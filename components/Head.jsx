import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Vipul Pathak is an avid frontend developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="vipul pathak, vipul, pathak, web developer portfolio, vipul web developer, vipul developer, mern stack, vipul pathak portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Vipul Pathak's Portfolio" />
      <meta
        property="og:description"
        content="A frontend developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Vipul Pathak',
};
