import UnsplashImage from "../_components/UnsplashImage";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 leading-10  md:grid-cols-3">
      <div className="col-span-1 md:col-span-3">
        <p className="indent-8">
          <span className="font-serif text-6xl">Hello,</span> I&apos;m Carl — a
          full-stack developer with a French technical degree in programming and
          three years of experience in front-end and full-stack development.
        </p>
      </div>
      <div className="w-100 col-span-1 flex min-h-96 justify-center md:justify-start">
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
          I first discovered web development during the COVID-19 pandemic, when
          I transitioned from hospitality and sales-support to pursue a career
          in tech. Since then, I&apos;ve been driven by a love for coding,
          digital innovation, and continuous learning.
        </p>
        <p>
          I&apos;m passionate about building technology that truly matters —
          applications that improve lives, support communities, and create
          positive change. I want my work to have a meaningful impact, helping
          people access resources, connect, and thrive in ways that matter most.
        </p>
      </div>
      <div className="col-span-1 md:col-span-3">
        <p>Let&apos;s connect and shape the digital future together!</p>
      </div>
    </div>
  );
}
