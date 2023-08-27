"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { User } from "react-feather";

export default function Navbar(props) {
  const { navClass, topnavClass } = props;
  const [isOpen, setMenu] = useState(true);
  const [topNavbar, setTopNavBar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", windowScroll);
    }
    window.scrollTo(0, 0);
    activateMenu();
  }, []);

  function windowScroll() {
    setTopNavBar(window.scrollY >= 200);
  }

  const toggleMenu = () => {
    setMenu(!isOpen);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };
  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };

  // render() {
  // const toggleClass = this.state.isOpenMenu ? 'hidden' : 'block';

  return (
    <React.Fragment>
      <nav
        id="topnav"
        className={`${
          topNavbar
            ? "nav-sticky bg-gradient-to-r from-green-700 to-blue-500"
            : ""
        } ${topnavClass ? topnavClass : ""} defaultscroll is-sticky `}
      >
        <div
          className={`${
            topnavClass !== "" && topnavClass !== undefined
              ? "container-fluid md:px-8 px-3"
              : "container"
          }`}
        >
          {/* <!-- Logo container--> */}
          {navClass === "" || navClass === undefined ? (
            <Link className="logo" href="/">
              <Image
                src="/images/bajco_black.png"
                className="inline-block dark:hidden"
                alt=""
                width={98}
                height={24}
              />
              <Image
                src="/images/bajco_white.png"
                className="hidden dark:inline-block"
                alt=""
                width={98}
                height={24}
              />
            </Link>
          ) : (
            <Link className="logo" href="/">
              <span className="inline-block dark:hidden">
                <Image
                  src="/images/bajco_black.png"
                  className="l-dark"
                  alt=""
                  width={98}
                  height={24}
                />
                <Image
                  src="/images/bajco_white.png"
                  className="l-light"
                  alt=""
                  width={98}
                  height={24}
                />
              </span>
              <Image
                src="/images/bajco_white.png"
                className="hidden dark:inline-block"
                alt=""
                width={98}
                height={24}
              />
            </Link>
          )}
          {/* <!-- End Logo container--> */}

          {/* <!-- Start Mobile Toggle --> */}
          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="/"
                className="navbar-toggle"
                id="isToggle"
                onClick={toggleMenu}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>
          {/* <!-- End Mobile Toggle --> */}

          {/* <!-- Login button Start --> */}
          <ul className="buy-button list-none mb-0">
            <li className="inline mb-0">
              <Link
                href="/auth-login"
                className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
              >
                <User className="h-4 w-4 stroke-[3]"></User>
              </Link>
            </li>
            <li className="sm:inline ps-1 mb-0 hidden">
              <Link
                href="/auth-signup"
                className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full"
              >
                Signup
              </Link>
            </li>
          </ul>
          {/* <!--Login button End--> */}

          <div
            id="navigation"
            className={`${isOpen === true ? "hidden" : "block"}`}
          >
            {/* <!-- Navigation Menu--> */}
            <ul
              className={`navigation-menu  ${
                navClass === "" || navClass === undefined ? "" : "nav-light"
              }   ${
                topnavClass !== "" && topnavClass !== undefined
                  ? "justify-center"
                  : "justify-end"
              }`}
            >
              <li className="has-submenu parent-menu-item">
                <Link href="/">الرئيسية</Link>
                {/* <span className="menu-arrow"></span> */}
                {/* <ul className="submenu">
                  <li>
                    <Link href="/" className="sub-menu-item">
                      Hero One
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-two" className="sub-menu-item">
                      Hero Two
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-three" className="sub-menu-item">
                      Hero Three
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-four" className="sub-menu-item">
                      Hero Four
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-five" className="sub-menu-item">
                      Hero Five{" "}
                    </Link>
                  </li>
                </ul> */}
              </li>

              <li>
                <Link
                  href="/%D9%85%D8%BA%D8%A7%D8%B3%D9%84_%D8%B1%D8%AE%D8%A7%D9%85"
                  activeclassname="active"
                  className="sub-menu-item"
                >
                  مغاسل رخام
                </Link>
              </li>

              <li>
                <Link href="/sell" className="sub-menu-item">
                  أعمالنا
                </Link>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link href="#">المعرض</Link>
                {/* <span className="menu-arrow"></span> */}
                {/* <ul className="submenu">
                  <li className="has-submenu parent-menu-item">
                    <Link href="#"> Grid View </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/grid" className="sub-menu-item">
                          Grid Listing
                        </Link>
                      </li>
                      <li>
                        <Link href="/grid-sidebar" className="sub-menu-item">
                          Grid Sidebar{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/grid-map" className="sub-menu-item">
                          Grid With Map
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <Link href="#"> List View </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/list" className="sub-menu-item">
                          List Listing
                        </Link>
                      </li>
                      <li>
                        <Link href="/list-sidebar" className="sub-menu-item">
                          List Sidebar{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/list-map" className="sub-menu-item">
                          List With Map
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <Link href="#"> Property Detail </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link
                          href="/property-detail/1"
                          className="sub-menu-item"
                        >
                          Property Detail
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link href="#">المزيد </Link>
                <span className="menu-arrow"></span>
                <ul className="submenu">
                  <li>
                    <Link href="/aboutus" className="sub-menu-item">
                      من نحن
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="sub-menu-item">
                      سياسة الخصوصية
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="sub-menu-item">
                      العروض
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" className="sub-menu-item">
                      Faqs
                    </Link>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <Link href="#"> Auth Pages </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/auth-login" className="sub-menu-item">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link href="/auth-signup" className="sub-menu-item">
                          اتصل بنا
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/auth-reset-password"
                          className="sub-menu-item"
                        >
                          Reset Password
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <Link href="#"> Utility </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/terms" className="sub-menu-item">
                          Terms of Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy" className="sub-menu-item">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <Link href="#"> Blog </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/blogs" className="sub-menu-item">
                          {" "}
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-sidebar" className="sub-menu-item">
                          {" "}
                          Blog Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-detail/1" className="sub-menu-item">
                          {" "}
                          Blog Detail
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu parent-menu-item">
                    <Link href="#"> Special </Link>
                    <span className="submenu-arrow"></span>
                    <ul className="submenu">
                      <li>
                        <Link href="/comingsoon" className="sub-menu-item">
                          Comingsoon
                        </Link>
                      </li>
                      <li>
                        <Link href="/maintenance" className="sub-menu-item">
                          Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link href="/404" className="sub-menu-item">
                          404! Error
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/contact" className="sub-menu-item">
                  ارسل لنا
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar  */}
    </React.Fragment>
  );
}
