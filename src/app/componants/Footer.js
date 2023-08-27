"use client"; // This is a client component 👈🏽
import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Unicons from "@iconscout/react-unicons";
import {
  MapPin,
  Mail,
  Phone,
  Dribbble,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  ShoppingCart,
} from "react-feather";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="relative py-16">
              {/* <!-- Subscribe --> */}
              <div className="relative w-full">
                <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-700 overflow-hidden">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="ltr:md:text-left rtl:md:text-right text-center z-1">
                      <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">
                        Subscribe to Newsletter!
                      </h3>
                      <p className="text-slate-400 max-w-xl mx-auto">
                        Subscribe to get latest updates and information.
                      </p>
                    </div>

                    <div className="subcribe-form z-1">
                      <form className="relative max-w-lg md:ms-auto">
                        <input
                          type="email"
                          id="subcribe"
                          name="email"
                          className="rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                          placeholder="Enter your email :"
                        />
                        <button
                          type="submit"
                          className="btn bg-green-600 hover:bg-green-700 text-white rounded-full"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="absolute -top-5 -start-5">
                    <Unicons.UilEnvelope
                      width={150}
                      height={150}
                      className=" text-black/5 dark:text-white/5 ltr:-rotate-45 rtl:rotate-45"
                    />
                  </div>

                  <div className="absolute -bottom-5 -end-5">
                    <Unicons.UilPen
                      width={150}
                      height={150}
                      className=" text-black/5 dark:text-white/5 rtl:-rotate-90"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link href="#" className="text-[22px] focus:outline-none">
                      <Image
                        src="/images/bajco_white.png"
                        alt=""
                        width={98}
                        height={28}
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      التصميم والتنفيذ للديكورات والمغاسل الرخامية الفخمة
                    </p>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      االأقسام
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link
                          href="/aboutus"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>من نحن</span>{" "}
                        </Link>
                      </li>
                      <li class="mt-[10px]">
                        <Link
                          href="/features"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>خدماتنا</span>{" "}
                        </Link>
                      </li>
                      <li class="mt-[10px]">
                        <Link
                          href="/pricing"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>العروض</span>{" "}
                        </Link>
                      </li>
                      <li class="mt-[10px]">
                        <Link
                          href="/blogs"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>المدونة</span>{" "}
                        </Link>
                      </li>
                      <li class="mt-[10px]">
                        <Link
                          href="/auth-login"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>الدخول</span>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Usefull Links
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      <li>
                        <Link
                          href="/terms"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>Terms of Services</span>{" "}
                        </Link>
                      </li>
                      <li class="mt-[10px]">
                        <Link
                          href="/privacy"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>Privacy Policy</span>{" "}
                        </Link>
                      </li>
                      <li class="mt-[10px]">
                        <Link
                          href="/grid"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span>Listing</span>{" "}
                        </Link>
                      </li>
                      <li class="mt-[10px]">
                        <Link
                          href="/contact"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"
                        >
                          <Unicons.UilAngleRight width={18} className="me-1" />{" "}
                          <span> Contact</span>{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      الرياض
                    </h5>
                    <div className="flex mt-6">
                      <MapPin className="w-5 h-5 text-green-600 me-3"></MapPin>
                      <div className="">
                        <h6 className="text-gray-300 mb-2">
                          الملز <br />
                          طريق الخرج <br />
                        </h6>
                        <Link
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                          data-type="iframe"
                          className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox"
                        >
                          عرض في الخريطة
                        </Link>
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <Mail className="w-5 h-5 text-green-600 me-3"></Mail>
                      <div className="">
                        <Link
                          href="mailto:contact@example.com"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          info@bajco.co
                        </Link>
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <Phone className="w-5 h-5 text-green-600 me-3"></Phone>
                      <div className="">
                        <Link
                          href="tel:+152534-468-854"
                          className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out"
                        >
                          0507773403
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Subscribe --> */}
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
          <div className="container text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="ltr:md:text-left rtl:md:text-right text-center">
                <p className="mb-0 text-gray-300">
                  صمم
                  <i className="mdi mdi-heart text-red-600"></i> بواسطة{" "}
                  <Link
                    href="https://marble-bajco.com"
                    target="_blank"
                    className="text-reset"
                  >
                    <span className="w-5 h-5 text-green-600 me-3">باجكو</span>
                    {new Date().getFullYear()}
                  </Link>
                </p>
              </div>

              <ul className="list-none ltr:md:text-right rtl:md:text-left text-center">
                {/* <li className="inline ms-1"><Link href="https://1.envato.market/hously-next" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><ShoppingCart className="h-4 w-4"></ShoppingCart></Link></li> */}
                <li className="inline ms-1">
                  <Link
                    href="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Dribbble className="h-4 w-4"></Dribbble>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://www.behance.net/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Unicons.UilBehance width={18} className="align-baseline" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Linkedin className="h-4 w-4"></Linkedin>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://www.facebook.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Facebook className="h-4 w-4"></Facebook>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://www.instagram.com/shreethemes/"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Instagram className="h-4 w-4"></Instagram>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://twitter.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Twitter className="h-4 w-4"></Twitter>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="mailto:support@shreethemes.in"
                    className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"
                  >
                    <Mail className="h-4 w-4"></Mail>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
