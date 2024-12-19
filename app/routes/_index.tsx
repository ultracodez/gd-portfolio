import type { MetaFunction } from "@remix-run/node";
import { useRef, useState } from "react";
import { Arrow } from "~/components/Arrow";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const featuredVideo = { key: "The Heist", id: "ZPhyznErrxk" };
// YOU MUST ADD featuredVideo back to videos
const videos = [
  { key: "Bitz_V2_Redacted.mov", id: "gnQ_epvTNOA" },
  { key: "Custom Gem Shaders", id: "bMaJRJ2Zs1g" },
  { key: "Ghost: A Cloth Simulation", id: "UtZlyLTCUmU" },
  { key: "$Confidential_Laser_Cannon_332.mp4", id: "IIBrxQDZdlw" },
  { key: "Bitz_Display_UpgradeV3.mov", id: "gQlB-3jOK_c" },
];

const images = [
  { key: "Bitz In Space", url: "/tttt.png" },
  { key: "Albuquerque Transit", url: "/abq.png" },
  { key: "LA Dodgers", url: "/aaaaaaa.png" },
  { key: "Big Blair 5K", url: "/bruh.png" },
  { key: "Cascade", url: "/cascade.png" },
  { key: "Minimal Album Cover", url: "/crisis test.png" },
  { key: "Physics Test", url: "/huzzah_edited.png" },
  { key: "Random Ocean Scene", url: "/idrk.png" },
  { key: "ReWild Album Cover", url: "/image1 (1).png" },
  { key: "P2000 Poster", url: "/metro23.png" },
  { key: "Shoe Poster", url: "/shoead2.png" },
  { key: "Untitled", url: "/starfall.png" },
  { key: "George Surfing", url: "/surflol.png" },

  { key: "Untitled Beard Guy", url: "/untitled beard guy2.png" },

  { key: "Faked Selfie", url: "/Untitled_1.2.2.png" },

  { key: "Car Poster", url: "/woah_3.png" },

  { key: "Untitled", url: "/cat.png" },

  { key: "Untitled", url: "/loret1.png" },

  { key: "Untitled", url: "/tyyy.png" },

  { key: "Apocalypse", url: "/apocalypse3.png" },

  { key: "The Ghost", url: "/ghost.png" },

  { key: "Fast & Furious Poster", url: "/whyisthespacingsobad (2).png" },

  { key: "Cupcake", url: "/cupcake.png" },

  { key: "Forest Girl", url: "/v2.png" },

  { key: "Untitled Cat", url: "/catttcurl.png" },

  { key: "Bliss", url: "/calamity.png" },

  { key: "La Línea Interurbana", url: "/incofer2.png" },

  { key: "Wintertime", url: "/winter.png" },

  { key: "Pasadena Transit 33 & 53", url: "/pt_1.png" },

  { key: "Ride The Colors Of Summer", url: "/metro_wip.png" },

  { key: "VAIIYA - THE FINALS", url: "/vaiiya_v3.png" },

  { key: "CNS - THE FINALS", url: "/cns3.png" },

  { key: "Hopetoun Falls", url: "/Hopetoun_falls (1).png" },

  { key: "Storm - Commission", url: "/dissun_thestorm2.png" },

  { key: "HYPR - Commission", url: "/hypr.png" },

  { key: "Life Water Ad", url: "/8e512b128835985.615f65ff91985.png" },

  { key: "Sierra Madre Villa", url: "/smv-01.png" },

  { key: "Bitz Key Art", url: "/bitzkeyart.png" },

  { key: "Custom Gem Geometry", url: "/pposter.png" },
  //{ key: "", url: "/" },
  //{ key: "George Surfing", url: "/surflol.png" },
];

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const openDialog = (key: string, url: string) => {
    setIsOpen(true);
    setCurrentUrl(url);
  };

  const dImages = useRef<HTMLDivElement>(null);
  const dVideos = useRef<HTMLDivElement>(null);
  const dCast = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-slate-800 min-h-screen overflow-hidden">
      <div className="flex w-full bg-slate-800 border-b-2 border-slate-700 ">
        <div className="w-full px-2 lg:w-1/2 mx-auto flex justify-between py-4">
          <div
            className="hover:underline cursor-pointer hover:text-slate-300"
            onClick={() =>
              dImages.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Digital Art // Images
          </div>

          <div
            className="hover:underline cursor-pointer hover:text-slate-300"
            onClick={() => {
              dVideos.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Digital Art // Animation
          </div>
          <div
            className="hover:underline cursor-pointer hover:text-slate-300"
            onClick={() => {
              dCast.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            The Cast
          </div>
        </div>
      </div>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="text-center text-5xl lg:text-9xl text-white font-semibold">
            Hey, I'm{" "}
            <span className="text-pink-500 font-extrabold">Eduardo</span>
          </div>
          <div className="text-center pt-1 lg:pt-3 text-2xl lg:text-6xl text-slate-300 font-semibold">
            Graphic Design 2 Final Portfolio
          </div>
          <div className="text-center pt-6  text-xl lg:hidden text-slate-600 font-semibold">
            (keep scrolling)
          </div>
        </div>
      </div>
      <div
        ref={dImages}
        className="mx-24 lg:mx-96 pt-12  border-sky-400  text-3xl lg:text-6xl text-center font-extrabold"
      >
        Digital Art <span className="text-slate-400">//</span> Images
      </div>
      <div className="mt-12 flex justify-center">
        <div className="w-2/3 columns-2 lg:columns-4 space-y-1 gap-6">
          {images.map((image) => {
            return (
              <div
                className="group relative break-inside-avoid-column"
                key={image.key}
              >
                <div className="transition relative border-4 rounded-xl border-slate-400 group-hover:border-pink-500">
                  <img
                    className="transition  rounded-lg outline-slate-400 group-hover:outline-pink-500 outline-2 outline"
                    src={image.url}
                  />
                  <div
                    className="transition absolute inset-0 size-full bg-transparent rounded-lg group-hover:bg-white group-hover:cursor-pointer z-10 opacity-30"
                    onClick={() => {
                      openDialog(image.key, image.url);
                    }}
                  ></div>
                </div>
                <div
                  className="transition  group-hover:underline group-hover:cursor-pointer text-center p-2 w-full font-semibold text-slate-200"
                  onClick={() => {
                    openDialog(image.key, image.url);
                  }}
                >
                  {image.key}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        ref={dVideos}
        className="mx-24 lg:mx-96 pt-12  border-sky-400  mt-12 text-3xl lg:text-6xl text-center font-extrabold"
      >
        Digital Art <span className="text-slate-400">//</span> Animation
      </div>
      <div className="flex py-8">
        <div className="mx-auto w-7/8 md:w-1/2 aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${featuredVideo.id}?si=0I7U7MFo9yJZ9ONn&playlist=${featuredVideo.id}&loop=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center text-xl lg:text-3xl text-center font-semibold text-slate-300">
        Featured Animation:{" "}
        <span className=" italic text-amber-300 ml-2 font-extrabold">
          {featuredVideo.key}
        </span>{" "}
        <div className="ml-1 h-8 w-8 stroke-amber-300">
          <Arrow className="fill-amber-300" />
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <div className="w-full px-4 md:px-0 md:w-2/3 columns-2 space-y-6 gap-6">
          {videos.map((video) => {
            return (
              <div className="break-inside-avoid-column">
                <div className="aspect-video ">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?si=0I7U7MFo9yJZ9ONn&playlist=${video.id}&loop=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="text-xs break-words lg:text-base text-center font-semibold pt-2">
                  {video.key}
                </div>
              </div>
            );
          })}
          {!(videos.length % 2 === 0) && (
            <div className="bg-slate-700 aspect-video flex">
              <div className="m-auto text-xs lg:text-base">
                Nothing here, sorry!
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        ref={dCast}
        className=" pt-12 border-y-2 bg-slate-900 border-sky-400 border-dashed mt-12 pb-12 text-3xl lg:text-9xl text-center font-extrabold"
      >
        The Cast
      </div>
      <div className="hidden lg:block relative min-h-screen bg-[#0601c4]">
        <img src="/aaa_00019_.png" className="absolute h-full right-0" />
        <div className="hidden lg:block text-[10rem]  text-right md:text-left md:text-[8rem] lg:text-[16rem] xl:text-[24rem] xl:ml-8 font-extrabold">
          BITZ
        </div>
        <div className="hidden lg:block md:text-left lg:-mt-20 xl:-mt-32 lg:text-4xl lg:w-1/2 xl:text-6xl xl:w-2/3 lg:ml-3 xl:ml-12 font-bold">
          The OG of the show; here from the beginning.
        </div>
      </div>
      <div className="min-h-screen bg-[#0601c4] lg:hidden">
        <img src="/aaa_00019_.png" className="" />
        <div className="text-9xl pt-4 sm:text-[12rem] font-extrabold text-center">
          BITZ
        </div>
        <div className="text-xl sm:text-3xl text-center font-bold sm:-mt-4 pb-12">
          The OG of the show; here from the beginning.
        </div>
      </div>
      <div className="hidden lg:block relative min-h-screen bg-[#85ff9e] text-slate-900">
        <img
          src="/firstafterbot.png"
          className="absolute h-3/4 xl:h-full bottom-0 -left-52"
        />
        <div className="text-right text-[10rem]  xl:text-[14rem] ml-8 font-extrabold mr-8">
          GEORGE
        </div>
        <div className="mr-8">
          <div className="flex justify-end w-full h-fit">
            <div className="text-right -mt-12 xl:-mt-20 w-2/3  text-5xl font-bold">
              Don't ask me where he learned to surf.
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#85ff9e] text-slate-900 lg:hidden">
        <img src="/firstafterbot.png" className="" />
        <div className="text-6xl sm:text-8xl pt-4 md:text-[10rem] font-extrabold text-center">
          GEORGE
        </div>
        <div className="text-xl sm:text-3xl text-center font-bold sm:-mt-4 pb-12">
          Don't ask me where he learned to surf.
        </div>
      </div>
      <div className="hidden lg:block relative min-h-screen bg-[#020202]">
        <img src="/wipliquidv1.png" className="absolute h-full right-0" />
        <div className="relative z-20 text-[10rem] xl:text-[12rem] 2xl:text-[15rem] ml-8 font-extrabold">
          CASCADE
        </div>
        <div className="relative z-20 -mt-12 xl:-mt-16 2xl:-mt-20 text-6xl w-2/3 ml-12 font-bold">
          Meet the sci-fi stranger.
        </div>
      </div>
      <div className="min-h-screen bg-[#020202] lg:hidden">
        <img src="/wipliquidv1.png" className="" />
        <div className="text-6xl sm:text-8xl pt-4 md:text-[10rem] font-extrabold text-center">
          CASCADE
        </div>
        <div className="text-xl sm:text-3xl text-center font-bold sm:-mt-4 pb-12">
          Meet the sci-fi stranger.
        </div>
      </div>

      <div className="bg-slate-900 border-t-2 border-dashed border-slate-700 text-slate-500 py-20 text-center text-xl">
        © 2024 Eduardo Maroto Campos
      </div>

      {
        //
        //
        // ******** DO NOT ADD CODE BELOW: THAT'S THE DIALOG & AND OVERLAYS IN THE FUTURE ********
        //
        //
      }
      <div
        className={`fixed h-screen w-screen z-20 top-0 bg-slate-900/60 transition-opacity duration-300 delay-75 ${
          !isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative flex inset-0 z-30 size-full ">
          <div className="m-auto relative w-fit h-3/4 overflow-hidden rounded-lg ">
            <img src={currentUrl} className="h-full  rounded-lg" />
            <div className="absolute bg-slate-900/50 rounded-bl-lg h-fit aspect-square pl-2 pr-2 -top-0.5 -right-0.5 ">
              <div
                className="text-slate-100 text-3xl hover:cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                ×
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="absolute  h-fit aspect-square top-1 right-4 "> <div className="text-slate-900 text-3xl" onClick={() => { setIsOpen(false); }} > × </div> </div>

*/
