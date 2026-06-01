import Image from "next/image";
import ImageGrid from "@/app/_components/ImageGrid";
import { RxGithubLogo } from "react-icons/rx";
import { MdHiking } from "react-icons/md";

const architectureRows = [
  {
    layer: "Frontend & BFF",
    tech: "Next.js (React Server Components)",
    role: "UI + API orchestration",
  },
  {
    layer: "Auth Service",
    tech: "NestJS",
    role: "RS256 JWT issuance, account lifecycle",
  },
  {
    layer: "Product Service",
    tech: "NestJS + PostgreSQL",
    role: "Core packing data (items, lists, packs, trips)",
  },
  {
    layer: "User Data Service",
    tech: "NestJS + MongoDB",
    role: "User preferences and settings",
  },
  {
    layer: "Infrastructure",
    tech: "Docker, Caddy, GitHub Actions",
    role: "Containerized deployment on Hetzner VPS",
  },
];

const actions: ActionButton[] = [
  {
    text: "PackYourBag!",
    href: "https://packyourbag.me",
    logo: <MdHiking size={20} className="me-2" />,
  },
  {
    text: "GitHub repository",
    href: "https://github.com/carlfremault/packyourbag",
    logo: <RxGithubLogo size={20} className="me-2" />,
  },
];

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 font-serif text-2xl">{children}</h2>
);

