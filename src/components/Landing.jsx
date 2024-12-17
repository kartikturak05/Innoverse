import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


const FullSizeModel = ({ src, width = '600px', height = '350px' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize Three.js Scene
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(30, parseFloat(width) / parseFloat(height), 0.1, 1000);
        camera.position.set(0, 1, 1);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(parseFloat(width), parseFloat(height));
        renderer.outputEncoding = THREE.sRGBEncoding;
        containerRef.current.appendChild(renderer.domElement);

        // Lights setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Adjusted intensity for better visibility
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // Add a SpotLight to enhance golden highlights
        const spotLight = new THREE.SpotLight(0xFFD700, 2, 50, Math.PI / 4, 1, 2);
        spotLight.position.set(0, 5, 10);
        spotLight.target.position.set(0, 0, 0); // Pointing towards the center of the model
        spotLight.castShadow = true;
        scene.add(spotLight);

        // Front lighting: PointLight from front
        const frontLight = new THREE.PointLight(0xFFD700, 2, 50);
        frontLight.position.set(0, 2, 3); // Front position, facing the model
        frontLight.castShadow = true;
        scene.add(frontLight);

        // Top lighting: SpotLight from above
        const topLight = new THREE.SpotLight(0xFFD700, 2, 50, Math.PI / 4, 1, 2);
        topLight.position.set(0, 5, 0); // Top position, facing downwards
        topLight.target.position.set(0, 0, 0); // Pointing towards the center of the model
        topLight.castShadow = true;
        scene.add(topLight);

        // Load GLTF Model
        const loader = new GLTFLoader();
        let model;

        loader.load(
            src,
            (gltf) => {
                model = gltf.scene;
                scene.add(model);

                // Traverse through model meshes
                model.traverse((child) => {
                    if (child.isMesh) {
                        // Log mesh details for debugging
                        console.log(
                            `Mesh name: ${child.name}, ` +
                            `Material color: ${child.material.color.getHex()}, ` +
                            `Emissive color: ${child.material.emissive.getHex()}, ` +
                            `Metalness: ${child.material.metalness}, ` +
                            `Roughness: ${child.material.roughness}, ` +
                            `Texture map: ${child.material.map ? 'Yes' : 'No'}, ` +
                            `Normal map: ${child.material.normalMap ? 'Yes' : 'No'}`
                        );

                        // Dynamically change material based on mesh name
                        if (child.name.toLowerCase().includes('torus_1')) {
                            child.material = new THREE.MeshStandardMaterial({
                                color: 0xFFD700, // Golden color for Torus_1
                                roughness: 0.4,  // Shiny but not overly reflective
                                metalness: 1.0,  // Full metal for shiny effect
                                emissive: 0xFFD700, // Emissive golden glow
                                emissiveIntensity: 0.3, // Intensity of the glow
                            });
                        } else if (child.name.toLowerCase().includes('torus_2')) {
                            child.material = new THREE.MeshStandardMaterial({
                                color: 0xFFD700, // Gold-like color for Torus_2
                                metalness: 0.8,
                                roughness: 0.2,
                                emissive: 0xFFD700, // Emissive glow for gold
                                emissiveIntensity: 0.4, // Increased intensity for more glow
                            });
                        } else if (child.name.toLowerCase().includes('torus_3')) {
                            child.material = new THREE.MeshStandardMaterial({
                                color: 0x404040, // Darker color for Torus_3
                                metalness: 0.2,
                                roughness: 0.5,
                            });
                        } else {
                            // Default material for other meshes
                            child.material = new THREE.MeshStandardMaterial({
                                color: 0xC0C0C0,
                                roughness: 0.5,
                                metalness: 0.8,
                            });
                        }
                    }
                });

                // Center and scale the model
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);
                model.scale.setScalar(12);
            },
            undefined,
            (error) => {
                console.error('Error loading the model:', error);
            }
        );

        // Add OrbitControls for camera rotation
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            if (model) {
                model.rotation.y += 0.009;
            }
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Clean up on component unmount
        return () => {
            renderer.dispose();
            containerRef.current.removeChild(renderer.domElement);
        };
    }, [src, width, height]);

    return (
        <div
            ref={containerRef}
            style={{
                width,
                height,
                overflow: 'hidden',
                position: 'relative',
            }}
            className="model-container"
        ></div>
    );
};



function Landing() {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });


    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div
            className=" h-auto  md:h-full lg:h-full w-screen cursor-grab"
            style={{
                backgroundImage: "url('/d3.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center px-4 pt-20 sm:px-6 py-10 sm:py-20">
                {/* Left Section */}
                <div className="w-full sm:flex-1 max-w-lg mx-auto px-4 sm:px-5 text-center sm:text-left">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-none mt-5">
                        VIRTUAL <br />
                        TRY-ON
                    </h1>
                    <p className="text-white text-base sm:text-lg font-semibold leading-snug mt-4 sm:mt-2 mb-6 sm:mb-8">
                        Powerful tools for creating and distributing lifelike 3D content and AR experiences. Elevate e-commerce, digital marketing, and more to boost engagement and drive sales.
                    </p>
                    <div className="flex justify-center sm:justify-start w-full px-4">
                        <div className="flex items-center bg-[#384241] rounded-full shadow-lg w-auto lg:w-full max-w-sm sm:max-w-lg p-2 ml-10 mr-10">
    
                            <button typeof='submit' className="flex-1 bg-white text-gray-700 rounded-full px-3 py-1 sm:px-2 sm:py-2 outline-none focus:ring-2 focus:ring-blue-300 text-sm sm:text-bas">
                               BOOK A DEMO
                            </button>
                        </div>
                    </div>


                </div>
                {/* Right Section */}
                <div
                    className="w-full sm:w-1/2 flex justify-center items-center mt-20 sm:mt-0"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* 3D Model */}
                    <FullSizeModel
                        src="/models/bangle1.glb"
                        width={screenSize.width < 768 ? '200px' : '600px'} // Adjusted for smaller devices
                        height={screenSize.width < 768 ? '200px' : '400px'}
                    />
                </div>

                {/* Materials Section */}
                <div className="absolute right-2 lg:right-6 md:right-4 bottom-0.5 sm:bottom-auto sm:top-1/4 flex flex-col items-center bg-gray-200 rounded-full p-3 sm:p-4 shadow-lg">
                    {/* Vertical Text */}
                    <div
                        className="text-gray-800 font-bold text-xs sm:text-sm mb-2"
                        style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(0deg)', // Text starts from the top flowing downward
                            letterSpacing: '1px',
                        }}
                    >
                        MATERIALS
                    </div>

                    {/* Circles */}
                    <div className="flex flex-col items-center space-y-1 sm:space-y-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-400"></div>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-orange-300"></div>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#A07850]"></div>
                    </div>
                </div>
            </div>
        </div>




    );
}

export default Landing;
