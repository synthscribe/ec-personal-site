import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Skills & Tools',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Skills I have and tools I use"
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Programming Languages">
            <Tool title="Web">
                HTML, CSS, JavaScript, TypeScript, React, Node.js, Next.js
            </Tool>
            <Tool title="Backend">
                Python, Java, C++, Swift
            </Tool>
            <Tool title="Concepts">
                Object-Oriented Programming, Functional Programming, Data Structures, Algorithms, Design Patterns,
                Testing, Debugging, Performance, Scalability, Git, App Design, Web Design, UX/UI Design,
                Responsive Design, Accessibility, User Experience, User Interface, Interaction Design, Visual Design,
                Typography, Color Theory, Grid Systems, Layout, Composition, Prototyping, Wireframing, Mockups, User Research,
                VR/AR, 3D Modeling, Animation, Rendering, Shaders, Projection Mapping, Generative Art, Real-Time Graphics,
            </Tool>
        </ToolsSection>
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M2 , 8GB RAM (2023)">
            I recently upgraded to the new MacBook Air with the M2 chip, and I must say, it is portable and fast.
            It is perfect for coding, writing, and designing, but any serious rendering or processing is done on my PC.
          </Tool>
          <Tool title="Custom PC">
            This is my baby; I built this PC back in 2016 with a GTX 1050 and an Intel i7.
            After years of upgrades, it runs like a beast with an RTX 3080 Ultra and 64GB RAM.
            I just need to do some cable management.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Ol reliable. If it ain’t broke, don’t fix it, just install plugins.
          </Tool>
          <Tool title="WebStorm">
            I use WebStorm for my React and Node.js projects. It’s a bit heavy, but great for web development.
          </Tool>
          <Tool title="Blender">
            When it comes to 3D modeling, rendering, or animation, Blender is my go-to.
            I have been experimenting with the Python API and the shader editor for most of my renders lately.
          </Tool>
          <Tool title="Unreal Engine">
            My team and I used C++ scripting in Unreal Engine for our virtual grasping implementation.
            This research in human-computer interaction was spearheaded by Professor Donald Greenberg,
            and was an interesting dive into learning how to use Unreal Engine and C++.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            Figma makes designing websites and applications so much easier,
            and allows me to visualize my ideas in a way that I can share with others.
            Lately I’ve been using it for making graphs and flow charts for my ideas and projects.
          </Tool>
          <Tool title="Adobe Illustrator">
            I’ve been using Illustrator since I was a kid and it’s still the
            best tool for vector illustration.
          </Tool>
          <Tool title="Adobe Photoshop">
            I use Photoshop for photo editing and digital painting.
            It’s a great tool for creating textures and working with photos.
          </Tool>
          <Tool title="TouchDesigner">
            TouchDesigner is a node-based visual programming language for real-time interactive multimedia content.
            The projection mapping and generative art capabilities are endless, and it is python based which
            made it accessible for me initially.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            I love structure and organization in my life.
            Notion helps me keep track of everything I need to get done, and stores it in one accessible place.
          </Tool>
          <Tool title="Google Calender">
            I’m a visual person, I like to see when things need to get done and how much time I have to do them.
            Love it or hate it, Google Calender is the on top.
            Plus I can embed it into my Notion so I never have to leave.
          </Tool>
          <Tool title="My Notebook">
            I have a notebook that I use to write down my thoughts, ideas, and tasks.
            I’m a big fan of writing things down by hand; it helps me remember things better, keeps me focused,
            and I just like to look at the writing on the page.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
