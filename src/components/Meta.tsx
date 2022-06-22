import Head from "next/head"

interface Props {
    title?:string;
    keyword?:string;
    description?:string;
  }

const Meta = ({title,keyword,description}:Props) => {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keyword} />
        <meta name="description" content={description} />
        <meta charSet="utf-8"/>
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps={
    title:"Page",
    keyword:"web development",
    description:"An amazing web page"
}

export default Meta