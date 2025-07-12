"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown, Search, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [totalStudents, setTotalStudents] = useState(0)
  const [totalCourses, setTotalCourses] = useState(0)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock course data for search
  const allCourses = [
    { id: 1, title: "Introduction to Web Development", category: "Programming", type: "Video Course" },
    { id: 2, title: "Advanced JavaScript", category: "Programming", type: "Video Course" },
    { id: 3, title: "React Fundamentals", category: "Programming", type: "Video Course" },
    { id: 4, title: "Python for Beginners", category: "Programming", type: "PDF Course" },
    { id: 5, title: "Data Science Basics", category: "Data Science", type: "PDF Course" },
    { id: 6, title: "Machine Learning Guide", category: "Data Science", type: "PDF Course" },
    { id: 7, title: "UI/UX Design Principles", category: "Design", type: "Community Course" },
    { id: 8, title: "Digital Marketing", category: "Marketing", type: "Community Course" },
    { id: 9, title: "Business Analytics", category: "Business", type: "Video Course" },
    { id: 10, title: "Project Management", category: "Business", type: "PDF Course" },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const filtered = allCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase()) ||
        course.type.toLowerCase().includes(query.toLowerCase()),
    )
    setSearchResults(filtered)
  }

  const performSearch = () => {
    if (searchQuery.trim()) {
      handleSearch(searchQuery)
      // You can add additional search logic here, like navigating to a search results page
      console.log("Performing search for:", searchQuery)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    // Simulate dynamic data loading
    setTotalStudents(15420)
    setTotalCourses(250)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
              </div>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white font-bold text-xl md:text-2xl tracking-tight hover:text-blue-200 transition-colors"
              >
                Learnix
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/15 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/15 transition-colors duration-300"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/15 transition-colors duration-300"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/15 transition-colors duration-300"
              >
                Contact
              </button>

              {/* Desktop Login Dropdown */}
              <div className="relative">
                <button
                  className="bg-white/90 text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <span>Login</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Responsive Dropdown Menu */}
                <div
                  className={`absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-xl shadow-xl transition-all duration-300 ${
                    isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href="/login/lecturer"
                    className="block px-5 py-4 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 hover:pl-6 transition-all duration-300 rounded-t-xl border-b border-gray-100"
                  >
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>Login as Lecturer</span>
                    </div>
                  </Link>
                  <Link
                    href="/login/student"
                    className="block px-5 py-4 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 hover:pl-6 transition-all duration-300 rounded-b-xl"
                  >
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>Login as Student</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white text-2xl p-2 hover:scale-110 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-white font-medium px-4 py-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="block w-full text-left text-white font-medium px-4 py-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-white font-medium px-4 py-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-white font-medium px-4 py-3 rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Contact
            </button>

            {/* Mobile Login Options */}
            <div className="pt-4 border-t border-white/20">
              <div className="bg-white/90 rounded-lg p-1 mx-2">
                <Link
                  href="/login/lecturer"
                  className="flex items-center space-x-2 text-blue-600 font-semibold px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Login as Lecturer</span>
                </Link>
                <Link
                  href="/login/student"
                  className="flex items-center space-x-2 text-blue-600 font-semibold px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Login as Student</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Student Learning with Online Courses
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Access high-quality video lectures, downloadable PDFs, and join a community where you can discuss, comment,
            and chat with fellow students.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold">
            Get Started
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect Course</h2>
            <p className="text-xl text-gray-600 mb-8">Search through our extensive library of courses</p>

            <div className="relative">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search for courses, topics, or categories..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && performSearch()}
                  className="flex-1 px-6 py-4 text-lg border-2 border-gray-300 rounded-full focus:border-blue-500 focus:outline-none pr-4"
                />
                <Button
                  onClick={performSearch}
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full flex items-center space-x-2"
                >
                  <Search className="h-5 w-5" />
                  <span className="hidden sm:inline">Search</span>
                </Button>
              </div>

              {isSearching && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-10 max-h-96 overflow-y-auto">
                  {searchResults.map((course) => (
                    <div key={course.id} className="p-4 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
                      <h3 className="font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-600">
                        {course.category} • {course.type}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {isSearching && searchResults.length === 0 && searchQuery.trim() !== "" && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 z-10 p-4">
                  <p className="text-gray-600 text-center">No courses found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Courses</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src="/video-course.jpg" alt="Video Courses" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>
                  <Link href="/courses/video" className="hover:text-blue-500 transition-colors">
                    Video Courses
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Over 500 engaging video lessons covering various subjects. Learn at your own pace with our expert
                  instructors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src="/pdf-course.jpg" alt="Downloadable PDFs" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>
                  <Link href="/courses/pdfs" className="hover:text-blue-500 transition-colors">
                    Downloadable PDFs
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access comprehensive PDFs that complement our video courses. Study offline and review materials
                  anytime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image src="/community-course.jpg" alt="Interactive Community" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>
                  <Link href="/community" className="hover:text-blue-500 transition-colors">
                    Interactive Community
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Collaborate and share insights with fellow students. Join discussions, comments, and real-time chat.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with other learners, ask questions, share knowledge, and get support.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
            <Link href="/community">Explore Community</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Students Say</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Image src="/student1.jpg" alt="Jane Doe" width={60} height={60} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-blue-500">Jane Doe</p>
                    <p className="text-sm text-gray-500">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Learnix has transformed my learning experience. The courses are engaging and the community is very
                  supportive."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Image src="/student2.jpg" alt="John Smith" width={60} height={60} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-blue-500">John Smith</p>
                    <p className="text-sm text-gray-500">Business Student</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "A fantastic platform with quality content. I love the interactive community!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Image src="/student3.jpg" alt="Alice Johnson" width={60} height={60} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-blue-500">Alice Johnson</p>
                    <p className="text-sm text-gray-500">Design Student</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The online courses helped me advance my skills in no time. Highly recommended!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How do I enroll in a course?</AccordionTrigger>
              <AccordionContent>Simply sign up, choose a course, and click enroll.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Can I get a refund?</AccordionTrigger>
              <AccordionContent>Yes, we offer a 30-day money-back guarantee on all courses.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Do I need any prior experience?</AccordionTrigger>
              <AccordionContent>
                No prior experience is required. Our courses are designed for all levels.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">Stay updated with the latest courses and community news.</p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="flex-1 text-black" />
            <Button variant="secondary" className="bg-white text-blue-500 hover:bg-gray-100 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">Have questions? Contact us anytime and we'll be happy to help.</p>
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-xl font-bold">Learnix</span>
            </div>

            <div className="flex space-x-6">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>

            <p className="text-gray-400 text-center">&copy; {currentYear} Learnix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
