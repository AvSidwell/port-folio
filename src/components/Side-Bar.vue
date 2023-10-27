<template>
    <div id="sidebar">
        <div class="sidebar-content">
            <div class="sidebar-header">
            </div>
            <div class="sidebar-menu">
                <ul>
                    <li>
                        <!-- <router-link to="/home"> -->
                        <i class="fa-solid fa-house" style="color: #ffffff;"></i>
                        <font-awesome-icon :icon="['fas', 'filter']" />
                        <i class="fa fa-car"></i>
                        <i class="fa fa-car" style="font-size:48px;"></i>
                        <i class="fa fa-car" style="font-size:60px;color:red;"></i>
                        <!-- </router-link> -->
                    </li>
                </ul>
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
    // beforeMount() {
    //   window.addEventListener("scroll", this.handleScroll);
    //   this; handleScroll();
    // },
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
    box-sizing: border-box;
}


#sidebar {
    width: 145px;
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
  