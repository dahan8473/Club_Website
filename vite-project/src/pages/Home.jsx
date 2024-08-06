import React from "react";
import logo from "../assets/images/TSI_Logo.svg";
import { Target, Code, Users, Mail, ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative py-24 sm:py-32 overflow-hidden min-h-screen">
        {/* Background pattern */}
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,1) 32%, rgba(234,245,249,1) 71%, rgba(173,216,230,1) 100%)",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img
              src={logo}
              alt="TSI Logo"
              className="w-1/2 h-1/2 mx-auto mb-10 drop-shadow-xl"
            />
            <p className="text-2xl text-gray-800 mb-8 max-w-3xl mx-auto font-light">
              Empowering nonprofits with innovative technological solutions to
              create lasting social change.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:uwotsi@outlook.com"
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors font-semibold text-lg shadow-lg sm:px-6 sm:py-3 sm:text-base"
              >
                Get Involved
              </a>
              <a
                href="/about"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors font-semibold text-lg shadow-lg sm:px-6 sm:py-3 sm:text-base"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center ">
            About Western TSI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between">
              <div>
                <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  We bridge the gap between technology and social impact,
                  leveraging innovation to address pressing societal challenges.
                </p>
              </div>
              <a
                href="/about"
                className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between">
              <div>
                <Code className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                <p className="text-gray-600 mb-6">
                  We develop custom tech solutions, provide consulting, and
                  offer workshops to build digital literacy for nonprofits.
                </p>
              </div>
              <a
                href="/projects"
                className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Our Services <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between">
              <div>
                <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Our Team</h3>
                <p className="text-gray-600 mb-6">
                  Our passionate students bring diverse skills in software
                  development, data analysis, and project management.
                </p>
              </div>
              <a
                href="/team"
                className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Meet the Team <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-white"></div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Interested in collaborating or learning more about Western TSI? We'd
            love to hear from you!
          </p>
          <a
            href="mailto:uwotsi@outlook.com"
            className="bg-primary text-white px-10 py-4 rounded-full hover:bg-opacity-90 transition-colors shadow-lg text-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
