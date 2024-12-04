import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TbShoppingBagPlus } from "react-icons/tb";
import { GiKnifeFork } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { LiaPillsSolid } from "react-icons/lia";
import { MdFilterList } from "react-icons/md";
import { useEffect, useState } from "react";
import { fetchRestaurants } from "../api/restaurants/restaurantsApi";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [restaurants, setRestaurants] = useState();
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const restaurantsData = await fetchRestaurants();
        setRestaurants(restaurantsData);

        const uniqueCategories = [
          ...new Set(restaurantsData.map((item) => item.categoryName)),
        ];

        setCategories(uniqueCategories);
      } catch (err) {
        console.log(err.message);
      }
    };

    getRestaurants();
  }, []);

  const filteredRestaurants =
    selectedCategory === "All"
      ? restaurants
      : restaurants.filter((item) => item.categoryName === selectedCategory);

  return (
    <div>
      <Header />
      <div className="w-full relative mb-20">
        <img
          src="https://s3-alpha-sig.figma.com/img/001f/77b2/886590aa2503bc018c825c6bd18b40aa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvfTK17JI2c~Er-JETJXBVq3gFeiQL1PhXTVTCv7B4HCniwWgjCKKfRP7en4vup80e5Aa9qr6JkQ6nPOqGSZ32HJQLsTxPgreifbdltPSOl08Noro0aSPHNvTHPCbTILA4DMiD1sHhDSb4VIHa-t1XshfzVyUOmSPQE8779rycNw5c2W22p13t05KqC7oyCzVyFPrHHrzm5hC59RxYej3~PsbY2JhQwOtV3iCK0i9NZh0zMjKH9vRDr9WmpdkzvnTrX0oNFPHd6IODk22Lc3LiGwA~QB7JMxOcdBCPDG7BRo-TCRoxylTyBjwg0lJ~8SGhm0tOOrBzSSop2b2lJE4g__"
          alt=""
          className="w-full object-cover object-bottom h-[675px] z-10"
        />
        <h1 className="text-white font-bold absolute top-[50%] md:top-[40%] left-[10%] w-[580px] flex flex-col gap-1 z-20">
          <span className="text-4xl md:text-6xl">Explore Türkiye </span>
          <span className="text-3xl md:text-5xl">& Save in best places!</span>
        </h1>
        <button className="absolute left-[90%] top-[50%] bg-[#00A79D] text-white z-20 flex items-center rounded-lg pl-2 pr-4 py-1 text-xl w-44 gap-2">
          <TbShoppingBagPlus size={32} />
          <span className="font-bold ">Buy Now</span>
        </button>

        {/* <div className=" absolute md:left-[30%] flex gap-8 justify-center  -bottom-14">
          <div className="flex flex-col bg-gray-500 text-white w-[140px] h-[60px] p-1 rounded-lg font-semibold">
            <h2 className="text-xl">Silver</h2>
            <span className="text-md">Membership</span>
          </div>
          <div className="flex flex-col bg-[#E0A93F] text-white w-[140px] h-[60px] p-1 rounded-lg font-semibold">
            <h2 className="text-xl">Gold</h2>
            <span className="text-md">Membership</span>
          </div>
          <div className="flex flex-col bg-[#5963E4] text-white w-[140px] h-[60px] p-1 rounded-lg font-semibold">
            <h2 className="text-xl">Diamond</h2>
            <span className="text-md">Membership</span>
          </div>
        </div> */}

        <div className=" absolute  md:left-[30%] flex justify-center gap-8 -bottom-14">
          <div className="flex flex-col bg-gray-500 text-white w-[140px] h-[60px] md:w-[220px] md:h-[120px]  p-1 rounded-lg font-semibold">
            <h2 className="text-xl md:text-2xl">Silver</h2>
            <span className="text-md md:text-lg">Membership</span>
          </div>
          <div className="flex flex-col bg-[#E0A93F] text-white w-[140px] h-[60px] md:w-[220px] md:h-[120px] p-1 rounded-lg font-semibold">
            <h2 className="text-xl md:text-2xl">Gold</h2>
            <span className="text-md md:text-lg">Membership</span>
          </div>
          <div className="flex flex-col bg-[#5963E4] text-white w-[140px] h-[60px] md:w-[220px] md:h-[120px] p-1 rounded-lg font-semibold">
            <h2 className="text-xl md:text-2xl">Diamond</h2>
            <span className="text-md md:text-lg">Membership</span>
          </div>
        </div>
      </div>
      <div className="mb-10 flex items-center justify-between max-w-4xl mx-auto border-4 rounded-lg border-gray-200 px-4 py-2">
        <div className="flex items-center gap-2 text-lg">
          <GiKnifeFork size={30} />
          <span>Dining</span>
        </div>
        <div className="h-8 border border-black"></div>
        <div className="flex items-center gap-2 text-lg">
          <FaCamera size={30} />
          <span>Attractions</span>
        </div>
        <div className="h-8 border border-black"></div>
        <div className="flex items-center gap-2 text-lg">
          <IoBagOutline size={30} />
          <span>Shopping</span>
        </div>
        <div className="h-8 border border-black"></div>
        <div className="flex items-center gap-2 text-lg">
          <LiaPillsSolid size={30} />
          <span>Health</span>
        </div>
      </div>
      <div className=" max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-6">
          <h1 className="text-2xl">Dining</h1>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="text-[#00A79D] border border-gray-400 py-2 px-1"
          >
            <option value="All">All</option>
            {categories?.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
          {filteredRestaurants?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              className="cursor-pointer w-[500px] h-[200px]"
            >
              <img
                className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
                src={`https://localhost:44359${restaurant.imageURL}`}
                alt={restaurant.name}
              />
              <p className="text-center">{restaurant.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-end my-10 mr-16">
          <button className="text-xl">See All</button>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <div className="h-full w-full flex items-center justify-center absolute top-0 left-0 -z-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syx8xJKfJxRUAokOwBjDiQz60QloPiZ2cQRVIp4JeIpwWybmFo88iytEY7vHEihFf-asZKGVnTFDXmfYoVmvo7QbeTRbSg5nAOWWmAjBSg03SzpDgr9VWr4FVQISMKyAM~P16FXIFOvvZRH0zZkfVr48igygCgumgUpzRJWRiPzdsYlT~r7oco9mQX0M1MCCFqzvKa9mxg3Co4Nw6dQw2hgZpcCOBhTpMo~mj9Upo71HekKJn4BBG25a1CRBY15mxjhR7lZ1zTeTNmoRjDuqknYPoiPXnOdxE5m7WAnThy934K8nD3LD6q9ACYPMXeIeZqJvYsA8qKjJwBmfr3u6TQ__"
            alt=""
            className="h-full hidden md:block"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syx8xJKfJxRUAokOwBjDiQz60QloPiZ2cQRVIp4JeIpwWybmFo88iytEY7vHEihFf-asZKGVnTFDXmfYoVmvo7QbeTRbSg5nAOWWmAjBSg03SzpDgr9VWr4FVQISMKyAM~P16FXIFOvvZRH0zZkfVr48igygCgumgUpzRJWRiPzdsYlT~r7oco9mQX0M1MCCFqzvKa9mxg3Co4Nw6dQw2hgZpcCOBhTpMo~mj9Upo71HekKJn4BBG25a1CRBY15mxjhR7lZ1zTeTNmoRjDuqknYPoiPXnOdxE5m7WAnThy934K8nD3LD6q9ACYPMXeIeZqJvYsA8qKjJwBmfr3u6TQ__"
            alt=""
            className="h-full hidden md:block"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syx8xJKfJxRUAokOwBjDiQz60QloPiZ2cQRVIp4JeIpwWybmFo88iytEY7vHEihFf-asZKGVnTFDXmfYoVmvo7QbeTRbSg5nAOWWmAjBSg03SzpDgr9VWr4FVQISMKyAM~P16FXIFOvvZRH0zZkfVr48igygCgumgUpzRJWRiPzdsYlT~r7oco9mQX0M1MCCFqzvKa9mxg3Co4Nw6dQw2hgZpcCOBhTpMo~mj9Upo71HekKJn4BBG25a1CRBY15mxjhR7lZ1zTeTNmoRjDuqknYPoiPXnOdxE5m7WAnThy934K8nD3LD6q9ACYPMXeIeZqJvYsA8qKjJwBmfr3u6TQ__"
            alt=""
            className="h-full"
          />
        </div>
        <div className="bg-[#00A79D]/85  w-full h-full z-50 flex items-center justify-center gap-56">
          <div className="flex flex-col w-full md:w-[38%] gap-4 px-2 md:px-0">
            <h1 className="text-3xl text-white font-bold">
              Choose Your Membership & Start Saving
            </h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/4e3c/263a/de8e75860cceb73325252abafa0fe8c4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TGPCTd1fFXAkyc01jeocN-1H9z5LfXOewwY9EMyjpsfBYsmtL7c-rEXhegHk4YbWGL-j1CBsmHGtGfnq5jd0wQaNwh6zGovwUGfoUydy5vf4p~6scM1l3jaE~MuSIAu4FHjJSB6NcCrK~hR964lagpivIsRc9e0uOmdbn84e8p9lWH0kpd5gQJeyuLiensZk9p7qK1jxRtYVXjBfE7WHqHtl3ipX3wxo5736H5d~ab5wNDjeWUgo9jqghhpy2YyuUP-iCgN1OucjN4b69ftbmtnWDtjyV7IMwRZ10-sMotCRTRKytdgH5L7ElPBBzk0QnjJxwrOpUb25OdEgKTrd1Q__"
            alt=""
            className="h-[100%] object-contain object-center hidden md:block"
          />
        </div>
      </div>
      <div className=" max-w-6xl mx-auto my-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto mb-6">
          <h1 className="text-2xl">Tourist Attractions</h1>
          <button className="text-[#00A79D]">
            <MdFilterList size={35} />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
          <div className="cursor-pointer w-[500px] h-[200px]">
            <img
              className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/0d0e/d700/049ba2897f220b9ee3ef7ab80c720f43?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1L-DjDCMS7R1T6f4XQ-gc5w6G7rGw7~KWSyqBHwedNjZ3yRY6n9t7H5HGbWwfBaKC7nEbWw-~o~w8tHg5oBiyzMBfi3gD5eGOPaQY44qCDdy9TFyoR~b1sybDc2gwW-sDU39YiujZ5yBgvm9VWVGk7IlKAXQdWPzzF4PD-b~kzVXBwydCGZrZOVmdhmX~bW7D0YUj96wlJfsEoSZ42ACcPmkFeogC-rAQBefcvhVDsqZ9piWL1OZ5JSXkYlxsKhw8nfWZsl2rTJWwXZh7kBui9kuiJcEjcTWSd74RgQ1tvOirv3vingphIuVLniVwhq7IWhVn5L1jjyUTDLxc~xpQ__"
              alt=""
            />
            <p className="text-center">Attractions 1</p>
          </div>
          <div className="cursor-pointer w-[500px] h-[200px]">
            <img
              className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/1a8e/ea7e/1e0b962ad0beef7dda14e91dc46877f7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sp3-QirhqbubJ6EjjdaZAhyfU-ESWyQ-m1h3rX1qPsFH~SNDkZy4ZwAeBFcIo-okubjahgzoLEc434Zw778OKmTPKxDaF8hs88RuFxSfcEQrP03vrOubJxPNJmtISHqTM5-GlbwppYMq2Y0MrdULZj6waz4xxbk~98XNaWSamrjzHrA6c4y-4TPC6X4UJCP3LLagfQuDezuGGEZTdzXMHeowkSr~MxpAKVljQgwOglRcI~9zMTGjlfc~DW-5ywkM26Dq53203zUKuQH-BNMV6O2g6BJCkF6ROt5hB6SiMevRuGKA558VcXCQxdBgDioX14xkCkq6NEcPUiTOfkU8RQ__"
              alt=""
            />
            <p className="text-center">Attractions 1</p>
          </div>
          <div className="cursor-pointer w-[500px] h-[200px]">
            <img
              className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/1a8e/ea7e/1e0b962ad0beef7dda14e91dc46877f7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sp3-QirhqbubJ6EjjdaZAhyfU-ESWyQ-m1h3rX1qPsFH~SNDkZy4ZwAeBFcIo-okubjahgzoLEc434Zw778OKmTPKxDaF8hs88RuFxSfcEQrP03vrOubJxPNJmtISHqTM5-GlbwppYMq2Y0MrdULZj6waz4xxbk~98XNaWSamrjzHrA6c4y-4TPC6X4UJCP3LLagfQuDezuGGEZTdzXMHeowkSr~MxpAKVljQgwOglRcI~9zMTGjlfc~DW-5ywkM26Dq53203zUKuQH-BNMV6O2g6BJCkF6ROt5hB6SiMevRuGKA558VcXCQxdBgDioX14xkCkq6NEcPUiTOfkU8RQ__"
              alt=""
            />
            <p className="text-center">Attractions 2</p>
          </div>
          <div className="cursor-pointer w-[500px] h-[200px]">
            <img
              className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/d6aa/757d/4a3658ed49f5491bc805c5965c5cc38d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cvXlQiW18XU5miEx5G6FZYOfzVwikkaRWYyodNnK5RaaXk3WN95eH6g0Z1AZPJilmy2cdUYRy5Ps9x6xAOs8gm9-PIG6buVyzCHB7g5-FA4El4J0NwkFaVJzxMI7HG6rCA51VGkEb8WBDLoD3dEaq1YKamom9M7qhoaRSfDRlA6UWcamhGGp~rOmAdznlZRz1JEEK83Fscwoxe2IiRVZ~PQr7SqaxuxW0yeXlCg9XYWmBzdQr3Us2wa7Nb5LzSVRj35g~uaYJzNsGucDYclwBpqpZolM3SUcSqmu5nYod4suuXjbfM0iisLAE1mghkWg-AC4SXNqjVuv0GjXW2T3dQ__"
              alt=""
            />
            <p className="text-center">Attractions 2</p>
          </div>
          <div className="cursor-pointer w-[500px] h-[200px]">
            <img
              className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/0d0e/d700/049ba2897f220b9ee3ef7ab80c720f43?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c1L-DjDCMS7R1T6f4XQ-gc5w6G7rGw7~KWSyqBHwedNjZ3yRY6n9t7H5HGbWwfBaKC7nEbWw-~o~w8tHg5oBiyzMBfi3gD5eGOPaQY44qCDdy9TFyoR~b1sybDc2gwW-sDU39YiujZ5yBgvm9VWVGk7IlKAXQdWPzzF4PD-b~kzVXBwydCGZrZOVmdhmX~bW7D0YUj96wlJfsEoSZ42ACcPmkFeogC-rAQBefcvhVDsqZ9piWL1OZ5JSXkYlxsKhw8nfWZsl2rTJWwXZh7kBui9kuiJcEjcTWSd74RgQ1tvOirv3vingphIuVLniVwhq7IWhVn5L1jjyUTDLxc~xpQ__"
              alt=""
            />
            <p className="text-center">Attractions 1</p>
          </div>
          <div className="cursor-pointer w-[500px] h-[200px]">
            <img
              className="h-full w-full object-cover object-center overflow-hidden rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/1a8e/ea7e/1e0b962ad0beef7dda14e91dc46877f7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sp3-QirhqbubJ6EjjdaZAhyfU-ESWyQ-m1h3rX1qPsFH~SNDkZy4ZwAeBFcIo-okubjahgzoLEc434Zw778OKmTPKxDaF8hs88RuFxSfcEQrP03vrOubJxPNJmtISHqTM5-GlbwppYMq2Y0MrdULZj6waz4xxbk~98XNaWSamrjzHrA6c4y-4TPC6X4UJCP3LLagfQuDezuGGEZTdzXMHeowkSr~MxpAKVljQgwOglRcI~9zMTGjlfc~DW-5ywkM26Dq53203zUKuQH-BNMV6O2g6BJCkF6ROt5hB6SiMevRuGKA558VcXCQxdBgDioX14xkCkq6NEcPUiTOfkU8RQ__"
              alt=""
            />
            <p className="text-center">Attractions 2</p>
          </div>
        </div>
        <div className="flex justify-end my-10 mr-16">
          <button className="text-xl">See All</button>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <div className="h-full w-full flex items-center justify-center absolute top-0 left-0 -z-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syx8xJKfJxRUAokOwBjDiQz60QloPiZ2cQRVIp4JeIpwWybmFo88iytEY7vHEihFf-asZKGVnTFDXmfYoVmvo7QbeTRbSg5nAOWWmAjBSg03SzpDgr9VWr4FVQISMKyAM~P16FXIFOvvZRH0zZkfVr48igygCgumgUpzRJWRiPzdsYlT~r7oco9mQX0M1MCCFqzvKa9mxg3Co4Nw6dQw2hgZpcCOBhTpMo~mj9Upo71HekKJn4BBG25a1CRBY15mxjhR7lZ1zTeTNmoRjDuqknYPoiPXnOdxE5m7WAnThy934K8nD3LD6q9ACYPMXeIeZqJvYsA8qKjJwBmfr3u6TQ__"
            alt=""
            className="h-full hidden md:block"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syx8xJKfJxRUAokOwBjDiQz60QloPiZ2cQRVIp4JeIpwWybmFo88iytEY7vHEihFf-asZKGVnTFDXmfYoVmvo7QbeTRbSg5nAOWWmAjBSg03SzpDgr9VWr4FVQISMKyAM~P16FXIFOvvZRH0zZkfVr48igygCgumgUpzRJWRiPzdsYlT~r7oco9mQX0M1MCCFqzvKa9mxg3Co4Nw6dQw2hgZpcCOBhTpMo~mj9Upo71HekKJn4BBG25a1CRBY15mxjhR7lZ1zTeTNmoRjDuqknYPoiPXnOdxE5m7WAnThy934K8nD3LD6q9ACYPMXeIeZqJvYsA8qKjJwBmfr3u6TQ__"
            alt=""
            className="h-full hidden md:block"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/db7f/be3a/f265054431e7ec4dbd18159573eaed5b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Syx8xJKfJxRUAokOwBjDiQz60QloPiZ2cQRVIp4JeIpwWybmFo88iytEY7vHEihFf-asZKGVnTFDXmfYoVmvo7QbeTRbSg5nAOWWmAjBSg03SzpDgr9VWr4FVQISMKyAM~P16FXIFOvvZRH0zZkfVr48igygCgumgUpzRJWRiPzdsYlT~r7oco9mQX0M1MCCFqzvKa9mxg3Co4Nw6dQw2hgZpcCOBhTpMo~mj9Upo71HekKJn4BBG25a1CRBY15mxjhR7lZ1zTeTNmoRjDuqknYPoiPXnOdxE5m7WAnThy934K8nD3LD6q9ACYPMXeIeZqJvYsA8qKjJwBmfr3u6TQ__"
            alt=""
            className="h-full "
          />
        </div>
        <div className="bg-[#0D56AB]/85  w-full h-full z-50 flex items-center justify-center gap-56">
          <div className="flex flex-col w-full md:w-[38%] gap-4 px-2 md:px-0">
            <h1 className="text-3xl text-white font-bold">How Does it Work?</h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/4e3c/263a/de8e75860cceb73325252abafa0fe8c4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TGPCTd1fFXAkyc01jeocN-1H9z5LfXOewwY9EMyjpsfBYsmtL7c-rEXhegHk4YbWGL-j1CBsmHGtGfnq5jd0wQaNwh6zGovwUGfoUydy5vf4p~6scM1l3jaE~MuSIAu4FHjJSB6NcCrK~hR964lagpivIsRc9e0uOmdbn84e8p9lWH0kpd5gQJeyuLiensZk9p7qK1jxRtYVXjBfE7WHqHtl3ipX3wxo5736H5d~ab5wNDjeWUgo9jqghhpy2YyuUP-iCgN1OucjN4b69ftbmtnWDtjyV7IMwRZ10-sMotCRTRKytdgH5L7ElPBBzk0QnjJxwrOpUb25OdEgKTrd1Q__"
            alt=""
            className="h-[100%] object-contain object-center hidden md:block"
          />
        </div>
      </div>
      <div className="relative h-[500px] w-full my-20">
        <div className="  w-full h-full  flex items-center justify-center gap-56">
          <img
            src="https://s3-alpha-sig.figma.com/img/57f8/b9a4/e129ef4079ff04e9f1d019015642e97d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hMDWxbSA6y5oCmiVU3NsBFvQMYEiBo0ePZYoa4XumEKRyq79UoMQj~3OMubWXFzInDrYMekOziPpWg8WJgEwcyA4zQ-q9SWrYsKweSeZWoHRT3Ph~-6iBa9P0RsEkRYWDg~TrEBzEcWEPZ0WtVVqaJavmlp6BgYaa4oQ~iuS-5rtmC9GJnvqmqgrdN1xw25YwrNJPnneJkl8HRvEMHEH5zw8Lmx0VPfKJeCM1ioTwBbNVJxABLHaYYR~3C2yAWIgul1mEiV5lC45rue8QDucnMpOeaJFpZUQHF25PQ-ani9Edp~UCSd7wic6gDgd~yn2KNnl6Axosf2unMrq8O~ccg__"
            alt=""
            className="h-[100%] object-contain object-center border-4 rounded-xl overflow-hidden border-black hidden md:block"
          />
          <div className="flex flex-col w-[38%] gap-4">
            <p className=" text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <img
              src="https://s3-alpha-sig.figma.com/img/8378/ae23/b9e291adea71fafa6f1d086f633f3cb6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QLG4V4jIAYbofd0wROMtlPPPL4jVKwJUvudx~DCteFSmlTc-SGaNkfHi3oQmM~VeI6WC10zDaJ2N2nZycr3wHOsQqicW5BZjTY-qpx7Dxdz3Lru0oNAel3naqG0n~IOXuPQQbhLkRnL3voM4pnWuEuV0xoSrfO8PQTNpJekLZ4--oVfz-X9fRRKDo~DAFfK4tL2a~W8O32y~ChhKRxsDNo-UPtrSX19Vw6SBlplF9hCOlP8f2JCIvdMGR2f5JhoWxMX-AvBDPPjUiCD3PFLCYMVOjkV7Pcjcn2B5uF2k0C1G1Mr-4Y66Ap0IKrODvwMajhKwqAADxvHKsdHKag1HcA__"
              alt=""
              className="w-[65%] md:w-[25%]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// import { useEffect, useState } from "react";
// import axios from "axios";

// const RestaurantList = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       const token =
//         "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjBhNDY4NmQzLWRhNDctNDZkYi04OWEzLTY4MDk5NzgyZmVkNyIsInN1YiI6ImFkbWluIiwiZW1haWwiOiJhZG1pbiIsImp0aSI6ImQ1MDZjYzE3LTllM2EtNDc1Yi1iOTE4LWI3YTI3ZjM1MTczYyIsInJvbGUiOiJVc2VyIiwibmJmIjoxNzMzMjQ3ODYwLCJleHAiOjE3MzMyNTE0NjAsImlhdCI6MTczMzI0Nzg2MCwiaXNzIjoiaHR0cHM6Ly93d3cucmFubmEuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly93d3cucmFubmEuY29tLnRyLyJ9.6JYxj6FDg3_yHpfqAVPhGuIL0LBM_xonNimKAz2urOkyDY4n4Wj-qVG7NWGJ0keQDe_fldoYHhOfl9z8VYoDXQ";
//       const url = "https://localhost:44359/api/Restaurant/GetAll";

//       try {
//         const response = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setRestaurants(response.data);
//       } catch (err) {
//         setError("API çağrısı sırasında bir hata oluştu");
//         console.error(err);
//       }
//     };

//     const fetchRestaurant = async (id) => {
//       const token =
//         "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjBhNDY4NmQzLWRhNDctNDZkYi04OWEzLTY4MDk5NzgyZmVkNyIsInN1YiI6ImFkbWluIiwiZW1haWwiOiJhZG1pbiIsImp0aSI6ImQ1MDZjYzE3LTllM2EtNDc1Yi1iOTE4LWI3YTI3ZjM1MTczYyIsInJvbGUiOiJVc2VyIiwibmJmIjoxNzMzMjQ3ODYwLCJleHAiOjE3MzMyNTE0NjAsImlhdCI6MTczMzI0Nzg2MCwiaXNzIjoiaHR0cHM6Ly93d3cucmFubmEuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly93d3cucmFubmEuY29tLnRyLyJ9.6JYxj6FDg3_yHpfqAVPhGuIL0LBM_xonNimKAz2urOkyDY4n4Wj-qVG7NWGJ0keQDe_fldoYHhOfl9z8VYoDXQ";
//       const url = `https://localhost:44359/api/Restaurant/GetDetail?id=${id}`;

//       try {
//         const response = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log(response.data);
//       } catch (err) {
//         setError("API çağrısı sırasında bir hata oluştu");
//         console.error(err);
//       }
//     };
//     fetchRestaurant("fbb75a67-c0cf-404c-84ef-078dc6ded431");
//     fetchRestaurants();
//   }, []);

//   return (
//     <div>
//       <h1>Restaurant Listesi</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>
//         {restaurants.map((restaurant) => (
//           <li key={restaurant.id}>
//             <h3>{restaurant.name}</h3>
//             <p>{restaurant.categoryName}</p>
//             <img
//               src={`https://localhost:44359${restaurant.imageURL}`}
//               alt={restaurant.name}
//               style={{ width: "100px", height: "100px" }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantList;
