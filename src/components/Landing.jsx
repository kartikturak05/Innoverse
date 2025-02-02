import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useNavigate } from "react-router-dom";

const FullSizeModel = ({
  src,
  width = "100%",
  height = "100%",
  ringColor,
  DiamondText,
  DiamondColor,
}) => {
  const containerRef = useRef(null);
  const modelRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  // Initial setup effect
  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true,
    });
    rendererRef.current = renderer;

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 2.0;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      70,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      5000
    );
    cameraRef.current = camera;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 10, 5);
    scene.add(pointLight);

    const textureLoader = new THREE.TextureLoader();
    const ringTexture = textureLoader.load("/ringbg.png");
    ringTexture.mapping = THREE.EquirectangularReflectionMapping;

    // const diamondTexture = textureLoader.load("/texture/pink/dymond/Material_2_metallicRoughness.png");
    const diamondTexture = textureLoader.load(DiamondText);

    diamondTexture.mapping = THREE.EquirectangularReflectionMapping;

    scene.environment = ringTexture;

    const loader = new GLTFLoader();
    loader.load(
      src,
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        model.traverse((child) => {
          if (child.isMesh) {
            // Store the original material type for each mesh
            if (
              child.name.toLowerCase().includes("dymond") ||
              child.material.name.toLowerCase().includes("dymond")
            ) {
              child.userData.materialType = "dymond";
              child.material = new THREE.MeshPhysicalMaterial({
                metalness: 0.3,
                roughness: 0.05,
                transmission: 1.3,
                thickness: 0.5,
                envMap: diamondTexture,
                envMapIntensity: 2.0,
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                ior: 5,
                color: DiamondColor,
              });
            } else {
              child.userData.materialType = "ring";
              child.material = new THREE.MeshStandardMaterial({
                metalness: 1.3,
                roughness: 0.09,
                envMap: ringTexture,
                envMapIntensity: 1.5,
                color: ringColor,
              });
            }
          }
        });

        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        model.position.sub(center);

        const maxDimension = Math.max(size.x, size.y, size.z);
        const scale = Math.min(
          (containerRef.current.clientWidth * 0.6) / maxDimension,
          (containerRef.current.clientHeight * 0.6) / maxDimension
        );
        model.scale.setScalar(scale);

        const distance = maxDimension * 2;
        camera.position.set(0, distance, 0);
        camera.lookAt(0, 0, 0);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [src]); // Keep this dependency array as is

  // Separate effect for Ring color changes
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh && child.userData.materialType === "ring") {
          // Update only ring materials
          child.material.color.set(ringColor);
          child.material.needsUpdate = true;
        }
      });

      // Force a render update
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    }
  }, [ringColor]); // This effect runs when ringColor changes

  // Separate effect for Diamond color changes
  // Store default material properties in a ref
  const defaultMaterialProperties = useRef(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh && child.userData.materialType === "dymond") {
          // If it's the first time, store the default material properties
          if (!defaultMaterialProperties.current) {
            defaultMaterialProperties.current = {
              color: child.material.color.clone(),
              envMap: child.material.envMap,
              metalness: child.material.metalness,
              roughness: child.material.roughness,
              // Add any other properties you need to restore
            };
          }

          // Update the material's color
          if (DiamondColor === 0xd3d3d3) {
            // Reset to default properties for silver
            child.material.color.copy(defaultMaterialProperties.current.color);
            child.material.envMap = defaultMaterialProperties.current.envMap;
            child.material.metalness =
              defaultMaterialProperties.current.metalness;
            child.material.roughness =
              defaultMaterialProperties.current.roughness;
          } else {
            // Apply the new color
            child.material.color.set(DiamondColor);
          }

          child.material.needsUpdate = true;
        }
      });

      // Force a render update
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    }
  }, [DiamondColor]);
  // This effect runs when  Diamond Color changes

  // Separate effect for Diamond Texture changes
  useEffect(() => {
    if (modelRef.current) {
      const textureLoader = new THREE.TextureLoader();
      const updatedDiamondTexture = textureLoader.load(DiamondText, () => {
        modelRef.current.traverse((child) => {
          if (child.isMesh && child.userData.materialType === "dymond") {
            child.material.envMap = updatedDiamondTexture;
            child.material.needsUpdate = true;
          }
        });

        // Force a render update
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      });
    }
  }, [DiamondText]);
  // This effect runs when Diamond Texture changes

  return (
    <div
      ref={containerRef}
      style={{
        width,
        height,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "transparent",
      }}
    ></div>
  );
};

