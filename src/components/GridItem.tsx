interface Props {
  title: string;
  url: string;
}

export const GridItem = ({ title, url }: Props) => {
  return (
    <div className='card'>
      <img
        src={url}
        alt={title}
      />
      <p>{title}</p>
    </div>
  );
};
