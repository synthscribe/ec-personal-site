import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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
              I’ve always seen myself as a renaissance man, someone who blends technical expertise with creativity
              in every project I take on. Central to all of the work I produce is storytelling.
              I enjoy exploring the various mediums humans have used to communicate narratives throughout history,
              which has led me to develop a diverse interdisciplinary skill set that spans art, design, and engineering.
            </p>
            <p>
              My journey began at age 6, building intricate LEGO creations that sparked
              my love for design and engineering. By the time I was in high school, I was building computers
              not just for myself, but for my two brothers as well, diving into the world of hardware and software,
              where I found endless possibilities for innovation.
            </p>
            <p>
              In high school, I spent a lot of time playing video games with friends,
              but I was never content with just playing—I wanted to understand how they worked.
              This curiosity led me to hack and mod the games, reshaping them to my vision.
              This was my first hands-on experience with computer graphics and coding,
              and it opened up a world of digital creativity that I’ve been exploring ever since.
            </p>
            <p>
              More recently, my interests have shifted to artificial intelligence.
              It’s not enough for me to simply experiment with AI models that others have created—
              I push myself further by building my own models from scratch, blending technical mastery with
              a relentless drive to innovate. Whether it’s creating digital renders, developing VR experiences,
              or coding AI solutions, I strive to synthesize my diverse skill set into cohesive, groundbreaking projects.
            </p>
            <p>
              Today, I continue to combine my technical skills with creativity,
              pursuing projects that push boundaries and explore the future of digital interaction and media.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/ed.conte/?hl=en" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/ed-conte" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/edward-conte-446068255/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
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
