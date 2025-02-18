import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  ArtStationIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/headshot2.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Edward Conte, an Artist, Designer, and Engineer',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Edward Conte, an Artist, Designer, and Engineer
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Edward is a digital media artist, designer, and engineer with a passion for
              crafting immersive digital experiences through the art and science
              of computer graphics, interaction design, and product design. His
              work sits at the intersection of technology and storytelling,
              where he explores how visuals and interactivity can transform
              digital experiences into meaningful narratives.
            </p>

            {/*<ul Areas that I find compelling are>*/}
            {/*  <li>Computer Graphics</li>*/}
            {/*  <li>Interaction Design</li>*/}
            {/*  <li>Product Design</li>*/}
            {/*  <li>Digital Experiences</li>*/}
            {/*  <li>Visual Storytelling</li>*/}
            {/*</ul>*/}

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Vision
            </h2>
            <p>
              Edward is driven by a desire to create visually rich, interactive
              experiences that tell stories and enhance user engagement. His
              philosophy centers on the belief that computer graphics, product
              design, and interaction design are powerful tools for
              storytelling. By bridging the digital and real worlds, he aims to
              build experiences that are not only visually compelling but also
              deeply meaningful, inspiring users and pushing the boundaries of
              what’s possible in digital media.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Background
            </h2>
            <p>
              Edward’s journey into digital media began with hands-on
              exploration—building computers, modding video games, and
              experimenting with early graphics software which sparked a fascination
              that has only deepened over time. Studying and researching
              computer graphics at Cornell University honed his skills in
              creating visually engaging, user-centered experiences, bridging
              art and technology in ways that push the boundaries of product and
              interaction design.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Expertise
            </h2>
            <p>
              Edward’s expertise spans a range of skills, from advanced computer
              graphics techniques to designing digital interactions and product
              concepts that connect with users. He works extensively with tools
              like Unreal Engine, Blender, and scripting languages such as
              Python, building everything from hyper-realistic renders to
              interactive prototypes. Edward’s approach combines technical precision
              with visual storytelling, using his design acumen to create
              products and experiences that captivate and engage, translating
              complex ideas into visually cohesive narratives.
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
              Current Projects
            </h2>
            <p>
              Currently, Edward is developing a digital mosaic project that merges the
              precision of rendering with the organic flow of ancient mosaic
              art, exploring how computer graphics can evoke a tactile
              experience. He is also delving into AI-driven personalized health
              dashboards and interactive, responsive product interfaces—projects
              that showcase the potential of interaction design and digital
              experiences to create compelling, user-centered narratives. These
              projects reflect a commitment to innovating within visual
              storytelling and building products that resonate on both aesthetic
              and functional levels.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/ed.conte/?hl=en"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/ed-conte"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/edward-conte-446068255/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
                href="https://www.artstation.com/synthscribe"
                icon={ArtStationIcon}
                className="mt-4"
            >
              Follow on ArtStation
            </SocialLink>
            <SocialLink
              href="mailto:ec@edwardconte.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ec@edwardconte.com
            </SocialLink>
            <SocialLink
              href="mailto:eac267@cornell.edu"
              icon={MailIcon}
              className="mt-4"
            >
              eac267@cornell.edu
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
