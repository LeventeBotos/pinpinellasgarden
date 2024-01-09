interface Article {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Card: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <a
      href={article.url}
      //   onClick={() => (window.location.href = article.url)}
      className="w-full bg-none h-auto rounded-lg border-2 border-green-800 border-opacity-0 hover:border-opacity-60 transition-all ease-in-out duration-200 bg-white bg-opacity-10 cursor-pointer flex flex-col md:flex-row gap-3 shadow-lg p-2"
    >
      <img
        src={article.image}
        alt={article.title}
        loading="lazy"
        className=" w-full md:w-36 h-auto object-cover rounded-lg bg-[#222222]"
      ></img>
      <div className="flex w-60 h-full flex-col gap-2 justify-evenly ">
        <p className="text-md font-bold">{article.title}</p>

        <p className="text-sm">{article.description}</p>
      </div>
    </a>
  );
};

export default Card;
