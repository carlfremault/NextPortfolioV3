import UnsplashImage from "../_components/UnsplashImage";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 leading-10  md:grid-cols-3">
      <div className="col-span-1 md:col-span-3">
        <p className="indent-8">
          <span className="font-serif text-6xl">Hello,</span> I&apos;m Carl — a
          full-stack developer with a degree in software development and three
          years of hands-on experience in building web applications.
        </p>
      </div>
      <div className="w-full col-span-1 flex min-h-96 justify-center md:justify-start">
        <UnsplashImage
          className="h-96 w-1/2 object-contain md:h-full md:w-full"
          src="/images/nik-AsRAyHIkOHk-unsplash.jpg"
          height={956}
          width={640}
          alt="A little germinated plant stands in a pot on a desk. A water bottle and notepad are lying next to it, but are out of focus."
          photographerHref="https://unsplash.com/@helloimnik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          photographerName="Nik"
        />
      </div>
      <div className="col-span-1 space-y-8 md:col-span-2">
        <p>
          Web development captured my interest during the COVID-19 pandemic,
          when I transitioned from hospitality and sales-support to pursue a
          career in tech. Since then, a love for coding, digital innovation, and
          continuous learning has guided my journey.
        </p>
        <p>
          I want to create solutions with real impact — applications that
          improve lives, support communities, and create positive change. My
          goal is for my work to help people and organizations operate more
          efficiently, sustainably, or inclusively.
        </p>
      </div>
      <div className="col-span-1 md:col-span-3">
        <p>
          Eager to take on new challenges, grow my expertise, and contribute to
          projects that make a real difference, I look forward to connect and
          shape the digital future together!
        </p>
      </div>
    </div>
  );
}
