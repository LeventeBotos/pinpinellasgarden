import { Metadata } from "next";
import { GoClockFill } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Comments from "@/app/Comments";
import ProductsSlider from "@/app/ProductsSlider";

const Card: React.FC<{
  title: string;
  description: string;
  content?: React.ReactNode;
}> = ({ title, description, content }) => (
  <div
    className={`flex flex-col flex-1 gap-3 m-0 ${
      content ? "justify-between" : "justify-evenly"
    } w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-lg items-center text-center p-3`}
  >
    <h2 className="font-bold mb-2">{title}</h2>
    <div>{description}</div>
    <div className="w-full flex flex-col gap-5 ">{content}</div>
  </div>
);

const Section = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: any;
}) => (
  <section id={id} className="pt-16 md:pt-20 gap-5 flex flex-col w-full">
    <h2 className="font-bold text-white text-center ">{title}</h2>
    <div className="w-full flex flex-col gap-5 ">{content}</div>
  </section>
);

const page = () => {
  return (
    <article className=" items-center bg-gradient-to-bl  from-0% to-25% w-full relative flex flex-col px-4 md:px-7 ">
      <div className="absolute h-96 w-full left-0 right-0 bg-black bg-opacity-50">
        <img
          src="/images/custom-keyboard-under-100/1.jpeg"
          alt="image of a custom keyboard"
          className="absolute top-0 left-0 right-0 bottom-0 w-full  object-cover h-96 z-10 opacity-30"
        />
        <div className="flex flex-col justify-evenly absolute z-30 top-0 bottom-0 left-0 px-5 right-0 h-96">
          <h1 className="gradient text-2xl md:text-4xl drop-shadow-xl font-bold text-center pt-10">
            How To Build A Custom Keyboard Under $100
          </h1>
          <div className="flex byline justify-evenly self-center pb-10 ">
            <address className="author">
              By{" "}
              <a
                rel="author"
                href="https://gamingtales.tech/author/levente-botos"
              >
                Levente Botos
              </a>{" "}
            </address>
          </div>
          <h2 className="w-full text-lg drop-shadow-xl pb-5 md:text-xl md:w-2/3 self-center">
            In this guide, we will show you, how to pick the parts and build
            your first custom mechanical keyboard. All this, whilst staying
            under 100 USD.
          </h2>
        </div>
      </div>
      <div className="h-96 w-full"></div>
      <div className="flex flex-col w-full pt-10 md:flex-row gap-5 justify-evenly">
        <div className="self-center ">
          <h2 className="self-center text-lg text-center md:text-xl">
            Contents
          </h2>
          <ul className=" w-full md:w-auto h-min self-center list-disc">
            <li className="hover:cursor-pointer">
              <a href="#layout">1. The Best Layout For You</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#pcb">2. The &quot;Base&quot; - PCB</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#switches">3. The &quot;Feel&quot; - Switches</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#keycaps">4. The &quot;Color&quot; - Keycaps</a>
            </li>
            <li className="hover:cursor-pointer">
              <a href="#assembly">5. The Fun Part - Assembly</a>
            </li>
          </ul>
        </div>
        <div className="flex text-lg md:text-xl text-white opacity-70 h-auto items-center text-center w-auto justify-evenly flex-row gap-5">
          <div className="flex flex-row gap-3 items-center">
            <GoClockFill />
            <p>15 Min</p>
          </div>
        </div>
      </div>
      {/* Section: Layout */}
      <Section
        id="layout"
        title="The Layout"
        content={
          <>
            <h3 className="w-full self-center md:w-3/4">
              Choosing the correct layout for your use case, is a crucial part
              of buying the correct keyboard for you. Theese are the 3 most
              popular choices.
            </h3>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-32">
              <Card
                title="Full-Size: Classic Convenience"
                description=" Full-size keyboards have the traditional layout, with the
                  numpad. It is often required in professional applications,
                  like video editing or 3D-modelling."
                content={
                  <div className=" w-[213px] bg-white rounded-sm h-14 mx-10 self-center opacity-50 text-gray-500 text-xl text-center flex flex-col justify-evenly">
                    <p>Full size</p>
                  </div>
                }
              />
              <Card
                title=" TenKeyLess: Compact without Compromise"
                description=" For users who want a more compact design without sacrificing
                essential keys, TenKeyLess (TKL) keyboards are an excellent
                compromise."
                content={
                  <div className=" w-[170px] bg-white rounded-sm h-14 mx-10 opacity-50 self-center text-gray-500 text-xl text-center flex flex-col justify-evenly">
                    <p>TKL</p>
                  </div>
                }
              />
              <Card
                title="60%: Minimalism and Efficiency"
                description=" If you crave the ultimate in space efficiency and are willing
                to make some sacrifices in terms of keys, a 60% keyboard might
                be the perfect fit. They're quite popular among gamers."
                content={
                  <div className=" w-[140px] bg-white rounded-sm h-12 opacity-50 mx-10 self-center text-gray-500 text-xl text-center flex flex-col justify-evenly">
                    <p>60%</p>
                  </div>
                }
              />
            </div>
          </>
        }
      />

      {/* Section: PCB */}
      <Section
        id="pcb"
        title="The PCB"
        content={
          <>
            <h3 className="self-center md:w-3/4 w-full">
              The PCB is the &quot;brain&quot; of the keyboard. It controlls the
              lighting and other software, like macros. There are several
              factors, to look out for, when choosing one.
            </h3>
            <h3 className="w-full md:w-3/4 self-center">
              I also really reccommend you to get a kit. A kit usually includes
              A Case, PCB, Stabilizers and a Cable. This way, you don&apos;t
              have to worry about not getting the right stabilizer.
            </h3>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card
                title="Switch Compatibility"
                description="Ensure that the PCB is compatible with your preferred switches.
If you choose a switch with 5 pins, and accidentally choose a pcb, that has 3 hole per switch, you will have to cut the access pins."
              />

              {/* Customization Options */}
              <Card
                title="Customization Options"
                description="Assess the level of customization the PCB allows. Look for features
        like programmable macros, key remapping, and RGB lighting customization
        to enhance your overall experience."
              />

              {/* RGB Lighting Support */}
              <Card
                title="RGB Lighting Support"
                description="If RGB lighting is essential to you, ensure that the PCB supports the
        lighting features you desire. Some PCBs come with pre-installed LEDs, which make your life much easier."
              />

              {/* Ease of Assembly */}
              <Card
                title="Ease of Assembly"
                description="Consider the ease of assembly, especially if you are building your
        keyboard. Look for PCBs with hot-swappable sockets if you want to change
        switches without soldering."
              />
            </div>
            <ProductsSlider
              items={[
                {
                  name: "SUEHIODHY 75% RGB Tri-Mode Hot-Swap Keyboard Kit",
                  url: "https://amzn.to/3GJGNxp",
                  img: "https://m.media-amazon.com/images/I/619RZqzTjBL._AC_SX679_.jpg",
                  price: "59$",
                },
                {
                  name: "Guffercty GK61 60% Hot-Swap RGB Keyboard Kit",
                  url: "https://amzn.to/3GGylim",
                  img: "https://m.media-amazon.com/images/I/7101WevYq-L._AC_SX679_.jpg",
                  price: "63$",
                },

                {
                  name: "FL ESPORTS MK870 TKL Hot-Swap RGB Keyboard Kit",
                  url: "https://amzn.to/47WSLzI",
                  img: "https://m.media-amazon.com/images/I/71AfqxNlIeL._AC_SX679_.jpg",
                  price: "69$",
                },
                {
                  name: "KEEBMONKEY WK870 TKL Know Hot-Swap RGB Keyboard Kit",
                  url: "https://amzn.to/3TwPe6C",
                  img: "https://m.media-amazon.com/images/I/71R13jywKuL._AC_SX679_.jpg",
                  price: "69$",
                },
                {
                  name: "Glorious GMMK 2 96% Hot-Swap RGB Keyboard Kit",
                  url: "https://amzn.to/3v5SGuQ",
                  img: "https://m.media-amazon.com/images/I/71VSxrYlElL._AC_SX679_.jpg",
                  price: "79$",
                },
              ]}
            />
          </>
        }
      />

      {/* Section: Switches */}
      <Section
        id="switches"
        title="The Switches"
        content={
          <>
            <h3 className="w-full md:w-3/4 self-center">
              The switches, you choose for your build, dictate the main feel of
              the keyboard. There is no &quot;best&quot; switch, as it is a
              matter of personal preference. There are many factors, to choosing
              one.
            </h3>
            <h3 className="w-full md:w-3/4 self-center">
              Please watch out for the quantity of switches you order. For a
              full-size keyboard, a 110-pack is recommended; for TKLs, 90
              switches are sufficient, and for 60%, 70 switches are necessary.
            </h3>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-32">
              {/* Switch Type */}
              <Card
                title="Switch Type"
                description="There are 3 main types of switches: Linear, Tactile and Clicky. We will discuss theese further."
              />

              {/* Actuation Force */}
              <Card
                title="Actuation Force"
                description="This parameter is, how hard you need to press the switch, to actuate it. You can make the keyboard be really fast or even make it like a typewriter!"
              />
              {/* RGB backlight */}
              <Card
                title="RGB backlight"
                description="There are some switches, that don't have transparent housing, which is needed for the light to shine through, for a backlit keyboard."
              />
            </div>
            <div className="w-full overflow-x-scroll md:overflow-x-hidden">
              <table className="-collapse -none   -opacity-0  w-full">
                <thead className="">
                  <tr className="">
                    <th className="p-2 font-bold"></th>

                    <th className="p-2 ">
                      <div className="flex flex-col items-center">
                        <img
                          src="/images/custom-keyboard-under-100/gateron-yellow.webp"
                          alt="Image of Gateron Yellow linear switch"
                          className="self-center scale-125 h-32 w-32 object-contain"
                          loading="lazy"
                        />
                        <h2 className="mt-2 text-center">Linear</h2>
                      </div>
                    </th>

                    <th className="p-2 ">
                      <div className="flex flex-col items-center">
                        <img
                          src="/images/custom-keyboard-under-100/glorious-panda.jpeg"
                          alt="Image of Glorious Panda tactile switch"
                          className="self-center h-32 scale-150 w-32 object-contain"
                          loading="lazy"
                        />
                        <h2 className="mt-2 text-center">Tactile</h2>
                      </div>
                    </th>

                    <th className="p-2 ">
                      <div className="flex flex-col items-center">
                        <img
                          src="/images/custom-keyboard-under-100/cherry-blue.png"
                          alt="Image of Cherry Blue clicky switch"
                          className="self-center h-32 scale-75 w-32 object-contain"
                          loading="lazy"
                        />
                        <h2 className="mt-2 text-center">Clicky</h2>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2 font-bold">Travel distance:</td>
                    <td className="p-2 ">Long</td>
                    <td className="p-2 ">Medium</td>
                    <td className="p-2 ">Long</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Activation force:</td>
                    <td className="p-2 ">45g-67g</td>
                    <td className="p-2 ">60g-67g</td>
                    <td className="p-2 ">60g-80g</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Peak force:</td>
                    <td className="p-2 ">55g-77g</td>
                    <td className="p-2 ">65g-77g</td>
                    <td className="p-2 ">75g-85g</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Operating life:</td>
                    <td className="p-2 ">50 million clicks</td>
                    <td className="p-2 ">50 million clicks</td>
                    <td className="p-2 ">50 million clicks</td>
                  </tr>
                  {/* Add the remaining rows here */}
                </tbody>
                <tbody>
                  <tr>
                    <td className="p-2 font-bold">Noise:</td>
                    <td className="p-2 ">Low</td>
                    <td className="p-2 ">Medium</td>
                    <td className="p-2 ">High</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Typing feeling:</td>
                    <td className="p-2 ">Smooth</td>
                    <td className="p-2 ">Bumpy</td>
                    <td className="p-2 ">Clicky</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Gaming feeling:</td>
                    <td className="p-2 ">Smooth</td>
                    <td className="p-2 ">Tactile and precise</td>
                    <td className="p-2 ">Clicky and satisfying</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Typing experience:</td>
                    <td className="p-2 ">Smooth and quiet</td>
                    <td className="p-2 ">Tactile and satisfying</td>
                    <td className="p-2 ">Clicky and satisfying</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Gaming experience:</td>
                    <td className="p-2 ">Fast and responsive</td>
                    <td className="p-2 ">Tactile and precise</td>
                    <td className="p-2 ">Clicky and satisfying</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Popularity:</td>
                    <td className="p-2 ">High</td>
                    <td className="p-2 ">Medium</td>
                    <td className="p-2 ">Medium</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Recommended for:</td>
                    <td className="p-2 ">
                      Typists who prefer a quiet and smooth experience
                    </td>
                    <td className="p-2 ">
                      Typists who prefer a tactile and responsive experience
                    </td>
                    <td className="p-2 ">
                      Typists who prefer a clicky and satisfying experience
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ProductsSlider
              items={[
                {
                  name: "Gateron Milky Yellow Linear (50x)",
                  url: "https://amzn.to/3GHxb6b",
                  img: "https://m.media-amazon.com/images/I/51vJKuF+okL._AC_SX679_.jpg",
                  price: "16$",
                },
                {
                  name: "Gateron Yellow Pro V2 Linear (50x)",
                  url: "https://amzn.to/3Rpy9sF",
                  img: " https://m.media-amazon.com/images/I/616o2c4g5CL._AC_SX679_.jpg",
                  price: "17$",
                },

                {
                  name: "Epomaker Wisteria Linear (30x)",
                  url: "https://amzn.to/41kN1xh",
                  img: "https://m.media-amazon.com/images/I/51DcEWqR6BL._AC_SX679_.jpg",
                  price: "12$",
                },
                {
                  name: "Epomaker Wisteria Tactile (30x)",
                  url: "https://amzn.to/3GJMueL",
                  img: "https://m.media-amazon.com/images/I/519nHMZzdRL._AC_SX679_.jpg",
                  price: "12$",
                },

                {
                  name: "Glorious Lynx Linear (35x)",
                  url: "https://amzn.to/3RHfSsa",
                  img: "https://m.media-amazon.com/images/I/61bsxP2t8JL._SX522_.jpg",
                  price: "17$",
                },
                {
                  name: "Akkor CS Air Linear (45x)",
                  url: "https://amzn.to/3tkLXgk",
                  img: "https://m.media-amazon.com/images/I/514wX6ivHKL._AC_SX679_.jpg",
                  price: "19$",
                },
                {
                  name: "Akkor CS Snow Blue Grey Linear (45x)",
                  url: "https://amzn.to/3tkLXgk",
                  img: "https://m.media-amazon.com/images/I/51YKkNZsiML._AC_SX679_.jpg",
                  price: "19$",
                },
                {
                  name: "Glorious Panda Tactile (35x)",
                  url: "https://amzn.to/3RHUd3j",
                  img: "https://m.media-amazon.com/images/I/513rG8XL5ES._SX522_.jpg",
                  price: "25$",
                },
              ]}
            />
          </>
        }
      />

      {/* Section: Keycaps */}
      <Section
        id="keycaps"
        title="The Keycaps"
        content={
          <>
            <h3 className="w-full md:w-3/4 self-center">
              The Keycaps are an essential part of a custom keyboard. Their
              price can range from 10s to 1000s of dollars. They are very good
              at showing the vibe of the owner.
            </h3>
            {/* ... (additional content for Keycaps) */}
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mx-32">
              {/* Material */}
              <Card
                title="Material"
                description="There are two keycap materials: ABS and PBT. ABS is less durable, prone to wear, and feels smoother. PBT is more durable, with a slightly rougher texture for better grip and satisfaction.
                 "
              />

              {/* Profile */}
              <Card
                title="Profile"
                description="Popular keycap profiles include:

                Cherry: Common in mainstream keyboards, low-profile.
                DSA: Versatile and modern, flat and uniform.
                OEM: Standard sculpted, widely used."
              />

              {/* Keycap Legends */}
              <Card
                title="Keycap Legends"
                description="Legends on the keys are made in various ways:

                Laser-etched: Durable but may wear.
                Double-shot: Highly durable with a separate legend layer.
                Dye-sublimation: Durable, high-quality, good contrast."
              />
            </div>
            <img
              src="/images/custom-keyboard-under-100/keycap-profiles.webp"
              alt="The different types of keycap profiles."
              className="w-full md:w-3/4 self-center object-contain mix-blend-screen invert"
              loading="lazy"
            />
            <p className="text-white self-center opacity-50 w-full md:w-3/4">
              * image from{" "}
              <a
                target="_blank"
                href="https://www.gloriousgaming.com/blogs/resources/keycap-profiles-and-materials-explained-all-you-need-to-know"
              >
                Glorious
              </a>
            </p>
            <ProductsSlider
              items={[
                {
                  name: "XVX OEM Profile PBT Pudding Keycaps White",
                  url: "https://amzn.to/3RmebPx",
                  img: "https://m.media-amazon.com/images/I/61CumBjX1SL._AC_SX679_.jpg",
                  price: "15$",
                },
                {
                  name: "XVX OEM Profile PBT Pudding Keycaps Black",
                  url: "https://amzn.to/41kIPNX",
                  img: "https://m.media-amazon.com/images/I/71-HQLb5rhL._AC_SX679_.jpg",
                  price: "15$",
                },
                {
                  name: "XVX Low Profile Keycaps",
                  url: "https://amzn.to/4ak6ty2",
                  img: "https://m.media-amazon.com/images/I/61JTUmIqqFL._AC_SX679_.jpg",
                  price: "24$",
                },
                {
                  name: "OEM Profile PBT Side Printed Gray Gradient Keycaps",
                  url: "https://amzn.to/3Rm8ocT",
                  img: "https://m.media-amazon.com/images/I/71aTJDUn8hL._AC_SX679_.jpg",
                  price: "25$",
                },
                {
                  name: "XDA Profile Hyekit Honey Milk PBT Keycaps",
                  url: "https://amzn.to/3RFAm4K",
                  img: "https://m.media-amazon.com/images/I/61fKFn4HAuL._AC_SX679_.jpg",
                  price: "27$",
                },
                {
                  name: "XVX Prodile Dagladoo Green PBT keycaps",
                  url: "https://amzn.to/3RFAm4K",
                  img: " https://m.media-amazon.com/images/I/61MqhCLQhLL._AC_SX679_.jpg",
                  price: "27$",
                },

                {
                  name: "Cherry Profile PBT Japanese Gray Keycaps",
                  url: "https://amzn.to/47X22b0",
                  img: "https://m.media-amazon.com/images/I/51nF5AoHZLL._AC_SX679_.jpg",
                  price: "30$",
                },
              ]}
            />
          </>
        }
      />

      {/* Section: Assembly */}
      <Section
        id="assembly"
        title="The Assembly"
        content={
          <>
            <h3 className="w-full md:w-3/4 self-center">
              The assembly is the most fun part, of this whole process. In this
              guide, I&apos;ll try to explain everything, but I won&apos;t go
              into much detail, so don&apos;t be afraid to Google.
            </h3>
            <div className="flex flex-col md:flex-row">
              <img
                src="/images/custom-keyboard-under-100/tools.png"
                alt="Image of neccessary things."
                className="w-full "
              />
              <div className="flex flex-col w-full justify-evenly gap-5">
                <h2 className="font-bold">
                  <strong>Step 0: Gather Everything</strong>
                </h2>
                <h3>
                  Make sure to grab your PCB, Switches, Stabilizers, Keycaps,
                  Keyboard Case and a screwdriver.
                </h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
              <img
                src="/images/custom-keyboard-under-100/stabilizers.png"
                alt="Image of installing stabilizers."
                className="w-full "
                loading="lazy"
              />
              <div className="flex flex-col w-full justify-evenly gap-5">
                <h2>
                  <strong>Step 1: Install Stabilizers</strong>
                </h2>
                <h3>
                  There are 2 types of stabilizers: Plate- and PCB- mounted.
                  Theese vary a little between installation.
                </h3>
                <h3>
                  <strong>PCB mounted:</strong> for theese, you will have to
                  just screw them in to the PCB. That&apos;s it!
                </h3>
                <h3>
                  <strong>Plate mounted:</strong> theese are a bit harder, but
                  not the end of the world! You will have to just clip them on
                  the plate. there will be a little clip on the front, and with
                  that can you remove them.{" "}
                  <a
                    target="_blank"
                    href="https://youtube.com/shorts/XzQnMCLRKwE?si=0-Z1QZywL9edBx4r"
                  >
                    This
                  </a>{" "}
                  video helps.
                </h3>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <img
                src="/images/custom-keyboard-under-100/tools.png"
                alt="Image of mounting the PCB."
                className="w-full "
              />
              <div className="flex flex-col w-full justify-evenly gap-5">
                <h2>
                  <strong>Step 2: Mount The PCB In The Case</strong>
                </h2>
                <h3>
                  It&apos;s quite self-explenatory, right? Place it, screw it!
                </h3>
                <h3>
                  Tipp: If you want a thockier sound to the keybaord, you can
                  try placing foam in the case. Please don&apos;t do this, if
                  you have a battery installed.
                </h3>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse">
              <img
                src="/images/custom-keyboard-under-100/swiches.png"
                alt="Image of placing a switch on a PCB."
                className="w-full "
                loading="lazy"
              />
              <div className="flex flex-col w-full justify-evenly gap-5">
                <h2>
                  <strong>Step 3: Mount The Switches</strong>
                </h2>
                <h3>
                  Align the pins on the bottom of the Switch, with the PCB, then
                  pop it in. Be very careful, it&apos;s very easy to damage your
                  board.
                </h3>
                <h3>
                  If the pins got bent on a Switch, you can try to bend them
                  back to the original position.
                </h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <img
                src="/images/custom-keyboard-under-100/tools.png"
                alt="Image of neccessary things."
                loading="lazy"
                className="w-full "
              />
              <div className="flex flex-col w-full justify-evenly gap-5">
                <h2>
                  <strong>Step 4: Place The Keycaps</strong>
                </h2>
                <h3>You just put them on the stems of the Switches.</h3>
                <h3>
                  I reccomment Googleing the layout, you are building, to not
                  mess up the order of the keys.
                </h3>
                <a
                  target="_blank"
                  href="https://www.google.com/search?q=ANSI+keyboard+layout"
                  className="bg-white bg-none bg-opacity-5 rounded-full h-10 w-full md:w-3/4 self-center items-center px-2 p-1 flex flex-row gap-3"
                >
                  <FcGoogle />
                  <p className="font-medium">ANSI keyboard layout</p>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse">
              <img
                src="/images/custom-keyboard-under-100/tools.png"
                alt="Image of neccessary things."
                className="w-full "
                loading="lazy"
              />
              <div className="flex flex-col w-full justify-evenly gap-5">
                <h2>
                  <strong>Step 5: Test & Enjoy</strong>
                </h2>
                <h3>
                  Congratulations! You have just built your first custom
                  mechanical keyboard. Welcome in the club.
                </h3>
                <h3>
                  I reccommend, you test your new keyboard, that all of the keys
                  are working with a tool like{" "}
                  <a href="https://keyboard-test.space/" target="_blank">
                    this
                  </a>
                  .
                </h3>
              </div>
            </div>
          </>
        }
      />
      <div className="flex flex-col gap-5 items-cemter text-md">
        <p className=" pt-10 text-center">
          Thanks for reading all the way through!
        </p>
        <p className="text-white opacity-70 text-xs text-center w-full self-center md:w-3/4">
          Please keep in mind, that the links used in this article are
          affliliate links. This means, we profit from you buying them.
        </p>
        <p className=" pb-10 text-center font-bold">
          I&apos;m curious to know your thoughts on this topic, share them in
          the comments!
        </p>
      </div>

      <Comments name="custom-keyboard-under-100" />
    </article>
  );
};

