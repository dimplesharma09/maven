"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

import {
  footerContactActions,
  footerQuickLinks,
  siteContact,
  socialLinks,
} from "@/lib/homepage-data";

const socialIcons = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#d7d7d7] bg-white text-[#111111]">
      <div className="mx-auto grid max-w-[1500px] gap-0 md:grid-cols-4">
        <div className="border-b border-[#d7d7d7] px-5 py-8 md:flex md:min-h-[220px] md:border-r md:flex-col md:items-start md:px-8">
          <img
            src="/assets/Image/New-Logo.png"
            alt="Maven Projects"
            className="h-12 w-auto md:h-16"
          />
          <div className="mt-8 flex items-center gap-5">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="text-[#111111] transition duration-300 hover:opacity-70"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-b border-[#d7d7d7] px-5 py-8 md:min-h-[220px] md:border-r md:px-8">
          <p className="font-editorial text-[10px] uppercase tracking-[0.24em] text-[#777777] md:text-xs">
            Quick Links
          </p>
          <div className="mt-6 space-y-3">
            {footerQuickLinks.map((item) => (
              <Link key={item.label} href={item.href} className="font-editorial block text-sm text-[#111111] hover:font-bold transition-all duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-b border-[#d7d7d7] px-5 py-8 md:min-h-[220px] md:border-r md:px-8">
          <p className="font-editorial text-[10px] uppercase tracking-[0.24em] text-[#777777] md:text-xs">
            Location
          </p>
          <div className="mt-6 space-y-4">
            <p className="font-editorial text-sm leading-7 text-[#111111]">
              {siteContact.address}
            </p>
            <div className="space-y-2">
              <a href={siteContact.emailHref} className="font-editorial block text-xs text-[#555555] hover:text-[#111111]">
                {siteContact.emailLabel}
              </a>
              <a href={siteContact.phoneHref} className="font-editorial block text-xs text-[#555555] hover:text-[#111111]">
                {siteContact.phoneLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="px-5 py-8 md:min-h-[220px] md:px-8">
          <p className="font-editorial text-[10px] uppercase tracking-[0.24em] text-[#777777] md:text-xs">
            Contact
          </p>
          <div className="mt-6 space-y-3">
            {footerContactActions.map((item) =>
              item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? (
                <a key={item.label} href={item.href} className="font-editorial block text-sm text-[#111111] hover:font-bold transition-all duration-200">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className="font-editorial block text-sm text-[#111111] hover:font-bold transition-all duration-200">
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-5 text-[10px] uppercase tracking-[0.22em] text-[#777777] md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-editorial">Copyright 2026 Maven Projects</p>
        <Link href="#hero" className="font-editorial text-[#111111]">
          Back to top
        </Link>
      </div>
    </footer>
  );
}
