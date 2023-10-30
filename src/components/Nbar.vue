<template>
  <div id="navbar">
    <ul>
      <li class="nav-link">
        <img src="https://i.postimg.cc/qRJ1X1kc/github-removebg-preview.png" alt=""> 
      </li>
      <li class="nav-link">
        <img src="https://i.postimg.cc/NMdpNRM3/linkedin-removebg-preview.png" alt="">
      </li>
      <li class="nav-link">
        <img src="" alt="">
      </li>
    </ul>
  </div>
</template>
  
<script>
</script>
  
<style scoped>
* {
  color: #bfc0c6;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#navbar {
  position: fixed;
  width: 100%;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 5px;
  z-index: 2;
  padding-inline: 2rem;
}

#navbar.onScroll {
  background-color: #0f1219;
}
/* 
nav {
  display: flex;
  align-items: center;
} */
ul {
  display: flex;
  flex-direction: row-reverse;
}

img {
  width: 1.3rem;
  background-blend-mode: normal;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
}

.active {
  cursor: pointer;
  font-weight: 600;
  color: #bfc0c6;
  transition: color 0.2s ease-in-out;
  padding: 10px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  /* Remove the default underline */
}

.active::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  /* Display underline from the right */
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
  