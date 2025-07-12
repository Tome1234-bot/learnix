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
            {/* Enhanced Logo Section */}
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

            {/* Desktop Navigation with Modern Pills */}
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

              {/* Enhanced Login Dropdown */}
              <div className="relative ml-4">
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Login</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-300 ${
                    isDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="p-2">
                    <Link
                      href="/login/lecturer"
                      className="flex items-center space-x-3 px-4 py-4 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 rounded-xl group"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Lecturer Portal</p>
                        <p className="text-xs text-gray-500">Manage your courses</p>
                      </div>
                    </Link>
                    <Link
                      href="/login/student"
                      className="flex items-center space-x-3 px-4 py-4 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300 rounded-xl group"
                    >
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <Users className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Student Portal</p>
                        <p className="text-xs text-gray-500">Access your learning</p>
                      </div>
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
                  className="flex items-center space-x-3 text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span>Lecturer Portal</span>
                </Link>
                <Link
                  href="/login/student"
                  className="flex items-center space-x-3 text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Users className="h-5 w-5 text-purple-600" />
                  <span>Student Portal</span>
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

      {/* Enhanced Search Section */}
      <section id="search" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Find Your Perfect Course
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Search through our extensive library of courses and discover your next learning adventure
            </p>

            <div className="relative mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200/50">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search for courses, topics, or categories..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && performSearch()}
                      className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none bg-gray-50 hover:bg-white transition-colors"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <select
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="pl-10 pr-8 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none bg-gray-50 hover:bg-white transition-colors appearance-none cursor-pointer"
                      >
                        <option value="all">All Types</option>
                        <option value="video">Video Courses</option>
                        <option value="pdf">PDF Courses</option>
                        <option value="community">Community</option>
                      </select>
                    </div>
                    <Button
                      onClick={performSearch}
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Search className="h-5 w-5" />
                      <span>Search</span>
                    </Button>
                  </div>
                </div>

                {/* Search Results */}
                {isSearching && searchResults.length > 0 && (
                  <div className="mt-6 max-h-96 overflow-y-auto">
                    <div className="grid gap-3">
                      {searchResults.map((course) => (
                        <div key={course.id} className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer group">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="text-sm text-gray-600 bg-blue-100 px-2 py-1 rounded-full">{course.category}</span>
                                <span className="text-sm text-gray-600 bg-purple-100 px-2 py-1 rounded-full">{course.type}</span>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-gray-600">{course.rating}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Users className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">{course.students}</span>
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isSearching && searchResults.length === 0 && searchQuery.trim() !== "" && (
                  <div className="mt-6 p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">No courses found for "{searchQuery}"</p>
                    <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms or filters</p>
                  </div>
                )}
              </div>
            </div>

            {/* Popular Search Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-gray-600 mr-2">Popular:</span>
              {["JavaScript", "Python", "React", "Data Science", "UI/UX", "Marketing"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSearch(tag)}
                  className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200 hover:border-blue-300"
                >
                  {tag}
                </button>
              ))}
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

      {/* Enhanced FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our courses and platform
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-100">
                <AccordionTrigger className="text-left px-8 py-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                        How do I enroll in a course?
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">Getting started with your learning journey</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="ml-16 text-gray-600 leading-relaxed">
                    <p className="mb-3">
                      Enrolling in a course is simple and straightforward. Here's how:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Create your free account or log in if you already have one</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0">
