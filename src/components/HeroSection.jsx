
function getInitialHeroSlide() {
  try {
    const previous = window.localStorage.getItem("unmapiaHeroSlide");

    if (previous !== null) {
      const previousIndex = Number(previous);

      if (
        Number.isInteger(previousIndex) &&
        previousIndex >= 0 &&
        previousIndex < heroSlides.length
      ) {
        return (previousIndex + 1) % heroSlides.length;
      }
    }
  } catch (error) {
    // Random starting image if browser storage is unavailable.
  }

  return Math.floor(Math.random() * heroSlides.length);
}

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(getInitialHeroSlide);

  // Remember the currently displayed image for the next refresh.
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "unmapiaHeroSlide",
        String(activeSlide)
      );
    } catch (error) {
      // Slideshow still works without local storage.
    }
  }, [activeSlide]);

  // Automatically change background image every 6.5 seconds.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  // Preload all four images for smoother transitions.
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const preloadImage = new window.Image();
      preloadImage.src = slide.image;
    });
  }, []);

  return (
    <section className="hero" id="home">

      {/* Animated background slideshow */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeSlide}
          className="hero-background"
          style={{
            backgroundImage: `url("${heroSlides[activeSlide].image}")`,
          }}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1.1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            opacity: {
              duration: 1.3,
              ease: "easeInOut",
            },
            scale: {
              duration: 6.5,
              ease: "linear",
            },
          }}
          aria-hidden="true"
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Hero text animation */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <motion.p className="eyebrow light" variants={fadeUp}>
          FIELD NOTES FROM ACROSS INDIA
        </motion.p>

        <motion.span className="hero-coordinates" variants={fadeUp}>
          12.42° N &nbsp; 75.19° E
        </motion.span>

        <motion.h1 variants={fadeUp}>
          Places worth
          <br />
          the <em>detour.</em>
        </motion.h1>

        <motion.p className="hero-description" variants={fadeUp}>
          Offbeat spots, forts, treks and honest food across
          26 states and territories of India, picked and
          written up district by district.
        </motion.p>

        <motion.button
          className="hero-button"
          onClick={() =>
            document.getElementById("states")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          variants={fadeUp}
        >
          FIND YOUR SOMEWHERE <ArrowRight size={17} />
        </motion.button>
      </motion.div>

      <span className="hero-index">
        01 / INDIA, UNFILTERED
      </span>

      <span className="hero-scroll">
        SCROLL TO WANDER ↓
      </span>

    </section>
  );
}
