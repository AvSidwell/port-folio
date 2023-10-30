<template>
    <div id="sidebar">
        <div class="sidebar-content">
            <div class="sidebar-header">
            </div>
            <div class="sidebar-menu">
                <ul>
                    <li class="nav-link">
                        <router-link to="/" active-class="active">
                            <div class="nav-item" @click="scrollToSection('home')">
                                <img src="https://i.postimg.cc/jqXKZz3j/home-1.png" alt="Home">
                                <span class="nav-description">Home</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="nav-link">
                        <router-link to="/about" active-class="active">
                            <div class="nav-item" @click="scrollToSection('about')">
                                <img src="https://i.postimg.cc/rFZTLqkX/about-removebg-preview-3-1.png" alt="About">
                                <span class="nav-description">About</span>
                            </div>
                        </router-link>
                    </li>
                </ul>

                <li class="nav-link">
                    <router-link to="/home" active-class="active">
                        <div class="nav-item" @click="scrollToSection('about')">
                        <img src="https://i.postimg.cc/wjtpqnqt/education-removebg-preview-1.png" alt="">
                        <span class="nav-description">About</span>
                    </div>
                    </router-link>
                </li>
                <li class="nav-link">
                    <router-link to="/skills" active-class="active">
                        <div class="nav-item" @click="scrollToSection('skills')">
                        <img src="https://i.postimg.cc/SKCb88zk/skills-removebg-preview-1.png" alt="">
                        <span class="nav-description">Skills</span>
                    </div>
                    </router-link>
                </li>

                <li class="nav-link">
                    <router-link to="/education" active-class="active">
                        <div class="nav-item" @click="scrollToSection('education')">
                        <img src="https://i.postimg.cc/qMvrYzWx/graduation-cap-in-a-square-removebg-preview-1.png" alt="">
                        <span class="nav-description">Education</span>
                    </div>
                    </router-link>
                </li>
                <li class="nav-link">
                        <router-link to="/testimonials" active-class="active">
                            <div class="nav-item" @click="scrollToSection('testimonials')">
                        <img src="https://i.postimg.cc/FH2Q7GzT/testimony-removebg-preview-1.png" alt="">
                        <span class="nav-description">Testimonials</span>
                    </div>
                    </router-link>
                </li>
                <li class="nav-link">
                    <router-link to="/contact" active-class="active">
                    <div class="nav-item">
                        <img src="https://i.postimg.cc/MHdSHSfB/conact-removebg-preview-1.png" alt="">
                        <span class="nav-description">Contact</span>
                    </div>
                    </router-link>
                </li>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            view: {
                topOfPage: true,
            },
            activeLink: null,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
    // ... Your existing methods ...

    scrollToSection(sectionId) {
      // Find the index of the section with the given ID
      const index = this.sections.findIndex((section) => section.title === sectionId);
      if (index !== -1) {
        // Scroll to the section based on the index
        this.scrollToSection(index, true);
      }
    },
  },
};
</script>
  

<style scoped>
body {
    font-family: 'Irish Grover';
}
* {
  letter-spacing: 0.2rem;
  font-family: 'Irish Grover';
}
* {
  text-align: center;
  font-family: 'Irish Grover';
    color: #bfc0c6;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

img {
    width: 1.3rem;
    background-blend-mode: normal;
}

.nav-item {
    position: relative;
}

.nav-item img {
    width: 1.3rem;
    transition: transform 1s, box-shadow 1s;
}

.nav-item img:hover {
    transform: scale(1.2);
    box-shadow: 0 0 2px #D90754;
}

.nav-description {
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    background: #0D0D0D;
    color: #D90754;
    padding: 0.2rem 0.5rem;
    font-size: 12px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s;
}

.nav-item:hover .nav-description {
    opacity: 1;
}

.nav-link {
    margin: 0.4rem;
}

#sidebar {
    width: 70px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #0D0D0D;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sidebar-content {
    padding: 20px;
    color: #fff;
}

.sidebar-header img {
    max-width: 100%;
}

.sidebar-menu ul {
    list-style-type: none;
    padding: 0;
}

.sidebar-menu ul li {
    margin: 10px 0;
}

.sidebar-menu ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s;
}

.sidebar-menu ul li a:hover {
    color: #5bded6;
}

.sidebar-button button {
    background: #5bded6;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.sidebar-button button:hover {
    background: #fff;
    color: #5bded6;
}
</style>
  