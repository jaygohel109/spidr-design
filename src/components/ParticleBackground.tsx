// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// export const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine: any) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: "#0d0d0d",
//         },
//         fpsLimit: 60,
//         particles: {
//           color: { value: "#ffffff" },
//           links: {
//             color: "#ffffff",
//             distance: 120,
//             enable: true,
//             opacity: 0.2,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 0.5,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 50,
//           },
//           opacity: {
//             value: 0.3,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 3 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

