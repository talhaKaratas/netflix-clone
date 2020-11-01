<template>
  <div class="header" :class="{ headerScroll: scrollDown }">
    <div class="header__left">
      <router-link to="/">
        <img
          class="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/128px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </router-link>
      <ul class="header__navigate">
        <li>Anasayfa</li>
        <li>Diziler</li>
        <li>Filmler</li>
        <li>En Yeniler</li>
        <li>Listem</li>
      </ul>
    </div>
    <div class="header__right">
      <md-icon class="headerRight__icon search-icon">search</md-icon>
      <p class="category">ÇOCUK</p>
      <md-icon class="headerRight__icon gift-box">redeem</md-icon>
      <md-icon class="headerRight__icon notifications">notifications</md-icon>
      <div class="account__dropDownButton">
        <img
          class="account__image"
          src="https://occ-0-1490-778.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41"
          alt=""
        />
        <md-icon class="account__dropDownButton-icon arrow-down"
          >arrow_drop_down</md-icon
        >
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main'
export default {
  name: 'Header',
  data() {
    return {
      scrollDown: false
    }
  },
  mounted() {
    eventBus.$on('scroll_down', (data) => {
      this.scrollDown = data
    })
  }
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  height: 68px;
  background-image: linear-gradient(#141414, transparent);
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.6s ease-out;
}

.headerScroll {
  background: #141414 !important;
  transition: 0.2s ease-out;
}

.header__left {
  display: flex;
  align-items: center;
}

.header__left .header__logo {
  width: 92.5px;
  height: auto;
  margin-right: 25px;
  cursor: pointer;
}

.header__left .header__navigate li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}

.header__right {
  display: flex;
  align-items: center;
}

.headerRight__icon {
  margin-right: 28px;
  font-size: 30px !important;
  color: #fff !important;
  cursor: pointer;
}

.category {
  margin-right: 25px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.account__dropDownButton {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.account__dropDownButton .account__image {
  border-radius: 5px;
}

.account__dropDownButton .arrow-down {
  font-size: 25px !important;
  color: #fff !important;
}
</style>
