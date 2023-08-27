"use client"; // This is a client component 👈🏽
import React from "react";
import { Hexagon } from "react-feather";
import * as Unicons from "@iconscout/react-unicons";

export default function Feature() {
  const featureData = [
    {
      title: "التصميم الداخلي",
      description:
        "القدرة على تحويل المساحات العادية إلى أماكن مميزة وملفتة للأنظار.",
      Icon: Unicons.UilEstate,
    },
    {
      title: "توريد وتركيب الرخام",
      description:
        "توريد وتركيب الرخام في الرياض ,عمل مخططات تنفيذية , رفع مقاسات الموقع.",
      Icon: Unicons.UilEstate,
    },
    {
      title: "تفصيل مغاسل رخام",
      description:
        "تفصيل مغاسل الرخام الحديثة بأيدي فنيين متخصصين في المجال, تصميم خاص لمغاسل الرخام",
      Icon: Unicons.UilEstate,
    },
  ];
  return (
    <>
      <div className="container lg:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            خدماتنا
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            متخصصين في تنفيذ التصاميم والديكورات والمغاسل الرخامية , وتوريد
            وتركيب الرخام ,
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          {featureData.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div
                className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-transparent overflow-hidden text-center"
                key={index}
              >
                <div className="relative overflow-hidden text-transparent -m-3">
                  <Hexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                  <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                    <Icon height={36} width={36} />
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="text-xl font-medium">{item.title}</h5>
                  <p className="text-slate-400 mt-3">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