export default page;

export const metadata: Metadata = {
  title: "Build a Custom Keyboard Under $100",
  robots: "index, follow",
  metadataBase: new URL("https://gamingtales.tech"),
  authors: [
    {
      name: "Levente Botos",
      url: "https://gamingtales.tech/author/levente-botos",
    },
  ],
  keywords: ["Keboard", "Custom", "Under 100"],
  description:
    "In this guide, we will show you, how to pick the parts and build your first custom mechanical keyboard. All this, whilst staying under 100 USD.",
  openGraph: {
    title: "Build a Custom Keyboard Under $100",
    description:
      "In this guide, we will show you, how to pick the parts and build your first custom mechanical keyboard. All this, whilst staying under 100 USD.",
    type: "article",
    url: "https://gamingtales.tech/custom-keyboard-under-100",
    siteName: "GamingTales",
    publishedTime: "2023-12-12T00:00:00.000Z",

    authors: ["Botos Levente"],
    images: [
      {
        url: "https://gamingtales.tech/images/custom-keyboard-under-100/1.jpeg", // Replace with the actual image URL
        alt: "Custom Keyboard Image",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    title: "Build a Custom Keyboard Under $100",
    description:
      "In this guide, we will show you, how to pick the parts and build your first custom mechanical keyboard. All this, whilst staying under 100 USD.",
    images: [
      {
        url: "https://gamingtales.tech/images/custom-keyboard-under-100/1.jpeg", // Replace with the actual image URL
        alt: "Custom Keyboard Image",
      },
    ],
    card: "summary_large_image",
    
  },
};
