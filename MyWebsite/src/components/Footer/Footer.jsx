import { Link } from "react-router-dom";
export default function Footer() {
  return (
      <footer className="bg-white border-y">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/32752984/pexels-photo-32752984.jpeg"
                  className="mr-3 h-30"
                  alt="Image"
                  width={150}
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Resources
                    </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/Github" className="hover:underline">
                      Github
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/LinkedIn" className="hover:underline">
                      LinkedIn
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/SocialMedia" className="hover:underline">
                      SocialMedia
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 uppercase">Follow Us</h2>
                <ul className="text-gray-500 font-medium">
                    <li className="mb-4">
                       <Link to="https://github.com/shan2302">Github</Link>
                    </li>
                    <li className="mb-4">
                        <Link 
                        to="https://www.facebook.com/shantanu.singh.929207?rdid=xLpSGvMLIEjEYrXR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ErYuyGNSB%2F#">
                        Facebook</Link>
                    </li>
                    <li 
                    to="https://www.instagram.com/rathore030505?igsh=dmxyd2xvc2VhcmNt"
                    className="mb-4">
                        Instagram
                    </li>
                    <li to="https://www.linkedin.com/in/shantanu-siingh-3b48782ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="mb-4">
                        LinkedIn
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
  );
}
