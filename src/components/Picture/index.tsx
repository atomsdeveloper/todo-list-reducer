type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function Picture(props: ImageProps) {
  return <img {...props} />;
}
