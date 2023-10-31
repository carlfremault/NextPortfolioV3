import UnsplashImage from "../_components/UnsplashImage";

export default function Home() {
  return (
    <div className="mb-5 grid w-full grid-cols-1 gap-6 pt-5 leading-10 text-orange-300 md:grid-cols-3 md:px-10">
      <div className="col-span-1 md:col-span-3">
        <p className="indent-8">
          <span className="font-serif text-6xl">Hello,</span> I&apos;m Carl, a
          dedicated Web Developer. My journey into web development began amidst
          the challenges posed by the COVID-19 pandemic, leading me to pivot
          from a previous career in hospitality and sales-support and obtain my
          degree in software development.
        </p>
      </div>
      <div className="min-h-96 w-100 col-span-1 flex justify-center md:justify-start">
        <UnsplashImage
          className="h-96 w-1/2 object-contain md:h-full md:w-full"
          src="/nik-AsRAyHIkOHk-unsplash.jpg"
          alt=""
          photographerHref="https://unsplash.com/@helloimnik?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          photographerName="Nik"
        />
      </div>
      <div className="col-span-1 space-y-8 md:col-span-2">
        <p>
          Driven by my love for coding, all things digital, and my relentless
          curiosity, my journey is marked by a commitment to continuous{" "}
          <span className="font-serif text-3xl">growth</span>. The challenges
          I&apos;ve encountered have only fueled my determination to adapt and
          thrive in this dynamic field.
        </p>
        <p>
          Along the way, I&apos;ve come to appreciate the beauty of web
          development and its profound{" "}
          <span className="font-serif text-3xl">potential</span> to enhance the
          lives of individuals. Technology and web applications, when
          thoughtfully crafted, have the power to simplify tasks, amplify
          productivity, and connect people in innovative ways. It&apos;s this
          belief in the transformative impact of technology that fuels my
          dedication.
        </p>
      </div>
      <div className="col-span-1 md:col-span-3">
        <p>
          While I may not claim expertise in any particular area just yet,
          I&apos;m unwavering in my pursuit of excellence and my goal to{" "}
          <span className="font-serif text-3xl">evolve</span> into a full-stack
          developer. I&apos;m actively seeking opportunities to contribute my
          evolving skills and collaborative spirit to your projects. Let&apos;s
          connect and shape the digital future together!
        </p>
      </div>
    </div>
  );
}