export default function PackYourBagPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section>
        <p className="mb-2 text-sm italic">Featured</p>
        <h1 className="mb-2 font-serif text-4xl leading-tight">PackYourBag!</h1>
        <p className="mb-8 font-serif text-xl text-orange-300/70">
          Building a Production-Grade Distributed System
        </p>
        <p className="mb-8 text-orange-300/60 italic">
          A deliberately over-engineered packing app — and why that was the
          point.
        </p>
        <div className="w-full overflow-hidden border border-orange-300/20">
          <Image
            src="/images/pybDesktopTripDetails.png"
            alt="PackYourBag trip view showing pack composition and interactive check-off"
            width={1915}
            height={874}
            className="w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* The Problem */}
      <section className="border-t border-orange-300/30 pt-12">
        <SectionHeading>The Problem</SectionHeading>
        <div className="space-y-4 leading-8">
          <p className="indent-6">
            As an avid backpacker and long-distance hiker, I&apos;ve always
            relied on spreadsheets to manage gear lists. When you&apos;re out in
            the wilderness, finding out you forgot some essential gear is simply
            not an option. Before each trip, I&apos;d copy the spreadsheet,
            prune it, extend it, and manually tick items off. It worked, but it
            didn&apos;t scale.
          </p>
          <p>
            PackYourBag replaces that workflow with a hierarchical data model:
            individual <span className="font-bold">Items</span> compose into
            reusable <span className="font-bold">Lists</span>, Lists combine
            into <span className="font-bold">Packs</span>, and a Pack gets
            assigned to a <span className="font-bold">Trip</span> with an
            interactive check-off when it&apos;s time to leave.
          </p>
          <p>
            The architecture is deliberately modular: the luggage planner is an
            MVP built on top of a platform. Adding capabilities to an existing
            service doesn&apos;t touch authentication. Spinning up an entirely
            new service means plugging into the same auth, observability, and
            deployment infrastructure that&apos;s already proven and running.
          </p>
        </div>
      </section>

      {/* Why Over-Engineer */}
      <section className="border-t border-orange-300/30 pt-12">
        <SectionHeading>Why Over-Engineer a Packing App?</SectionHeading>
        <p className="indent-6 leading-8">
          The honest answer: because the packing list is a vehicle for the
          engineering. The core functionality could ship as a single-service
          CRUD app. Instead, I used it as an opportunity to build a platform
          allowing for further extension and scaling, implementing the patterns
          you&apos;d find in production distributed systems: microservice
          orchestration, stateless asymmetric authentication, polyglot
          persistence, and a full CI/CD pipeline deploying to real
          infrastructure.
        </p>
      </section>

      {/* Architecture */}
      <section className="border-t border-orange-300/30 pt-12">
        <SectionHeading>Architecture at a Glance</SectionHeading>
        <p className="mb-8 leading-8">
          The system follows a Backend-for-Frontend (BFF) pattern: a Next.js
          frontend acts as the sole entry point, orchestrating three independent
          NestJS microservices through typed HTTP clients generated from OpenAPI
          specs.
        </p>

        <div className="mb-8 w-full overflow-hidden border border-orange-300/20">
          <Image
            src="/images/pybArchitecture.png"
            alt="Architecture diagram showing the BFF pattern with three independent NestJS microservices"
            width={2565}
            height={876}
            className="w-full object-cover"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-orange-300/50">
                <th className="px-4 py-3 text-left font-bold">Layer</th>
                <th className="px-4 py-3 text-left font-bold">Technology</th>
                <th className="px-4 py-3 text-left font-bold">Role</th>
              </tr>
            </thead>
            <tbody>
              {architectureRows.map((row, i) => (
                <tr
                  key={row.layer}
                  className={`border-b border-orange-300/20 ${i % 2 === 0 ? "bg-orange-300/5" : ""}`}
                >
                  <td className="px-4 py-3 font-medium">{row.layer}</td>
                  <td className="px-4 py-3 text-orange-300/80">{row.tech}</td>
                  <td className="px-4 py-3 text-orange-300/80">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-orange-300/60">
          Services are independently deployable and share nothing at the data
          layer. PostgreSQL uses logical schema separation with per-service
          database roles enforcing least-privilege access. MongoDB handles the
          User Data Service where schema flexibility matters more than
          relational integrity.
        </p>
      </section>

      {/* Tech sections */}
      <div className="space-y-6 border-t border-orange-300/30 pt-12">
        <div className="border border-orange-300/30 p-6">
          <SectionHeading>Authentication &amp; Security</SectionHeading>
          <div className="space-y-4 leading-8">
            <p>
              Authentication was the first thing I built, not the last. The Auth
              Service issues RS256 JWT pairs where the private key never leaves
              the service. Downstream services verify tokens locally using the
              public key, which means the Auth Service isn&apos;t a latency
              bottleneck on every request.
            </p>
            <p>
              The refresh token system implements family rotation with reuse
              detection: every refresh invalidates its predecessor and issues a
              new token. If a revoked token gets reused (indicating theft), the
              entire token family is revoked instantly. A grace period handles
              legitimate race conditions from concurrent requests.
            </p>
            <p>
              Beyond tokens: a BFF guard (shared-secret header that blocks
              direct API access), intelligent throttling, and GDPR-compliant
              audit logging with anonymized IPs. Sentry handles production error
              tracking, configured to strip PII before it ever leaves the
              server.
            </p>
          </div>
        </div>

        <div className="border border-orange-300/30 p-6">
          <SectionHeading>API Contracts: One Source of Truth</SectionHeading>
          <div className="space-y-4 leading-8">
            <p>
              I initially planned to maintain shared TypeScript types between
              services and frontend manually. Digging into the NestJS Swagger
              integration, I found I could generate an OpenAPI spec from the
              existing endpoint annotations, and from that spec, automatically
              generate typed HTTP clients, TypeScript interfaces, and Zod
              validation schemas.
            </p>
            <p>
              The result: backend contract changes propagate to frontend types
              and form validation automatically. No manual type maintenance, no
              drift between what the API expects and what the UI sends.
            </p>
          </div>
        </div>

        <div className="border border-orange-300/30 p-6">
          <SectionHeading>Frontend: Separating UI From Logic</SectionHeading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="col-span-1 space-y-4 leading-8 md:col-span-2">
              <p>
                The UI layer follows a strict separation of concerns. UI
                components live in a shared package (@repo/react-common) and are
                purely presentational: no data fetching, no API calls, no
                internal state beyond controlled inputs. Data flows in through
                typed props; interactions propagate upward through callbacks.
              </p>
              <p>
                Each component has a colocated Storybook story covering happy
                paths, visual variants, and edge cases. This replaced the
                traditional dev cycle of spinning up the full stack just to
                verify a visual change. In the Next.js app, Server Components
                prefetch data with Suspense boundaries and skeleton fallbacks,
                keeping the loading waterfall on the server.
              </p>
              <p>
                The design system supports light and dark mode, and entities use
                a 10-color palette for visual differentiation, all driven by
                props, without touching component internals.
              </p>
            </div>
            <div className="col-span-1 flex justify-center md:justify-end">
              <Image
                src="/images/pybMobileCategories.png"
                alt="Mobile view of the category browser"
                width={359}
                height={777}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border border-orange-300/30 p-6">
          <SectionHeading>Deployment &amp; Operations</SectionHeading>
          <div className="space-y-4 leading-8">
            <p>
              The app runs on a Hetzner VPS with all services containerized
              behind Caddy as a reverse proxy with automatic TLS. The CI/CD
              pipeline uses path-based change detection: a change to the Auth
              Service won&apos;t trigger a frontend rebuild.
            </p>
            <p>Key operational decisions:</p>
            <ul className="ms-6 list-outside list-disc space-y-2">
              <li>
                Database migrations run in an isolated container. Application
                containers never hold the credentials to modify database
                schemas.
              </li>
              <li>
                GitHub Secrets are the single source of truth for production
                config, nothing is stored on the VPS outside the deploy process.
              </li>
              <li>
                Prometheus + Grafana for metrics, Uptime Kuma and UptimeRobot
                for health monitoring, scheduled backups syncing to object
                storage.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Retrospective */}
      <section className="border-t border-orange-300/30 pt-12">
        <SectionHeading>What I&apos;d Do Differently</SectionHeading>
        <div className="space-y-4 leading-8">
          <p>
            No project is finished, and some decisions would change with
            hindsight. The shared NestJS infrastructure package
            (@repo/nestjs-common) was extracted during Phase 2, after building
            the Auth Service from scratch. That extraction surfaced issues:
            database migrations had been running under the wrong service role,
            and untangling the permissions took more effort than building the
            shared package itself. Starting with the shared package from day one
            would have avoided that detour entirely.
          </p>
          <p>
            The asymmetric key pair implementation was designed to keep services
            fully independent, no service ever needs to call another to verify a
            request. Implementing the user deletion cascade broke that pattern
            by introducing synchronous internal API calls between services. The
            next step is extracting a dedicated event service with a message
            queue, letting services react to events like audit logging, account
            deletion, and guest data seeding asynchronously, removing the direct
            coupling entirely.
          </p>
          <p>
            The frontend shipped without tests. I should have accounted for it
            in the project timeline. I didn't, and when the schedule got tight,
            it was the first thing to go. It gave me firsthand understanding of
            how test coverage gets deprioritized under deadline pressure, even
            when you know better.
          </p>
        </div>
      </section>

      {/* Stack + Links */}
      <section className="border-t border-orange-300/30 pt-12">
        <SectionHeading>Stack</SectionHeading>
        <div className="space-y-4 leading-8">
          <p>
            TypeScript, Next.js, React (Server Components), NestJS, PostgreSQL,
            MongoDB, Prisma, Mongoose, Vitest, Storybook, Docker, Turborepo,
            GitHub Actions, Sentry
          </p>
          <p>
            For a deeper dive into the architecture and development process,
            check out the code and README in the project repository. Or just
            start packing!
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {actions.map(({ text, href, logo }) => (
            <a
              key={text}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex w-72 items-center justify-center rounded border border-orange-300 px-4 py-2"
            >
              {logo}
              <span>{text}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-t border-orange-300/30 pt-12">
        <SectionHeading>Screenshots</SectionHeading>
        <ImageGrid
          images={[
            {
              src: "/images/pybDesktopSignIn.png",
              alt: "Desktop view of sign in page",
              width: 1920,
              height: 878,
            },
            {
              src: "/images/pybDesktopItems.png",
              alt: "Desktop view of the items management interface",
              width: 1920,
              height: 878,
            },
            {
              src: "/images/pybDesktopCollections.png",
              alt: "Desktop view of the collections interface",
              width: 1920,
              height: 878,
            },
            {
              src: "/images/pybDesktopTripDetails.png",
              alt: "Desktop view of the trip and packing management interface",
              width: 1920,
              height: 878,
            },
            {
              src: "/images/pybDesktopSettings.png",
              alt: "Desktop view of the user preferences panel",
              width: 1920,
              height: 878,
            },
          ]}
        />
        <ImageGrid
          images={[
            {
              src: "/images/pybMobileItems.png",
              alt: "Mobile view of the items management interface",
              width: 402,
              height: 874,
            },
            {
              src: "/images/pybMobileEditItem.png",
              alt: "Mobile view of the item edit form",
              width: 402,
              height: 874,
            },
            {
              src: "/images/pybMobileCategories.png",
              alt: "Mobile view of the category browser",
              width: 402,
              height: 874,
            },
            {
              src: "/images/pybMobileCollections.png",
              alt: "Mobile view of the collections interface",
              width: 402,
              height: 874,
            },
            {
              src: "/images/pybMogileTripDetails.png",
              alt: "Mobile view of the trip and packing management interface",
              width: 402,
              height: 874,
            },
            {
              src: "/images/pybMobileSettings.png",
              alt: "Mobile view of the user preferences panel",
              width: 402,
              height: 874,
            },
          ]}
        />
      </section>
    </div>
  );
}
