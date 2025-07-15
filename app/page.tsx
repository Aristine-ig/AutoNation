"use client";

import { PricingSection } from "@/components/PriceSection";

import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { curve, heroBackground, robot } from "@/assets";
import Button from "@/components/Button";
import Section from "@/components/Section";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "@/components/design/Hero";
import { heroIcons } from "@/constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "@/components/Generating";
import Notification from "@/components/Notification";
import CompanyLogos from "@/components/CompanyLogos";
import { loading } from "@/assets";

import { benefits } from "@/constants";
import Heading from "@/components/Heading";
import Arrow from "@/assets/svg/Arrow";
import { GradientLight } from "@/components/design/Benefits";
import ClipPath from "@/assets/svg/ClipPath";

import { brainwaveSymbol, check } from "@/assets";
import { collabApps, collabContent, collabText } from "@/constants";
// import Button from "@/components/Button";
// import Section from "@/components/Section";
import { LeftCurve, RightCurve } from "@/components/design/Collaboration";
import { curve1, curve2 } from "@/assets";

import { useState, useEffect, useRef } from "react";

import { smallSphere, stars } from "@/assets";
import PricingList from "@/components/PricingList";
import { LeftLine, RightLine } from "@/components/design/Pricing";


export default function Home() {
  const parallaxRef = useRef(null);

  return (
    // <div className="pt-[3.75rem] lg:pt-[5.25rem] overflow-hidden">
    <div className="overflow-hidden">
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              {/* Where AI Meets Automation for Seamless Efficiency.&nbsp;&nbsp;{` `} */}
              Where AI Meets Automation.&nbsp;&nbsp;{` `}
              <span className="font-bold text-white h2inline-block relative">
                AutoNation{" "}
                <img
                  src={curve.src}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI within AutoNation. Seamless Instagram
              Automation – Just Set It & Forget It!
            </p>
            <Button 
              className=""
              href="/sign-in" 
              white 
              onClick={() => { }}
              px="px-7"
            >
              Get started
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img
                    src={robot.src}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />

                  <div className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2">
                    <div
                      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] text-base`}
                    >
                      <img
                        className="w-5 h-5 mr-4"
                        src={loading.src}
                        alt="Loading"
                      />
                      Stop Typing, Start Scaling
                    </div>
                  </div>
                  {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                  {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax> */}

                  {/* <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax> */}
                </div>
              </div>

              <Gradient />
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground.src}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
            <BackgroundCircles parallaxRef={parallaxRef} />
          </div>
          <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
        </div>
        <BottomLine />
      </Section>

      {/* ======================================================================================================================== */}
      {/* work smarter section */}

      <Section
        id="features"
        className=""
        crosses={false}
        crossesOffset=""
        customPaddings={false}
      >
        <div className="container relative z-2">
          <Heading
            className="text-4xl font-bold text-white mb-6 md:max-w-md lg:max-w-2xl"
            title="Work Smarter, Not Harder with AutoNation"
            text=""
            tag=""
          />
         

          <div className="flex flex-wrap gap-10 mb-10">
            {benefits.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl.src})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl.src}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Explore more
                    </p>
                    <svg className="ml-5 fill-n-1" width="24" height="24">
                      <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
                    </svg>
                  </div>
                </div>


                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={
                          typeof item.imageUrl === "string"
                            ? item.imageUrl
                            : item.imageUrl.src
                        }
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <svg className="block" width={0} height={0}>
                  <clipPath id="benefits" clipPathUnits="objectBoundingBox">
                    <path d="M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0" />
                  </clipPath>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ======================================================================================================================== */}
      {/* Collaboration Section */}

      <Section
        className=""
        id=""
        crosses={true}
        crossesOffset=""
        customPaddings={false}
      >
        <div className="container lg:flex">
          <div className="max-w-[22rem]">
            <h2 className="font-bold text-white h2 mb-4 md:mb-8">Never Miss a DM Again</h2>

            <ul className="max-w-[22rem] mb-10 md:mb-14">
              {collabContent.map((item) => (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img src={check.src} width={24} height={24} alt="check" />
                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>
                </li>
              ))}
            </ul>

            <Button 
              className="" 
              px="px-7"
              href="#"
              onClick={() => {}}
              white={false}
            >
              Try it now
            </Button>
          </div>

          <div className="lg:ml-auto xl:w-[38rem] mt-4">
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
              {collabText}
            </p>

            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                    <img
                      src={brainwaveSymbol.src}
                      width={48}
                      height={48}
                      alt="brainwave"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom`}
                    style={{ transform: `rotate(${index * 45}deg)` }}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl`}
                      style={{ transform: `rotate(-${index * 45}deg)` }}
                    >
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon.src}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
                <img src={curve1.src} width={522} height={182} alt="Curve 1" />
              </div>
              <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
                <img src={curve2.src} width={162} height={76} alt="Curve 2" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ======================================================================================================================== */}
      {/* Pricing Section */}


      <Section 
        className="overflow-hidden" 
        id="pricing"
        crosses={false}
        crossesOffset=""
        customPaddings={false}
      >
        <div className="container relative z-2">
          {/* <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img
              src={smallSphere.src}
              className="relative z-1"
              width={255}
              height={255}
              alt="Sphere"
            />
            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img
                src={stars.src}
                className="w-full"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </div> */}

          {/* <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="Choose the Plan That Fits Your Needs"
          text="Discover how automation can transform your workflow."
          /> */}

          {/* <Heading
            tag=" with Auto-Nation"
          // title=""
          /> */}

          <div className="relative">
            <PricingSection />
            <LeftLine />
            <RightLine />
          </div>

          <div className="flex justify-center mt-10">
            {/* <a
              className="text-xs font-code font-bold tracking-wider uppercase border-b"
              href="/pricing"
            >
              See the full details
            </a> */}
          </div>
        </div>
      </Section>

      {/* ======================================================================================================================== */}


    </div>
  );
}
