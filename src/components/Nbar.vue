<template>
    <div id="navbar" :class="{ onScroll: !view.topOfPage }">
      <nav>
        <ul>
          <li>
            <router-link
              to="/"
              @click="setActiveLink(0)"
              :class="{ active: activeLink === 0 }"
            >Link 1</router-link>
          </li>
          <li>
            <router-link
              to="/services"
              @click="setActiveLink(1)"
              :class="{ active: activeLink === 1 }"
            >Link 2</router-link>
          </li>
          <li>
            <router-link
              to="/portfolio"
              @click="setActiveLink(2)"
              :class="{ active: activeLink === 2 }"
            >Link 3</router-link>
          </li>
          <li>
            <router-link
              to="/contact"
              @click="setActiveLink(3)"
              :class="{ active: activeLink === 3 }"
            >Link 4</router-link>
          </li>
          <li>
            <router-link
              to="/blog"
              @click="setActiveLink(4)"
              :class="{ active: activeLink === 4 }"
            >Link 5</router-link>
          </li>
        </ul>
      </nav>
      <div class="social-icons">
        <a href="#" class="icon"><i class="fa fa-facebook"></i></a>
        <a href="#" class="icon"><i class="fa fa-twitter"></i></a>
        <a href="#" class="icon"><i class="fa fa-instagram"></i></a>
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
    methods: {
      setActiveLink(index) {
        this.activeLink = index;
      },
    },
    beforeMount() {
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (window.pageYOffset > 0) {
          if (this.view.topOfPage) {
            this.view.topOfPage = false;
          }
        } else {
          if (!this.view.topOfPage) {
            this.view.topOfPage = true;
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    color: #bfc0c6;
    padding: 0;
    margin: 0;
    box-sizing: border-box; /* Include padding and border in element's total width and height */
  }
  
  #navbar {
    position: fixed;
    width: 100%;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    z-index: 2;
  }
  
  #navbar.onScroll {
    background-color: #0f1219;
  }
  
  nav {
    display: flex;
    align-items: center;
  }
  
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: 20px;
  }
  
  .active {
    cursor: pointer;
    font-weight: 600;
    color: #bfc0c6;
    transition: color 0.2s ease-in-out;
    padding: 10px;
    position: relative;
    overflow: hidden;
    text-decoration: none; /* Remove the default underline */
  }
  
  .active::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0; /* Display underline from the right */
    width: 0;
    height: 2px;
    background-color: #5bded6;
    transition: width 0.5s ease-in-out;
  }
  
  .active.active::before {
    width: 100%;
  }
  
  .social-icons {
    display: flex;
    align-items: center;
  }
  
  .icon {
    color: #bfc0c6;
    font-size: 20px;
    margin-left: 15px;
    text-decoration: none; /* Remove the default underline */
  }
  
  .icon i {
    transition: color 0.2s ease-in-out;
  }
  
  .icon:hover i {
    color: #5bded6;
  }
  
  @media screen and (max-width: 768px) {
    #navbar {
      padding: 10px;
    }
  
    ul {
      margin-right: 0;
    }
  
    .icon {
      font-size: 16px;
    }
  }
  </style>
  