const GoldComponent = ({ setRing }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-1">
        <div className="flex space-x-4 mt-2">
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 cursor-pointer"
            onClick={() => setRing(0xc0c0c0)}
          ></div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-500 cursor-pointer"
            onClick={() => setRing(0xffd700)}
          ></div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#A07850] cursor-pointer"
            onClick={() => setRing(0xa07850)}
          ></div>
        </div>
      </div>
    </>
  );
};
const DiamondComponent = ({ setDiamondText, setDiamondColor }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-1">
        <div className="flex space-x-4 mt-2">
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 cursor-pointer"
            onClick={() => {
              setDiamondText("");
              setDiamondColor(0xd3d3d3);
            }}
          ></div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-600 cursor-pointer"
            onClick={() => {
              setDiamondText("/texture/green.jpg");

              setDiamondColor(0x00ff00);
            }}
          ></div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 cursor-pointer"
            onClick={() => {
              setDiamondText("/texture/redDiamond.png");

              setDiamondColor(0xff0000);
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

const RingComponent = ({ setModel }) => {
  return (
    <>
      <div className="flex flex-col items-center mt-1">
        <div className="flex space-x-4 mt-2">
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 cursor-pointer text-center"
            onClick={() => {
              setModel("/models/final.glb");
              setDiamondColor();
              setDiamondText("");
            }}
          >
            R1
          </div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-500 cursor-pointer text-center"
            onClick={() => {
              setModel("/models/ring_2.glb");
              setDiamondColor();
              setDiamondText("");
            }}
          >
            R2
          </div>
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#A07850] cursor-pointer text-center"
            onClick={() => {
              setModel("/models/ring_3.glb");
              setDiamondColor();
              setDiamondText("");
            }}
          >
            R3
          </div>
        </div>
      </div>
    </>
  );
};

function Landing() {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [ring, setRing] = useState(0xc0c0c0);
  const [DiamondText, setDiamondText] = useState("/texture/silver.png");
  const [DiamondColor, setDiamondColor] = useState(0xd3d3d3);

  const [model, setModel] = useState("/models/final.glb");

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDemoClick = () => {
    // navigate('/BookDemo');  // Navigate to the 3D Model page
    window.open("https://calendly.com/connexindia", "_blank");
    // window.open("https://calendly.com/kartik-turak-cs-ghrce/myevent", "_blank");
  };

  const [click, setClick] = useState("");

  const handleClick = (e) => {
    console.log(e);

    switch (e) {
      case "Gold":
        setClick("gold");
        break;
      case "Diamond":
        setClick("diamond");
        break;
      case "Ring":
        setClick("ring");
        break;
      default:
        break;
    }
  };

  return (
    <div
      className=" h-auto  md:h-full lg:h-full w-full cursor-grab bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/d3.png')",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center px-4 pt-20 sm:px-6 py-10 sm:py-20">
        {/* Left Section (60% Width on Large Screens) */}
        <div className="w-full lg:w-3/5  px-4 lg:px-5 text-center rounded-full ">
          <div
            className="pt-5 pb-5 pl-1 pr-1 rounded-xl w-full lg:w-full"
            style={{
              backgroundImage: "url('/d2.png')",
            }}
          >
            <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight sm:leading-none mt-7 sm:mt-7 text-center">
              Bringing Your Vision to Life With
            </h1>

            <h1 className="text-black text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight sm:leading-none md:mt-3 sm:mt-7 mb-10">
              Stunning 3D Animation That Exceeds Expectations
            </h1>
            <p className="text-black md:text-lg sm:text-sm font-normal leading-normal  mt-3 sm:mt-4 mb-5 sm:mb-6 w-full mx-auto">
              At Innoverrese we craft breathtaking 3D animations that go beyond
              expectations. From jaw-dropping product demos to heart-pounding
              action sequences, we bring your vision to life with
              hyper-realistic visuals, unmatched creativity, and seamless
              collaboration. Our passionate team of artists and tech wizards
              delivers on time, every time, ensuring your project isn’t just
              done—it’s perfected. Ready to create something extraordinary?
              Let’s push boundaries and exceed your wildest dreams.
            </p>
          </div>


          <div className="flex justify-around w-full px-4 mt-2">
            <div className="flex items-center bg-[#384241] rounded-full  w-fit max-w-sm sm:max-w-lg p-2 ">
              <div
                onClick={handleDemoClick}
                className="bg-white text-gray-700 rounded-full px-10 py-4 sm:px-20 sm:py-2 outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-lg text-center font-bold"
              >
                BOOK A DEMO
              </div>
            </div>
            <p
              className="text-lg sm:text-lg font-bold text-center pl-1 pr-1 pt-4 pb-4 rounded-full w-auto "
              style={{
                backgroundImage: "url('/d2.png')",
              }}
            >
              🎥 Your Vision. Our Passion. Unforgettable Animation. 🎥
            </p>
          </div>
        </div>

        {/* Right Section (40% Width on Large Screens) */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center mt-20 lg:mt-0">
          {/* 3D Model */}
          <div className="mt-10">
            <FullSizeModel
              src={model}
              width={screenSize.width < 768 ? "200px" : "600px"}
              height={screenSize.width < 768 ? "200px" : "400px"}
              ringColor={ring}
              DiamondText={DiamondText}
              DiamondColor={DiamondColor}
            />
          </div>

          {/* Colors and Materials Below the Model */}
          <div>
            {click === "gold" && <GoldComponent setRing={setRing} />}
            {click === "diamond" && (
              <DiamondComponent
                setDiamondText={setDiamondText}
                setDiamondColor={setDiamondColor}
              />
            )}
            {click === "ring" && <RingComponent setModel={setModel} />}
          </div>

          {/* Material Names */}
          <div className="bg-slate-100 w-auto h-6 flex justify-between items-center p-5 mt-5 rounded-[80px]">
            <div
              className="text-black font-medium text-sm m-2 hover:bg-slate-300 pl-2 pr-2 pt-1 pb-1 rounded-[60px]"
              onClick={() => handleClick("Gold")}
            >
              Gold
            </div>
            <div
              className="text-black font-medium text-sm m-2 hover:bg-slate-300 pl-2 pr-2 pt-1 pb-1 rounded-[60px] "
              onClick={() => handleClick("Diamond")}
            >
              Diamond
            </div>
            <div
              className="text-black font-medium text-sm m-2 hover:bg-slate-300 pl-2 pr-2 pt-1 pb-1 rounded-[60px]"
              onClick={() => handleClick("Ring")}
            >
              Basket
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
