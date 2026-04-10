import {Scissors} from 'lucide-react';
import {MapPin} from 'lucide-react';
import {Phone} from 'lucide-react';
import {Mail} from 'lucide-react';
import {Clock} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="flex flex-col border-y border-white/10 bg-secondary-landing text-white ">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 xl:px-56 lg:px-10 sm:px-8 px-8 py-12 gap-12">
        {/*Column 1*/}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-5 ">
            <p className="bg-client p-1 rounded-md">
              <Scissors />
            </p>
            <p className="text-xl">Sharp Cuts</p>
          </div>
          <p className="text-sm">
            Where traditional barbering meets modern style. Experience the
            finest in gentleman's grooming since 2009.
          </p>
        </div>

        {/*Column 2*/}
        <div className="flex flex-col space-y-5 ">
          <p className="text-xl mb-5">Contact Us</p>
          <div className="flex items-center space-x-3">
            <MapPin />
            <p className="text-sm">
              123 Main Street, Downtown New York, NY 10001
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Phone />
            <p className="text-sm">(555) 123-4567</p>
          </div>

          <div className="flex items-center space-x-3">
            <Mail />
            <p className="text-sm">info@sharpcuts.com</p>
          </div>
        </div>

        {/*Column 3*/}
        <div className="flex flex-col">
          <div className="flex space-x-3 ">
            <p className="text-client">
              <Clock className="text-client" size={28} />
            </p>
            <p className="text-xl mb-5">Opening Hours</p>
          </div>

          <div className="flex border-b border-white/10 pb-4 justify-between items-center">
            <p className="text-sm">Monday - Friday </p>
            <p className="text-sm">9:00 AM - 8:00 PM</p>
          </div>
          <div className="flex border-b border-white/10 pb-4 justify-between items-center">
            <p className="text-sm pt-4">Saturday</p>
            <p className="text-sm">9:00 AM - 6:00 PM</p>
          </div>

          <div className="flex border-b border-white/10 pb-4 justify-between items-center">
            <p className="text-sm pt-4">Sunday</p>
            <p className="text-sm">10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-8 py-4 border-t border-white/10 text-center">
        <p className="text-sm text-neutral">
          &copy; 2024 Sharp Cuts. All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-3 sm:text-sm  text-xs">
          <a href="#" className=" text-neutral">
            Privacy Policy
          </a>
          <a href="#" className=" text-neutral">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
