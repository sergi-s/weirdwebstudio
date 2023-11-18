import Particles from "react-particles";
import { useCallback } from 'react';
import { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";


export default function MyParticles() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options: any = {
        "autoPlay": true,
        "background": {
            "color": {
                "value": "#0d47a1",
            },
        },
        "backgroundMask": {
            "composite": "destination-out",
            "cover": {
                "color": {
                    "value": "#fff"
                },
                "opacity": 1
            },
            "enable": false
        },
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "detectRetina": true,
        "fpsLimit": 90,
        "infection": {
            "cure": false,
            "delay": 0,
            "enable": false,
            "infections": 0,
            "stages": []
        },
        "interactivity": {
            "detectsOn": "canvas",
            "events": {
                // "onClick": {
                //     "enable": true,
                //     "mode": "push"
                // },
                "onDiv": {
                    "selectors": [],
                    "enable": false,
                    "mode": [],
                    "type": "circle"
                },
                "onHover": {
                    "enable": true,
                    "mode": "repulse",
                    "parallax": {
                        "enable": false,
                        "force": 10,
                        "smooth": 5
                    }
                },
                "resize": true
            },
            "modes": {
                "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "speed": 1
                },
                "bounce": {
                    "distance": 200
                },
                "bubble": {
                    "distance": 400,
                    "duration": 2,
                    "opacity": 0.8,
                    "size": 40
                },
                "connect": {
                    "distance": 80,
                    "links": {
                        "opacity": 0.5
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 400,
                    "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                    }
                },
                "light": {
                    "area": {
                        "gradient": {
                            "start": {
                                "value": "#ffffff"
                            },
                            "stop": {
                                "value": "#000000"
                            }
                        },
                        "radius": 1000
                    },
                    "shadow": {
                        "color": {
                            "value": "#000000"
                        },
                        "length": 2000
                    }
                },
                "push": {
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4,
                    "speed": 1
                },
                "slow": {
                    "factor": 3,
                    "radius": 200
                },
                "trail": {
                    "delay": 1,
                    "quantity": 1
                }
            }
        },
        "manualParticles": [],
        "motion": {
            "disable": false,
            "reduce": {
                "factor": 1,
                "value": true
            }
        },
        "particles": {
            "bounce": {
                "horizontal": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                },
                "vertical": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.1
                    },
                    "value": 1
                }
            },
            "collisions": {
                "bounce": {
                    "horizontal": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    },
                    "vertical": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    }
                },
                "enable": false,
                "mode": "bounce",
                "overlap": {
                    "enable": true,
                    "retries": 0
                }
            },
            "color": {
                "value": "#efeeee",
                "animation": {
                    "h": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    },
                    "s": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    },
                    "l": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "sync": true
                    }
                }
            },
            "destroy": {
                "mode": "none",
                "split": {
                    "count": 1,
                    "factor": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 3
                    },
                    "rate": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": {
                            "min": 4,
                            "max": 9
                        }
                    }
                }
            },
            "life": {
                "count": 0,
                "delay": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0,
                    "sync": false
                },
                "duration": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0.0001
                    },
                    "value": 0,
                    "sync": false
                }
            },
            "links": {
                "blink": false,
                "color": {
                    "value": "#ffffff"
                },
                "consent": false,
                "distance": 150,
                "enable": true,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                    "blur": 5,
                    "color": {
                        "value": "#00ff00"
                    },
                    "enable": false
                },
                "triangles": {
                    "enable": false,
                    "frequency": 1
                },
                "width": 1,
                "warp": false
            },
            "move": {
                "angle": {
                    "offset": 45,
                    "value": 90
                },
                "attract": {
                    "enable": false,
                    "rotate": {
                        "x": 600,
                        "y": 1200
                    }
                },
                "decay": 0,
                "distance": 0,
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "maxSpeed": 50
                },
                "path": {
                    "clamp": true,
                    "delay": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0
                        },
                        "value": 0
                    },
                    "enable": false
                },
                "outModes": {
                    "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                },
                "random": false,
                "size": false,
                "speed": .75,
                "straight": false,
                "trail": {
                    "enable": false,
                    "length": 10,
                    "fillColor": {
                        "value": "#000000"
                    }
                },
                "vibrate": false,
                "warp": false
            },
            "number": {
                "density": {
                    "enable": true,
                    "area": 800,
                    "factor": 1000
                },
                "limit": 0,
                "value": 100
            },
            "opacity": {
                "random": {
                    "enable": true,
                    "minimumValue": 0.1
                },
                "value": {
                    "min": 0.1,
                    "max": 0.5
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 3,
                    "sync": false,
                    "destroy": "none",
                    "minimumValue": 0.1,
                    "startValue": "random"
                }
            },
            "reduceDuplicates": false,
            "rotate": {
                "random": {
                    "enable": false,
                    "minimumValue": 0
                },
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "path": false
            },
            "shadow": {
                "blur": 0,
                "color": {
                    "value": "#000000"
                },
                "enable": false,
                "offset": {
                    "x": 0,
                    "y": 0
                }
            },
            "shape": {
                "options": {},
                "type": "circle"
            },
            "size": {
                "random": {
                    "enable": true,
                    "minimumValue": 1
                },
                "value": {
                    "min": 0.1,
                    "max": 5
                },
                "animation": {
                    "count": 0,
                    "enable": true,
                    "speed": 20,
                    "sync": false,
                    "destroy": "none",
                    "minimumValue": 0.1,
                    "startValue": "random"
                }
            },
            "stroke": {
                "width": 0
            },
            "twinkle": {
                "lines": {
                    "enable": false,
                    "frequency": 0.005,
                    "opacity": 1,
                    "color": {
                        "value": "#ff0000"
                    }
                },
                "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1,
                    "color": {
                        "value": "#ffff00"
                    }
                }
            }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "themes": []
    }
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    return (
        <div >
            <Particles className="w-full h-full" id="tsparticles" loaded={particlesLoaded} init={particlesInit} options={options} />
        </div>
    );
}