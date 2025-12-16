"use client";

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroGlobeOverlay from '@/components/sections/hero/HeroGlobeOverlay';
import TagAboutCard from '@/components/sections/about/TagAboutCard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Zap, Lightbulb, Award, Heart, HelpCircle, Facebook, Twitter, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant={"elastic-effect"}
      defaultTextAnimation={"background-highlight"}
      borderRadius={"pill"}
      contentWidth={"large"}
      sizing={"medium"}
      background={"noise"}
      cardStyle={"gradient-subtle"}
      primaryButtonStyle={"layered-depth"}
      secondaryButtonStyle={"outline"}
      headingFontWeight={"normal"}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Scooby Learning"
          button={{
            text: "Start Learning",
            href: "#contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroGlobeOverlay
          title="Learn Like Scooby-Doo Solves Mysteries"
          description="Join our interactive platform where kids discover web development and coding through adventure-based learning. Uncover skills, solve puzzles, and build amazing projects just like solving a mystery."
          tag="Adventure Learning"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Start Your Adventure",
              href: "#features"
            },
            {
              text: "Explore Courses",
              href: "#about"
            }
          ]}
          ariaLabel="Hero section with globe overlay"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAboutCard
          tag="Our Mission"
          tagIcon={Zap}
          title="Making Learning as Fun as Solving Mysteries"
          paragraphs={[
            "We believe every child has the detective skills to master web development and coding. Our platform transforms complex concepts into exciting adventures where kids learn by doing, exploring, and discovering solutions.",
            "Inspired by the problem-solving spirit of Scooby-Doo and the gang, we create interactive lessons that reward curiosity and encourage creative thinking. Each module is designed to build confidence while teaching real coding and web development skills."
          ]}
          icon={Lightbulb}
          useInvertedBackground="noInvert"
          ariaLabel="About section"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardOne
          title="Learning Modules"
          description="Explore mystery-themed courses that teach real development skills"
          tag="Features"
          tagIcon={Award}
          features={[
            {
              title: "Mystery Quest: Web Basics",
              description: "Solve interactive puzzles to learn HTML, CSS, and JavaScript fundamentals. Each mystery teaches core web development concepts.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878792155-yh76haif.jpg",
              imageAlt: "technology, computer, code, javascript, developer, programming, programmer, jquery, css, html, website, technology, technology, computer, code, code, code, code, code, javascript, javascript, javascript, developer, programming, programming, programming, programming, programmer, html, website, website, website"
            },
            {
              title: "Code Detective: JavaScript Adventures",
              description: "Hunt for bugs, write solutions, and uncover the secrets of programming. Learn variables, loops, and functions through detective challenges.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878791001-li5ytf8b.png",
              imageAlt: "programming, html, css, javascript, php, website development, code, html code, computer code, coding, digital, computer programming, pc, www, cyberspace, programmer, web development, computer, technology, developer, computer programmer, internet, ide, lines of code, hacker, hacking, gray computer, gray technology, gray laptop, gray website, gray internet, gray digital, gray web, gray code, gray coding, gray programming, programming, programming, programming, javascript, code, code, code, coding, coding, coding, coding, coding, digital, web development, computer, computer, computer, technology, technology, technology, developer, internet, hacker, hacker, hacker, hacking"
            },
            {
              title: "Mystery Solver: Project Building",
              description: "Combine skills to build real projects. Create interactive websites, games, and tools while solving mystery scenarios.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878789803-ix8hx8sw.jpg",
              imageAlt: "wolves, nature, wolf pack, forest, woods, animals, wild animals, wildlife"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Features section"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Parents and Teachers Say"
          description="Real stories from families discovering the joy of learning through adventure"
          tag="Testimonials"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "Parent, Age 8 student",
              testimonial: "My daughter was intimidated by coding until she started with Scooby Learning. Now she spends hours working on mysteries and asking me to explain her discoveries. She's learning real skills!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878793229-u66x2bai.jpg",
              imageAlt: "asian, student, book, child, girl, uniform, nature, school uniform, eyeglasses, field, grass, kid, looking away, outdoors, portrait"
            },
            {
              id: "2",
              name: "Mr. Williams",
              handle: "Computer Science Teacher",
              testimonial: "This platform has transformed how my students engage with coding. The mystery-based approach keeps them motivated and they're retaining concepts better than traditional lessons.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878794273-n0cubz0l.jpg",
              imageAlt: "teacher, property, plant, and teaching, nature, teaching, whiteboard, classroom, smart board, media, training, to learn, school, board, feedback, elementary school"
            },
            {
              id: "3",
              name: "Marcus Chen",
              handle: "Parent, Ages 10 & 12 students",
              testimonial: "Both my kids are hooked on solving mysteries and learning web development at the same time. They're actually excited about their coding homework now!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878795283-xqd7lg2n.jpg",
              imageAlt: "child, girl, young, caucasian, childhood, daughter, computer, learning, parent, mother, family, computer, computer, computer, learning, learning, learning, parent, mother, mother, family, family, family, family, family"
            },
            {
              id: "4",
              name: "Emma Rodriguez",
              handle: "After-School Program Director",
              testimonial: "The Scooby Learning curriculum has been perfect for our after-school tech club. Kids are building confidence and real skills in a fun, supportive environment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878796420-djw3762c.jpg",
              imageAlt: "graduation, man, cap, gown, education, university, college, school, achievement, student, success, degree, people, academic, graduate, young, happiness, happy, smiling, white, graduation, graduation, graduation, graduation, graduation, university, university, university, college, college, student, degree, degree, graduate, graduate"
            },
            {
              id: "5",
              name: "Jennifer Davis",
              handle: "Parent, Age 9 student",
              testimonial: "My son was struggling with traditional coding classes until we found Scooby Learning. The mystery format makes complex concepts approachable and fun.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878793229-u66x2bai.jpg",
              imageAlt: "asian, student, book, child, girl, uniform, nature, school uniform, eyeglasses, field, grass, kid, looking away, outdoors, portrait"
            },
            {
              id: "6",
              name: "Dr. Ahmed Hassan",
              handle: "STEM Education Specialist",
              testimonial: "The pedagogical approach here is brilliant. Kids develop problem-solving skills alongside technical knowledge through engaging storytelling.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765878794273-n0cubz0l.jpg",
              imageAlt: "teacher, property, plant, and teaching, nature, teaching, whiteboard, classroom, smart board, media, training, to learn, school, board, feedback, elementary school"
            }
          ]}
          ariaLabel="Testimonials section"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqBase
          title="FAQ"
          description="Everything parents and students need to know about learning on our platform"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What age group is this platform for?",
              content: "Scooby Learning is designed for kids ages 7-14. We have beginner modules for younger students and advanced mystery challenges for older learners. Content adapts to skill level."
            },
            {
              id: "2",
              title: "Do kids need coding experience?",
              content: "Not at all! Our platform starts from absolute basics. Kids learn by solving interactive puzzles and gradually build skills. No prior experience needed."
            },
            {
              id: "3",
              title: "How long are the learning modules?",
              content: "Modules vary from 20-60 minutes. Most mysteries can be completed in 1-2 sessions. Kids can learn at their own pace and revisit lessons anytime."
            },
            {
              id: "4",
              title: "Are there certificates upon completion?",
              content: "Yes! Kids earn digital badges for completing mystery quests and skill challenges. We also provide completion certificates for full course modules."
            },
            {
              id: "5",
              title: "Can parents track progress?",
              content: "Parents have access to a dashboard showing which mysteries their child has solved, skills learned, and areas to focus on. We provide weekly progress reports."
            }
          ]}
          ariaLabel="FAQ section"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to solve your first mystery?"
          animationType="background-highlight"
          inputPlaceholder="Enter your email to get started"
          buttonText="Start Learning"
          useInvertedBackground="noInvert"
          ariaLabel="Contact section"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Scooby Learning"
          copyrightText="© Scooby Learning, Inc. 2025. Making education an adventure."
          columns={[
            {
              title: "Learning",
              items: [
                {
                  label: "Web Development",
                  href: "#features"
                },
                {
                  label: "Coding Basics",
                  href: "#features"
                },
                {
                  label: "Project Building",
                  href: "#features"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Our Mission",
                  href: "#about"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}
