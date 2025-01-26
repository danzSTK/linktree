type SocialProps = {
  url: string;
  children: React.ReactNode;
}

const Social = ({children, url}: SocialProps) => {
  return(
    <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text">
      {children}
    </a>
  )
}

export default Social;