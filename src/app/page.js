// import { Head, Card } from "@/components";

// export default function Home() {
//   const cars = [
//     {
//       title: "Lamborghini Huracan",
//       price: "300'000$",
//       img: "images/huracan.jpg",
//     },
//     {
//       title: "Lamborghini Urus",
//       price: "250'000$",
//       img: "images/urus.jpeg",
//     },
//     {
//       title: "Lamborghini Aventador",
//       price: "400'000$",
//       img: "images/aventador.jpeg",
//     },
//     {
//       title: "Lamgorghini Gallardo",
//       price: "350'000$",
//       img: "images/gallardo.jpeg",
//     },
//     {
//       title: "Lamborghini Temerario",
//       price: "100'000$",
//       img: "images/temerario.jpeg",
//     },
//     {
//       title: "Lamborghini Veneno",
//       price: "500'000$",
//       img: "images/veneno.jpg",
//     },
//   ];

//   return (
//     <div className="bg-white  text-black h-[1500px] m-auto flex justify-center items-center flex-col ">
//       <navbar>
//         <Head title="Simple Blog" a="Home" b="About" c="Contact" />
//       </navbar>
//       <div className="h-80 bg-gray-100 w-screen">
//         <h3 className="flex justify-center text-5xl  pt-20">
//           Welcome to Simple Blog
//         </h3>
//         <p className="flex justify-center pt-10 ">
//           Discover insightful articles about web development, programming and
//           technelogy.Clean design meets quality content.
//         </p>
//       </div>
//       <section className="flex justify-center text-5xl pt-10">
//         Latest Posts
//       </section>
//       <div className="flex flex-wrap mt-20 gap-5 justify-center w-[960px]">
//         {cars.map((car, index) => {
//           return (
//             <Card
//               key={index}
//               title={car.title}
//               price={car.price}
//               img={car.img}
//             />
//           );
//         })}
//         ;
//       </div>
//     </div>
//   );
// }
