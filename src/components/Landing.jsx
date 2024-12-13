import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls

const FullSizeModel = ({ src, width = '600px', height = '350px' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize Three.js Scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, parseFloat(width) / parseFloat(height), 0.1, 10000);  // Adjusted FOV
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        // Set Renderer Size
        renderer.setSize(parseFloat(width), parseFloat(height));
        containerRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);  // White light with full intensity
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Additional directional light
        directionalLight.position.set(5, 5, 5); // Position of the light
        scene.add(directionalLight);

        // Load GLTF Model
        const loader = new GLTFLoader();
        let model;

        loader.load(
            src,
            (gltf) => {
                model = gltf.scene;
                scene.add(model);
                console.log(model);

                // Center and Scale the Model
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center); // Center the model
                model.scale.set(1, 1, 1); // Adjust the scale if needed

                // Set camera position based on the model's bounding box
                // This ensures the model is always visible when the scene is loaded
                const maxSize = Math.max(size.x, size.y, size.z);
                camera.position.set(0, 0, maxSize * 2);  // Zoomed in enough to fit the model within the view
                // Apply Materials to Model Parts
                // model.traverse((child) => {
                //     if (child.isMesh) {
                        // Check if the child mesh is part of the diamonds
                        
                        // if (child.name.toLowerCase().includes('dobj001')) {
                        //     child.material = new THREE.MeshPhysicalMaterial({
                        //         color: 0xffffff, // Diamond should be white
                        //         emissive: 0xffffff,
                        //         emissiveIntensity: 0.5, // Slight glow for diamonds
                        //         roughness: 0.1, // Diamonds are smooth
                        //         metalness: 0.2, // Less metallic
                        //         transparent: true,
                        //         opacity: 0.9, // Adds slight transparency
                        //     });
                        // }
                        // if (child.name.toLowerCase().includes('dobj003')) {
                        //     child.material = new THREE.MeshPhysicalMaterial({
                        //         color: 0xffffff, // Diamond should be white
                        //         emissive: 0xffffff,
                        //         emissiveIntensity: 0.5, // Slight glow for diamonds
                        //         roughness: 0.1, // Diamonds are smooth
                        //         metalness: 0.2, // Less metallic
                        //         transparent: true,
                        //         opacity: 0.9, // Adds slight transparency
                        //     });
                        // }
                        // if (child.name.toLowerCase().includes('dobj')) {
                        //     child.material = new THREE.MeshPhysicalMaterial({
                        //         color:  0.6795424696265424, // Pure white color
                        //         roughness: 0.01, // Smooth surface
                        //         metalness: 0.0,  // No metallic effect
                        //         transparent: true, // Enable transparency
                        //         opacity: 0.9, // Adjust as needed (closer to 1 is less transparent)
                        //         transmission: 1.0, // Fully allow light to pass through
                        //         ior: 2.4, // Index of Refraction for diamond
                        //         clearcoat: 1.0, // Add a glossy clear coat
                        //         clearcoatRoughness: 0.01, // Smooth clear coat
                        //     });
                        // }else {
                        //     // For the ring (non-diamond parts)
                        //     child.material = new THREE.MeshStandardMaterial({
                        //         color: 0xFFD700, // Gold color
                        //         emissive: 0xAA7700, // Subtle warm tone for the emissive
                        //         emissiveIntensity: 0.2, // Reduced intensity for a more natural look
                        //         roughness: 0.5, // Slightly rough to look realistic
                        //         metalness: 1, // Fully metallic
                        //     });
                        // }

                //         if (child.isMesh && ['dboj001', 'dboj003', 'dboj'].includes(child.name)) {
                //             console.log(`Diamond mesh found: ${child.name}`);
                //             child.material = new THREE.MeshPhysicalMaterial({
                //                 color: 0xffffff,
                //                 roughness: 0.01,
                //                 metalness: 0.0,
                //                 transparent: true,
                //                 opacity: 0.9,
                //                 transmission: 1.0,
                //                 ior: 2.4,
                //                 envMapIntensity: 1.5,
                //                 clearcoat: 1.0,
                //                 clearcoatRoughness: 0.0,
                //             });
                //         }
                //         else {
                //             // Apply golden material to non-diamond parts
                //             child.material = new THREE.MeshStandardMaterial({
                //                 color: 0xFFD700, // Gold color
                //                 roughness: 0.3,  // Slight roughness for realistic look
                //                 metalness: 1.0,  // Full metal appearance
                //                 envMapIntensity: 1.0,
                //             });
                //         }
                //     }
                // });


                model.traverse((child) => {
                    if (child.isMesh) {
                        if (['dboj001', 'dboj003', 'dboj'].includes(child.name)) {
                            child.material = new THREE.MeshPhysicalMaterial({
                                color: 0xffffff,
                                roughness: 0.01,
                                metalness: 0.0,
                                transparent: true,
                                opacity: 0.9,
                                ior: 1.5, // Use a safer IOR
                            });
                        } else {
                            child.material = new THREE.MeshStandardMaterial({
                                                color: 0xFFD700, // Gold color
                                                roughness: 0.3,  // Slight roughness for realistic look
                                                metalness: 1.0,  // Full metal appearance
                                                envMapIntensity: 1.0,
                                            });
                        }
                    }
                });
                
                

                // Set camera position based on the model's bounding box
                // const maxSize = Math.max(size.x, size.y, size.z);
                // camera.position.set(0, 0, maxSize * 2); // Zoomed in enough to fit the model within the view
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.error('Error loading the model:', error);
            }
        );

        // Add OrbitControls to allow mouse interaction
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;

        // Animation Loop (with rotation)
        const animate = () => {
            requestAnimationFrame(animate);

            if (model) {
                // Rotate the model (adjust rotation speeds)
                model.rotation.z += 0.002; // Slow rotation along the Z-axis
                model.rotation.y += 0.001; // Slight horizontal rotation
            }

            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Clean up on unmount
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
        <div className="mt-12 bg-teal-500 w-full h-auto flex flex-wrap justify-between items-center px-5 py-16">
            <div className="flex-1 max-w-lg mx-auto px-5">
                <h1 className="text-white text-5xl font-bold leading-snug">
                    VIRTUAL <br />
                    TRY-ON
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mt-2 mb-8">
                    Powerful tools for creating and distributing lifelike 3D content and AR experiences. Elevate e-commerce, digital marketing, and more to boost engagement and drive sales.
                </p>
                <div className="flex justify-center">
                    <div className="flex items-center bg-blue-100 rounded-full shadow-lg w-full max-w-md p-2">
                        <input
                            type="email"
                            placeholder="Business e-mail"
                            className="flex-1 bg-white text-gray-700 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full px-6 py-2 ml-3">
                            Free Trial!
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
                <FullSizeModel
                    src="/models/ring.glb"
                    width={screenSize.width < 768 ? '250px' : '600px'}
                    height={screenSize.width < 768 ? '200px' : '400px'}
                />
            </div>
        </div>
    );
}

export default Landing;
