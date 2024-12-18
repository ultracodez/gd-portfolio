import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

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

  { key: "", url: "/" },

  { key: "", url: "/" },
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

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="text-center pt-32 text-9xl text-white font-semibold">
        Hey, I'm <span className="text-pink-500 font-extrabold">Eduardo</span>
      </div>
      <div className="text-center pt-3 text-6xl text-slate-300 font-semibold">
        Graphic Design 2 Final Portfolio
      </div>

      <div className="mx-96 pt-12 border-t-2 border-sky-400  mt-12  text-6xl text-center font-extrabold">
        Digital Art // Images
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-2/3 columns-4 space-y-1 gap-6">
          {(() => {
            var i = 0;
            var list = [];
            while (i < images.length) {
              const image = images[i]!;
              const key = image.key;
              list.push(
                <div className="relative break-inside-avoid-column" key={key}>
                  <div className="relative border-8 rounded-lg border-pink-500">
                    <img src={image.url} />
                    <div
                      className="absolute inset-0 size-full bg-transparent hover:bg-white hover:cursor-pointer z-10 opacity-30"
                      onClick={() => {
                        openDialog(key, image.url);
                      }}
                    ></div>
                  </div>
                  <div
                    className="hover:underline hover:cursor-pointer text-center p-2 w-full font-semibold text-slate-200"
                    onClick={() => {
                      openDialog(key, image.url);
                    }}
                  >
                    {key}
                  </div>
                </div>
              );
              i++;
            }
            return list;
          })()}
        </div>
      </div>

      <div className="mx-96 pt-12 border-t-2 border-sky-400  mt-12  text-6xl text-center font-extrabold">
        Digital Art // Animation
      </div>

      {isOpen ? (
        <div className="fixed h-screen w-screen z-20 top-0 bg-slate-900/60">
          <div className="relative flex inset-0 z-30 size-full ">
            <div className="m-auto relative w-fit h-3/4 border-8 rounded-lg border-emerald-400">
              <img src={currentUrl} className="h-full  rounded-lg" />
              <div className="absolute bg-slate-900/50 rounded-bl-lg h-fit aspect-square pl-2 pr-2 -top-0.5 -right-0.5 ">
                {" "}
                <div
                  className="text-slate-100 text-3xl hover:cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {" "}
                  ×{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

/*
<div className="absolute  h-fit aspect-square top-1 right-4 "> <div className="text-slate-900 text-3xl" onClick={() => { setIsOpen(false); }} > × </div> </div>

*/
