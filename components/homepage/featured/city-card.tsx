export default function CityCard({
  cityName,
  imgUrl,
}: {
  cityName: string;
  imgUrl: string;
}) {
  return (
    <article
      className="h-85 w-75 p-5 rounded-custom bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('${imgUrl}')`,
      }}
    >
      <p className="absolute bottom-5 text-white font-bold text-3xl">
        {cityName}
      </p>
    </article>
  );
}
