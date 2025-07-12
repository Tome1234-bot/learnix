"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown, Search, GraduationCap, MapPin, Phone, Mail, Clock, Users, BookOpen, Star, ArrowRight, Filter, Sparkles } from "lucide-react"
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
  const [searchFilter, setSearchFilter] = useState("all")

  // Mock course data for search
  const allCourses = [
    { id: 1, title: "Introduction to Web Development", category: "Programming", type: "Video Course", rating: 4.8, students: 1250 },
    { id: 2, title: "Advanced JavaScript", category: "Programming", type: "Video Course", rating: 4.9, students: 980 },
    { id: 3, title: "React Fundamentals", category: "Programming", type: "Video Course", rating: 4.7, students: 1450 },
    { id: 4, title: "Python for Beginners", category: "Programming", type: "PDF Course", rating: 4.6, students: 2100 },
    { id: 5, title: "Data Science Basics", category: "Data Science", type: "PDF Course", rating: 4.8, students: 890 },
    { id: 6, title: "Machine Learning Guide", category: "Data Science", type: "PDF Course", rating: 4.9, students: 750 },
    { id: 7, title: "UI/UX Design Principles", category: "Design", type: "Community Course", rating: 4.7, students: 1200 },
    { id: 8, title: "Digital Marketing", category: "Marketing", type: "Community Course", rating: 4.5, students: 1600 },
    { id: 9, title: "Business Analytics", category: "Business", type: "Video Course", rating: 4.6, students: 920 },
    { id: 10, title: "Project Management", category: "Business", type: "PDF Course", rating: 4.8, students: 1100 },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    let filtered = allCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase()) ||
        course.type.toLowerCase().includes(query.toLowerCase()),
    )

    if (searchFilter !== "all") {
      filtered = filtered.filter(course => course.type.toLowerCase().includes(searchFilter.toLowerCase()))
    }

    setSearchResults(filtered)
  }

  const performSearch = () => {
    if (searchQuery.trim()) {
      handleSearch(searchQuery)
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
    setTotalStudents(15420)
    setTotalCourses(250)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Modern Glassmorphism Navigation */}
<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo with Icon */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div>
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-800 font-bold text-2xl tracking-tight hover:text-blue-600 transition-colors"
          >
            Learnix
          </button>
          <p className="text-xs text-gray-500 font-medium">Learn • Grow • Succeed</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-2">
        <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-700 font-medium px-6 py-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("courses")}
            className="text-gray-700 font-medium px-6 py-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-gray-700 font-medium px-6 py-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 font-medium px-6 py-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
          >
            Contact
          </button>
        </div>

        {/* Login Dropdown */}
        <div className="relative ml-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Login</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 ${
              isDropdownOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <div className="p-2 space-y-2">
              <Link
                href="/login/lecturer"
                className="block px-4 py-4 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 rounded-xl"
              >
                Lecturer Portal
              </Link>
              <Link
                href="/login/student"
                className="block px-4 py-4 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 rounded-xl"
              >
                Student Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-2xl p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 transition-all duration-300 ${
      isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
    }`}
  >
    <div className="px-4 pt-4 pb-6 space-y-2">
      <button
        onClick={() => scrollToSection("hero")}
        className="block w-full text-left text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("courses")}
        className="block w-full text-left text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
      >
        Courses
      </button>
      <button
        onClick={() => scrollToSection("faq")}
        className="block w-full text-left text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
      >
        FAQ
      </button>
      <button
        onClick={() => scrollToSection("contact")}
        className="block w-full text-left text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
      >
        Contact
      </button>

      <div className="pt-4 border-t border-gray-200">
        <div className="space-y-2">
          <Link
            href="/login/lecturer"
            className="block text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lecturer Portal
          </Link>
          <Link
            href="/login/student"
            className="block text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Student Portal
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Student Learning with Online Courses
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Access high-quality video lectures, downloadable PDFs, and join a community where you can discuss, comment,
            and chat with fellow students.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started
          </Button>
        </div>
      </section>

     <section
  id="search"
  className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50"
>
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Find Your Perfect Course
        </h2>
      </div>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
        Search through our extensive library of courses and discover your next learning adventure.
      </p>
    </div>

    {/* Search Panel */}
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <div className="flex flex-col gap-4 md:flex-row md:items-center mb-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search courses, topics..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && performSearch()}
            className="w-full pl-12 pr-4 py-3 text-base rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-gray-50"
          />
        </div>

        {/* Filter & Button */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-2">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="pl-10 pr-6 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 bg-gray-50 appearance-none"
            >
              <option value="all">All Types</option>
              <option value="video">Video Courses</option>
              <option value="pdf">PDF Courses</option>
              <option value="community">Community</option>
            </select>
          </div>

          <Button
            onClick={performSearch}
            className="flex items-center justify-center gap-2 px-6 py-3 text-white text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all shadow-md"
          >
            <Search className="h-5 w-5" />
            <span>Search</span>
          </Button>
        </div>
      </div>

      {/* Results */}
      {isSearching && (
        <div className="mt-6 max-h-[20rem] overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="grid gap-3">
              {searchResults.map((course) => (
                <div
                  key={course.id}
                  className="p-4 rounded-xl border bg-gradient-to-r from-gray-50 to-white hover:border-blue-400 hover:shadow transition"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                        {course.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
                        <span className="bg-blue-100 px-2 py-1 rounded-full">
                          {course.category}
                        </span>
                        <span className="bg-purple-100 px-2 py-1 rounded-full">
                          {course.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          {course.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          {course.students}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 hover:text-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery.trim() !== "" ? (
            <div className="mt-6 p-6 text-center bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl">
              <Search className="h-10 w-10 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600">No courses found for “{searchQuery}”</p>
              <p className="text-sm text-gray-500 mt-1">
                Try different keywords or filters
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>

    {/* Popular Tags */}
    <div className="mt-8 flex flex-wrap justify-center items-center gap-3 text-sm">
      <span className="text-gray-500">Popular:</span>
      {["JavaScript", "Python", "React", "Data Science", "UI/UX", "Marketing"].map(
        (tag) => (
          <button
            key={tag}
            onClick={() => handleSearch(tag)}
            className="bg-white border border-gray-200 hover:border-blue-300 text-gray-700 px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {tag}
          </button>
        )
      )}
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
<section id="community" className="py-24 bg-gradient-to-br from-blue-100 to-blue-50">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">Join Our Thriving Community</h2>
    <p className="text-lg md:text-xl text-gray-600 mb-10">
      Collaborate, learn, and grow with like-minded learners. Share knowledge, ask questions, and get the support you need to thrive.
    </p>
    <Link href="/community">
      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-md transition duration-300">
        Explore Community
      </Button>
    </Link>
  </div>
</section>

{/* Testimonials Section */}
<section id="testimonials" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">What Our Students Say</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Testimonial 1 */}
      <Card className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Image src="/student1.jpg" alt="Jane Doe" width={60} height={60} className="rounded-full mr-4 shadow-sm" />
            <div>
              <p className="text-lg font-semibold text-blue-600">Jane Doe</p>
              <p className="text-sm text-gray-500">Computer Science Student</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed italic">
            “Learnix has transformed my learning experience. The courses are engaging and the community is very supportive.”
          </p>
        </CardContent>
      </Card>

      {/* Testimonial 2 */}
      <Card className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Image src="/student2.jpg" alt="John Smith" width={60} height={60} className="rounded-full mr-4 shadow-sm" />
            <div>
              <p className="text-lg font-semibold text-blue-600">John Smith</p>
              <p className="text-sm text-gray-500">Business Student</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed italic">
            “A fantastic platform with quality content. I love the interactive community!”
          </p>
        </CardContent>
      </Card>

      {/* Testimonial 3 */}
      <Card className="hover:shadow-xl transition-shadow duration-300 rounded-2xl border border-gray-100">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Image src="/student3.jpg" alt="Alice Johnson" width={60} height={60} className="rounded-full mr-4 shadow-sm" />
            <div>
              <p className="text-lg font-semibold text-blue-600">Alice Johnson</p>
              <p className="text-sm text-gray-500">Design Student</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed italic">
            “The online courses helped me advance my skills in no time. Highly recommended!”
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Clean FAQ Section */}
<section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-600">
        Quick answers to common questions about our platform
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
      <Accordion type="single" collapsible className="w-full divide-y divide-gray-100">
        
        {/* FAQ 1 */}
        <AccordionItem value="faq-1">
          <AccordionTrigger className="text-left px-8 py-6 hover:bg-blue-50 transition-colors">
            <span className="font-semibold text-lg text-gray-900">How do I enroll in a course?</span>
          </AccordionTrigger>
          <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
            Create a free account, browse our catalog, and click "Enroll Now" to start learning immediately.
          </AccordionContent>
        </AccordionItem>

        {/* FAQ 2 */}
        <AccordionItem value="faq-2">
          <AccordionTrigger className="text-left px-8 py-6 hover:bg-blue-50 transition-colors">
            <span className="font-semibold text-lg text-gray-900">Can I get a refund?</span>
          </AccordionTrigger>
          <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
            Yes. We offer a 30-day money-back guarantee on all courses. Contact support within that window for a full refund.
          </AccordionContent>
        </AccordionItem>

        {/* FAQ 3 */}
        <AccordionItem value="faq-3">
          <AccordionTrigger className="text-left px-8 py-6 hover:bg-blue-50 transition-colors">
            <span className="font-semibold text-lg text-gray-900">Do I need any prior experience?</span>
          </AccordionTrigger>
          <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed">
            No prior knowledge required! Our courses are designed for all skill levels — from beginners to advanced learners.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>

    <div className="mt-12 text-center">
      <p className="text-gray-600 mb-4">Have more questions?</p>
      <Button
        onClick={() => scrollToSection("contact")}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition duration-300"
      >
        Contact Support
      </Button>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section id="contact" className="py-20 bg-white">
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        We’re here to help. Reach out with any questions, feedback, or partnership opportunities.
      </p>
    </div>

    <form className="bg-gray-50 p-8 rounded-3xl shadow-xl space-y-6 border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
      ></textarea>
      <div className="text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
        >
          Send Message
        </button>
      </div>
    </form>

    <div className="mt-12 text-center text-sm text-gray-500">
      Or email us directly at <a href="mailto:support@yourdomain.com" className="text-blue-600 underline">support@yourdomain.com</a>
    </div>
  </div>
</section>

     
      {/* Newsletter Section */}
<section
  id="newsletter"
  className="py-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white"
>
  <div className="container mx-auto px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Join Our Newsletter
      </h2>
      <p className="text-lg md:text-xl text-blue-100 mb-10">
        Be the first to know about new courses, community events, and special updates.
      </p>

      <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full sm:flex-1 px-5 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>

      <p className="text-sm text-blue-100 mt-6">
        We respect your privacy. No spam, unsubscribe anytime.
      </p>
    </div>
  </div>
</section>


      

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Learnix</h3>
                    <p className="text-sm text-gray-400">Learn • Grow • Succeed</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Empowering students worldwide with high-quality online education and a supportive learning community.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 group">
                    <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </Link>
                  <Link href="https://twitter.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300 group">
                    <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </Link>
                  <Link href="https://instagram.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300 group">
                    <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </Link>
                  <Link href="https://linkedin.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 group">
                    <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </Link>
                  <Link href="https://youtube.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 group">
                    <Youtube className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </Link>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                <ul className="space-y-3">
                  <li><button onClick={() => scrollToSection("courses")} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Browse Courses</button></li>
                  <li><button onClick={() => scrollToSection("community")} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">Join Community</button></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">About Us</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Blog</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Careers</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
                <ul className="space-y-3">
                  <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Help Center</Link></li>
                  <li><button onClick={() => scrollToSection("faq")} className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">FAQ</button></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Contact Us</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-2 transform inline-block">Terms of Service</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="h-4 w-4 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">123 Learning Street</p>
                      <p className="text-gray-400 text-sm">Education City, ED 12345</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-gray-400 text-sm">hello@learnix.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-6">
                  <p className="text-gray-400 text-sm">
                    &copy; {currentYear} Learnix. All rights reserved.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{totalStudents.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <BookOpen className="h-4 w-4" />
                    <span>{totalCourses} courses</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Sitemap
                  </Link>
                  <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Accessibility
                  </Link>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
